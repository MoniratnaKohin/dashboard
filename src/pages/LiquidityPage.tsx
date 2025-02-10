import { useState } from "react";
import { Tabs } from "../components/Tabs";
import { DataTable } from "../components/DataTable";
import { useTableData } from "../hooks/useTableData";
import { tableColumns } from "../utils/tableColumns";
import { TABS } from "../utils/constants";

export const LiquidityPage = () => {
	const [activeTab, setActiveTab] = useState(TABS[0].id);
	const [currentPage, setCurrentPage] = useState(1);
	const [coverStatus, setCoverStatus] = useState("Active");
	const { data: tableData, isLoading } = useTableData(
		activeTab,
		currentPage,
		"12/01/2024",
		new Date().toISOString().split("T")[0],
		coverStatus
	);
	return (
		<div className="overscroll-none">
			<h1 className="text-2xl font-bold text-[#82FF1F] mb-8">
				Liquidity Details
			</h1>

			<div className="bg-[#171717] rounded-lg shadow">
				<div className="px-4 sm:px-6 py-6 w-[1000px] xl:w-[1100px]">
					<Tabs
						tabs={TABS}
						activeTab={activeTab}
						onTabChange={setActiveTab}
						setCoverStatus={setCoverStatus}
						setCurrentPage={setCurrentPage}
						coverStatus={coverStatus}
					/>

					{isLoading ? (
						<div className="flex justify-center items-center h-64">
							<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#93EC49]" />
						</div>
					) : (
						<DataTable
							data={tableData?.data.data || []}
							columns={tableColumns[activeTab as keyof typeof tableColumns]}
							page={currentPage}
							totalPages={Number(tableData?.rowsCount)}
							onPageChange={setCurrentPage}
						/>
					)}
				</div>
			</div>
		</div>
	);
};
