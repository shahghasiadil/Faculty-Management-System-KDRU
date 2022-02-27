// ** React Imports
import { Fragment, useState } from 'react'

// ** Utils
import { formatDate } from '@utils'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import classnames from 'classnames'
import {
  Row,
  Col,
  Badge,
  Card,
  Table,
  CardBody,
  CardFooter,
  CardHeader,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown
} from 'reactstrap'
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Folder,
  Tag,
  Mail,
  Trash,
  Edit2,
  Info,
  Paperclip,
  MoreVertical,
  CornerUpLeft,
  CornerUpRight,
  Trash2
} from 'react-feather'
import PerfectScrollbar from 'react-perfect-scrollbar'

const MailDetails = props => {
  // ** Props
  const {
    mail,
    openMail,
    dispatch,
    labelColors,
    setOpenMail,
    updateMails,
    paginateMail,
    handleMailToTrash,
    handleFolderUpdate,
    handleLabelsUpdate,
    handleMailReadUpdate,
    formatDateToMonthShort
  } = props

  // ** States
  const [showReplies, setShowReplies] = useState(false)

  // ** Renders Labels
  const renderLabels = arr => {
    if (arr && arr.length) {
      return arr.map(label => (
        <Badge key={label} color={`light-${labelColors[label]}`} className='mr-50 text-capitalize' pill>
          {label}
        </Badge>
      ))
    }
  }

  // ** Renders Attachments
  const renderAttachments = arr => {
    return arr.map((item, index) => {
      return (
        <a
          key={item.fileName}
          href='/'
          onClick={e => e.preventDefault()}
          className={classnames({
            'mb-50': index + 1 !== arr.length
          })}
        >
          <img src={item.thumbnail} alt={item.fileName} width='16' className='mr-50' />
          <span className='text-muted font-weight-bolder align-text-top'>{item.fileName}</span>
          <span className='text-muted font-small-2 ml-25'>{`(${item.size})`}</span>
        </a>
      )
    })
  }

  // ** Renders Messages
  const renderMessage = obj => {
    return (
      <Card>
        <CardHeader className='email-detail-head'>
          <div className='user-details d-flex justify-content-between align-items-center flex-wrap'>
            <Avatar img={obj.from.avatar} className='mr-75' imgHeight='48' imgWidth='48' />
            <div className='mail-items'>
              <h5 className='mb-0'>{obj.from.name}</h5>
              <UncontrolledDropdown className='email-info-dropup'>
                <DropdownToggle className='font-small-3 text-muted cursor-pointer' tag='span' caret>
                  {obj.from.email}
                </DropdownToggle>
                <DropdownMenu>
                  <Table className='font-small-3' size='sm' borderless>
                    <tbody>
                      <tr>
                        <td className='text-right text-muted align-top'>From:</td>
                        <td>{obj.from.email}</td>
                      </tr>
                      <tr>
                        <td className='text-right text-muted align-top'>To:</td>
                        <td>{obj.to[0].email}</td>
                      </tr>
                      <tr>
                        <td className='text-right text-muted align-top'>Date:</td>
                        <td>
                          {formatDateToMonthShort(obj.time)}, {formatDateToMonthShort(obj.time, false)}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </div>
          <div className='mail-meta-item d-flex align-items-center'>
            <small className='mail-date-time text-muted'>{formatDate(obj.time)}</small>
            <UncontrolledDropdown className='ml-50'>
              <DropdownToggle className='cursor-pointer' tag='span'>
                <MoreVertical size={14} />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem className='d-flex align-items-center w-100'>
                  <CornerUpLeft className='mr-50' size={14} />
                  Reply
                </DropdownItem>
                <DropdownItem className='d-flex align-items-center w-100'>
                  <CornerUpRight className='mr-50' size={14} />
                  Forward
                </DropdownItem>
                <DropdownItem className='d-flex align-items-center w-100'>
                  <Trash2 className='mr-50' size={14} />
                  Delete
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        </CardHeader>
        <CardBody className='mail-message-wrapper pt-2'>
          <div className='mail-message' dangerouslySetInnerHTML={{ __html: obj.message }}></div>
        </CardBody>
        {obj.attachments && obj.attachments.length ? (
          <CardFooter>
            <div className='mail-attachments'>
              <div className='d-flex align-items-center mb-1'>
                <Paperclip size={16} />
                <h5 className='font-weight-bolder text-body mb-0 ml-50'>{obj.attachments.length} Attachment</h5>
              </div>
              <div className='d-flex flex-column'>{renderAttachments(obj.attachments)}</div>
            </div>
          </CardFooter>
        ) : null}
      </Card>
    )
  }

  // ** Renders Replies
  const renderReplies = arr => {
    if (arr.length && showReplies === true) {
      return arr.map((obj, index) => (
        <Row key={index}>
          <Col sm='12'>{renderMessage(obj)}</Col>
        </Row>
      ))
    }
  }

  // ** Handle show replies, go back, folder & read click functions
  const handleShowReplies = e => {
    e.preventDefault()
    setShowReplies(true)
  }

  const handleGoBack = () => {
    setOpenMail(false)
  }

  const handleFolderClick = (e, folder, id) => {
    handleFolderUpdate(e, folder, [id])
    handleGoBack()
  }

  const handleReadClick = () => {
    handleMailReadUpdate([mail.id], false)
    handleGoBack()
  }

  return (
    <div
      className={classnames('email-app-details', {
        show: openMail
      })}
    >
      {mail !== null && mail !== undefined ? (
        <Fragment>
          <div className='email-detail-header'>
            <div className='email-header-left d-flex align-items-center'>
              <span className='go-back mr-1' onClick={handleGoBack}>
                <ChevronLeft size={20} />
              </span>
              <h4 className='email-subject mb-0'>{mail.subject}</h4>
            </div>
            <div className='email-header-right ml-2 pl-1'>
              <ul className='list-inline m-0'>
                <li className='list-inline-item mr-1'>
                  <span
                    className='action-icon favorite'
                    onClick={() => dispatch(updateMails([mail.id], { isStarred: !mail.isStarred }))}
                  >
                    <Star
                      size={18}
                      className={classnames({
                        'text-warning fill-current': mail.isStarred
                      })}
                    />
                  </span>
                </li>
                <li className='list-inline-item mr-1'>
                  <UncontrolledDropdown>
                    <DropdownToggle tag='span'>
                      <Folder size={18} />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem
                        tag='a'
                        href='/'
                        onClick={e => handleFolderClick(e, 'draft', mail.id)}
                        className='d-flex align-items-center'
                      >
                        <Edit2 className='mr-50' size={18} />
                        <span>Draft</span>
                      </DropdownItem>
                      <DropdownItem
                        tag='a'
                        href='/'
                        onClick={e => handleFolderClick(e, 'spam', mail.id)}
                        className='d-flex align-items-center'
                      >
                        <Info className='mr-50' size={18} />
                        <span>Spam</span>
                      </DropdownItem>
                      <DropdownItem
                        tag='a'
                        href='/'
                        onClick={e => handleFolderClick(e, 'trash', mail.id)}
                        className='d-flex align-items-center'
                      >
                        <Trash className='mr-50' size={18} />
                        <span>Trash</span>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </li>
                <li className='list-inline-item mr-1'>
                  <UncontrolledDropdown>
                    <DropdownToggle tag='span'>
                      <Tag size={18} />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem
                        tag='a'
                        href='/'
                        onClick={e => handleLabelsUpdate(e, 'personal', [mail.id])}
                        className='d-flex align-items-center'
                      >
                        <span className='bullet bullet-success bullet-sm mr-50' />
                        <span>Personal</span>
                      </DropdownItem>
                      <DropdownItem
                        tag='a'
                        href='/'
                        onClick={e => handleLabelsUpdate(e, 'company', [mail.id])}
                        className='d-flex align-items-center'
                      >
                        <span className='bullet bullet-primary bullet-sm mr-50' />
                        <span>Company</span>
                      </DropdownItem>
                      <DropdownItem
                        tag='a'
                        href='/'
                        onClick={e => handleLabelsUpdate(e, 'important', [mail.id])}
                        className='d-flex align-items-center'
                      >
                        <span className='bullet bullet-warning bullet-sm mr-50' />
                        <span>Important</span>
                      </DropdownItem>
                      <DropdownItem
                        tag='a'
                        href='/'
                        onClick={e => handleLabelsUpdate(e, 'private', [mail.id])}
                        className='d-flex align-items-center'
                      >
                        <span className='bullet bullet-danger bullet-sm mr-50' />
                        <span>Private</span>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </li>
                <li className='list-inline-item mr-1'>
                  <span className='action-icon' onClick={handleReadClick}>
                    <Mail size={18} />
                  </span>
                </li>
                <li className='list-inline-item mr-1'>
                  <span
                    className='action-icon'
                    onClick={() => {
                      handleMailToTrash([mail.id])
                      handleGoBack()
                    }}
                  >
                    <Trash size={18} />
                  </span>
                </li>
                <li className='list-inline-item email-prev'>
                  <span
                    className={classnames({
                      'action-icon': mail.hasPreviousMail
                    })}
                    onClick={() => (mail.hasPreviousMail ? dispatch(paginateMail('next', mail.id)) : null)}
                  >
                    <ChevronLeft
                      size={18}
                      className={classnames({
                        'text-muted': !mail.hasPreviousMail
                      })}
                    />
                  </span>
                </li>
                <li className='list-inline-item email-next'>
                  <span
                    className={classnames({
                      'action-icon': mail.hasNextMail
                    })}
                    onClick={() => (mail.hasNextMail ? dispatch(paginateMail('previous', mail.id)) : null)}
                  >
                    <ChevronRight
                      size={18}
                      className={classnames({
                        'text-muted': !mail.hasNextMail
                      })}
                    />
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <PerfectScrollbar className='email-scroll-area' options={{ wheelPropagation: false }}>
            <Row>
              <Col sm='12'>
                <div className='email-label'>{renderLabels(mail.labels)}</div>
              </Col>
            </Row>
            {mail.replies && mail.replies.length ? (
              <Fragment>
                {showReplies === false ? (
                  <Row className='mb-1'>
                    <Col sm='12'>
                      <a className='font-weight-bold' href='/' onClick={handleShowReplies}>
                        View {mail.replies.length} Earlier Messages
                      </a>
                    </Col>
                  </Row>
                ) : null}

                {renderReplies(mail.replies)}
              </Fragment>
            ) : null}
            <Row>
              <Col sm='12'>{renderMessage(mail)}</Col>
            </Row>
            <Row>
              <Col sm='12'>
                <Card>
                  <CardBody>
                    <h5 className='mb-0'>
                      Click here to{' '}
                      <a href='/' onClick={e => e.preventDefault()}>
                        Reply
                      </a>{' '}
                      or{' '}
                      <a href='/' onClick={e => e.preventDefault()}>
                        Forward
                      </a>
                    </h5>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </PerfectScrollbar>
        </Fragment>
      ) : null}
    </div>
  )
}

export default MailDetails
