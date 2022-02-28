import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import MediaPlayerVideo from './MediaPlayerVideo'
import MediaPlayerAudio from './MediaPlayerAudio'
import MediaPlayerControlled from './MediaPlayerControlled'
import ExtensionsHeader from '@components/extensions-header'

const ReactPlayer = () => {
  return (
    <Fragment>
      <ExtensionsHeader
        title='React Player'
        subTitle='React Media Player'
        link='https://github.com/CookPete/react-player'
      />
      <Row>
        <Col sm='12'>
          <MediaPlayerVideo />
        </Col>
        <Col sm='12'>
          <MediaPlayerControlled />
        </Col>
        <Col sm='12'>
          <MediaPlayerAudio />
        </Col>
      </Row>
    </Fragment>
  )
}

export default ReactPlayer
