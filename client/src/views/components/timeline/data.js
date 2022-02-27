import { Fragment } from 'react'
import Avatar from '@components/avatar'
import AvatarGroup from '@components/avatar-group'
import pdf from '@src/assets/images/icons/file-icons/pdf.png'
import ceo from '@src/assets/images/portrait/small/avatar-s-9.jpg'
import interview from '@src/assets/images/portrait/small/avatar-s-20.jpg'
import user1 from '@src/assets/images/portrait/small/avatar-s-25.jpg'
import user2 from '@src/assets/images/portrait/small/avatar-s-7.jpg'
import user3 from '@src/assets/images/portrait/small/avatar-s-10.jpg'
import { Share2, MessageSquare, PhoneCall, PenTool, User, FileText, MapPin, ShoppingBag, Server } from 'react-feather'
import { Media, Button, UncontrolledCollapse, ListGroup, ListGroupItem, Badge } from 'reactstrap'

const avatarGroupBasic = [
  {
    title: 'Vinnie Mostowy',
    img: user1,
    imgHeight: 30,
    imgWidth: 30
  },
  {
    title: 'Elicia Rieske',
    img: user2,
    imgHeight: 30,
    imgWidth: 30
  },
  {
    title: 'Julee Rossignol',
    img: user3,
    imgHeight: 30,
    imgWidth: 30
  }
]

const avatarGroupIcons = [
  {
    title: 'Mostowy Vinnie',
    img: user1,
    imgHeight: 30,
    imgWidth: 30
  },
  {
    title: 'Rieske Elicia',
    img: user2,
    imgHeight: 30,
    imgWidth: 30
  },
  {
    title: 'Rossignol Julee',
    img: user3,
    imgHeight: 30,
    imgWidth: 30
  }
]

