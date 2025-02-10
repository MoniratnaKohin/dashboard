import { BarChart3, Wallet, GanttChartSquare } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
const navItems = [
	{
		label: "Platform Overview",
		icon: GanttChartSquare,
		path: "/platform-overview",
	},
	{
		label: "Fees Details",
		icon: Wallet,
		path: "/fees",
	},
	{
		label: "Metrics Overview",
		icon: BarChart3,
		path: "/metrics",
	},
	{
		label: "Liquidity & Premium Details",
		icon: Wallet,
		path: "/liquidity",
	},
	{
		label: "User Stats",
		icon: BarChart3,
		path: "/user-stats",
	},
];

export const Sidebar = () => {
	const location = useLocation();

	return (
		<div className="w-64 bg-[#171717] h-screen fixed left-0 top-0 border-r border-[#000000]-200">
			<div className="p-4 flex">
				<img src={logo} alt="Logo" className="w-8 h-8" />
				<h1 className="text-xl font-bold text-white ml-2">Kohin</h1>
			</div>
			<nav className="mt-4">
				{navItems.map((item) => {
					const Icon = item.icon;
					const isActive = location.pathname === item.path;

					return (
						<Link
							key={item.path}
							to={item.path}
							className={`
                flex items-center px-4 py-3 text-sm
                ${
									isActive
										? "bg-[#0D0D0D] text-[#82FF1F] border-r-2 border-[#82FF1F]"
										: "text-white hover:text-[#82FF1F]"
								}
              `}
						>
							<Icon className="w-5 h-5 mr-3" />
							{item.label}
						</Link>
					);
				})}
			</nav>
		</div>
	);
};
