import Avatar from '@components/avatar'
import Timeline from '@components/timeline'
import AvatarGroup from '@components/avatar-group'
import { List, MoreVertical } from 'react-feather'
import jsonImg from '@src/assets/images/icons/json.png'
import ceo from '@src/assets/images/portrait/small/avatar-s-9.jpg'
import { Card, CardHeader, CardTitle, CardBody, Media } from 'reactstrap'

const avatarGroupArr = [
  {
    title: 'Billy Hopkins',
    img: require('@src/assets/images/portrait/small/avatar-s-9.jpg').default,
    placement: 'bottom',
    imgHeight: 33,
    imgWidth: 33
  },
  {
    title: 'Amy Carson',
    img: require('@src/assets/images/portrait/small/avatar-s-6.jpg').default,
    placement: 'bottom',
    imgHeight: 33,
    imgWidth: 33
  },
  {
    title: 'Brandon Miles',
    img: require('@src/assets/images/portrait/small/avatar-s-8.jpg').default,
    placement: 'bottom',
    imgHeight: 33,
    imgWidth: 33
  },
  {
    title: 'Daisy Weber',
    img: require('@src/assets/images/portrait/small/avatar-s-7.jpg').default,
    placement: 'bottom',
    imgHeight: 33,
    imgWidth: 33
  },
  {
    title: 'Jenny Looper',
    img: require('@src/assets/images/portrait/small/avatar-s-20.jpg').default,
    placement: 'bottom',
    imgHeight: 33,
    imgWidth: 33
  }
]

const data = [
  {
    title: '12 Invoices have been paid',
    content: 'Invoices have been paid to the company.',
    meta: '12 min ago',
    metaClassName: 'mr-1',
    customContent: (
      <Media>
        <img className='mr-1' src={jsonImg} alt='data.json' height='23' />
        <Media className='mb-0' body>
          data.json
        </Media>
      </Media>
    )
  },
  {
    title: 'Client Meeting',
    content: 'Project meeting with john @10:15am.',
    meta: '45 min ago',
    metaClassName: 'mr-1',
    color: 'warning',
    customContent: (
      <Media className='align-items-center'>
        <Avatar img={ceo} />
        <Media className='ml-50' body>
          <h6 className='mb-0'>John Doe (Client)</h6>
          <span>CEO of Infibeam</span>
        </Media>
      </Media>
    )
  },
  {
    title: 'Create a new project for client',
    content: 'Add files to new design folder',
    color: 'info',
    meta: '2 days ago',
    metaClassName: 'mr-1',
    customContent: <AvatarGroup data={avatarGroupArr} />
  },
  {
    title: 'Create a new project for client',
    content: 'Add files to new design folder',
    color: 'danger',
    meta: '5 days ago',
    metaClassName: 'mr-1'
  }
]

const UserTimeline = () => {
  return (
    <Card className='card-user-timeline'>
      <CardHeader>
        <div className='d-flex align-items-center'>
          <List className='user-timeline-title-icon' />
          <CardTitle tag='h4'>User Timeline</CardTitle>
        </div>
        <MoreVertical size={18} className='cursor-pointer' />
      </CardHeader>
      <CardBody>
        <Timeline className='ml-50 mb-0' data={data} />
      </CardBody>
    </Card>
  )
}

export default UserTimeline
