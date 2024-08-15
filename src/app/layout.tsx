import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "@/store/Provider";
import Header from "@/components/header/header";

export const metadata: Metadata = {
	title: "Photo Hunt",
	description: "Download Free Photos",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link
					href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
					rel="stylesheet"
				/>
                <link rel="icon" href="/favicon.jpg" sizes="any" />
			</head>
			<body>
				<StoreProvider>
					<Header />
					{children}
				</StoreProvider>
			</body>
		</html>
	);
}
