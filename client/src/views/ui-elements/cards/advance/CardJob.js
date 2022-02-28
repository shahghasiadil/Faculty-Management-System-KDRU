import Avatar from '@components/avatar'
import { Card, CardBody, CardText, Button, Badge, Media } from 'reactstrap'
import profileImg from '@src/assets/images/portrait/small/avatar-s-7.jpg'

const CardJob = () => {
  return (
    <Card className='card-apply-job'>
      <CardBody>
        <div className='d-flex justify-content-between align-items-center mb-1'>
          <Media>
            <Avatar className='mr-1' img={profileImg} imgHeight='42' imgWidth='42' />
            <Media body>
              <h6 className='mb-0'>Mittie Evans</h6>
              <small className='text-muted'>Updated 12m ago</small>
            </Media>
          </Media>
          <Badge color='light-primary' pill>
            Design
          </Badge>
        </div>
        <h5 className='apply-job-title'>Need a designer to form branding essentials for my business.</h5>
        <CardText className='mb-2'>
          Design high-quality designs, graphics, mock-ups and layouts for both new and existing web sites/ web
          applications / mobile applications.
        </CardText>
        <div className='apply-job-package bg-light-primary rounded'>
          <div>
            <sup className='text-body'>
              <small>$</small>
            </sup>
            <h2 className='d-inline mr-25'>9,800</h2>
            <sub className='text-body'>
              <small>/ month</small>
            </sub>
          </div>
          <Badge color='light-primary' pill>
            Full Time
          </Badge>
        </div>
        <Button color='primary' block>
          Apply For This Job
        </Button>
      </CardBody>
    </Card>
  )
}

export default CardJob
