"use client";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

function StoreProvider({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <Provider store={store}>{children}</Provider>;
}

export default StoreProvider;
