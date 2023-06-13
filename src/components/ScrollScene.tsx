import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export function ScrollScene() {
    return (
        <Canvas>
            <ambientLight intensity={0.1}/>
            <OrbitControls enableZoom={false} />
            
            <ScrollControls pages={3} damping={0.25}>
                <mesh>
                    <boxGeometry />
                    <meshStandardMaterial />
                </mesh>
                <mesh position={[0,-0.7,0]}>
                    <boxGeometry args={[1,0.25,.8]} />
                    <meshStandardMaterial />
                </mesh>
                <mesh position={[0,-0.8,1]}>
                    <boxGeometry args={[1.25,0.1,.4]} />
                    <meshStandardMaterial />
                </mesh>
                {/* <mesh position={[.8,-.3,0]}>
                    <boxGeometry args={[0.4,1,1]} />
                    <meshStandardMaterial />
                </mesh> */}
            </ScrollControls>
            
        </Canvas>
    )
}