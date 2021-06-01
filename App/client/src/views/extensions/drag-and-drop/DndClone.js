import { useState } from 'react'
import { ReactSortable } from 'react-sortablejs'
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col, Badge } from 'reactstrap'

const DndClone = () => {
  const source1 = [
    {
      text: 'Youtube',
      color: 'light-secondary'
    },
    {
      text: 'Facebook',
      color: 'light-primary'
    },
    {
      text: 'Google',
      color: 'light-success'
    },
    {
      text: 'Instagram',
      color: 'light-danger'
    },
    {
      text: 'Twitter',
      color: 'light-info'
    },
    {
      text: 'Discord',
      color: 'light-warning'
    }
  ]
  const source2 = [
    {
      text: 'Github',
      color: 'light-secondary'
    },
    {
      text: 'Gitlab',
      color: 'light-primary'
    },
    {
      text: 'Slack',
      color: 'light-success'
    },
    {
      text: 'Pinterest',
      color: 'light-danger'
    },
    {
      text: 'Tinder',
      color: 'light-info'
    },
    {
      text: 'Amazon',
      color: 'light-warning'
    }
  ]

  const [list, setList] = useState(source1)
  const [list2, setList2] = useState(source2)

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Clone List</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>
          Add <code>pull:clone</code> with your group prop to clone items.
        </CardText>
        <Row>
          <Col md='6' sm='12'>
            <h4 className='my-1'>Badge Source 1</h4>
            <ReactSortable
              className='demo-inline-spacing sortable'
              group={{ name: 'shared-badge-group', pull: 'clone' }}
              list={list}
              setList={setList}
            >
              {list.map(item => {
                return (
                  <Badge className='draggable' key={item.text} color={item.color} pill>
                    {item.text}
                  </Badge>
                )
              })}
            </ReactSortable>
          </Col>
          <Col md='6' sm='12'>
            <h4 className='my-1'>Badge Source 2</h4>
            <ReactSortable
              className='demo-inline-spacing sortable'
              group={{ name: 'shared-badge-group', pull: 'clone' }}
              list={list2}
              setList={setList2}
            >
              {list2.map(item => {
                return (
                  <Badge className='draggable' key={item.text} color={item.color} pill>
                    {item.text}
                  </Badge>
                )
              })}
            </ReactSortable>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default DndClone
