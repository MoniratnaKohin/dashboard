import React from "react";
import { Sidebar } from "./Sidebar";

interface MainLayoutProps {
	children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	return (
		<div className="flex min-h-screen bg-[#000000] w-full overflow-hidden">
			<Sidebar />
			<main className="flex-1 ml-64 p-8">{children}</main>
		</div>
	);
};
