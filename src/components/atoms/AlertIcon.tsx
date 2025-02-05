import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAvatarPosition } from "@/store/useAvatarPosition";
import { Sprite, TextureLoader } from "three";

export default function AlertIcon() {
	const spriteRef = useRef<Sprite>(null);
	const { avatarPosition, mailBoxPosition } = useAvatarPosition();

	useFrame(() => {
		if (spriteRef.current) {
			const distance = Math.sqrt(
					(avatarPosition.x - mailBoxPosition.x) ** 2 +
					(avatarPosition.z - mailBoxPosition.z) ** 2
			);
			spriteRef.current.visible = distance < 2; // 2m 이내일 때 표시
		}
	});

	return (
			<sprite ref={spriteRef} position={[mailBoxPosition.x, mailBoxPosition.y + 2, mailBoxPosition.z]}>
				<spriteMaterial attach="material" map={new TextureLoader().load("/test.png")} />
			</sprite>
	);
}