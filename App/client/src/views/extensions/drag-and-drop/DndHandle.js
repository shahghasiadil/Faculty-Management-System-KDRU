import { useState } from 'react'
import { ReactSortable } from 'react-sortablejs'
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col, ListGroupItem } from 'reactstrap'

const array = {
  list1: [
    {
      id: '1',
      content: 'Cras justo odio'
    },
    {
      id: '2',
      content: 'Dapibus ac facilisis in'
    },
    {
      id: '3',
      content: 'Morbi leo risus'
    },
    {
      id: '4',
      content: 'Porta ac consectetur ac'
    },
    {
      id: '5',
      content: 'Vestibulum at eros'
    }
  ],
  list2: [
    {
      id: '6',
      content: 'Cras justo odio'
    },
    {
      id: '7',
      content: 'Dapibus ac facilisis in'
    },
    {
      id: '8',
      content: 'Morbi leo risus'
    },
    {
      id: '9',
      content: 'Porta ac consectetur ac'
    },
    {
      id: '10',
      content: 'Vestibulum at eros'
    }
  ]
}

const DndMultiple = () => {
  const [listArr1, setListArr1] = useState(array.list1)
  const [listArr2, setListArr2] = useState(array.list2)

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Drag And Drop With Handle</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>
          Add handle to your items using <code>handle</code> prop.
        </CardText>
        <Row id='dd-with-handle'>
          <Col md='6' sm='12'>
            <h4 className='my-1'>List One</h4>
            <ReactSortable
              tag='ul'
              className='list-group sortable'
              group='shared-handle-group'
              handle='.handle'
              list={listArr1}
              setList={setListArr1}
            >
              {listArr1.map(item => {
                return (
                  <ListGroupItem className='draggable' key={item.id}>
                    <span className='handle'>+</span>
                    {item.content}
                  </ListGroupItem>
                )
              })}
            </ReactSortable>
          </Col>
          <Col md='6' sm='12'>
            <h4 className='my-1'>People Group 2</h4>
            <ReactSortable
              tag='ul'
              className='list-group sortable'
              group='shared-handle-group'
              handle='.handle'
              list={listArr2}
              setList={setListArr2}
            >
              {listArr2.map(item => {
                return (
                  <ListGroupItem className='draggable' key={item.id}>
                    <span className='handle'>+</span>
                    {item.content}
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
