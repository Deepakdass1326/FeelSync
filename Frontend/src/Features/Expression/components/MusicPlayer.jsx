import { useState } from "react"
import "../style/MusicPlayer.scss"

export default function MusicPlayer({ songs, emotion }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!songs || songs.length === 0) return null

  const current = songs[currentIndex]

  return (
    <div className="player">
      <div className="player__emotion">Mood: {emotion}</div>

     
      <iframe
        key={current.videoId}
        width="0"
        height="0"
        style={{ display: "none" }}
        src={`https://www.youtube.com/embed/${current.videoId}?autoplay=1`}
        allow="autoplay; encrypted-media"
      />

      <div className="player__info">
        <p className="player__title">{current.title}</p>
        <p className="player__channel">{current.channel}</p>
      </div>

      <div className="player__controls">
        <button onClick={() => setCurrentIndex(i => Math.max(i - 1, 0))} disabled={currentIndex === 0}>
          ⏮ Prev
        </button>
        <button onClick={() => setCurrentIndex(i => Math.min(i + 1, songs.length - 1))} disabled={currentIndex === songs.length - 1}>
          Next ⏭
        </button>
      </div>

      <div className="player__playlist">
        {songs.map((song, i) => (
          <div
            key={song.videoId}
            className={`player__playlist-item ${i === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(i)}
          >
            <img src={song.thumbnail} alt={song.title} />
            <span>{song.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}