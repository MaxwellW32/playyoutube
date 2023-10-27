"use client"
import { useState } from "react";
import ReactPlayer from "react-player/youtube";

export default function Home() {
  const [urlInput, urlInputSet] = useState("")

  return (
    <main style={{ backgroundColor: "#000", display: "grid", gap: "1rem", color: "#fff", padding: "1rem", minHeight: "100dvh" }}>
      <h1 style={{}}>Youtube player bypass</h1>

      <input style={{ backgroundColor: "#000", padding: "0rem 1rem", borderRadius: ".7rem", borderBottom: "1px solid #fff" }} type="text" value={urlInput} onChange={(e) => {
        urlInputSet(e.target.value)
      }} />

      <ReactPlayer
        loop={true}
        url={urlInput} />
    </main>
  )
}