export const basicData = [
  {
    title: '12 Invoices have been paid',
    content: 'Invoices have been paid to the company.',
    meta: '12 min ago',
    customContent: (
      <Media>
        <img className='mr-1' src={pdf} alt='pdf' height='23' />
        <Media body>invoice.pdf</Media>
      </Media>
    )
  },
  {
    title: 'Client Meeting',
    content: 'Project meeting with john @10:15am.',
    meta: '45 min ago',
    color: 'secondary',
    customContent: (
      <Media className='align-items-center'>
        <Avatar img={ceo} imgHeight='38' imgWidth='38' />
        <Media className='ml-50' body>
          <h6 className='mb-0'>John Doe (Client)</h6>
          <span>CEO of Infibeam</span>
        </Media>
      </Media>
    )
  },
  {
    title: 'Financial Report',
    content: 'Click the button below to read financial reports',
    meta: '2 hours ago',
    color: 'success',
    customContent: (
      <Fragment>
        <Button size='sm' color='primary' id='reportToggler' outline>
          Show Report
        </Button>
        <UncontrolledCollapse toggler='#reportToggler'>
          <ListGroup className='mt-1' flush>
            <ListGroupItem className='list-group-item d-flex justify-content-between flex-wrap'>
              <span>
                Last Years's Profit : <span className='font-weight-bold'>$20000</span>
              </span>
              <Share2 size={17} />
            </ListGroupItem>
            <ListGroupItem className='list-group-item d-flex justify-content-between flex-wrap'>
              <span>
                This Years's Profit : <span className='font-weight-bold'>$25000</span>
              </span>
              <Share2 size={17} />
            </ListGroupItem>
            <ListGroupItem className='list-group-item d-flex justify-content-between flex-wrap'>
              <span>
                Last Years's Commission : <span className='font-weight-bold'>$5000</span>
              </span>
              <Share2 size={17} />
            </ListGroupItem>
            <ListGroupItem className='list-group-item d-flex justify-content-between flex-wrap'>
              <span>
                This Years's Commission : <span className='font-weight-bold'>$7000</span>
              </span>
              <Share2 size={17} />
            </ListGroupItem>
            <ListGroupItem className='list-group-item d-flex justify-content-between flex-wrap'>
              <span>
                This Years's Total Balance : <span className='font-weight-bold'>$70000</span>
              </span>
              <Share2 size={17} />
            </ListGroupItem>
          </ListGroup>
        </UncontrolledCollapse>
      </Fragment>
    )
  },
  {
    title: 'Interview Schedule',
    content: 'Have to interview Katy Turner for the developer job.',
    meta: '03:00 PM',
    color: 'warning',
    customContent: (
      <Fragment>
        <hr />
        <div className='d-flex justify-content-between flex-wrap'>
          <Media className='align-items-center'>
            <Avatar img={interview} className='mr-1' />
            <Media body>
              <h6 className='mb-0'>Katy Turner</h6>
              <span className='text-muted'>Javascript Developer</span>
            </Media>
          </Media>
          <div className='d-flex flex-wrap align-items-center cursor-pointer mt-sm-0 mt-50'>
            <MessageSquare className='mr-50' size={14} />
            <PhoneCall size={14} />
          </div>
        </div>
      </Fragment>
    )
  },
  {
    title: 'Online Store',
    content:
      'Develop an online store of electronic devices for the provided layout, as well as develop a mobile version of it. The must be compatible with any CMS.Develop an online store of electronic devices for the provided layout, as well as develop a mobile version of it. The must be compatible with any CMS.',
    meta: '03:00PM',
    color: 'danger',
    customContent: (
      <div className='d-flex justify-content-between flex-wrap flex-sm-row flex-column'>
        <div>
          <p className='text-muted mb-50'>Developers</p>
          <div className='d-flex align-items-center'>
            <Avatar color='light-primary' className='mr-50' content='A' size='sm' />
            <Avatar color='light-success' className='mr-50' content='B' size='sm' />
            <Avatar color='light-danger' content='C' size='sm' />
          </div>
        </div>
        <div className='mt-sm-0 mt-1'>
          <p className='text-muted mb-50'>Deadline</p>
          <p className='mb-0'>20 Dec 2077</p>
        </div>
        <div className='mt-sm-0 mt-1'>
          <p className='text-muted mb-50'>Budget</p>
          <p className='mb-0'>$50000</p>
        </div>
      </div>
    )
  },
  {
    title: 'Designing UI',
    content:
      'Our main goal is to design a new mobile application for our client. The customer wants a clean & flat design.',
    meta: (
      <Badge color='light-primary' pill>
        Design
      </Badge>
    ),
    color: 'info',
    customContent: (
      <div>
        <span className='text-muted'>Participants</span>
        <AvatarGroup className='mt-50' data={avatarGroupBasic} />
      </div>
    )
  }
]

