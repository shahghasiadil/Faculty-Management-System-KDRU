import { Fragment, useEffect } from 'react'
import { Row, Col, CardText } from 'reactstrap'
import Prism from 'prismjs'
import BreadCrumbs from '@components/breadcrumbs'
import Card from '@components/card-snippet'
import MediaLeft from './MediaLeft'
import MediaRight from './MediaRight'
import MediaLeftBordered from './MediaLeftBordered'
import MediaRightBordered from './MediaRightBordered'
import MediaNested from './MediaNested'
import MediaAlignment from './MediaAlignment'
import {
  mediaAlignment,
  mediaLeft,
  mediaLeftBordered,
  mediaNested,
  mediaRight,
  mediaRightBordered
} from './MediaObjectSourceCode'

const MediaObject = () => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <Fragment>
      <BreadCrumbs breadCrumbTitle='Media Object' breadCrumbParent='Components' breadCrumbActive='Media Object' />
      <Row className='match-height'>
        <Col xl='6' sm='12'>
          <Card title='Left Aligned Media Object' code={mediaLeft}>
            <CardText>
              Use <code>left</code> prop with media tag to align you media to left.
            </CardText>
            <MediaLeft />
          </Card>
        </Col>
        <Col xl='6' sm='12'>
          <Card title='Right Aligned Media Object' code={mediaRight}>
            <CardText>
              Use <code>right</code> prop with media tag to align you media to right.
            </CardText>
            <MediaRight />
          </Card>
        </Col>
        <Col xl='6' sm='12'>
          <Card title='Left Aligned Media Bordered' code={mediaLeftBordered}>
            <CardText>
              Wrap your medias with <code>.media-bordered</code> to create a bordered media.
            </CardText>
            <MediaLeftBordered />
          </Card>
        </Col>
        <Col xl='6' sm='12'>
          <Card title='Right Aligned Media Bordered' code={mediaRightBordered}>
            <CardText>
              Wrap your medias with <code>.media-bordered</code> to create a bordered media.
            </CardText>
            <MediaRightBordered />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Nested Media Objects' code={mediaNested}>
            <CardText>
              Add an extra media inside of your <code>MediaBody</code> to create a nested media.
            </CardText>
            <MediaNested />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Media alignment' code={mediaAlignment}>
            <CardText>
              Use <code>.align-self-[center/end]</code> classes to vertically align your media
            </CardText>
            <MediaAlignment />
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}
export default MediaObject
