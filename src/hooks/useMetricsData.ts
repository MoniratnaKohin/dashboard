import { useQuery } from "@tanstack/react-query";
import * as api from "../api/client";

export const useMetricsData = () => {
	const tvlQuery = useQuery({
		queryKey: ["tvl-history"],
		queryFn: api.fetchTVLHistory,
	});

	const volumeQuery = useQuery({
		queryKey: ["volume-history"],
		queryFn: api.fetchVolumeHistory,
	});
	console.log(tvlQuery.data);
	return {
		tvlData: tvlQuery.data?.data || [],
		volumeData: volumeQuery.data?.data || [],
		isLoading: tvlQuery.isLoading || volumeQuery.isLoading,
	};
};
