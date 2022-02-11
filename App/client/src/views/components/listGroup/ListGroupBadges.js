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
