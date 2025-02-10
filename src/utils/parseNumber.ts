export const formatOrParseNumber = (input: number | string) => {
	const suffixes: { [key: string]: number } = { k: 1e3, M: 1e6, B: 1e9 }; // Define suffixes and their values

	if (typeof input === "number") {
		// Format number to human-readable string
		if (input >= 1e9) {
			return (input / 1e9).toFixed(1) + "B"; // Billions
		} else if (input >= 1e6) {
			return (input / 1e6).toFixed(1) + "M"; // Millions
		} else if (input >= 1e3 || input <= -1e3) {
			return (input / 1e3).toFixed(1) + "k"; // Thousands
		}
		return input.toFixed(2); // Less than 1k, return as is
	} else if (typeof input === "string") {
		// Parse human-readable string back to a number
		const match = input.match(/^([\d.]+)([kMB])$/); // Matches patterns like 1.5M, 200k
		if (match) {
			const value = parseFloat(match[1]);
			const suffix = match[2];
			return value * suffixes[suffix];
		}
		return parseFloat(input); // If no suffix, return as plain number
	} else {
		throw new Error("Invalid input: must be a number or a string.");
	}
};
