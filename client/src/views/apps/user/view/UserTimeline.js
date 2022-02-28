// ** Custom Components
import Avatar from '@components/avatar'
import Timeline from '@components/timeline'

// ** Images
import ceo from '@src/assets/images/avatars/12-small.png'
import pdf from '@src/assets/images/icons/file-icons/pdf.png'

// ** Third Party Components
import { Card, CardHeader, CardTitle, CardBody, Media } from 'reactstrap'

// ** Timeline Data
const data = [
  {
    title: '12 Invoices have been paid',
    content: 'Invoices have been paid to the company.',
    meta: '12 min ago',
    customContent: (
      <Media className='align-items-center'>
        <img className='mr-1' src={pdf} alt='pdf' height='23' />
        <Media body>invoice.pdf</Media>
      </Media>
    )
  },
  {
    title: 'Client Meeting',
    content: 'Project meeting with john @10:15am.',
    meta: '45 min ago',
    color: 'warning',
    customContent: (
      <Media className='align-items-center'>
        <Avatar img={ceo} imgHeight={38} imgWidth={38} />
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
    meta: '2 days ago',
    color: 'info'
  }
]

const UserTimeline = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4' className='mb-2'>
          User Timeline
        </CardTitle>
      </CardHeader>
      <CardBody>
        <Timeline data={data} />
      </CardBody>
    </Card>
  )
}

export default UserTimeline
