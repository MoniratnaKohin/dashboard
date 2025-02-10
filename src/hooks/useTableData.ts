import { useQuery } from "@tanstack/react-query";
import * as api from "../api/client";

export const useTableData = (
	activeTab: string,
	currentPage: number,
	startDate: string,
	endDate: string,
	coverStatus: string = ""
) => {
	console.log(startDate, endDate);
	return useQuery({
		queryKey: [activeTab, currentPage, coverStatus],
		queryFn: () => {
			switch (activeTab) {
				case "liquidity-added":
					return api.fetchLiquidityAdded(currentPage);
				case "liquidity-removed":
					return api.fetchLiquidityRemoved(currentPage);
				case "cover-details":
					return api.fetchCoverDetails(currentPage, coverStatus);
				case "tvl-details":
					return api.fetchInsuranceTVL();
				case "platform-volume":
					return api.fetchPlatformVolume();
				case "user-stats":
					return api.fetchUserData(currentPage);
				default:
					return Promise.reject("Invalid tab");
			}
		},
	});
};
