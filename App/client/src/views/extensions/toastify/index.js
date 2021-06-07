import { Fragment } from 'react'
import ExtensionsHeader from '@components/extensions-header'
import { Row, Col } from 'reactstrap'
import ToastrTypes from './ToastTypes'
import ToastrPositions from './ToastPositions'
import ToastrAnimations from './ToastrAnimations'
import ToastrOptions from './ToastifyOptions'

const Toastr = () => {
  return (
    <Fragment>
      <ExtensionsHeader
        title='React Toastify'
        subTitle='React Toastify makes notification easy 🚀 !'
        link='https://github.com/fkhadra/react-toastify'
      />

      <Row>
        <Col sm='12'>
          <ToastrTypes />
        </Col>
        <Col sm='12'>
          <ToastrPositions />
        </Col>
        <Col sm='12'>
          <ToastrAnimations />
        </Col>
        <Col sm='12'>
          <ToastrOptions />
        </Col>
      </Row>
    </Fragment>
  )
}

export default Toastr
