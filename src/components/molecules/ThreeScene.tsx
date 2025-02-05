import { Canvas } from "@react-three/fiber";
import AlertIcon from "@/components/atoms/AlertIcon";

export default function ThreeScene() {
	return (
			<Canvas className="absolute top-0 left-0 w-full h-full">
				<ambientLight intensity={0.5} />
				{/*<AlertIcon />*/}
			</Canvas>
	);
}