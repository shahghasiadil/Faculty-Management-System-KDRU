import { Fragment, useEffect } from 'react'
import { Row, Col } from 'reactstrap'
import Prism from 'prismjs'
import Breadcrumbs from '@components/breadcrumbs'
import Card from '@components/card-snippet'
import InputGroupBasic from './InputGroupBasic'
import InputGroupMerged from './InputGroupMerged'
import InputGroupSizes from './InputGroupSizes'
import InputCbAndRadio from './InputGroupCbAndRadio'
import InputGroupButtons from './InputGroupButtons'
import InputGroupDropdown from './InputGroupDropdown'
import {
  inputGroupBasic,
  inputGroupMerged,
  inputGroupSizes,
  inputGroupCBRadio,
  inputGroupButtons,
  inputGroupDropdowns
} from './InputGroupSourceCode'

const InputGroups = () => {
  useEffect(() => {
    Prism.highlightAll()
  })
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Input Groups' breadCrumbParent='Form Elements' breadCrumbActive='InputGroups' />
      <Row className='match-height'>
        <Col md='6' sm='12'>
          <Card title='Basic' code={inputGroupBasic}>
            <InputGroupBasic />
          </Card>
        </Col>
        <Col md='6' sm='12'>
          <Card title='Merged' code={inputGroupMerged}>
            <InputGroupMerged />
          </Card>
        </Col>
        <Col md='6' sm='12'>
          <Card title='Sizing' code={inputGroupSizes}>
            <InputGroupSizes />
          </Card>
        </Col>
        <Col md='6' sm='12'>
          <Card title='Checkbox & Radio' code={inputGroupCBRadio}>
            <InputCbAndRadio />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Input Group with Buttons' code={inputGroupButtons}>
            <InputGroupButtons />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Input Group Dropdowns' code={inputGroupDropdowns}>
            <InputGroupDropdown />
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}
export default InputGroups
