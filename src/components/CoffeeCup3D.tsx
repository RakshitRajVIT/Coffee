import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

const CoffeeCup3D = () => {
  const cupRef = useRef<Mesh>(null);
  const saucerRef = useRef<Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (cupRef.current) {
      cupRef.current.rotation.y = time * 0.3;
      cupRef.current.position.y = Math.sin(time * 0.5) * 0.1;
    }
    
    if (saucerRef.current) {
      saucerRef.current.rotation.y = time * 0.3;
    }
  });

  return (
    <group>
      {/* Ambient and directional lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <pointLight position={[-5, 5, 5]} intensity={0.5} />

      {/* Saucer */}
      <mesh ref={saucerRef} position={[0, -1.2, 0]} receiveShadow>
        <cylinderGeometry args={[1.5, 1.5, 0.15, 32]} />
        <meshStandardMaterial color="#f5f5f5" metalness={0.3} roughness={0.4} />
      </mesh>

      {/* Cup body */}
      <mesh ref={cupRef} position={[0, 0, 0]} castShadow>
        <cylinderGeometry args={[0.7, 0.5, 1.5, 32]} />
        <meshStandardMaterial color="#4a7c8c" metalness={0.2} roughness={0.3} />
      </mesh>

      {/* Coffee inside */}
      <mesh position={[0, 0.6, 0]}>
        <cylinderGeometry args={[0.65, 0.65, 0.1, 32]} />
        <meshStandardMaterial color="#3d2817" metalness={0.1} roughness={0.8} />
      </mesh>

      {/* Cup handle */}
      <mesh position={[0.9, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.4, 0.08, 16, 32, Math.PI]} />
        <meshStandardMaterial color="#4a7c8c" metalness={0.2} roughness={0.3} />
      </mesh>

      {/* Latte art foam */}
      <mesh position={[0, 0.7, 0]}>
        <cylinderGeometry args={[0.6, 0.6, 0.05, 32]} />
        <meshStandardMaterial color="#f5e6d3" metalness={0.1} roughness={0.9} />
      </mesh>

      {/* Coffee beans scattered around */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        return (
          <mesh key={i} position={[x, -1.1, z]} rotation={[Math.random(), Math.random(), Math.random()]}>
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshStandardMaterial color="#3d2817" metalness={0.1} roughness={0.8} />
          </mesh>
        );
      })}
    </group>
  );
};

export default CoffeeCup3D;
