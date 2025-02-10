import React from "react";

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

export function DataTableForMetrics<T>({ data, columns }: DataTableProps<T>) {
	return (
		<div className="w-full overflow-x-auto">
			<div className="overflow-x-auto">
				<table className="w-full table-fixed divide-y divide-gray-200 bg-[#171717]">
					<thead className="bg-[#171717]">
						<tr>
							{columns.map((column) => (
								<th
									key={String(column.accessor)}
									className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
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
									const shouldShowTitle = String(column.accessor) !== "days";
									return (
										<td
											key={String(column.accessor)}
											className="px-6 py-4 text-center whitespace-nowrap overflow-hidden text-xs text-white"
											{...(shouldShowTitle && {
												title: Number(row[column.accessor]).toFixed(2),
											})}
										>
											{column.accessor === "transactionHash" ? (
												<a
													href={`https://polygonscan.com/tx/${String(
														row[column.accessor]
													)}`}
													target="_blank"
													style={{ color: "#82FF1F" }}
												>
													View Txn
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
			<div className="flex items-center justify-between px-4 py-3 bg-[#171717] border-t border-gray-200 sm:px-6"></div>
		</div>
	);
}
