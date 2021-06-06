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
