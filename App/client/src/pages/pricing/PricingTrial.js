import { Row, Col, Button } from 'reactstrap'
import trialSvg from '@src/assets/images/illustration/pricing-Illustration.svg'

const PricingTrial = () => {
  return (
    <div className='pricing-free-trial'>
      <Row>
        <Col className='mx-auto' lg={{ size: 10, offset: 3 }} sm='12'>
          <div className='pricing-trial-content d-flex justify-content-between'>
            <div className='text-center text-md-left mt-3'>
              <h3 className='text-primary'>Still not convinced? Start with a 14-day FREE trial!</h3>
              <h5>You will get full access to with all the features for 14 days.</h5>
              <div className='mt-2 mt-lg-3'>
                <Button.Ripple color='primary'>Start 14-day FREE trial</Button.Ripple>
              </div>
            </div>
            <img
              className='pricing-trial-img img-fluid'
              src={trialSvg}
              alt='trial svg'
              style={{
                transform: 'scaleX(1)'
              }}
            />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default PricingTrial
