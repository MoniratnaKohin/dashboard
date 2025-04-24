import axios from "axios";
 
 const graphAxiosOptions = {
 	headers: {
 		"Content-Type": "application/json",
 	},
 };
 export const subgraphApiCalls = async (url: string, query: unknown) => {
 	try {
 		let retries = 4;
 		const retryDelay = 60000;
 
 		let response;
 		while (retries > 0) {
 			try {
 				response = await axios.post(url, query, graphAxiosOptions);
 				break;
 			} catch (error: unknown) {
 				console.log(error);
 				retries--;
 				await new Promise((resolve) => setTimeout(resolve, retryDelay));
 			}
 		}
 		console.log(response);
 		if (response && response.status == 200 && response.data.data != null) {
 			return response.data.data;
 		} else {
 			return null;
 		}
 	} catch (error: unknown) {
 		return error;
 	}
 };