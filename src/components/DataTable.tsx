import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Column<T> {
	header: string;
	accessor: keyof T;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	render?: (value: any) => React.ReactNode;
}

interface DataTableProps<T> {
	data: T[];
	columns: Column<T>[];
	page: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

export function DataTable<T>({
	data,
	columns,
	page,
	totalPages,
	onPageChange,
}: DataTableProps<T>) {
	const totalPageCount = Math.ceil(Number(totalPages) / 10);
	return (
		<div className="">
			<div className="overflow-x-auto">
				<table className="w-full table-auto divide-y divide-gray-200 bg-[#171717]">
					<thead className="bg-[#171717]">
						<tr>
							{columns.map((column) => (
								<th
									key={String(column.accessor)}
									className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
								>
									{column.header}
								</th>
							))}
						</tr>
					</thead>
					<tbody className="bg-[#171717] divide-y divide-gray-200">
						{data.map((row, index) => (
							<tr key={index}>
								{columns.map((column) => {
									const shouldShowTitle =
										String(column.accessor) === "user" ||
										String(column.accessor) === "userAddress" ||
										String(column.accessor) === "amount" ||
										String(column.accessor) === "rawAmount" ||
										String(column.accessor) === "premium" ||
										String(column.accessor) === "feesCollected";
									return (
										<td
											key={String(column.accessor)}
											className="px-6 py-4 text-left whitespace-nowrap text-xs text-white"
											{...(shouldShowTitle && {
												title:
													String(column.accessor) === "userAddress" ||
													String(column.accessor) === "user"
														? String(row[column.accessor])
														: String(column.accessor) === "premium"
														? (Number(row[column.accessor]) * 10 ** 6).toFixed()
														: String(column.accessor) === "feesCollected"
														? (Number(row[column.accessor]) / 10 ** 6).toFixed(
																2
														  )
														: Number(row[column.accessor]).toFixed(2),
											})}
											onClick={() => {
												if (column.accessor === "premium") {
													navigator.clipboard.writeText(
														String(row[column.accessor])
													);
												}
											}}
										>
											{column.accessor === "transactionHash" ||
											(column.accessor === "claimableTxn" &&
												row[column.accessor] !== null) ||
											(column.accessor === "claimedAtTxn" &&
												row[column.accessor] !== null) ||
											(column.accessor === "manualAtTxn" &&
												row[column.accessor] !== null) ||
											(column.accessor === "expiredAtTxn" &&
												row[column.accessor] !== null) ||
											column.accessor === "userAddress" ? (
												<a
													href={
														column.accessor === "userAddress"
															? `https://polygonscan.com/address/${String(
																	row[column.accessor]
															  )}`
															: `https://polygonscan.com/tx/${String(
																	row[column.accessor]
															  )}`
													}
													target="_blank"
													style={{ color: "#82FF1F" }}
												>
													{column.accessor === "userAddress"
														? "View Address"
														: "View Txn"}
												</a>
											) : column.accessor === "week" ? (
												String("Week")
											) : column.render ? (
												column.render(row[column.accessor])
											) : (
												String(row[column.accessor])
											)}
											{/* {} */}
										</td>
									);
								})}
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className="flex items-center justify-between px-4 py-3 bg-[#171717] border-t border-gray-200 sm:px-6">
				<div className="flex items-center">
					<button
						onClick={() => onPageChange(page - 1)}
						disabled={page === 1}
						className="px-3 py-1 rounded-md bg-[#82FF1F] text-black disabled:opacity-50"
					>
						<ChevronLeft className="w-5 h-5" />
					</button>
					<span className="mx-4 text-white">
						Page {page} of {totalPageCount}
					</span>
					<button
						onClick={() => onPageChange(page + 1)}
						disabled={page === totalPageCount}
						className="px-3 py-1 rounded-md bg-[#82FF1F] text-black disabled:opacity-50"
					>
						<ChevronRight className="w-5 h-5" />
					</button>
				</div>
				<div>
					<span className="mx-4 text-white">
						Showing {(page - 1) * 10 + 1} to {(page - 1) * 10 + data.length} of{" "}
						{totalPages} entries
					</span>
				</div>
			</div>
		</div>
	);
}
