import { useQuery } from "@tanstack/react-query";
import * as api from "../api/client";

export const useBetData = () => {
	return useQuery({
		queryKey: ["bet-data"],
		queryFn: () => {
			return api.fetchBetData();
		},
	});
};
