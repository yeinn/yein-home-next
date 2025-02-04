"use client";


import {ReactNode} from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
	return (
			<main className="relative w-screen h-screen font-nexon">
				{children}
			</main>
	);
}
