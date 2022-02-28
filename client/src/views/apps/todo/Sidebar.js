// ** React Imports
import { Link } from 'react-router-dom'

// ** Third Party Components
import classnames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Button, ListGroup, ListGroupItem } from 'reactstrap'
import { Mail, Star, Check, Trash, Plus } from 'react-feather'

const TodoSidebar = props => {
  // ** Props
  const { handleTaskSidebar, setMainSidebar, mainSidebar, dispatch, getTasks, params } = props

  // ** Functions To Handle List Item Filter
  const handleFilter = filter => {
    dispatch(getTasks({ ...params, filter }))
  }

  const handleTag = tag => {
    dispatch(getTasks({ ...params, tag }))
  }

  // ** Functions To Active List Item
  const handleActiveItem = value => {
    if ((params.filter && params.filter === value) || (params.tag && params.tag === value)) {
      return true
    } else {
      return false
    }
  }

  // ** Functions To Handle Add Task Click
  const handleAddClick = () => {
    handleTaskSidebar()
    setMainSidebar()
  }

  return (
    <div
      className={classnames('sidebar-left', {
        show: mainSidebar === true
      })}
    >
      <div className='sidebar'>
        <div className='sidebar-content todo-sidebar'>
          <div className='todo-app-menu'>
            <div className='add-task'>
              <Button.Ripple color='primary' onClick={handleAddClick} block>
                Add Task
              </Button.Ripple>
            </div>
            <PerfectScrollbar className='sidebar-menu-list' options={{ wheelPropagation: false }}>
              <ListGroup tag='div' className='list-group-filters'>
                <ListGroupItem
                  action
                  tag={Link}
                  to={'/apps/todo/'}
                  active={params.filter === '' && params.tag === ''}
                  onClick={() => handleFilter('')}
                >
                  <Mail className='mr-75' size={18} />
                  <span className='align-middle'>My Tasks</span>
                </ListGroupItem>
                <ListGroupItem
                  tag={Link}
                  to={'/apps/todo/important'}
                  active={handleActiveItem('important')}
                  onClick={() => handleFilter('important')}
                  action
                >
                  <Star className='mr-75' size={18} />
                  <span className='align-middle'>Important</span>
                </ListGroupItem>
                <ListGroupItem
                  tag={Link}
                  to={'/apps/todo/completed'}
                  active={handleActiveItem('completed')}
                  onClick={() => handleFilter('completed')}
                  action
                >
                  <Check className='mr-75' size={18} />
                  <span className='align-middle'>Completed</span>
                </ListGroupItem>
                <ListGroupItem
                  tag={Link}
                  to={'/apps/todo/deleted'}
                  active={handleActiveItem('deleted')}
                  onClick={() => handleFilter('deleted')}
                  action
                >
                  <Trash className='mr-75' size={18} />
                  <span className='align-middle'>Deleted</span>
                </ListGroupItem>
              </ListGroup>
              <div className='mt-3 px-2 d-flex justify-content-between'>
                <h6 className='section-label mb-1'>Tags</h6>
                <Plus className='cursor-pointer' size={14} />
              </div>
              <ListGroup className='list-group-labels'>
                <ListGroupItem
                  active={handleActiveItem('team')}
                  className='d-flex align-items-center'
                  tag={Link}
                  to='/apps/todo/tag/team'
                  onClick={() => handleTag('team')}
                  action
                >
                  <span className='bullet bullet-sm bullet-primary mr-1'></span>
                  <span className='align-middle'>Team</span>
                </ListGroupItem>
                <ListGroupItem
                  active={handleActiveItem('low')}
                  className='d-flex align-items-center'
                  tag={Link}
                  to='/apps/todo/tag/low'
                  onClick={() => handleTag('low')}
                  action
                >
                  <span className='bullet bullet-sm bullet-success mr-1'></span>
                  <span className='align-middle'>Low</span>
                </ListGroupItem>
                <ListGroupItem
                  active={handleActiveItem('medium')}
                  className='d-flex align-items-center'
                  tag={Link}
                  to='/apps/todo/tag/medium'
                  onClick={() => handleTag('medium')}
                  action
                >
                  <span className='bullet bullet-sm bullet-warning mr-1'></span>
                  <span className='align-middle'>Medium</span>
                </ListGroupItem>
                <ListGroupItem
                  active={handleActiveItem('high')}
                  className='d-flex align-items-center'
                  tag={Link}
                  to='/apps/todo/tag/high'
                  onClick={() => handleTag('high')}
                  action
                >
                  <span className='bullet bullet-sm bullet-danger mr-1'></span>
                  <span className='align-middle'>High</span>
                </ListGroupItem>
                <ListGroupItem
                  active={handleActiveItem('update')}
                  className='d-flex align-items-center'
                  tag={Link}
                  to='/apps/todo/tag/update'
                  onClick={() => handleTag('update')}
                  action
                >
                  <span className='bullet bullet-sm bullet-info mr-1'></span>
                  <span className='align-middle'>Update</span>
                </ListGroupItem>
              </ListGroup>
            </PerfectScrollbar>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoSidebar
