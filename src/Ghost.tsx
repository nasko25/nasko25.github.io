import { Gltf } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Euler } from "three";

export default function Ghost() {
  const { viewport } = useThree();
  console.log(viewport.height / viewport.width);
  return (
    <group position={[viewport.width / 2, viewport.height / 2, 0]}>
      <Gltf
        castShadow
        receiveShadow
        scale={0.315}
        // position={[0, 0, -4]}
        position={[0, -5.5, -4]} // without the <group> and when <Fisheye> is used
        rotation={new Euler(-0.8, 0.12, 0.2)}
        //   ref={ghost}
        src="/ghost_w_tophat-transformed.glb"
      />
    </group>
  );
}
