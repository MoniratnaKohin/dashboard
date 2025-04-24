import { useQuery } from "@tanstack/react-query";
 import * as api from "../api/client";
 
 export const useTvlData = () => {
 	return useQuery({
 		queryKey: ["tvl-data"],
 		queryFn: () => {
 			return api.fetchTVL();
 		},
 	});
 };