import { Row, Col, Card, CardBody } from 'reactstrap'
import { PhoneCall, Mail } from 'react-feather'

const FaqContact = () => {
  return (
    <div id='faq-contact'>
      <Row className='mt-5 pt-75'>
        <Col className='text-center' sm='12'>
          <h2>You still have a question?</h2>
          <p className='mb-3'>
            If you cannot find a question in our FAQ, you can always contact us. We will answer to you shortly!
          </p>
        </Col>
        <Col sm='6'>
          <Card className='text-center bg-light-secondary shadow-none py-1'>
            <CardBody>
              <div className='avatar avatar-tag bg-light-primary mb-2 mx-auto'>
                <PhoneCall size={18} />
              </div>
              <h4>+ (810) 2548 2568</h4>
              <span className='text-body'>We are always happy to help!</span>
            </CardBody>
          </Card>
        </Col>
        <Col sm='6'>
          <Card className='text-center bg-light-secondary shadow-none py-1'>
            <CardBody>
              <div className='avatar avatar-tag bg-light-primary mb-2 mx-auto'>
                <Mail size={18} />
              </div>
              <h4>hello@help.com</h4>
              <span className='text-body'>Best way to get answer faster!</span>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default FaqContact
