import { Badge } from 'reactstrap'
import { Link } from 'react-feather'

const BadgePillLink = () => {
  return (
    <Badge color='primary' pill href='#'>
      <Link size={12} />
      <span className='align-middle ml-50'>Link Badge Pill</span>
    </Badge>
  )
}
export default BadgePillLink
