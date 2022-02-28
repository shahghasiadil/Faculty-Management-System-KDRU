// ** React Imports
import { Row, Col, CardText } from 'reactstrap'
import { Award, Clock, Shield } from 'react-feather'

const ItemFeatures = () => {
  return (
    <div className='item-features'>
      <Row className='text-center'>
        <Col className='mb-4 mb-md-0' md='4' xs='12'>
          <div className='w-75 mx-auto'>
            <Award />
            <h4 className='mt-2 mb-1'>100% Original</h4>
            <CardText>Chocolate bar candy canes ice cream toffee. Croissant pie cookie halvah.</CardText>
          </div>
        </Col>
        <Col className='mb-4 mb-md-0' md='4' xs='12'>
          <div className='w-75 mx-auto'>
            <Clock />
            <h4 className='mt-2 mb-1'>10 Day Replacement</h4>
            <CardText>Marshmallow biscuit donut dragée fruitcake. Jujubes wafer cupcake.</CardText>
          </div>
        </Col>
        <Col className='mb-4 mb-md-0' md='4' xs='12'>
          <div className='w-75 mx-auto'>
            <Shield />
            <h4 className='mt-2 mb-1'>1 Year Warranty</h4>
            <CardText>Cotton candy gingerbread cake I love sugar plum I love sweet croissant.</CardText>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default ItemFeatures
