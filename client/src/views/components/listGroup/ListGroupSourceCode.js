export const listGroupSimple = (
  <pre>
    <code className='language-jsx'>
      {`

import { ListGroup, ListGroupItem } from 'reactstrap'

const ListGroupSimple = () => {
  return (
    <ListGroup>
      <ListGroupItem>Cras justo odio</ListGroupItem>
      <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem>Morbi leo risus</ListGroupItem>
      <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
      <ListGroupItem>Vestibulum at eros</ListGroupItem>
    </ListGroup>
  )
}
export default ListGroupSimple
  `}
    </code>
  </pre>
)

export const listGroupDisabled = (
  <pre>
    <code className='language-jsx'>
      {`

import { ListGroup, ListGroupItem } from 'reactstrap'

const ListGroupDisabled = () => {
  return (
    <ListGroup>
      <ListGroupItem disabled>Cras justo odio</ListGroupItem>
      <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem>Morbi leo risus</ListGroupItem>
      <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
      <ListGroupItem>Vestibulum at eros</ListGroupItem>
    </ListGroup>
  )
}
export default ListGroupDisabled
  `}
    </code>
  </pre>
)

export const listGroupIcons = (
  <pre>
    <code className='language-jsx'>
      {`

import { ListGroup, ListGroupItem } from 'reactstrap'
import { Facebook, Instagram, Twitter } from 'react-feather'

const ListGroupIcons = () => {
  return (
    <ListGroup>
      <ListGroupItem className='d-flex'>
        <span className='mr-1'>
          <Instagram size={16} />
        </span>
        <span>Cupcake sesame snaps dessert marzipan.</span>
      </ListGroupItem>
      <ListGroupItem className='d-flex'>
        <span className='mr-1'>
          <Facebook size={16} />
        </span>
        <span>Jelly beans jelly-o gummi bears chupa chups marshmallow.</span>
      </ListGroupItem>
      <ListGroupItem className='d-flex'>
        <span className='mr-1'>
          <Twitter size={16} />
        </span>
        <span>Bonbon macaroon gummies pie jelly.</span>
      </ListGroupItem>
    </ListGroup>
  )
}
export default ListGroupIcons
  `}
    </code>
  </pre>
)

export const listGroupBadges = (
  <pre>
    <code className='language-jsx'>
      {`

import { ListGroup, ListGroupItem, Badge } from 'reactstrap'

const ListGroupBadges = () => {
  return (
    <ListGroup>
      <ListGroupItem className='d-flex justify-content-between align-items-center'>
        <span>Biscuit jelly beans macaroon danish pudding.</span>
        <Badge color='primary' pill>
          4
        </Badge>
      </ListGroupItem>
      <ListGroupItem className='d-flex justify-content-between align-items-center'>
        <span>chocolate cheesecake candy.</span>
        <Badge color='primary' pill>
          2
        </Badge>
      </ListGroupItem>
      <ListGroupItem className='d-flex justify-content-between align-items-center'>
        <span>Oat cake icing pastry pie carrot.</span>
        <Badge color='primary' pill>
          1
        </Badge>
      </ListGroupItem>
    </ListGroup>
  )
}
export default ListGroupBadges
  `}
    </code>
  </pre>
)

export const listGroupTag = (
  <pre>
    <code className='language-jsx'>
      {`

import { ListGroup, ListGroupItem } from 'reactstrap'

const ListGroupTag = () => {
  return (
    <ListGroup tag='div'>
      <ListGroupItem tag='a' href='#' active>
        Cras justo odio
      </ListGroupItem>
      <ListGroupItem tag='a' href='#'>
        Dapibus ac facilisis in
      </ListGroupItem>
      <ListGroupItem tag='a' href='#'>
        Morbi leo risus
      </ListGroupItem>
      <ListGroupItem tag='a' href='#'>
        Porta ac consectetur ac
      </ListGroupItem>
      <ListGroupItem tag='a' href='#'>
        consectetur adipisicing elit. Enim, exercitationem..
      </ListGroupItem>
      <ListGroupItem tag='a' href='#' disabled>
        Vestibulum at eros
      </ListGroupItem>
    </ListGroup>
  )
}
export default ListGroupTag
  `}
    </code>
  </pre>
)

