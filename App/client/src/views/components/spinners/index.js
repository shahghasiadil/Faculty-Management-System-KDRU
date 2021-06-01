import { Fragment, useEffect } from 'react'
import { Row, Col, CardText } from 'reactstrap'
import Prism from 'prismjs'
import BreadCrumbs from '@components/breadcrumbs'
import Card from '@components/card-snippet'
import SpinnerBorder from './SpinnerBorder'
import SpinnerColors from './SpinnerColors'
import SpinnerGrow from './SpinnerGrowing'
import SpinnerGrowColors from './SpinnerGrowingColored'
import SpinnerFlex from './SpinnerFlex'
import SpinnerFloat from './SpinnerFloat'
import SpinnerTextAlignment from './SpinnerTextAlignment'
import SpinnerSizes from './SpinnerSizes'
import SpinnerButtons from './SpinnerButtons'
import {
  spinnerBorder,
  spinnerButton,
  spinnerColors,
  spinnerFlex,
  spinnerFloat,
  spinnerGrowColors,
  spinnerGrowing,
  spinnerSizes,
  spinnerTextAlignment
} from './SpinnerSourceCode'

const Spinners = () => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <Fragment>
      <BreadCrumbs breadCrumbTitle='Spinners' breadCrumbParent='Components' breadCrumbActive='Spinners' />
      <Row className='match-height'>
        <Col md='6' sm='12'>
          <Card title='Border Spinner' code={spinnerBorder}>
            <CardText>
              Use <code>Spinner</code> tag to create a bordered spinner.
            </CardText>
            <SpinnerBorder />
          </Card>
        </Col>
        <Col md='6' sm='12'>
          <Card title='Colors' code={spinnerColors}>
            <CardText className='mb-0'>
              Use <code>color</code> attribute to create a colored spinner.
            </CardText>
            <SpinnerColors />
          </Card>
        </Col>
        <Col md='6' sm='12'>
          <Card title='Growing Spinner' code={spinnerGrowing}>
            <CardText>
              Use <code>type="grow"</code> with spinner tag to create a growing spinner.
            </CardText>
            <SpinnerGrow />
          </Card>
        </Col>
        <Col md='6' sm='12'>
          <Card title='Colored Growing Spinners' code={spinnerGrowColors}>
            <CardText className='mb-0'>
              Use <code>color</code> and <code>type</code> attribute to create a colored growing spinner.
            </CardText>
            <SpinnerGrowColors />
          </Card>
        </Col>
        <Col md='6' sm='12'>
          <Card title='Flex' code={spinnerFlex}>
            <CardText>
              Use Flexbox utilities to place spinners.Use <code>.d-flex</code> and <code>.justify-content-[side]</code>.
            </CardText>
            <SpinnerFlex />
          </Card>
        </Col>
        <Col md='6' sm='12'>
          <Card title='Float' code={spinnerFloat}>
            <CardText>
              Use <code>.float-[side]</code> with spinner tag to change spinner's position.
            </CardText>
            <SpinnerFloat />
          </Card>
        </Col>
        <Col md='6' sm='12'>
          <Card title='Text Alignment' code={spinnerTextAlignment}>
            <CardText>
              You can also use <code>.text-[side]</code> as a wrapper to spinner tag to change spinner's position.
            </CardText>
            <SpinnerTextAlignment />
          </Card>
        </Col>
        <Col md='6' sm='12'>
          <Card title='Sizes' code={spinnerSizes}>
            <CardText className='mb-0'>
              Use prop <code>size="sm"</code> for Small spinner or use <code>style</code> prop for custom size.
            </CardText>
            <SpinnerSizes />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Buttons' code={spinnerButton}>
            <SpinnerButtons />
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}
export default Spinners
