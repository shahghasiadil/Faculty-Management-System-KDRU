// ** Third Party Components
import classnames from 'classnames'
import { Link, useParams } from 'react-router-dom'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Mail, Send, Edit2, Star, Info, Trash } from 'react-feather'
import { Button, ListGroup, ListGroupItem, Badge } from 'reactstrap'

const Sidebar = props => {
  // ** Props
  const { store, sidebarOpen, toggleCompose, dispatch, getMails, resetSelectedMail, setSidebarOpen } = props

  // ** Vars
  const params = useParams()

  // ** Functions To Handle Folder, Label & Compose
  const handleFolder = folder => {
    dispatch(getMails({ ...store.params, folder }))
    dispatch(resetSelectedMail())
  }

  const handleLabel = label => {
    dispatch(getMails({ ...store.params, label }))
    dispatch(resetSelectedMail())
  }

  const handleComposeClick = () => {
    toggleCompose()
    setSidebarOpen(false)
  }

  // ** Functions To Active List Item
  const handleActiveItem = value => {
    if ((params.folder && params.folder === value) || (params.label && params.label === value)) {
      return true
    } else {
      return false
    }
  }

  return (
    <div
      className={classnames('sidebar-left', {
        show: sidebarOpen
      })}
    >
      <div className='sidebar'>
        <div className='sidebar-content email-app-sidebar'>
          <div className='email-app-menu'>
            <div className='form-group-compose text-center compose-btn'>
              <Button.Ripple className='compose-email' color='primary' block onClick={handleComposeClick}>
                Compose
              </Button.Ripple>
            </div>
            <PerfectScrollbar className='sidebar-menu-list' options={{ wheelPropagation: false }}>
              <ListGroup tag='div' className='list-group-messages'>
                <ListGroupItem
                  tag={Link}
                  to='/apps/email/inbox'
                  onClick={() => handleFolder('inbox')}
                  action
                  active={!Object.keys(params).length || handleActiveItem('inbox')}
                >
                  <Mail size={18} className='mr-75' />
                  <span className='align-middle'>Inbox</span>
                  {store.emailsMeta.inbox ? (
                    <Badge className='float-right' color='light-primary' pill>
                      {store.emailsMeta.inbox}
                    </Badge>
                  ) : null}
                </ListGroupItem>
                <ListGroupItem
                  tag={Link}
                  to='/apps/email/sent'
                  onClick={() => handleFolder('sent')}
                  action
                  active={handleActiveItem('sent')}
                >
                  <Send size={18} className='mr-75' />
                  <span className='align-middle'>Sent</span>
                </ListGroupItem>
                <ListGroupItem
                  tag={Link}
                  to='/apps/email/draft'
                  onClick={() => handleFolder('draft')}
                  action
                  active={handleActiveItem('draft')}
                >
                  <Edit2 size={18} className='mr-75' />
                  <span className='align-middle'>Draft</span>
                  {store.emailsMeta.draft ? (
                    <Badge className='float-right' color='light-warning' pill>
                      {store.emailsMeta.draft}
                    </Badge>
                  ) : null}
                </ListGroupItem>
                <ListGroupItem
                  tag={Link}
                  to='/apps/email/starred'
                  onClick={() => handleFolder('starred')}
                  action
                  active={handleActiveItem('starred')}
                >
                  <Star size={18} className='mr-75' />
                  <span className='align-middle'>Starred</span>
                </ListGroupItem>
                <ListGroupItem
                  tag={Link}
                  to='/apps/email/spam'
                  onClick={() => handleFolder('spam')}
                  action
                  active={handleActiveItem('spam')}
                >
                  <Info size={18} className='mr-75' />
                  <span className='align-middle'>Spam</span>
                  {store.emailsMeta.spam ? (
                    <Badge className='float-right' color='light-danger' pill>
                      {store.emailsMeta.spam}
                    </Badge>
                  ) : null}
                </ListGroupItem>
                <ListGroupItem
                  tag={Link}
                  to='/apps/email/trash'
                  onClick={() => handleFolder('trash')}
                  action
                  active={handleActiveItem('trash')}
                >
                  <Trash size={18} className='mr-75' />
                  <span className='align-middle'>Trash</span>
                </ListGroupItem>
              </ListGroup>
              <h6 className='section-label mt-3 mb-1 px-2'>Labels</h6>
              <ListGroup tag='div' className='list-group-labels'>
                <ListGroupItem
                  tag={Link}
                  to='/apps/email/label/personal'
                  onClick={() => handleLabel('personal')}
                  active={handleActiveItem('personal')}
                  action
                >
                  <span className='bullet bullet-sm bullet-success mr-1'></span>
                  Personal
                </ListGroupItem>
                <ListGroupItem
                  tag={Link}
                  to='/apps/email/label/company'
                  onClick={() => handleLabel('company')}
                  active={handleActiveItem('company')}
                  action
                >
                  <span className='bullet bullet-sm bullet-primary mr-1'></span>
                  Company
                </ListGroupItem>
                <ListGroupItem
                  tag={Link}
                  to='/apps/email/label/important'
                  onClick={() => handleLabel('important')}
                  active={handleActiveItem('important')}
                  action
                >
                  <span className='bullet bullet-sm bullet-warning mr-1'></span>
                  Important
                </ListGroupItem>
                <ListGroupItem
                  tag={Link}
                  to='/apps/email/label/private'
                  onClick={() => handleLabel('private')}
                  active={handleActiveItem('private')}
                  action
                >
                  <span className='bullet bullet-sm bullet-danger mr-1'></span>
                  Private
                </ListGroupItem>
              </ListGroup>
            </PerfectScrollbar>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
