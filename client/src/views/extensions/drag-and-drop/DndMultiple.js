import { useState } from 'react'
import { ReactSortable } from 'react-sortablejs'
import img1 from '@src/assets/images/portrait/small/avatar-s-12.jpg'
import img2 from '@src/assets/images/portrait/small/avatar-s-1.jpg'
import img3 from '@src/assets/images/portrait/small/avatar-s-2.jpg'
import img4 from '@src/assets/images/portrait/small/avatar-s-3.jpg'
import img5 from '@src/assets/images/portrait/small/avatar-s-4.jpg'
import img6 from '@src/assets/images/portrait/small/avatar-s-5.jpg'
import img7 from '@src/assets/images/portrait/small/avatar-s-6.jpg'
import img8 from '@src/assets/images/portrait/small/avatar-s-7.jpg'
import img9 from '@src/assets/images/portrait/small/avatar-s-8.jpg'
import img10 from '@src/assets/images/portrait/small/avatar-s-9.jpg'
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col, ListGroupItem, Media } from 'reactstrap'

const array = {
  list1: [
    {
      id: '1',
      img: img1,
      name: 'Mary S. Navarre',
      content: 'Chupa chups tiramisu apple pie biscuit sweet roll bonbon macaroon toffee icing.'
    },
    {
      id: '2',
      img: img2,
      name: 'Samuel M. Ellis',
      content: 'Toffee powder marzipan tiramisu. Cake cake dessert danish.'
    },
    {
      id: '3',
      img: img3,
      name: 'Sandra C. Toney',
      content: 'Sugar plum fruitcake gummies marzipan liquorice tiramisu. Pastry liquorice chupa.'
    },
    {
      id: '4',
      img: img4,
      name: 'Cleveland C. Goins',
      content: 'Toffee powder marzipan tiramisu. Cake cake dessert danish.'
    },
    {
      id: '5',
      img: img5,
      name: 'Linda M. English',
      content: 'Chupa chups tiramisu apple pie biscuit sweet roll bonbon macaroon toffee icing.'
    }
  ],
  list2: [
    {
      id: '6',
      img: img6,
      name: 'Alexandria I. Smelser',
      content: 'Toffee powder marzipan tiramisu. Cake cake dessert danish.'
    },
    {
      id: '7',
      img: img7,
      name: 'Oscar N. Pool',
      content: 'Sugar plum fruitcake gummies marzipan liquorice tiramisu. Pastry liquorice chupsake.'
    },
    {
      id: '8',
      img: img8,
      name: 'Kathy A. Alvarado',
      content: 'Chupa chups tiramisu apple pie biscuit sweet roll bonbon macaroon toffee icing.'
    },
    {
      id: '9',
      img: img9,
      name: 'James E. White',
      content: 'Toffee powder marzipan tiramisu. Cake cake dessert danish.'
    },
    {
      id: '10',
      img: img10,
      name: 'Roberta R. Babin',
      content: 'Chupa chups tiramisu apple pie biscuit sweet roll bonbon macaroon toffee icing.'
    }
  ]
}

const DndMultiple = () => {
  const [listArr1, setListArr1] = useState(array.list1)
  const [listArr2, setListArr2] = useState(array.list2)

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Multiple Lists</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>
          Use <code>group</code> prop to create a multiple list Drag & Drop.
        </CardText>
        <Row>
          <Col md='6' sm='12'>
            <h4 className='my-1'>People Group 1</h4>
            <ReactSortable
              tag='ul'
              className='list-group list-group-flush sortable'
              group='shared-group'
              list={listArr1}
              setList={setListArr1}
            >
              {listArr1.map(item => {
                return (
                  <ListGroupItem className='draggable' key={item.id}>
                    <Media>
                      <Media left tag='div'>
                        <Media
                          object
                          src={item.img}
                          className='rounded-circle mr-2'
                          alt='Generic placeholder image'
                          height='50'
                          width='50'
                        />
                      </Media>
                      <Media body>
                        <h5 className='mt-0'>{item.name}</h5>
                        {item.content}
                      </Media>
                    </Media>
                  </ListGroupItem>
                )
              })}
            </ReactSortable>
          </Col>
          <Col md='6' sm='12'>
            <h4 className='my-1'>People Group 2</h4>
            <ReactSortable
              tag='ul'
              className='list-group list-group-flush sortable'
              group='shared-group'
              list={listArr2}
              setList={setListArr2}
            >
              {listArr2.map(item => {
                return (
                  <ListGroupItem className='draggable' key={item.id}>
                    <Media>
                      <Media left tag='div'>
                        <Media
                          object
                          src={item.img}
                          className='rounded-circle mr-2'
                          alt='Generic placeholder image'
                          height='50'
                          width='50'
                        />
                      </Media>
                      <Media body>
                        <h5 className='mt-0'>{item.name}</h5>
                        {item.content}
                      </Media>
                    </Media>
                  </ListGroupItem>
                )
              })}
            </ReactSortable>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default DndMultiple
