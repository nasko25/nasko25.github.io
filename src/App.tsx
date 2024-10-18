import { Stars, Stage, Plane, OrbitControls, Text } from "@react-three/drei";

import Message from "./Message";
import { Canvas, useThree } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import {
  Gltf,
  Environment,
  Fisheye,
  KeyboardControls,
} from "@react-three/drei";
import Controller from "ecctrl";
import { Euler, Group, Object3DEventMap, Vector3 } from "three";
import { useEffect, useRef } from "react";
import Ghost from "./Ghost";

var interval: number;

function App() {
  // const keyboardMap = [
  //   { name: "forward", keys: ["ArrowUp", "KeyW"] },
  //   { name: "backward", keys: ["ArrowDown", "KeyS"] },
  //   { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
  //   { name: "rightward", keys: ["ArrowRight", "KeyD"] },
  //   { name: "jump", keys: ["Space"] },
  //   { name: "run", keys: ["Shift"] },
  // ];
  const ghost = useRef<Group<Object3DEventMap> | null>(null);

  // useEffect(() => {
  //   if (!interval)
  //     interval = setInterval(() => {
  //       if (ghost.current) {
  //         ghost.current.position.y += 0.001;
  //         ghost.current.position.z -= 0.001;
  //       }
  //     }, 100);
  // }, []);

  return (
    // <Canvas>
    //   <Stage>
    //     <Stars
    //       radius={100}
    //       depth={50}
    //       count={5000}
    //       factor={4}
    //       saturation={0}
    //       // fade
    //       speed={1}
    //     />
    //   </Stage>
    // </Canvas>

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
