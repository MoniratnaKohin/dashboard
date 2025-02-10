import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { queryClient } from "./lib/queryClient";
import { MainLayout } from "./components/Layout/MainLayout";
import { MetricsPage } from "./pages/MetricsPage";
import { LiquidityPage } from "./pages/LiquidityPage";
import { FeesPage } from "./pages/FeesPage";
import { PlatformOverview } from "./pages/PlatformOverview";
import { UserStatsPage } from "./pages/UserStatsPage";

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<MainLayout>
					<Routes>
						<Route path="/metrics" element={<MetricsPage />} />
						<Route path="/liquidity" element={<LiquidityPage />} />
						<Route path="/fees" element={<FeesPage />} />
						<Route path="/platform-overview" element={<PlatformOverview />} />
						<Route
							path="/"
							element={<Navigate to="/platform-overview" replace />}
						/>
						<Route path="/user-stats" element={<UserStatsPage />} />
					</Routes>
				</MainLayout>
			</BrowserRouter>
		</QueryClientProvider>
	);
}

export default App;