export const listGroupContextual = (
  <pre>
    <code className='language-jsx'>
      {`

import { ListGroup, ListGroupItem } from 'reactstrap'

const ListGroupContextual = () => {
  return (
    <ListGroup>
      <ListGroupItem color='primary'>
        A simple primary list group item
      </ListGroupItem>
      <ListGroupItem color='secondary'>
        A simple secondary list group item
      </ListGroupItem>
      <ListGroupItem color='success'>
        A simple success list group item
      </ListGroupItem>
      <ListGroupItem color='danger'>
        A simple danger list group item
      </ListGroupItem>
      <ListGroupItem color='warning'>
        A simple warning list group item
      </ListGroupItem>
      <ListGroupItem color='info'>A simple info list group item</ListGroupItem>
      <ListGroupItem color='dark'>A simple dark list group item</ListGroupItem>
    </ListGroup>
  )
}
export default ListGroupContextual
  `}
    </code>
  </pre>
)

export const listGroupCustom = (
  <pre>
    <code className='language-jsx'>
      {`

import { ListGroup, ListGroupItem } from 'reactstrap'

const ListGroupCustom = () => {
  return (
    <ListGroup>
      <ListGroupItem active>
        <div className='d-flex justify-content-between w-100'>
          <h5 className='mb-1 text-white'>List group item heading</h5>
          <small>3 days ago</small>
        </div>
        <p className='mb-1'>
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
          eget risus varius blandit.
        </p>
        <small>Donec id elit non mi porta.</small>
      </ListGroupItem>
      <ListGroupItem>
        <div className='d-flex justify-content-between w-100'>
          <h5 className='mb-1'>List group item heading</h5>
          <small>3 days ago</small>
        </div>
        <p className='mb-1'>
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
          eget risus varius blandit.
        </p>
        <small>Donec id elit non mi porta.</small>
      </ListGroupItem>
      <ListGroupItem>
        <div className='d-flex justify-content-between w-100'>
          <h5 className='mb-1'>List group item heading</h5>
          <small>3 days ago</small>
        </div>
        <p className='mb-1'>
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
          eget risus varius blandit.
        </p>
        <small>Donec id elit non mi porta.</small>
      </ListGroupItem>
    </ListGroup>
  )
}
export default ListGroupCustom

  `}
    </code>
  </pre>
)

export const listGroupFlush = (
  <pre>
    <code className='language-jsx'>
      {`

import { ListGroup, ListGroupItem } from 'reactstrap'

const ListGroupFlush = () => {
  return (
    <ListGroup flush>
      <ListGroupItem>Cras justo odio</ListGroupItem>
      <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem>Morbi leo risus</ListGroupItem>
      <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
      <ListGroupItem>
        consectetur adipisicing elit. Veniam, nulla.
      </ListGroupItem>
      <ListGroupItem>Vestibulum at eros</ListGroupItem>
      <ListGroupItem>Lorem ipsum Quibusdam, voluptas.</ListGroupItem>
    </ListGroup>
  )
}
export default ListGroupFlush
  `}
    </code>
  </pre>
)

export const listGroupHorizontal = (
  <pre>
    <code className='language-jsx'>
      {`

import { ListGroup, ListGroupItem } from 'reactstrap'

const ListGroupHorizontal = () => {
  return (
    <ListGroup className='list-group-horizontal-sm'>
      <ListGroupItem>Chocolate cake</ListGroupItem>
      <ListGroupItem>Cookie pie</ListGroupItem>
      <ListGroupItem>Cheesecake</ListGroupItem>
      <ListGroupItem>Cotton candy</ListGroupItem>
    </ListGroup>
  )
}
export default ListGroupHorizontal
  `}
    </code>
  </pre>
)

export const listGroupNavigation = (
  <pre>
    <code className='language-jsx'>
      {`
import React, { useState } from 'react'
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
export default ListGroupNavigation`}
    </code>
  </pre>
)
