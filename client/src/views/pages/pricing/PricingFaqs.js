import { Row, Col } from 'reactstrap'
import AppCollapse from '@components/app-collapse'

const PricingFaqs = ({ data }) => {
  return (
    <div className='pricing-faq'>
      <h3 className='text-center'>FAQ's</h3>
      <p className='text-center'>Let us help answer the most common questions.</p>
      <Row className='my-2'>
        <Col className='mx-auto' sm='12' lg={{ size: 10, offset: 2 }}>
          <AppCollapse type='margin' data={data} titleKey='question' contentKey='ans' accordion />
        </Col>
      </Row>
    </div>
  )
}

export default PricingFaqs
