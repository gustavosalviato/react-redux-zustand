import ReactPlayer from 'react-player'

export function VideoPlayer() {
  return (
    <div className="bg-zinc-950 w-full aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        url="https://www.youtube.com/watch?v=bEvmVwyW0vg"
      />
    </div>
  )
}
