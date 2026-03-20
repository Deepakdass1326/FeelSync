const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY

const emotionQueryMap = {
  "Happy 😄": "happy feeling good songs",
  "Sad 😢": "sad emotional songs",
  "Surprised 😲": "exciting upbeat songs",
  "Neutral 😐": "chill lofi songs"
}

export async function searchSongsByEmotion(emotion) {
  const query = emotionQueryMap[emotion] || "popular songs"
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoCategoryId=10&maxResults=10&q=${encodeURIComponent(query)}&key=${API_KEY}`
  const res = await fetch(url)
  const data = await res.json()
  return data.items.map(item => ({
    videoId: item.id.videoId,
    title: item.snippet.title,
    channel: item.snippet.channelTitle,
    thumbnail: item.snippet.thumbnails.medium.url
  }))
}