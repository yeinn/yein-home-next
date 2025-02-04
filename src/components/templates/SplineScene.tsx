"use client";

import {useEffect, useState} from 'react';
import LoadingAnimation from "@/components/organisms/LoadingAnimation";
import Spline from "@splinetool/react-spline";


export default function SplineScene() {
	const [isLoading, setIsLoading] = useState(true);
	const [fadeOut, setFadeOut] = useState(false); // 페이드 아웃 상태

	useEffect(() => {
		if (!isLoading) {
			setTimeout(() => {
				setFadeOut(true); // 1초 후에 페이드 아웃 실행
			}, 1000);
		}
	}, [isLoading]);

	return (
			<div className="absolute inset-0 w-full h-full">
				<Spline
						scene="https://prod.spline.design/yvg7FSIhaopMk5Iq/scene.splinecode"
						onLoad={() => setIsLoading(false)}
				/>

				{/* 로딩 애니메이션 - Spline 위에 덮어쓰기 */}
				<div
						className={`absolute inset-0 flex items-center justify-center bg-white transition-opacity duration-1000 ${
								fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
						}`}
				>
					<LoadingAnimation />
				</div>
			</div>
	);
}