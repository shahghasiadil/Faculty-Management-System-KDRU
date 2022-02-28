import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import ReactPlayer from 'react-player'

const MediaPlayerVideo = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Video</CardTitle>
      </CardHeader>
      <CardBody>
        <ReactPlayer
          url='http://youtube.com/watch?v=FCPdIvXo2rU'
          className='react-player-video'
          width='100%'
          controls={true}
        />
      </CardBody>
    </Card>
  )
}

export default MediaPlayerVideo
