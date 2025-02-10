import { formatOrParseNumber } from "./parseNumber";

const truncateAddress = (address: string) => {
	return `${address.slice(0, 4)}...${address.slice(-3)}`;
};
export const tableColumns = {
	"liquidity-added": [
		{
			header: "User",
			accessor: "account",
			render: (value: string) => truncateAddress(value),
		},
		{
			header: "Amount",
			accessor: "amount",
			render: (value: number) => `${formatOrParseNumber(Number(value))} USDT`,
		},
		{
			header: "Date",
			accessor: "blockTimestamp",
			render: (value: string) => new Date(value).toLocaleDateString(),
		},
		{
			header: "Deposit ID",
			accessor: "depositId",
		},
		{
			header: "TxnHash",
			accessor: "transactionHash",
		},
	],
	"liquidity-removed": [
		{
			header: "User",
			accessor: "account",
			render: (value: string) => truncateAddress(value),
		},
		{
			header: "Amount",
			accessor: "amount",
			render: (value: number) => `${formatOrParseNumber(Number(value))} USDT`,
		},
		{
			header: "Date",
			accessor: "blockTimestamp",
			render: (value: string) => new Date(value).toLocaleDateString(),
		},
		{
			header: "Deposit ID",
			accessor: "depositId",
		},
		{
			header: "TxnHash",
			accessor: "transactionHash",
		},
	],
	"cover-details": [
		{
			header: "User",
			accessor: "user",
			render: (value: string) => truncateAddress(value),
		},
		{
			header: "Premium",
			accessor: "premium",
			render: (value: number) => `${(value / 10 ** 6).toFixed(2)} USDT`,
		},
		{
			header: "Date",
			accessor: "timestamp",
			render: (value: string) => new Date(value).toLocaleDateString(),
		},
		{
			header: "bet Amount",
			accessor: "amount",
			render: (value: number) => `${formatOrParseNumber(Number(value))} USDT`,
		},
		{
			header: "bet ID",
			accessor: "betId",
		},
		{
			header: "Cover ID",
			accessor: "coverId",
		},
		{
			header: "TxnHash",
			accessor: "transactionHash",
		},
		{
			header: "Cover Status",
			accessor: "coverStatus",
		},
		{
			header: "Odds",
			accessor: "odds",
			render: (value: number) => (value / 10 ** 12).toFixed(2),
		},
		{
			header: "Claimable Amount",
			accessor: "claimableAmount",
			render: (value: number) =>
				`${formatOrParseNumber(Number((value / 10 ** 6).toFixed(2)))} USDT`,
		},
		{
			header: "Claimed amount",
			accessor: "claimedAmount",
			render: (value: number) =>
				`${formatOrParseNumber(Number((value / 10 ** 6).toFixed(2)))} USDT`,
		},
		{
			header: "Claimable At",
			accessor: "claimableAt",
			render: (value: string) =>
				value === null ? "-" : new Date(value).toLocaleDateString(),
		},
		{
			header: "Claimed At",
			accessor: "claimedAt",
			render: (value: string) =>
				value === null ? "-" : new Date(value).toLocaleDateString(),
		},
		{
			header: "Expired At",
			accessor: "expiredAt",
			render: (value: string) =>
				value === null ? "-" : new Date(value).toLocaleDateString(),
		},
		{
			header: "Claimable Txn",
			accessor: "claimableTxn",
			render: (value: string) => (value === null ? "-" : value),
		},
		{
			header: "Claimed Txn",
			accessor: "claimedAtTxn",
			render: (value: string) => (value === null ? "-" : value),
		},
		{
			header: "Expired Txn",
			accessor: "expiredAtTxn",
			render: (value: string) => (value === null ? "-" : value),
		},
		{
			header: "Manual Txn",
			accessor: "manualAtTxn",
			render: (value: string) => (value === null ? "-" : value),
		},
	],
	"tvl-details": [
		{
			header: "",
			accessor: "days",
		},
		{
			header: "Insurance TVL",
			accessor: "insuranceTvl",
			render: (value: number) =>
				`${formatOrParseNumber(Number(value.toFixed(2)))} USDT`,
		},
		{
			header: "Pool TVL",
			accessor: "poolTvl",
			render: (value: number) =>
				`${formatOrParseNumber(Number(value.toFixed(2)))} USDT`,
		},
		{
			header: "Total Premium",
			accessor: "totalPremiumAmount",
			render: (value: number) =>
				`${formatOrParseNumber(Number(value.toFixed(2)))} USDT`,
		},
		{
			header: "Total Payout",
			accessor: "totalPayoutAmount",
			render: (value: number) =>
				`${formatOrParseNumber(Number(value.toFixed(2)))} USDT`,
		},
	],
	"platform-volume": [
		{
			header: "",
			accessor: "days",
		},
		{
			header: "Platform Volume",
			accessor: "platformVolume",
			render: (value: number) =>
				`${formatOrParseNumber(Number(value.toFixed(2)))} USDT`,
		},
		{
			header: "Cover Amount",
			accessor: "totalCoverAmount",
			render: (value: number) =>
				`${formatOrParseNumber(Number(value.toFixed(2)))} USDT`,
		},
		{
			header: "Premium Amount",
			accessor: "totalPremiumAmount",
			render: (value: number) =>
				`${formatOrParseNumber(Number(value.toFixed(2)))} USDT`,
		},
		{
			header: "Payout Amount",
			accessor: "totalPayoutAmount",
			render: (value: number) =>
				`${formatOrParseNumber(Number(value.toFixed(2)))} USDT`,
		},
		{
			header: "Yield",
			accessor: "yield",
			render: (value: number) =>
				`${formatOrParseNumber(Number(value.toFixed(2)))} USDT`,
		},
		{
			header: "Liquidity Added",
			accessor: "totalAddedAmount",
			render: (value: number) =>
				`${formatOrParseNumber(Number(value.toFixed(2)))} USDT`,
		},
	],
	"withdrawal-fees": [
		{
			header: "Id",
			accessor: "id",
			render: (value: string) => truncateAddress(value),
		},
		{
			header: "Fees",
			accessor: "feesCollected",
			render: (value: number) =>
				`${formatOrParseNumber(Number(value) / 10 ** 6)} USDT`,
		},
		{
			header: "Date",
			accessor: "blockTimestamp",
			render: (value: string) => new Date(value).toLocaleDateString(),
		},
		{
			header: "Block Number",
			accessor: "blockNumber",
		},
		{
			header: "TxnHash",
			accessor: "transactionHash",
		},
	],
	"platform-fees": [
		{
			header: "Id",
			accessor: "id",
			render: (value: string) => truncateAddress(value),
		},
		{
			header: "Fees",
			accessor: "feesCollected",
			render: (value: number) =>
				`${formatOrParseNumber(Number(value) / 10 ** 6)} USDT`,
		},
		{
			header: "Date",
			accessor: "blockTimestamp",
			render: (value: string) => new Date(value).toLocaleDateString(),
		},
		{
			header: "Block Number",
			accessor: "blockNumber",
		},
		{
			header: "TxnHash",
			accessor: "transactionHash",
		},
	],
	"user-stats": [
		{
			header: "User",
			accessor: "userAddress",
			render: (value: string) => truncateAddress(value),
		},
		{
			header: "total Covers",
			accessor: "totalCoverCount",
			render: (value: number) => Number(value),
		},
		{
			header: "Total Premium",
			accessor: "totalPremiumAmount",
			render: (value: string) => `${formatOrParseNumber(Number(value))} USDT`,
		},
		{
			header: "Total Payout",
			accessor: "totalPayoutAmount",
			render: (value: string) => `${formatOrParseNumber(Number(value))} USDT`,
		},
		{
			header: "Combo Bet Count",
			accessor: "comboCount",
		},
		{
			header: "Combo Premium",
			accessor: "comboPremium",
			render: (value: string) => `${formatOrParseNumber(Number(value))} USDT`,
		},
		{
			header: "Combo Payout",
			accessor: "comboPayout",
			render: (value: string) => `${formatOrParseNumber(Number(value))} USDT`,
		},
		{
			header: "Single Bet Count",
			accessor: "singleCount",
		},
		{
			header: "Single Premium",
			accessor: "singlePremium",
			render: (value: string) => `${formatOrParseNumber(Number(value))} USDT`,
		},
		{
			header: "Single Payout",
			accessor: "singlePayout",
			render: (value: string) => `${formatOrParseNumber(Number(value))} USDT`,
		},
	],
};
