import { Fragment, useEffect } from 'react'
import { Info } from 'react-feather'
import Card from '@components/card-snippet'
import BreadCrumbs from '@components/breadcrumbs'
import CarouselBasic from './CarouselBasic'
import CarouselCaptions from './CarouselCaptions'
import CarouselUncontrolled from './CarouselUncontrolled'
import CarouselInterval from './CarouselInterval'
import CarouselKeyboard from './CarouselKeyboard'
import CarouselPause from './CarouselPause'
import Prism from 'prismjs'
import { Row, Col, CardText, Alert } from 'reactstrap'
import {
  carouselBasic,
  carouselCaptions,
  carouselInterval,
  carouselPause,
  carouselKeyboard,
  carouselUncontrolled
} from './CarouselSourceCode'

const Carousel = () => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <Fragment>
      <BreadCrumbs breadCrumbTitle='Carousel' breadCrumbParent='Components' breadCrumbActive='Carousel' />
      <Row>
        <Col className='mb-1' sm='12'>
          <Alert color='info'>
            <div className='alert-body'>
              <p>
                <Info className='mr-1' size={14} />
                Nested carousels are not supported.
              </p>
            </div>
          </Alert>
        </Col>
        <Col md='6' sm='12'>
          <Card title='Basic Example' code={carouselBasic}>
            <CarouselBasic />
          </Card>
        </Col>
        <Col md='6' sm='12'>
          <Card title='Captions Example' code={carouselCaptions}>
            <CarouselCaptions />
          </Card>
        </Col>
        <Col md='6' sm='12'>
          <Card title='Uncontrolled Example' code={carouselUncontrolled}>
            <CardText>
              You don't have to manage state with <code>UncontrolledCarousel</code> all you have to do is return it with
              your content.
            </CardText>
            <CarouselUncontrolled />
          </Card>
        </Col>
        <Col md='6' sm='12'>
          <Card title='Interval Example' code={carouselInterval}>
            <CardText>
              Use <code>Interval</code> prop to set interval between slides. default interval is <strong>5000</strong>.
            </CardText>
            <CarouselInterval />
          </Card>
        </Col>
        <Col md='6' sm='12'>
          <Card title='Keyboard Example' code={carouselKeyboard}>
            <CardText>
              Use <code>Keyboard</code> prop to control carousel with keyboard default is <code>false</code>.
            </CardText>
            <CarouselKeyboard />
          </Card>
        </Col>
        <Col md='6' sm='12'>
          <Card title='Pause Example' code={carouselPause}>
            <CardText>
              Use <code>pause</code> prop to pause carousel on hover.
            </CardText>
            <CarouselPause />
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}
export default Carousel
