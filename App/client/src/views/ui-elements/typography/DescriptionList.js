import { Card, CardHeader, CardTitle, CardBody, Row, Col } from 'reactstrap'

const DescriptionList = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>
          Description lists <small className='text-muted'>Horizontal</small>
        </CardTitle>
      </CardHeader>

      <CardBody>
        <dl>
          <Row>
            <Col sm='3'>
              <dt>Description lists</dt>
            </Col>
            <Col sm='9'>
              <dd>A description list is perfect for defining terms.</dd>
            </Col>
          </Row>
        </dl>
        <dl>
          <Row>
            <Col sm='3'>
              <dt>Euismod</dt>
            </Col>
            <Col sm='9'>
              <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
            </Col>
          </Row>
        </dl>
        <dl>
          <Row>
            <Col sm='3'>
              <dt>Malesuada porta</dt>
            </Col>
            <Col sm='9'>
              <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
            </Col>
          </Row>
        </dl>
        <dl>
          <Row>
            <Col sm='3'>
              <dt>Truncated term is truncated</dt>
            </Col>
            <Col sm='9'>
              <dd>Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc</dd>
            </Col>
          </Row>
        </dl>
      </CardBody>
    </Card>
  )
}
export default DescriptionList
