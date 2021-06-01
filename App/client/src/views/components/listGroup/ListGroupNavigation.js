import { useState } from 'react'
import classnames from 'classnames'
import { ListGroup, ListGroupItem, Row, Col, TabContent, TabPane, CardText } from 'reactstrap'

const ListGroupNavigation = () => {
  const [activeList, setActiveLIst] = useState('1')

  const toggleList = list => {
    if (activeList !== list) {
      setActiveLIst(list)
    }
  }

  return (
    <Row>
      <Col md='4' sm='12'>
        <ListGroup tag='div'>
          <ListGroupItem
            className={classnames('cursor-pointer', {
              active: activeList === '1'
            })}
            onClick={() => toggleList('1')}
            action
          >
            Home
          </ListGroupItem>
          <ListGroupItem
            className={classnames('cursor-pointer', {
              active: activeList === '2'
            })}
            onClick={() => toggleList('2')}
            action
          >
            Profile
          </ListGroupItem>
          <ListGroupItem
            className={classnames('cursor-pointer', {
              active: activeList === '3'
            })}
            onClick={() => toggleList('3')}
            action
          >
            Messages
          </ListGroupItem>
          <ListGroupItem
            className={classnames('cursor-pointer', {
              active: activeList === '4'
            })}
            onClick={() => toggleList('4')}
            action
          >
            Settings
          </ListGroupItem>
        </ListGroup>
      </Col>
      <Col className='mt-1' md='8' sm='12'>
        <TabContent activeTab={activeList}>
          <TabPane tabId='1'>
            <CardText>
              Croissant jelly-o halvah chocolate sesame snaps. Brownie caramels candy canes chocolate cake marshmallow
              icing lollipop I love. Gummies macaroon donut caramels biscuit topping danish.
            </CardText>
            <CardText>
              Tiramisu donut bonbon gummi bears. Brownie cake lollipop cheesecake gingerbread brownie. Tart sugar plum
              cake I love croissant I love apple pie.Gummies I love apple pie sugar plum lemon drops candy canes cake.
              Pastry I love jelly beans jelly beans brownie bear claw caramels. Pastry I love cake liquorice icing
              icing. I love carrot cake cupcake jelly-o wafer cookie jujubes cake.
            </CardText>
          </TabPane>
          <TabPane tabId='2'>
            <CardText>
              Jelly beans topping I love chocolate cake. Lemon drops jujubes jelly I love I love marshmallow gummies
              icing. Liquorice jelly-o lemon drops sugar plum.Bear claw chupa chups soufflé tart carrot cake dessert. I
              love tiramisu I love marzipan candy canes brownie marshmallow wafer. I love sugar plum cheesecake gummi
              bears I love pudding halvah gummi bears.
            </CardText>
            <CardText>
              I love donut dragée cupcake. Tootsie roll tart soufflé tart powder sesame snaps lollipop. Jelly beans tart
              macaroon I love biscuit. I love danish cheesecake sugar plum dragée croissant I love danish.
            </CardText>
          </TabPane>
          <TabPane tabId='3'>
            <CardText>
              Dragée dessert sweet roll chocolate bar. Gummi bears I love dragée pie I love. Cake pastry I love cookie.
            </CardText>
            <CardText>
              Wafer cheesecake cheesecake. Pastry bonbon chocolate pastry pudding topping sweet roll lollipop. I love
              macaroon gummi bears cookie topping chocolate bar carrot cake.Sweet roll pastry chocolate cake tiramisu
              dessert marzipan pudding cake. Cake macaroon danish jelly beans I love chocolate cookie sugar plum. Jelly
              beans chocolate cake sugar plum carrot cake.
            </CardText>
          </TabPane>
          <TabPane tabId='4'>
            <CardText>
              Muffin apple pie fruitcake. Chocolate cake chocolate cake oat cake I love soufflé brownie. I love
              marshmallow topping marshmallow I love.
            </CardText>
            <CardText>
              Caramels chocolate lollipop marshmallow croissant jelly beans jelly donut I love. Gummies toffee
              marshmallow ice cream biscuit. Candy sweet cupcake.Sugar plum cotton candy cupcake chocolate cake candy
              liquorice biscuit. Icing powder biscuit dragée gummies fruitcake I love. Sweet jelly-o fruitcake powder.
              Dessert gummi bears cake gingerbread tiramisu cake I love caramels dessert.
            </CardText>
          </TabPane>
        </TabContent>
      </Col>
    </Row>
  )
}
export default ListGroupNavigation
