import { useState } from 'react'
import { ReactSortable } from 'react-sortablejs'
import { Card, CardHeader, CardBody, CardTitle, CardText, Col } from 'reactstrap'

const dragItems = [
  {
    id: '1',
    title: 'Draggable Card 1',
    content:
      'Jelly beans sugar plum cheesecake cookie oat cake soufflé.Tootsie roll bonbon liquorice tiramisu pie powder.Donut sweet roll marzipan pastry cookie cake tootsie roll oat cake cookie.'
  },
  {
    id: '2',
    title: 'Draggable Card 2',
    content:
      'Jelly beans sugar plum cheesecake cookie oat cake soufflé.Tootsie roll bonbon liquorice tiramisu pie powder.Donut sweet roll marzipan pastry cookie cake tootsie roll oat cake cookie.'
  },
  {
    id: '3',
    title: 'Draggable Card 3',
    content:
      'Jelly beans sugar plum cheesecake cookie oat cake soufflé.Tootsie roll bonbon liquorice tiramisu pie powder.Donut sweet roll marzipan pastry cookie cake tootsie roll oat cake cookie.'
  },
  {
    id: '4',
    title: 'Draggable Card 4',
    content:
      'Jelly beans sugar plum cheesecake cookie oat cake soufflé.Tootsie roll bonbon liquorice tiramisu pie powder.Donut sweet roll marzipan pastry cookie cake tootsie roll oat cake cookie.'
  }
]

const DndCards = () => {
  const [cardsArr, setCardsArr] = useState(dragItems)

  return (
    <ReactSortable className='row sortable-row' list={cardsArr} setList={setCardsArr}>
      {cardsArr.map(item => (
        <Col className='draggable' xl='3' md='6' sm='12' key={item.id}>
          <Card className={`draggable-cards ${item.id !== 4 ? 'mr-1' : null}`}>
            <CardHeader>
              <CardTitle tag='h4'>{item.title}</CardTitle>
            </CardHeader>
            <CardBody>
              <CardText>{item.content}</CardText>
            </CardBody>
          </Card>
        </Col>
      ))}
    </ReactSortable>
  )
}

export default DndCards
