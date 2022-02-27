import { useContext } from 'react'
import { AbilityContext } from '@src/utility/context/Can'
import { Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap'

const AccessControl = () => {
  const ability = useContext(AbilityContext)
  return (
    <Row>
      <Col md='6' sm='12'>
        <Card>
          <CardBody>
            <CardTitle tag='h4'>Common</CardTitle>
            <CardText>No ability is required to view this card</CardText>
            <CardText className='text-primary'>This card is visible to 'user' and 'admin' both</CardText>
          </CardBody>
        </Card>
      </Col>
      {ability.can('read', 'Analytics') ? (
        <Col md='6' sm='12'>
          <Card>
            <CardBody>
              <CardTitle tag='h4'>Analytics</CardTitle>
              <CardText>User with 'Analytics' subject's 'Read' ability can view this card</CardText>
              <CardText className='text-danger'>This card is visible to 'admin' only</CardText>
            </CardBody>
          </Card>
        </Col>
      ) : null}
    </Row>
  )
}

export default AccessControl
