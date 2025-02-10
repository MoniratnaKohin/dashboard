import { useQuery } from "@tanstack/react-query";
import * as api from "../api/client";

export const usePlatformData = () => {
	return useQuery({
		queryKey: ["platform-data"],
		queryFn: () => {
			return api.fetchPlatformData();
		},
	});
};
