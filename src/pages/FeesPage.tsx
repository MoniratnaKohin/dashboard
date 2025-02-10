import { useState } from "react";
import { Tabs } from "../components/Tabs";
import { DataTable } from "../components/DataTable";
import { tableColumns } from "../utils/tableColumns";
import { FEES_TABS } from "../utils/constants";
import { useFeesData } from "../hooks/useFeesData";

export const FeesPage = () => {
	const [activeTab, setActiveTab] = useState(FEES_TABS[0].id);
	const [currentPage, setCurrentPage] = useState(1);
	const [coverStatus, setCoverStatus] = useState("Active");
	const { data: tableData, isLoading } = useFeesData(
		activeTab,
		currentPage,
		"12/01/2024",
		new Date().toISOString().split("T")[0]
	);
	console.log(tableData);
	return (
		<div className="overscroll-none">
			<h1 className="text-2xl font-bold text-[#82FF1F] mb-8">Fees Details</h1>

			<div className="bg-[#171717] rounded-lg shadow">
				<div className="px-4 sm:px-6 py-6 w-[1000px] xl:w-[1100px]">
					<Tabs
						tabs={FEES_TABS}
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
							data={tableData?.data || []}
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
