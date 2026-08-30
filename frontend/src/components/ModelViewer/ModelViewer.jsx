import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, AdaptiveDpr } from "@react-three/drei";

function Dress({ onLoaded }) {
  const { scene } = useGLTF("/models/final1-3mb.glb");

  useEffect(() => {
    onLoaded();
  }, [onLoaded]);

  return <primitive object={scene} scale={2.6} position={[0, -1.1, 0]} />;
}

export default function ModelViewer() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        height: "430px",
        position: "relative",
      }}
    >
      {!loaded && (
        <>
          <p
            style={{
              position: "absolute",
              top: "18px",
              left: "50%",
              transform: "translateX(-50%)",
              margin: 0,

              fontSize: "10px",
              fontWeight: "600",
              letterSpacing: "2px",
              textTransform: "uppercase",

              color: "#8b6a18",

              background: "rgba(255,255,255,.92)",
              border: "1px solid rgba(212,175,55,.3)",
              borderRadius: "999px",

              padding: "6px 14px",
              whiteSpace: "nowrap",

              zIndex: 20,
            }}
          >
            ✨ WAIT 360° EXPERIENCE LOADING IN 7 SEC ....
          </p>
          <img
            src="/images/model.webp"
            alt="Loading"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "75%",
              height: "75%",
              objectFit: "contain",
              zIndex: 10,
              animation: "pulse 1.5s ease-in-out infinite",
            }}
          />
        </>
      )}

      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 1.2, 4.5], fov: 38 }}>
        <AdaptiveDpr pixelated />

        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} intensity={2} />

        <Suspense fallback={null}>
          <Dress onLoaded={() => setLoaded(true)} />
        </Suspense>

        <OrbitControls
          target={[0, 0.3, 0]}
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          rotateSpeed={0.8}
          autoRotate
          autoRotateSpeed={1.5}
        />
      </Canvas>

      <style>{`
        @keyframes pulse {
          0% {
            opacity: 0.7;
            transform: translate(-50%, -50%) scale(0.98);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            opacity: 0.7;
            transform: translate(-50%, -50%) scale(0.98);
          }
        }
      `}</style>
    </div>
  );
}

useGLTF.preload("/models/final1-3mb.glb");
