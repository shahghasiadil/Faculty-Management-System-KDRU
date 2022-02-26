import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import Breadcrumbs from '@components/breadcrumbs'

import BasicHookForm from './BasicHookForm'
import ValidationSchema from './ValidationSchema'
import AsyncValidationForm from './AsyncValidation'
import ValidationThirdPartyComponents from './ValidationThirdPartyComponents'

const ReactHookForm = () => {
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='React Hook Form' breadCrumbParent='Form' breadCrumbActive='React Hook Form' />
      <Row className='match-height'>
        <Col lg='6' md='12'>
          <BasicHookForm />
        </Col>
        <Col lg='6' md='12'>
          <ValidationThirdPartyComponents />
        </Col>
        <Col lg='6' md='12'>
          <ValidationSchema />
        </Col>
        <Col lg='6' md='12'>
          <AsyncValidationForm />
        </Col>
      </Row>
    </Fragment>
  )
}

export default ReactHookForm
