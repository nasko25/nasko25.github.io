import { Html } from "@react-three/drei";
import { Drill } from "lucide-react";

export default function Message() {
  return (
    <>
      <Html
        center
        transform
        scale={0.2}
        position={[-0, -0, -2]}
        style={{
          color: "white",
          userSelect: "none",
          width: "100%",
          height: "100%",
          //   textAlign: "center",
        }}
      >
        <div
          style={{
            marginBottom: "1em",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              fontWeight: "bold",
            }}
          >
            Under Construction
          </h1>
          <Drill
            size={32}
            style={{
              marginLeft: "1em",
              marginTop: "0.2em",
              verticalAlign: "bottom",
            }}
          />
        </div>
        <span></span>
      </Html>
      <Html
        center
        //   scale={[1, 5, 1]}
        //   position={new Vector3(0, 0, 0)}
        //   scale={new Vector3(1, 1, 1)}
        style={{ height: "100vh", width: "100vw", top: "4em" }}
      >
        <div
          style={{
            color: "white",
            userSelect: "none",
            width: "100%",
            height: "100%",
            textAlign: "center",
          }}
        >
          <i>
            If you wish to make an apple pie from scratch, you must first invent
            the universe.
          </i>
          <p> &ndash; Carl Sagan </p>
        </div>
      </Html>
    </>
  );
}
