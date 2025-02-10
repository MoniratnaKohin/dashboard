import { useQuery } from "@tanstack/react-query";
import * as api from "../api/client";

export const useFeesData = (
	activeTab: string,
	currentPage: number,
	startDate: string,
	endDate: string
) => {
	console.log(startDate, endDate);
	return useQuery({
		queryKey: [activeTab, currentPage],
		queryFn: () => {
			switch (activeTab) {
				case "withdrawal-fees":
					return api.fetchWithdrawalFees(currentPage);
				case "platform-fees":
					return api.fetchPlatformFees(currentPage);
				default:
					return Promise.reject("Invalid tab");
			}
		},
	});
};
