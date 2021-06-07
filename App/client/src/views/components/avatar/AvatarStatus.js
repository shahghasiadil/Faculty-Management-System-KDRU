import Avatar from '@components/avatar'
import { GitHub } from 'react-feather'
import avatarImg from '@src/assets/images/portrait/small/avatar-s-20.jpg'

const AvatarStatus = () => {
  return (
    <div className='demo-inline-spacing'>
      <Avatar img={avatarImg} status='offline' />
      <Avatar color='info' content='LD' status='busy' />
      <Avatar color='light-primary' icon={<GitHub size={14} />} status='away' />
      <Avatar color='light-success' content='AB' status='online' />
    </div>
  )
}
export default AvatarStatus
