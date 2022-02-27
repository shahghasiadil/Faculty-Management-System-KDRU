import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import Breadcrumbs from '@components/breadcrumbs'
import BasicCheckbox from './CheckboxBasic'
import CustomCheckbox from './CheckboxCustom'
import ColoredCheckbox from './CheckboxColors'

const Checkbox = () => {
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Checkbox' breadCrumbParent='Form Elements' breadCrumbActive='Checkbox' />
      <Row>
        <Col sm='12'>
          <BasicCheckbox />
        </Col>
        <Col sm='12'>
          <CustomCheckbox />
        </Col>
        <Col sm='12'>
          <ColoredCheckbox />
        </Col>
      </Row>
    </Fragment>
  )
}
export default Checkbox
