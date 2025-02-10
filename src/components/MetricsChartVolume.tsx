import React from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import { formatOrParseNumber } from "../utils/parseNumber";

interface MetricsChartProps {
	data: Array<{ timestamp: string; value: number }>;
	title: string;
	color: string;
	currentTVL: number;
}

export const MetricsChartVolume: React.FC<MetricsChartProps> = ({
	data,
	title,
	color,
	currentTVL,
}) => {
	console.log("inside metrics chart", data);
	return (
		<div className="w-full h-[300px] p-4 bg-[#171717] rounded-lg shadow">
			<div className="flex flex-row justify-between">
				<h2 className="text-xl font-semibold mb-4 text-white">{title}</h2>{" "}
				<h2
					className="text-xl font-semibold mb-4 text-white"
					title={`${currentTVL.toFixed(2)} USDT`}
				>
					Current value: {formatOrParseNumber(currentTVL)} USDT
				</h2>{" "}
			</div>
			{/* <h3>Current TVL: {Number(currentTVL).toFixed(2)}</h3> */}
			<ResponsiveContainer width="100%" height="100%">
				<LineChart data={data}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis
						dataKey="timeStamp"
						tickFormatter={(value) => new Date(value).toLocaleDateString()}
					/>
					<YAxis dataKey="platformVol" tickFormatter={(value) => value} />
					<Tooltip
						labelFormatter={(value) => new Date(value).toLocaleDateString()}
						formatter={(value: number) => [
							`${formatOrParseNumber(Number(value.toFixed(2)))} USDT`,
							"platformVol",
						]}
					/>
					<Line
						type="monotone"
						dataKey="platformVol"
						stroke={color}
						strokeWidth={2}
						dot={false}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};
