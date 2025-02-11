import { useBetData } from "../hooks/useBetData";
import { usePlatformData } from "../hooks/UsePlatformData";
import { formatOrParseNumber } from "../utils/parseNumber";
import {
	FiDatabase,
	FiBarChart,
	FiDollarSign,
	FiShield,
	FiDisc,
} from "react-icons/fi";

export const PlatformOverview = () => {
	const { data: tableData, isLoading } = usePlatformData();
	const { data: betData } = useBetData();

	if (isLoading) {
		return (
			<div className="space-y-8">
				<div className="h-[400px] bg-[#171717] rounded-lg shadow animate-pulse" />
			</div>
		);
	}

	const stats = [
		{
			label: "Platform TVL",
			value: Number(tableData?.data?.insuranceTVL),
			displayValue: formatOrParseNumber(Number(tableData?.data?.insuranceTVL)),
			icon: <FiDatabase className="text-[#82FF1F] text-2xl" />,
		},
		{
			label: "Platform Volume",
			value: Number(tableData?.data?.platformVol),
			displayValue: formatOrParseNumber(Number(tableData?.data?.platformVol)),
			icon: <FiBarChart className="text-[#82FF1F] text-2xl" />,
		},
		{
			label: "Total Fees Collected",
			value: Number(tableData?.data?.totalFees) / 10 ** 6,
			displayValue: formatOrParseNumber(
				Number(tableData?.data?.totalFees) / 10 ** 6
			),
			icon: <FiDollarSign className="text-[#82FF1F] text-2xl" />,
		},
		{
			label: "Total Premiums Collected",
			value: Number(tableData?.data?.totalPremium),
			displayValue: formatOrParseNumber(Number(tableData?.data?.totalPremium)),
			icon: <FiDollarSign className="text-[#82FF1F] text-2xl" />,
		},
		{
			label: "Active Covers",
			value: Number(tableData?.data?.totalActiveCovers),
			displayValue: Number(tableData?.data?.totalActiveCovers),
			icon: <FiShield className="text-[#82FF1F] text-2xl" />,
		},
	];
	const singleBetStats = [
		{
			label: "Total Bets",
			value: Number(betData?.data?.allSingleBets),
			displayValue: Number(betData?.data?.allSingleBets),
			icon: <FiDatabase className="text-[#82FF1F] text-2xl" />,
		},
		{
			label: "Total Manual Bets",
			value: Number(betData?.data?.manualSingleBets),
			displayValue: Number(betData?.data?.manualSingleBets),
			icon: <FiDatabase className="text-[#82FF1F] text-2xl" />,
		},
		{
			label: "Total Premium",
			value: Number(betData?.data?.totalSingleBetsPremium),
			displayValue: `$ ${formatOrParseNumber(
				Number(betData?.data?.totalSingleBetsPremium)
			)} USDT`,
			icon: <FiDollarSign className="text-[#82FF1F] text-2xl" />,
		},
		{
			label: "Total Payout",
			value: Number(betData?.data?.totalSingleBetsPayout),
			displayValue: `$ ${formatOrParseNumber(
				Number(betData?.data?.totalSingleBetsPayout)
			)} USDT`,
			icon: <FiDollarSign className="text-[#82FF1F] text-2xl" />,
		},
		{
			label: "Avg Odds",
			value: Number(betData?.data?.averageSingleBetOdds),
			displayValue: formatOrParseNumber(
				Number(betData?.data?.averageSingleBetOdds)
			),
			icon: <FiDisc className="text-[#82FF1F] text-2xl" />,
		},
	];
	const comboBetStats = [
		{
			label: "Total Bets",
			value: Number(betData?.data?.allComboBets),
			displayValue: Number(betData?.data?.allComboBets),
			icon: <FiDatabase className="text-[#82FF1F] text-2xl" />,
		},
		{
			label: "Total Manual Bets",
			value: Number(betData?.data?.manualComboBets),
			displayValue: Number(betData?.data?.manualComboBets),
			icon: <FiDatabase className="text-[#82FF1F] text-2xl" />,
		},
		{
			label: "Total Premium",
			value: Number(betData?.data?.totalComboBetsPremium),
			displayValue: `$ ${formatOrParseNumber(
				Number(betData?.data?.totalComboBetsPremium)
			)} USDT`,
			icon: <FiDollarSign className="text-[#82FF1F] text-2xl" />,
		},
		{
			label: "Total Payout",
			value: Number(betData?.data?.totalComboBetsPayout),
			displayValue: `$ ${formatOrParseNumber(
				Number(betData?.data?.totalComboBetsPayout)
			)} USDT`,
			icon: <FiDollarSign className="text-[#82FF1F] text-2xl" />,
		},
		{
			label: "Avg Odds",
			value: Number(betData?.data?.averageComboBetOdds),
			displayValue: formatOrParseNumber(
				Number(betData?.data?.averageComboBetOdds)
			),
			icon: <FiDisc className="text-[#82FF1F] text-2xl" />,
		},
	];

	return (
		<div className="overscroll-none">
			<h1 className="text-2xl font-bold text-[#82FF1F] mb-8">
				Platform Overview
			</h1>

			<div className="bg-[#171717] rounded-lg shadow">
				<div className="px-4 sm:px-6 py-6 w-[1000px] xl:w-[1100px]">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{stats.map((stat, index) => (
							<div
								key={index}
								className="relative bg-[#2c2c2c] rounded-lg p-6 text-white flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-200 group"
							>
								<div className="mb-2">{stat.icon}</div>
								<div className="text-lg font-semibold">{stat.label}</div>
								<div className="text-2xl font-bold text-[#82FF1F]">
									{stat.displayValue}
								</div>

								{/* Tooltip */}
								<div className="absolute bottom-12 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
									Value: {stat.value.toFixed(2)}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<h1 className="text-2xl font-bold text-[#82FF1F] mb-8">
				Single bets overview
			</h1>

			<div className="bg-[#171717] rounded-lg shadow">
				<div className="px-4 sm:px-6 py-6 w-[1000px] xl:w-[1100px]">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{singleBetStats.map((stat, index) => (
							<div
								key={index}
								className="relative bg-[#2c2c2c] rounded-lg p-6 text-white flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-200 group"
							>
								<div className="mb-2">{stat.icon}</div>
								<div className="text-lg font-semibold">{stat.label}</div>
								<div className="text-2xl font-bold text-[#82FF1F]">
									{stat.displayValue}
								</div>

								{/* Tooltip */}
								<div className="absolute bottom-12 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
									Value: {stat.value.toFixed(2)}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<h1 className="text-2xl font-bold text-[#82FF1F] mb-8">
				Combo bets overview
			</h1>

			<div className="bg-[#171717] rounded-lg shadow">
				<div className="px-4 sm:px-6 py-6 w-[1000px] xl:w-[1100px]">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{comboBetStats.map((stat, index) => (
							<div
								key={index}
								className="relative bg-[#2c2c2c] rounded-lg p-6 text-white flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-200 group"
							>
								<div className="mb-2">{stat.icon}</div>
								<div className="text-lg font-semibold">{stat.label}</div>
								<div className="text-2xl font-bold text-[#82FF1F]">
									{stat.displayValue}
								</div>

								{/* Tooltip */}
								<div className="absolute bottom-12 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
									Value: {stat.value.toFixed(2)}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
