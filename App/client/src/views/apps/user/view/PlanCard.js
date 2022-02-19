// ** Reactstrap
import { Card, CardHeader, CardBody, Badge, UncontrolledTooltip, Button } from 'reactstrap'

const PlanCard = ({ selectedUser }) => {
  return (
    <Card className='plan-card border-primary'>
      <CardHeader className='d-flex justify-content-between align-items-center pt-75 pb-1'>
        <h5 className='mb-0'>Current Plan</h5>
        <Badge id='plan-expiry-date' color='light-secondary'>
          July 22, {new Date().getFullYear()}
        </Badge>
        <UncontrolledTooltip placement='top' target='plan-expiry-date'>
          Expiry Date
        </UncontrolledTooltip>
      </CardHeader>
      <CardBody>
        <Badge className='text-capitalize' color='light-primary'>
          {selectedUser !== null ? selectedUser.currentPlan : 'Basic'}
        </Badge>
        <ul className='list-unstyled my-1'>
          <li>
            <span className='align-middle'>5 Users</span>
          </li>
          <li className='my-25'>
            <span className='align-middle'>10 GB Storage</span>
          </li>
          <li>
            <span className='align-middle'>Basic Support</span>
          </li>
        </ul>
        <Button.Ripple className='text-center' color='primary' block>
          Upgrade Plan
        </Button.Ripple>
      </CardBody>
    </Card>
  )
}

export default PlanCard
