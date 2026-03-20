import { useEffect, useRef, useState, useCallback } from "react"
import { detect, init } from "../utils/utils"
import { searchSongsByEmotion } from "../services/youtube.api"
import MusicPlayer from "./MusicPlayer"

export default function FaceExpression() {
  const videoRef = useRef(null)
  const landmarkerRef = useRef(null)
  const StreamRef = useRef(null)
  const lastEmotionRef = useRef(null)

  const [expression, setExpression] = useState("Initializing...")
  const [songs, setSongs] = useState([])
  const [searching, setSearching] = useState(false)

  const handleExpression = useCallback(async (newExpression) => {
    setExpression(newExpression)

    if (newExpression === lastEmotionRef.current) return
    if (newExpression === "Initializing..." || newExpression === "Neutral 😐") return

    lastEmotionRef.current = newExpression
    setSearching(true)

    try {
      const results = await searchSongsByEmotion(newExpression)
      setSongs(results)
    } catch (err) {
      console.error("YouTube search error:", err)
    } finally {
      setSearching(false)
    }
  }, [])

  useEffect(() => {
    init({ landmarkerRef, videoRef, StreamRef })

    return () => {
      if (landmarkerRef.current) landmarkerRef.current.close()
      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(t => t.stop())
      }
    }
  }, [])

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <video
        ref={videoRef}
        style={{ width: "400px", borderRadius: "12px", transform: "scaleX(-1)" }}
        playsInline
      />
      <h2>{expression}</h2>
      {searching && <p style={{ color: "#ff2d6b" }}>Searching songs...</p>}
      <button onClick={() => detect({ landmarkerRef, videoRef, setExpression: handleExpression })}>
        Detect Expression
      </button>
      <MusicPlayer songs={songs} emotion={expression} />
    </div>
  )
}