import { Fragment, useEffect } from 'react'
import Prism from 'prismjs'
import { Row, Col, CardText } from 'reactstrap'
import BreadCrumbs from '@components/breadcrumbs'
import Card from '@components/card-snippet'
import ToastTranslucent from './ToastTranslucent'
import ToastHeaderIcons from './ToastHeaderIcons'
import { toastHeaderIcons, toastTranslucent } from './ToastSourceCode'

const Toasts = () => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <Fragment>
      <BreadCrumbs breadCrumbTitle='Toasts' breadCrumbParent='Components' breadCrumbActive='Toasts' />
      <Row className='match-height'>
        <Col sm='12'>
          <Card title='Toast Translucent' code={toastTranslucent}>
            <CardText>
              Toasts are slightly translucent, too, so they blend over whatever they might appear over. For browsers
              that support the backdrop-filter CSS property, we’ll also attempt to blur the elements under a toast.
            </CardText>
            <ToastTranslucent />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Icons' code={toastHeaderIcons}>
            <CardText>
              Use <code>icon</code> attribute with <code>ToastHeader</code> tag to add an icon.
            </CardText>
            <ToastHeaderIcons />
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}
export default Toasts
