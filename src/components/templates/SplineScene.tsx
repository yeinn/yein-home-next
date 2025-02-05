"use client";

import {useEffect, useState} from 'react';
import LoadingAnimation from "@/components/organisms/LoadingAnimation";
import Spline from "@splinetool/react-spline";
import ThreeScene from "@/components/molecules/ThreeScene";
import {useAvatarPosition} from "@/store/useAvatarPosition";
import {Application} from "@splinetool/runtime";


export default function SplineScene() {
	const { setAvatarPosition, setMailBoxPosition } = useAvatarPosition();

	// const [splineInstance, setSplineInstance] = useState<Application | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [fadeOut, setFadeOut] = useState<boolean>(false); // 페이드 아웃 상태


	function onLoad(splineApp: Application) {
		setIsLoading(false)
		// setSplineInstance(splineApp);

		// 오브젝트 위치 감지
		// const avatar = splineApp.findObjectByName("avatar") as any;
		// const mailbox = splineApp.findObjectByName("Mail Box Square") as any ;
		//
		// if (avatar) {
		// 	setAvatarPosition({ x: avatar.position.x, y: avatar.position.y, z: avatar.position.z });
		// }
		// if(mailbox){
		// 	setMailBoxPosition({ x: mailbox.position.x, y: mailbox.position.y, z: mailbox.position.z });
		// 	mailbox.onKeyDown = () => {
		// 		alert("Icon clicked!");
		// 	}
		// }
	}

	useEffect(() => {
		if (!isLoading) {
			setTimeout(() => {
				setFadeOut(true);
			}, 1000);
		}
	}, [isLoading]);

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === "Enter") {
			alert("🚀 엔터 키가 눌렸습니다!");
		}
	};

	useEffect(() => {
		// 키보드 이벤트 리스너 등록
		document.addEventListener("keydown", handleKeyDown);

		// 언마운트 시 이벤트 리스너 해제
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	return (
			<div className="absolute inset-0 w-full h-full">
				<Spline
						scene="https://prod.spline.design/yvg7FSIhaopMk5Iq/scene.splinecode"
						onLoad={onLoad}
				/>

				<ThreeScene />

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