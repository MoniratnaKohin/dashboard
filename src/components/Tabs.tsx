import React from "react";

interface Tab {
	id: string;
	label: string;
}

interface TabsProps {
	tabs: Tab[];
	activeTab: string;
	onTabChange: (tabId: string) => void;
	setCoverStatus: (coverStatus: string) => void;
	setCurrentPage: (page: number) => void;
	coverStatus: string;
}

export const Tabs: React.FC<TabsProps> = ({
	tabs,
	activeTab,
	onTabChange,
	setCoverStatus,
	setCurrentPage,
	coverStatus,
}) => {
	const [modal, setModal] = React.useState(false);
	return (
		<div className="border-b border-gray-200 w-full">
			<nav className="-mb-px flex space-x-8">
				{tabs.map((tab) => (
					<button
						key={tab.id}
						onClick={() => {
							onTabChange(tab.id);
							setCurrentPage(1);
						}}
						className={`
              whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
              ${
								activeTab === tab.id
									? "border-[#82FF1F] text-[#82FF1F]"
									: "border-transparent text-white hover:text-white hover:border-white"
							}
            `}
					>
						{tab.label}
					</button>
				))}
				{activeTab === "cover-details" ? (
					<div className="relative inline-block text-left justify-end">
						<div>
							<button
								type="button"
								onClick={() => setModal(!modal)}
								// className="mt-1 inline-flex w-20 justify-left gap-x-1.5 rounded-md bg-white px-3 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
								className={`
									inline-flex whitespace-nowrap py-4 border-b-2 font-medium text-sm
									${"border-transparent text-white hover:text-white hover:border-white"}
								  `}
								id="menu-button"
								aria-expanded="false"
								aria-haspopup="false"
							>
								{coverStatus}
								<svg
									className="-mr-1 size-5 text-gray-400"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="false"
									data-slot="icon"
								>
									<path
										fill-rule="evenodd"
										d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
										clip-rule="evenodd"
									/>
								</svg>
							</button>
						</div>
						{modal && (
							<div
								className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
								role="menu"
								aria-orientation="vertical"
								aria-labelledby="menu-button"
								onClick={() => setModal(!modal)}
								// tabIndex="-1"
							>
								<div className="py-1" role="none">
									<a
										href="#"
										className="block px-4 py-2 text-sm text-gray-700"
										role="menuitem"
										// tabindex="-1"
										id="menu-item-0"
										onClick={() => setCoverStatus("Active")}
									>
										Active
									</a>
									<a
										href="#"
										className="block px-4 py-2 text-sm text-gray-700"
										role="menuitem"
										// tabindex="-1"
										id="menu-item-1"
										onClick={() => setCoverStatus("Claimable")}
									>
										Claimable
									</a>
									<a
										href="#"
										className="block px-4 py-2 text-sm text-gray-700"
										role="menuitem"
										// tabindex="-1"
										id="menu-item-2"
										onClick={() => setCoverStatus("Claimed")}
									>
										Claimed
									</a>
									<a
										href="#"
										className="block px-4 py-2 text-sm text-gray-700"
										role="menuitem"
										// tabindex="-1"
										id="menu-item-2"
										onClick={() => setCoverStatus("Expired")}
									>
										Expired
									</a>
								</div>
							</div>
						)}
					</div>
				) : null}
			</nav>
		</div>
	);
};
