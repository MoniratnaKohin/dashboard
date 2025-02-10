import axios from "axios";

export const apiClient = axios.create({
	baseURL: import.meta.env.VITE_KOHIN_API_URL,
});
const headers = {
	"access-key": import.meta.env.VITE_ACCESS_KEY,
	"secret-key": import.meta.env.VITE_SECRET_KEY,
};
export const fetchLiquidityAdded = async (page: number) => {
	const response = await apiClient.get("/off-chain/get-liquidity-added", {
		headers: {
			...headers,
		},
		params: { pageCount: page, startDate: "2023-01-01", endDate: new Date() },
	});
	return response.data;
};

export const fetchLiquidityRemoved = async (page: number) => {
	const response = await apiClient.get("/off-chain/get-liquidity-removed", {
		headers: {
			...headers,
		},
		params: { pageCount: page, startDate: "2023-01-01", endDate: new Date() },
	});
	return response.data;
};

export const fetchCoverDetails = async (page: number, coverStatus: string) => {
	const response = await apiClient.get("/off-chain/get-cover-details", {
		headers: {
			...headers,
		},
		params: {
			pageCount: page,
			startDate: "2023-01-01",
			endDate: new Date(),
			coverStatus: coverStatus,
		},
	});
	return response.data;
};

export const fetchInsuranceTVL = async () => {
	const callApis = async (days: number) => {
		const response = await apiClient.get("/off-chain/get-insurance-tvl", {
			headers: {
				...headers,
			},
			params: {
				days: days,
			},
		});
		return response.data.data;
	};
	const calls = [
		callApis(1), // First call
		callApis(7), // Second call
		callApis(15), // Third call
		callApis(30), // Fourth call
	];
	const results = await Promise.all(calls);
	return results;
};

export const fetchPlatformVolume = async () => {
	// const monthly = weekly.setDate(weekly.getDate() - 30);
	const callApis = async (days: number) => {
		const response = await apiClient.get("/off-chain/get-platform-volume", {
			headers: {
				...headers,
			},
			params: {
				days: days,
			},
		});
		return response.data.data;
	};
	const calls = [
		callApis(1), // First call
		callApis(7), // Second call
		callApis(15), // Third call
		callApis(30), // Fourth call
	];

	// Use Promise.all to execute all calls concurrently
	const results = await Promise.all(calls);

	// Combine the results into a single array
	console.log("checking result platform vol:", results);
	return results;
};

export const fetchTVLHistory = async () => {
	const response = await apiClient.get("/off-chain/insurance-tvl-history", {
		headers: {
			...headers,
		},
		params: {
			startDate: "2023-01-01",
			endDate: new Date(),
		},
	});
	console.log(response.data);
	return response.data;
};

export const fetchVolumeHistory = async () => {
	const response = await apiClient.get("/off-chain/platform-vol-history", {
		headers: {
			...headers,
		},
		params: {
			startDate: "2023-01-01",
			endDate: new Date(),
		},
	});
	return response.data;
};
export const fetchWithdrawalFees = async (page: number) => {
	const response = await apiClient.get("/off-chain/get-withdrawal-fees", {
		headers: {
			...headers,
		},
		params: { pageCount: page, startDate: "2023-01-01", endDate: new Date() },
	});
	return response.data;
};
export const fetchPlatformFees = async (page: number) => {
	const response = await apiClient.get("/off-chain/get-platform-fees", {
		headers: {
			...headers,
		},
		params: { pageCount: page, startDate: "2023-01-01", endDate: new Date() },
	});
	return response.data;
};
export const fetchPlatformData = async () => {
	const response = await apiClient.get("/off-chain/total-platform-values", {
		headers: {
			...headers,
		},
		params: { startDate: "2023-01-01", endDate: new Date(), status: "Active" },
	});
	return response.data;
};
export const fetchBetData = async () => {
	const response = await apiClient.get("/off-chain/get-bet-data", {
		headers: {
			...headers,
		},
	});
	return response.data;
};
export const fetchUserData = async (page: number) => {
	const response = await apiClient.get("/off-chain/user-data", {
		headers: {
			...headers,
		},
		params: { pageCount: page },
	});
	return response.data;
};
