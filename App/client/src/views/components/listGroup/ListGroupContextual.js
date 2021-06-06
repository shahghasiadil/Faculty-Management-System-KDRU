import { ListGroup, ListGroupItem } from 'reactstrap'

const ListGroupContextual = () => {
  return (
    <ListGroup>
      <ListGroupItem color='primary'>A simple primary list group item</ListGroupItem>
      <ListGroupItem color='secondary'>A simple secondary list group item</ListGroupItem>
      <ListGroupItem color='success'>A simple success list group item</ListGroupItem>
      <ListGroupItem color='danger'>A simple danger list group item</ListGroupItem>
      <ListGroupItem color='warning'>A simple warning list group item</ListGroupItem>
      <ListGroupItem color='info'>A simple info list group item</ListGroupItem>
      <ListGroupItem color='dark'>A simple dark list group item</ListGroupItem>
    </ListGroup>
  )
}
export default ListGroupContextual
