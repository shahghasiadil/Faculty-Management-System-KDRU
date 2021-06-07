import { useState, useEffect, useRef } from 'react'
import { findDOMNode } from 'react-dom'
import { Card, CardTitle, CardHeader, CardBody, Row, Col, Table, Button, Progress, CustomInput } from 'reactstrap'
import Prism from 'prismjs'
import ReactPlayer from 'react-player'
import screenfull from 'screenfull'

const pad = string => {
  return `0${string}`.slice(-2)
}
const format = seconds => {
  const date = new Date(seconds * 1000)
  const hh = date.getUTCHours()
  const mm = date.getUTCMinutes()
  const ss = pad(date.getUTCSeconds())
  if (hh) {
    return `${hh}:${pad(mm)}:${ss}`
  }
  return `${mm}:${ss}`
}

const MediaPlayerControlledVideo = () => {
  useEffect(() => {
    Prism.highlightAll()
  })

  const videoRef = useRef(null)

  const urlLink = 'http://youtube.com/watch?v=FCPdIvXo2rU'
  const [url, setUrl] = useState(urlLink)
  const [playing, setPlaying] = useState(false)
  const [controls, setControls] = useState(false)
  const [volume, setVolume] = useState(0.75)
  const [muted, setMuted] = useState(false)
  const [played, setPlayed] = useState(0)
  const [loaded, setLoaded] = useState(0)
  const [duration, setDuration] = useState(0)
  const [playbackRate, setPlaybackRate] = useState(1.0)
  const [loop, setLoop] = useState(false)
  const [seeking, setSeeking] = useState(null)

  const load = url => {
    setUrl(url)
    setPlayed(0)
    setLoaded(0)
  }
  const handlePlayPause = () => setPlaying(!playing)
  const handleStop = () => {
    setPlaying(false)
    setUrl(null)
  }
  const handleToggleControls = () => {
    setControls(!controls)
    setUrl(null)
  }
  useEffect(() => {
    if (url === null) {
      load(urlLink)
    }
  })
  const handleToggleLoop = () => setLoop(!loop)
  const handleVolumeChange = e => setVolume(parseFloat(e.target.value))
  const handleToggleMuted = () => setMuted(!muted)
  const handlePlaybackRate = e => setPlaybackRate(parseFloat(e.target.value))
  const handlePlay = () => setPlaying(true)
  const handlePause = () => setPlaying(false)
  const handleSeekMouseDown = () => setSeeking(true)
  const handleSeekChange = e => {
    setPlayed(parseFloat(e.target.value))
  }
  const handleSeekMouseUp = e => {
    setSeeking(false)
    videoRef.current.seekTo(parseFloat(e.target.value))
  }
  const handleProgress = state => {
    if (!seeking) {
      setPlayed(state.played)
      setLoaded(state.loaded)
    }
  }
  const handleEnded = () => setPlaying(loop)
  const handleDuration = duration => setDuration(duration)
  const handleFullscreen = () => {
    screenfull.request(findDOMNode(videoRef.current))
  }

  // for duration, elapsed and remaining time
  const Duration = ({ className, seconds }) => {
    return (
      <time dateTime={`P${Math.round(seconds)}S`} className={className}>
        {format(seconds)}
      </time>
    )
  }
  const preDuration = <Duration seconds={duration}></Duration>
  const preElapsed = <Duration seconds={duration * played}></Duration>
  const preRemaining = <Duration seconds={duration * (1 - played)}></Duration>

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Controlled Video</CardTitle>
      </CardHeader>
      <CardBody>
        <Row>
          <Col xs={12}>
            <ReactPlayer
              ref={videoRef}
              url={url}
              className='react-player-video'
              width='100%'
              playing={playing}
              controls={controls}
              loop={loop}
              playbackRate={playbackRate}
              volume={volume}
              muted={muted}
              onPlay={handlePlay}
              onPause={handlePause}
              onEnded={handleEnded}
              onProgress={handleProgress}
              onDuration={handleDuration}
              config={{
                youtube: {
                  embedOptions: {
                    'allow-same-origin': true
                  }
                }
              }}
            />
          </Col>
        </Row>
      </CardBody>
      <Table borderless>
        <tbody>
          <tr>
            <td className='text-right'>Controls</td>
            <td>
              <Button color='primary' outline onClick={handleStop} className='my-25 mr-50'>
                Stop
              </Button>
              <Button color='primary' outline onClick={handlePlayPause} className='my-25 mr-50'>
                {playing ? 'Pause' : 'Play'}
              </Button>
              <Button color='primary' outline onClick={handleFullscreen} className='my-25'>
                Fullscreen
              </Button>
            </td>
          </tr>
          <tr>
            <td className='text-right'>Speed</td>
            <td>
              <Button
                color='primary'
                outline
                onClick={handlePlaybackRate}
                value={1}
                className='my-25 mr-50'
                active={playbackRate === 1}
              >
                1x
              </Button>
              <Button
                color='primary'
                outline
                onClick={handlePlaybackRate}
                value={1.5}
                className='my-25 mr-50'
                active={playbackRate === 1.5}
              >
                1.5x
              </Button>
              <Button color='primary' outline onClick={handlePlaybackRate} value={2} active={playbackRate === 2}>
                2x
              </Button>
            </td>
          </tr>
          <tr>
            <td className='text-right'>Seek</td>
            <td>
              <input
                type='range'
                min={0}
                max={0.999999}
                step='any'
                value={played}
                onMouseDown={handleSeekMouseDown}
                onChange={handleSeekChange}
                onMouseUp={handleSeekMouseUp}
              />
            </td>
          </tr>
          <tr>
            <td className='text-right'>Volume</td>
            <td>
              <input type='range' min={0} max={1} step='any' value={volume} onChange={handleVolumeChange} />
            </td>
          </tr>
          <tr>
            <td className='text-right'>Controls</td>
            <td>
              <CustomInput type='checkbox' id='videoControls' checked={controls} onChange={handleToggleControls} />
            </td>
          </tr>
          <tr>
            <td className='text-right'>Muted</td>
            <td>
              <CustomInput type='checkbox' id='videoMuted' checked={muted} onChange={handleToggleMuted} />
            </td>
          </tr>
          <tr>
            <td className='text-right'>Loop</td>
            <td>
              <CustomInput type='checkbox' id='videoLoop' checked={loop} onChange={handleToggleLoop} />
            </td>
          </tr>
          <tr>
            <td className='text-right'>Played</td>
            <td>
              <Progress value={played} max={1} />
            </td>
          </tr>
          <tr>
            <td className='text-right'>Loaded</td>
            <td>
              <Progress value={loaded} max={1} />
            </td>
          </tr>
        </tbody>
      </Table>

      <CardBody>
        <Row>
          <Col xs={12}>
            <pre className='language-js'>
              <code className='language-js'>
                {`state={
  playing: ${playing},
  volume: ${volume.toFixed(2)},
  played: ${played.toFixed(2)},
  loaded: ${loaded.toFixed(2)},
  duration: ${format(preDuration.props.seconds)},
  elapsed: ${format(preElapsed.props.seconds)},
  remaining: ${format(preRemaining.props.seconds)}
}
`}
              </code>
            </pre>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default MediaPlayerControlledVideo
