// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Blank Avatar Image Import
import blankAvatar from '@src/assets/images/avatars/avatar-blank.png'

// ** Third Party Components
import classnames from 'classnames'
import { ReactSortable } from 'react-sortablejs'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Menu, Search, MoreVertical } from 'react-feather'
import {
  Input,
  Badge,
  InputGroup,
  CustomInput,
  DropdownMenu,
  DropdownItem,
  InputGroupText,
  DropdownToggle,
  InputGroupAddon,
  UncontrolledDropdown
} from 'reactstrap'

const Tasks = props => {
  // ** Props
  const {
    query,
    tasks,
    params,
    setSort,
    dispatch,
    getTasks,
    setQuery,
    updateTask,
    selectTask,
    reOrderTasks,
    handleTaskSidebar,
    handleMainSidebar
  } = props

  // ** Function to selectTask on click
  const handleTaskClick = obj => {
    dispatch(selectTask(obj))
    handleTaskSidebar()
  }

  // ** Returns avatar color based on task tag
  const resolveAvatarVariant = tags => {
    if (tags.includes('high')) return 'light-primary'
    if (tags.includes('medium')) return 'light-warning'
    if (tags.includes('low')) return 'light-success'
    if (tags.includes('update')) return 'light-danger'
    if (tags.includes('team')) return 'light-info'
    return 'light-primary'
  }

  // ** Renders task tags
  const renderTags = arr => {
    const badgeColor = {
      team: 'light-primary',
      low: 'light-success',
      medium: 'light-warning',
      high: 'light-danger',
      update: 'light-info'
    }

    return arr.map(item => (
      <Badge className='text-capitalize' key={item} color={badgeColor[item]} pill>
        {item}
      </Badge>
    ))
  }

  // ** Renders Avatar
  const renderAvatar = obj => {
    const item = obj.assignee

    if (item.avatar === undefined || item.avatar === null) {
      return <Avatar img={blankAvatar} imgHeight='32' imgWidth='32' />
    } else if (item.avatar !== '') {
      return <Avatar img={item.avatar} imgHeight='32' imgWidth='32' />
    } else {
      return <Avatar color={resolveAvatarVariant(obj.tags)} content={item.fullName} initials />
    }
  }

  const renderTasks = () => {
    return (
      <PerfectScrollbar
        className='list-group todo-task-list-wrapper'
        options={{ wheelPropagation: false }}
        containerRef={ref => {
          if (ref) {
            ref._getBoundingClientRect = ref.getBoundingClientRect

            ref.getBoundingClientRect = () => {
              const original = ref._getBoundingClientRect()

              return { ...original, height: Math.floor(original.height) }
            }
          }
        }}
      >
        {tasks.length ? (
          <ReactSortable
            tag='ul'
            list={tasks}
            handle='.drag-icon'
            className='todo-task-list media-list'
            setList={newState => dispatch(reOrderTasks(newState))}
          >
            {tasks.map(item => {
              return (
                <li
                  key={item.id}
                  onClick={() => handleTaskClick(item)}
                  className={classnames('todo-item', {
                    completed: item.isCompleted
                  })}
                >
                  <div className='todo-title-wrapper'>
                    <div className='todo-title-area'>
                      <MoreVertical className='drag-icon' />
                      <CustomInput
                        type='checkbox'
                        className='custom-control-Primary'
                        id={item.title}
                        label=''
                        onChange={e => dispatch(updateTask({ ...item, isCompleted: e.target.checked }))}
                        checked={item.isCompleted}
                      />
                      <span className='todo-title'>{item.title}</span>
                    </div>
                    <div className='todo-item-action mt-lg-0 mt-50'>
                      {item.tags.length ? <div className='badge-wrapper mr-1'>{renderTags(item.tags)}</div> : null}
                      {item.dueDate ? (
                        <small className='text-nowrap text-muted mr-1'>
                          {new Date(item.dueDate).toLocaleString('default', { month: 'short' })}{' '}
                          {new Date(item.dueDate).getDate().toString().padStart(2, '0')}
                        </small>
                      ) : null}
                      {item.assignee ? renderAvatar(item) : null}
                    </div>
                  </div>
                </li>
              )
            })}
          </ReactSortable>
        ) : (
          <div className='no-results show'>
            <h5>No Items Found</h5>
          </div>
        )}
      </PerfectScrollbar>
    )
  }

  // ** Function to getTasks based on search query
  const handleFilter = e => {
    setQuery(e.target.value)
    dispatch(getTasks(params))
  }

  // ** Function to getTasks based on sort
  const handleSort = (e, val) => {
    e.preventDefault()
    setSort(val)
    dispatch(getTasks({ ...params }))
  }

  return (
    <div className='todo-app-list'>
      <div className='app-fixed-search d-flex align-items-center'>
        <div className='sidebar-toggle cursor-pointer d-block d-lg-none ml-1' onClick={handleMainSidebar}>
          <Menu size={21} />
        </div>
        <div className='d-flex align-content-center justify-content-between w-100'>
          <InputGroup className='input-group-merge'>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Search className='text-muted' size={14} />
              </InputGroupText>
            </InputGroupAddon>
            <Input placeholder='Search task' value={query} onChange={handleFilter} />
          </InputGroup>
        </div>
        <UncontrolledDropdown>
          <DropdownToggle className='hide-arrow mr-1' tag='a' href='/' onClick={e => e.preventDefault()}>
            <MoreVertical className='text-body' size={16} />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem tag={Link} to='/' onClick={e => handleSort(e, 'title-asc')}>
              Sort A-Z
            </DropdownItem>
            <DropdownItem tag={Link} to='/' onClick={e => handleSort(e, 'title-desc')}>
              Sort Z-A
            </DropdownItem>
            <DropdownItem tag={Link} to='/' onClick={e => handleSort(e, 'assignee')}>
              Sort Assignee
            </DropdownItem>
            <DropdownItem tag={Link} to='/' onClick={e => handleSort(e, 'due-date')}>
              Sort Due Date
            </DropdownItem>
            <DropdownItem tag={Link} to='/' onClick={e => handleSort(e, '')}>
              Reset Sort
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
      {renderTasks()}
    </div>
  )
}

export default Tasks
