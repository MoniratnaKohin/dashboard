import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");
	return {
		define: {
			"import.meta.env.VITE_ACCESS_KEY": JSON.stringify(
				env.REACT_APP_ACCESS_KEY
			),
			"import.meta.env.VITE_SECRET_KEY": JSON.stringify(
				env.REACT_APP_SECRET_KEY
			),
			"import.meta.env.VITE_KOHIN_API_URL": JSON.stringify(
				env.REACT_APP_KOHIN_API_URL
			),
		},
		plugins: [react()],
		optimizeDeps: {
			exclude: ["lucide-react"],
		},
	};
});
