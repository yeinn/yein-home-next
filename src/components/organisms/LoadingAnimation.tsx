"use client";

export default function LoadingAnimation() {
	return (
			<div className="flex flex-col items-center justify-center w-screen h-screen">
				<div className="w-20 h-20">
					{/*<Lottie animationData={animationData} loop={true} />*/}
				</div>
				<p className="mt-4 text-lg font-semibold text-slate-600">예인이네 가는 중...</p>
			</div>
	);
}