import { useState } from "react";
import { MetricsChartInsuranceTvl } from "../components/MetricsChartInsuranceTvl";
import { useMetricsData } from "../hooks/useMetricsData";
import { METRICS_TABS } from "../utils/constants";
import { useTableData } from "../hooks/useTableData";
import { Tabs } from "../components/Tabs";
import { tableColumns } from "../utils/tableColumns";
import { MetricsChartVolume } from "../components/MetricsChartVolume";
import { DataTableForMetrics } from "../components/DataTableForMetrics";
import { useTvlData } from "../hooks/useTvlData";

export const MetricsPage = () => {
	const [activeTab, setActiveTab] = useState(METRICS_TABS[0].id);
	const [currentPage, setCurrentPage] = useState(1);
	const [coverStatus, setCoverStatus] = useState("Active");
	const { data: tvlDataFromContract } = useTvlData();
	const { tvlData, volumeData, isLoading } = useMetricsData();
	const { data: tableData, isLoading: tableLoading } = useTableData(
		activeTab,
		currentPage,
		"12/01/2024",
		new Date().toISOString().split("T")[0],
		coverStatus
	);
	console.log("checking table data", tableData);
	// if (isLoading) {
	// 	return (
	// 		<div className="space-y-8">
	// 			<div className="h-[400px] bg-[#171717] rounded-lg shadow animate-pulse" />
	// 			<div className="h-[400px] bg-[#171717] rounded-lg shadow animate-pulse" />
	// 		</div>
	// 	);
	// }

	return (
		<>
			<div className="w-full overscroll-none">
				<h1 className="text-2xl font-bold text-[#82FF1F] mb-8">
					TVL & Volume Details
				</h1>

				<div className="bg-[#171717] rounded-lg shadow">
					<div className="px-4 sm:px-6 lg:px-8 py-6 w-full">
						<Tabs
							tabs={METRICS_TABS}
							activeTab={activeTab}
							onTabChange={setActiveTab}
							setCoverStatus={setCoverStatus}
							setCurrentPage={setCurrentPage}
							coverStatus={coverStatus}
						/>

						{tableLoading ? (
							<div className="flex justify-center items-center h-64">
								<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#93EC49]" />
							</div>
						) : (
							<DataTableForMetrics
								data={tableData || []}
								columns={tableColumns[activeTab as keyof typeof tableColumns]}
								page={currentPage}
								totalPages={Math.ceil((tableData?.total || 0) / 10)}
								onPageChange={setCurrentPage}
							/>
						)}
					</div>
				</div>
			</div>
			<div className="space-y-8 pt-10">
				<h1 className="text-2xl font-bold text-[#93EC49]">Metrics Overview</h1>
				{isLoading ? (
					<div className="space-y-8">
						<div className="h-[400px] bg-[#171717] rounded-lg shadow animate-pulse" />
						<div className="h-[400px] bg-[#171717] rounded-lg shadow animate-pulse" />
					</div>
				) : (
					<>
						<MetricsChartInsuranceTvl
							data={tvlData.history}
							title="Insurance TVL"
							color="#3b82f6"
							currentTVL={Number(tvlDataFromContract) / 10 ** 6}
						/>
						<MetricsChartVolume
							data={volumeData.history}
							title="Platform Volume"
							color="#10b981"
							currentTVL={volumeData.volume}
						/>
					</>
				)}
			</div>
		</>
	);
};
