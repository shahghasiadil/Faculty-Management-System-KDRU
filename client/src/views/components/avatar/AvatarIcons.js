import Avatar from '@components/avatar'
import { GitHub, Calendar, Inbox, Camera, Award, Star } from 'react-feather'

const AvatarIcons = () => {
  return (
    <div className='demo-inline-spacing'>
      <Avatar color='primary' icon={<Calendar size={14} />} />
      <Avatar color='secondary' icon={<GitHub size={14} />} />
      <Avatar color='success' icon={<Inbox size={14} />} />
      <Avatar color='light-danger' icon={<Camera size={14} />} />
      <Avatar color='light-warning' icon={<Award size={14} />} />
      <Avatar color='light-info' icon={<Star size={14} />} />
    </div>
  )
}
export default AvatarIcons
