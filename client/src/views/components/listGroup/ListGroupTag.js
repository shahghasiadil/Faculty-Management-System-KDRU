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
