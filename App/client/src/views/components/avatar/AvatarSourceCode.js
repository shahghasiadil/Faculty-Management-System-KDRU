export const avatarSizes = (
  <pre>
    <code className='language-jsx'>
      {`

import Avatar from '@components/avatar'
import avatarImg from '@src/assets/images/portrait/small/avatar-s-20.jpg'

const AvatarSizes = () => {
  return (
    <div className='demo-inline-spacing'>
      <Avatar img={avatarImg} size='sm' />
      <Avatar img={avatarImg} />
      <Avatar img={avatarImg} size='lg' />
      <Avatar img={avatarImg} size='xl' />
    </div>
  )
}
export default AvatarSizes
`}
    </code>
  </pre>
)

export const avatarInitials = (
  <pre>
    <code className='language-jsx'>
      {`

import Avatar from '@components/avatar'

const AvatarInitials = () => {
  return (
    <div className='demo-inline-spacing'>
      <Avatar color='light-primary' content='Peter Ingraham' initials />
      <Avatar color='light-secondary' content='Peter Ingraham' initials />
      <Avatar color='light-success' content='Peter Ingraham' initials />
      <Avatar color='light-danger' content='Peter Ingraham' initials />
    </div>
  )
}
export default AvatarInitials
`}
    </code>
  </pre>
)

export const avatarColors = (
  <pre>
    <code className='language-jsx'>
      {`

import Avatar from '@components/avatar'

const AvatarColors = () => {
  return (
    <div className='demo-inline-spacing'>
      <Avatar color='primary' content='PI' />
      <Avatar color='secondary' content='PI' />
      <Avatar color='success' content='PI' />
      <Avatar color='danger' content='PI' />
      <Avatar color='warning' content='PI' />
      <Avatar color='info' content='PI' />
    </div>
  )
}
export default AvatarColors
`}
    </code>
  </pre>
)

export const avatarLightColors = (
  <pre>
    <code className='language-jsx'>
      {`

import Avatar from '@components/avatar'

const AvatarLightColors = () => {
  return (
    <div className='demo-inline-spacing'>
      <Avatar color='light-primary' content='PI' />
      <Avatar color='light-secondary' content='PI' />
      <Avatar color='light-success' content='PI' />
      <Avatar color='light-danger' content='PI' />
      <Avatar color='light-warning' content='PI' />
      <Avatar color='light-info' content='PI' />
    </div>
  )
}
export default AvatarLightColors
`}
    </code>
  </pre>
)

export const avatarIcons = (
  <pre>
    <code className='language-jsx'>
      {`

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
`}
    </code>
  </pre>
)

export const avatarStatus = (
  <pre>
    <code className='language-jsx'>
      {`

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
`}
    </code>
  </pre>
)

export const avatarGroup = (
  <pre>
    <code className='language-jsx'>
      {`

import AvatarGroup from '@components/avatar-group'

const data = [
  {
    img: require('@src/assets/images/portrait/small/avatar-s-5.jpg')
  },
  {
    img: require('@src/assets/images/portrait/small/avatar-s-7.jpg')
  },
  {
    img: require('@src/assets/images/portrait/small/avatar-s-10.jpg')
  },
  {
    img: require('@src/assets/images/portrait/small/avatar-s-11.jpg')
  },
  {
    img: require('@src/assets/images/portrait/small/avatar-s-20.jpg')
  }
]

const AvatarGroupComponent = () => {
  return <AvatarGroup data={data} />
}

export default AvatarGroupComponent
`}
    </code>
  </pre>
)

export const avatarGroupTooltip = (
  <pre>
    <code className='language-jsx'>
      {`

import AvatarGroup from '@components/avatar-group'

const data = [
  {
    title: 'Vinnie Mostowy',
    img: require('@src/assets/images/portrait/small/avatar-s-5.jpg')
  },
  {
    title: 'Elicia Rieske',
    img: require('@src/assets/images/portrait/small/avatar-s-7.jpg')
  },
  {
    title: 'Julee Rossignol',
    img: require('@src/assets/images/portrait/small/avatar-s-10.jpg')
  },
  {
    title: 'Darcey Nooner',
    img: require('@src/assets/images/portrait/small/avatar-s-11.jpg')
  },
  {
    title: 'Jenny Looper',
    img: require('@src/assets/images/portrait/small/avatar-s-20.jpg')
  }
]

const AvatarGroupComponent = () => {
  return <AvatarGroup data={data} />
}

export default AvatarGroupComponent
`}
    </code>
  </pre>
)
