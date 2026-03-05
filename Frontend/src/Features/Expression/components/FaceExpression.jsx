import { useEffect, useRef, useState } from "react";
import { detect, init } from "../utils/utils";


export default function FaceExpression() {
  const videoRef = useRef(null);
  const landmarkerRef = useRef(null);
  const StreamRef = useRef(null)

  const [expression, setExpression] = useState("Initializing...");



  useEffect(() => {


    init({ landmarkerRef, videoRef, StreamRef });

    // Cleanup on unmount
    return () => {

      if (landmarkerRef.current) {
        landmarkerRef.current.close();
      }

      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject
          .getTracks()
          .forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <video
        ref={videoRef}
        style={{
          width: "400px",
          borderRadius: "12px",
          transform: "scaleX(-1)" // mirror effect
        }}
        playsInline
      />
      <h2>{expression}</h2>
      <button onClick={() => { detect({ landmarkerRef, videoRef, setExpression }) }}>Detect Expression</button>
    </div>
  );
}