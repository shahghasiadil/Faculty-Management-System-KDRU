// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import classnames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { X, Mail, PhoneCall, Clock, Tag, Star, Image, Trash, Slash } from 'react-feather'

const UserProfileSidebar = props => {
  // ** Props
  const { user, handleUserSidebarRight, userSidebarRight } = props

  return (
    <div className={classnames('user-profile-sidebar', { show: userSidebarRight === true })}>
      <header className='user-profile-header'>
        <span className='close-icon' onClick={handleUserSidebarRight}>
          <X size={14} />
        </span>
        <div className='header-profile-sidebar'>
          <Avatar
            className='box-shadow-1 avatar-border'
            size='xl'
            status={user.status}
            img={user.avatar}
            imgHeight='70'
            imgWidth='70'
          />
          <h4 className='chat-user-name'>{user.fullName}</h4>
          <span className='user-post'>{user.role}</span>
        </div>
      </header>
      <PerfectScrollbar className='user-profile-sidebar-area' options={{ wheelPropagation: false }}>
        <h6 className='section-label mb-1'>About</h6>
        <p>{user.about}</p>
        <div className='personal-info'>
          <h6 className='section-label mb-1 mt-3'>Personal Information</h6>
          <ul className='list-unstyled'>
            <li className='mb-1'>
              <Mail className='mr-50' size={17} />
              <span className='align-middle'>lucifer@email.com</span>
            </li>
            <li className='mb-1'>
              <PhoneCall className='mr-50' size={17} />
              <span className='align-middle'> +1(123) 456 - 7890</span>
            </li>
            <li>
              <Clock className='mr-50' size={17} />
              <span className='align-middle'> Mon - Fri 10AM - 8PM</span>
            </li>
          </ul>
        </div>
        <div className='more-options'>
          <h6 className='section-label mb-1 mt-3'>Options</h6>
          <ul className='list-unstyled'>
            <li className='cursor-pointer mb-1'>
              <Tag className='mr-50' size={17} />
              <span className='align-middle'> Add Tag</span>
            </li>
            <li className='cursor-pointer mb-1'>
              <Star className='mr-50' size={17} />
              <span className='align-middle'> Important Contact</span>
            </li>
            <li className='cursor-pointer mb-1'>
              <Image className='mr-50' size={17} />
              <span className='align-middle'> Shared Media</span>
            </li>
            <li className='cursor-pointer mb-1'>
              <Trash className='mr-50' size={17} />
              <span className='align-middle'> Delete Contact</span>
            </li>
            <li className='cursor-pointer'>
              <Slash className='mr-50' size={17} />
              <span className='align-middle'>Block Contact</span>
            </li>
          </ul>
        </div>
      </PerfectScrollbar>
    </div>
  )
}

export default UserProfileSidebar