export const iconsData = [
  {
    title: '12 Invoices have been paid',
    content: 'Invoices have been paid to the company.',
    icon: <PenTool size={14} />,
    meta: '12 min ago',
    customContent: (
      <Media>
        <img className='mr-1' src={pdf} alt='pdf' height='23' />
        <Media body>invoice.pdf</Media>
      </Media>
    )
  },
  {
    title: 'Client Meeting',
    content: 'Project meeting with john @10:15am.',
    meta: '45 min ago',
    icon: <User size={14} />,
    color: 'secondary',
    customContent: (
      <Media className='align-items-center'>
        <Avatar img={ceo} imgHeight='38' imgWidth='38' />
        <Media className='ml-50' body>
          <h6 className='mb-0'>John Doe (Client)</h6>
          <span>CEO of Infibeam</span>
        </Media>
      </Media>
    )
  },
  {
    title: 'Financial Report',
    content: 'Click the button below to read financial reports',
    meta: '2 hours ago',
    icon: <FileText size={14} />,
    color: 'success',
    customContent: (
      <Fragment>
        <Button size='sm' color='primary' id='reportToggler2' outline>
          Show Report
        </Button>
        <UncontrolledCollapse toggler='#reportToggler2'>
          <ListGroup className='mt-1' flush>
            <ListGroupItem className='list-group-item d-flex justify-content-between flex-wrap'>
              <span>
                Last Years's Profit : <span className='font-weight-bold'>$20000</span>
              </span>
              <Share2 size={17} />
            </ListGroupItem>
            <ListGroupItem className='list-group-item d-flex justify-content-between flex-wrap'>
              <span>
                This Years's Profit : <span className='font-weight-bold'>$25000</span>
              </span>
              <Share2 size={17} />
            </ListGroupItem>
            <ListGroupItem className='list-group-item d-flex justify-content-between flex-wrap'>
              <span>
                Last Years's Commission : <span className='font-weight-bold'>$5000</span>
              </span>
              <Share2 size={17} />
            </ListGroupItem>
            <ListGroupItem className='list-group-item d-flex justify-content-between flex-wrap'>
              <span>
                This Years's Commission : <span className='font-weight-bold'>$7000</span>
              </span>
              <Share2 size={17} />
            </ListGroupItem>
            <ListGroupItem className='list-group-item d-flex justify-content-between flex-wrap'>
              <span>
                This Years's Total Balance : <span className='font-weight-bold'>$70000</span>
              </span>
              <Share2 size={17} />
            </ListGroupItem>
          </ListGroup>
        </UncontrolledCollapse>
      </Fragment>
    )
  },
  {
    title: 'Interview Schedule',
    content: 'Have to interview Katy Turner for the developer job.',
    meta: '03:00 PM',
    icon: <MapPin size={14} />,
    color: 'warning',
    customContent: (
      <Fragment>
        <hr />
        <div className='d-flex justify-content-between flex-wrap'>
          <Media className='align-items-center'>
            <Avatar img={interview} className='mr-1' />
            <Media body>
              <h6 className='mb-0'>Katy Turner</h6>
              <span className='text-muted'>Javascript Developer</span>
            </Media>
          </Media>
          <div className='d-flex flex-wrap align-items-center cursor-pointer mt-sm-0 mt-50'>
            <MessageSquare className='mr-50' size={14} />
            <PhoneCall size={14} />
          </div>
        </div>
      </Fragment>
    )
  },
  {
    title: 'Online Store',
    content:
      'Develop an online store of electronic devices for the provided layout, as well as develop a mobile version of it. The must be compatible with any CMS.Develop an online store of electronic devices for the provided layout, as well as develop a mobile version of it. The must be compatible with any CMS.',
    meta: '03:00PM',
    icon: <ShoppingBag size={14} />,
    color: 'danger',
    customContent: (
      <div className='d-flex justify-content-between flex-wrap flex-sm-row flex-column'>
        <div>
          <p className='text-muted mb-50'>Developers</p>
          <div className='d-flex align-items-center'>
            <Avatar color='light-primary' className='mr-50' content='A' size='sm' />
            <Avatar color='light-success' className='mr-50' content='B' size='sm' />
            <Avatar color='light-danger' content='C' size='sm' />
          </div>
        </div>
        <div className='mt-sm-0 mt-1'>
          <p className='text-muted mb-50'>Deadline</p>
          <p className='mb-0'>20 Dec 2077</p>
        </div>
        <div className='mt-sm-0 mt-1'>
          <p className='text-muted mb-50'>Budget</p>
          <p className='mb-0'>$50000</p>
        </div>
      </div>
    )
  },
  {
    title: 'Designing UI',
    icon: <Server size={14} />,
    content:
      'Our main goal is to design a new mobile application for our client. The customer wants a clean & flat design.',
    meta: (
      <Badge color='light-primary' pill>
        Design
      </Badge>
    ),
    color: 'info',
    customContent: (
      <div>
        <span className='text-muted'>Participants</span>
        <AvatarGroup className='mt-50' data={avatarGroupIcons} />
      </div>
    )
  }
]
