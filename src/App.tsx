import { Stars, OrbitControls } from "@react-three/drei";

import Message from "./Message";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Vector3 } from "three";
import Ghost from "./Ghost";

function App() {
  return (
    // can lock the pointer until user presses ESC with:
    // <Canvas shadows onPointerDown={(e) => e.target.requestPointerLock()}>
    <Canvas
      shadows
      camera={{
        position: new Vector3(0, 0, 1),
        fov: 75,
      }}
    >
      {/* <Fisheye zoom={0.4}> */}
      <color attach="background" args={["black"]} />{" "}
      {/* This <color> is not needed if <Fisheye> is used */}
      <Stars
      // radius={100}
      // depth={50}
      // count={10000}
      // factor={4}
      // saturation={0}
      // fade
      // speed={1}
      />
      <Message />
      {/* <Plane rotation-x={Math.PI / 2} args={[100, 100, 4, 4]}>
        <meshBasicMaterial color="black" wireframe />
      </Plane>
      <axesHelper /> */}
      <directionalLight
        intensity={0.7}
        castShadow
        shadow-bias={-0.0004}
        position={[0, 2, 2]}
      ></directionalLight>
      <Physics timeStep="vary">
        <Ghost />
      </Physics>
      {/* </Fisheye> */}
      <>
        <ambientLight intensity={0.8} />
        <pointLight intensity={1} position={[0, 6, 0]} />
      </>
      <OrbitControls makeDefault />
    </Canvas>
  );
}

export default App;
