import Avatar from '@components/avatar'

const AvatarInitials = () => {
  return (
    <div className='demo-inline-spacing'>
      <Avatar color='light-primary' content='Peter Ingraham' size='sm' initials />
      <Avatar color='light-secondary' content='Peter Ingraham' initials />
      <Avatar color='light-success' content='Peter Ingraham' size='lg' initials />
      <Avatar color='light-danger' content='Peter Ingraham' size='xl' initials />
    </div>
  )
}
export default AvatarInitials
