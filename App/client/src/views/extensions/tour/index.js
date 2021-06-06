import { Fragment, useContext } from 'react'
import ExtensionsHeader from '@components/extensions-header'
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Button } from 'reactstrap'
import { ShepherdTour, ShepherdTourContext } from 'react-shepherd'

import 'shepherd.js/dist/css/shepherd.css'
import '@styles/react/libs/shepherd-tour/shepherd-tour.scss'

const backBtnClass = 'btn btn-sm btn-outline-primary',
  nextBtnClass = 'btn btn-sm btn-primary btn-next'

let instance = null

const steps = [
  {
    id: 'navbar',
    title: 'Navbar',
    text: 'This is your navbar',
    attachTo: { element: '.navbar', on: 'bottom' },
    cancelIcon: {
      enabled: true
    },
    buttons: [
      {
        action: () => instance.cancel(),
        classes: backBtnClass,
        text: 'Skip'
      },
      {
        text: 'Next',
        classes: nextBtnClass,
        action: () => instance.next()
      }
    ]
  },
  {
    id: 'card',
    title: 'Card',
    text: 'This is a card',
    attachTo: { element: '#basic-tour .card', on: 'top' },
    cancelIcon: {
      enabled: true
    },
    buttons: [
      {
        text: 'Skip',
        classes: backBtnClass,
        action: () => instance.cancel()
      },
      {
        text: 'Back',
        classes: backBtnClass,
        action: () => instance.back()
      },
      {
        text: 'Next',
        classes: nextBtnClass,
        action: () => instance.next()
      }
    ]
  },
  {
    id: 'footer',
    title: 'Footer',
    text: 'This is the footer',
    attachTo: { element: '.footer', on: 'top' },
    cancelIcon: {
      enabled: true
    },
    buttons: [
      {
        text: 'Back',
        classes: backBtnClass,
        action: () => instance.back()
      },
      {
        text: 'Finish',
        classes: nextBtnClass,
        action: () => instance.cancel()
      }
    ]
  }
]

const Content = () => {
  const tour = useContext(ShepherdTourContext)
  instance = tour

  return (
    <Button color='primary' onClick={() => tour.start()} outline>
      Start Tour
    </Button>
  )
}

const TourComponent = () => {
  return (
    <Fragment>
      <ExtensionsHeader
        title='React Shepherd'
        subTitle='Tourist Guide into your React Components With React Shepherd'
        link='https://github.com/shipshapecode/react-shepherd'
      />
      <Row id='basic-tour'>
        <Col xs={12}>
          <Card>
            <CardHeader>
              <CardTitle tag='h4'>Tour</CardTitle>
            </CardHeader>
            <CardBody>
              <ShepherdTour
                steps={steps}
                tourOptions={{
                  useModalOverlay: true
                }}
              >
                <Content />
              </ShepherdTour>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default TourComponent
