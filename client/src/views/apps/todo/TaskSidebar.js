// ** React Imports
import { useState, Fragment } from 'react'

// ** Third Party Components
import classnames from 'classnames'
import Flatpickr from 'react-flatpickr'
import { Editor } from 'react-draft-wysiwyg'
import { X, Star, Trash } from 'react-feather'
import Select, { components } from 'react-select'
import { EditorState, ContentState } from 'draft-js'
import { Modal, ModalBody, Button, Form, FormGroup, Input, Label, Media } from 'reactstrap'

// ** Utils
import { isObjEmpty, selectThemeColors } from '@utils'

// ** Assignee Avatars
import img1 from '@src/assets/images/portrait/small/avatar-s-3.jpg'
import img2 from '@src/assets/images/portrait/small/avatar-s-1.jpg'
import img3 from '@src/assets/images/portrait/small/avatar-s-4.jpg'
import img4 from '@src/assets/images/portrait/small/avatar-s-6.jpg'
import img5 from '@src/assets/images/portrait/small/avatar-s-2.jpg'
import img6 from '@src/assets/images/portrait/small/avatar-s-11.jpg'

// ** Styles Imports
import '@styles/react/libs/editor/editor.scss'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/flatpickr/flatpickr.scss'

// ** Function to capitalize the first letter of string
const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1)

// ** Modal Header
const ModalHeader = props => {
  // ** Props
  const {
    children,
    store,
    handleTaskSidebar,
    setDeleted,
    deleted,
    important,
    setImportant,
    deleteTask,
    dispatch
  } = props

  // ** Function to delete task
  const handleDeleteTask = () => {
    setDeleted(!deleted)
    dispatch(deleteTask(store.selectedTask.id))
    handleTaskSidebar()
  }

  return (
    <div className='modal-header d-flex align-items-center justify-content-between mb-1'>
      <h5 className='modal-title'>{children}</h5>
      <div className='todo-item-action d-flex align-items-center'>
        {store && !isObjEmpty(store.selectedTask) ? (
          <Trash className='cursor-pointer mt-25' size={16} onClick={() => handleDeleteTask()} />
        ) : null}
        <span className='todo-item-favorite cursor-pointer mx-75'>
          <Star
            size={16}
            onClick={() => setImportant(!important)}
            className={classnames({
              'text-warning': important === true
            })}
          />
        </span>
        <X className='font-weight-normal mt-25' size={16} onClick={handleTaskSidebar} />
      </div>
    </div>
  )
}

const TaskSidebar = props => {
  // ** Props
  const { open, handleTaskSidebar, store, dispatch, updateTask, selectTask, addTask, deleteTask } = props

  // ** Users
  const [title, setTitle] = useState(''),
    [assignee, setAssignee] = useState({ value: 'pheobe', label: 'Pheobe Buffay', img: img1 }),
    [tags, setTags] = useState([]),
    [desc, setDesc] = useState(EditorState.createEmpty()),
    [completed, setCompleted] = useState(false),
    [important, setImportant] = useState(false),
    [deleted, setDeleted] = useState(false),
    [dueDate, setDueDate] = useState(new Date())

  // ** Assignee Select Options
  const assigneeOptions = [
    { value: 'pheobe', label: 'Pheobe Buffay', img: img1 },
    { value: 'chandler', label: 'Chandler Bing', img: img2 },
    { value: 'ross', label: 'Ross Geller', img: img3 },
    { value: 'monica', label: 'Monica Geller', img: img4 },
    { value: 'joey', label: 'Joey Tribbiani', img: img5 },
    { value: 'Rachel', label: 'Rachel Green', img: img6 }
  ]

  // ** Tag Select Options
  const tagOptions = [
    { value: 'team', label: 'Team' },
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' },
    { value: 'update', label: 'Update' }
  ]

  // ** Custom Assignee Component
  const AssigneeComponent = ({ data, ...props }) => {
    return (
      <components.Option {...props}>
        <Media className='align-items-center'>
          <img className='d-block rounded-circle mr-50' src={data.img} height='26' width='26' alt={data.label} />
          <Media body>
            <p className='mb-0'>{data.label}</p>
          </Media>
        </Media>
      </components.Option>
    )
  }

  // ** Returns sidebar title
  const handleSidebarTitle = () => {
    if (store && !isObjEmpty(store.selectedTask)) {
      return (
        <Button.Ripple
          outline
          size='sm'
          onClick={() => setCompleted(!completed)}
          color={completed === true ? 'success' : 'secondary'}
        >
          {completed === true ? 'Completed' : 'Mark Complete'}
        </Button.Ripple>
      )
    } else {
      return 'Add Task'
    }
  }

  // ** Function to run when sidebar opens
  const handleSidebarOpened = () => {
    const { selectedTask } = store
    if (!isObjEmpty(selectedTask)) {
      setTitle(selectedTask.title)
      setCompleted(selectedTask.isCompleted)
      setImportant(selectedTask.isImportant)
      setAssignee([
        {
          value: selectedTask.assignee.fullName,
          label: selectedTask.assignee.fullName,
          img: selectedTask.assignee.avatar
        }
      ])
      setDueDate(selectedTask.dueDate)
      if (typeof selectedTask.description === 'string') {
        setDesc(EditorState.createWithContent(ContentState.createFromText(selectedTask.description)))
      } else {
        const obj = selectedTask.description._immutable.currentContent.blockMap
        const property = Object.keys(obj).map((val, key) => val)

        setDesc(EditorState.createWithContent(ContentState.createFromText(obj[property].text)))
      }

      if (selectedTask.tags.length) {
        const tags = []
        selectedTask.tags.map(tag => {
          tags.push({ value: tag, label: capitalize(tag) })
        })
        setTags(tags)
      }
    }
  }

  // ** Function to run when sidebar closes
  const handleSidebarClosed = () => {
    setTags([])
    setDesc('')
    setTitle('')
    setAssignee({ value: 'pheobe', label: 'Pheobe Buffay', img: img1 })
    setCompleted(false)
    setImportant(false)
    setDueDate(new Date())
    dispatch(selectTask({}))
  }

  // ** Function to reset fileds
  const handleResetFields = () => {
    setTitle(store.selectedTask.title)
    setDesc(store.selectedTask.description)
    setCompleted(store.selectedTask.isCompleted)
    setImportant(store.selectedTask.isImportant)
    setDeleted(store.selectedTask.isDeleted)
    setDueDate(store.selectedTask.dueDate)
    if (store.selectedTask.assignee.fullName !== assignee.label) {
      setAssignee({
        value: store.selectedTask.assignee.fullName,
        label: store.selectedTask.assignee.fullName,
        img: store.selectedTask.assignee.avatar
      })
    }
    if (store.selectedTask.tags.length) {
      const tags = []
      store.selectedTask.tags.map(tag => {
        tags.push({ value: tag, label: capitalize(tag) })
      })
      setTags(tags)
    }
  }

  // ** Renders Footer Buttons
  const renderFooterButtons = () => {
    const newTaskTag = []

    const doesInclude = !isObjEmpty(store.selectedTask) && assignee.label === store.selectedTask.assignee.fullName

    if (tags.length) {
      tags.map(tag => newTaskTag.push(tag.value))
    }

    const newAssignee = {
      fullName: assignee.label,
      avatar: assignee.img
    }
    const state = {
      title,
      dueDate,
      tags: newTaskTag,
      description: desc,
      isCompleted: completed,
      isDeleted: deleted,
      isImportant: important,
      assignee: doesInclude || assignee.label === undefined ? store.selectedTask.assignee : newAssignee
    }

    if (store && !isObjEmpty(store.selectedTask)) {
      return (
        <Fragment>
          <Button
            color='primary'
            disabled={!title.length}
            className='update-btn update-todo-item mr-1'
            onClick={() => {
              dispatch(updateTask({ ...state, id: store.selectedTask.id }))
              handleTaskSidebar()
            }}
          >
            Update
          </Button>
          <Button color='secondary' onClick={handleResetFields} outline>
            Reset
          </Button>
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <Button
            color='primary'
            disabled={!title.length}
            className='add-todo-item mr-1'
            onClick={() => {
              dispatch(addTask(state))
              handleTaskSidebar()
            }}
          >
            Add
          </Button>
          <Button color='secondary' onClick={handleTaskSidebar} outline>
            Cancel
          </Button>
        </Fragment>
      )
    }
  }

  return (
    <Modal
      isOpen={open}
      toggle={handleTaskSidebar}
      className='sidebar-lg'
      contentClassName='p-0'
      onOpened={handleSidebarOpened}
      onClosed={handleSidebarClosed}
      modalClassName='modal-slide-in sidebar-todo-modal'
    >
      <Form id='form-modal-todo' className='todo-modal' onSubmit={e => e.preventDefault()}>
        <ModalHeader
          store={store}
          deleted={deleted}
          dispatch={dispatch}
          important={important}
          deleteTask={deleteTask}
          setDeleted={setDeleted}
          setImportant={setImportant}
          handleTaskSidebar={handleTaskSidebar}
        >
          {handleSidebarTitle()}
        </ModalHeader>
        <ModalBody className='flex-grow-1 pb-sm-0 pb-3'>
          <FormGroup>
            <Label className='form-label' for='task-title'>
              Title <span className='text-danger'>*</span>
            </Label>
            <Input
              id='task-title'
              value={title}
              placeholder='Title'
              className='new-todo-item-title'
              onChange={e => setTitle(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label className='form-label' for='task-assignee'>
              Assignee
            </Label>
            <Select
              id='task-assignee'
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              options={assigneeOptions}
              theme={selectThemeColors}
              value={assignee}
              onChange={data => setAssignee(data)}
              components={{ Option: AssigneeComponent }}
            />
          </FormGroup>
          <FormGroup>
            <Label className='form-label' for='due-date'>
              Due Date
            </Label>
            <Flatpickr
              id='due-date'
              name='due-date'
              className='form-control'
              onChange={date => setDueDate(date[0])}
              value={dueDate}
              options={{ dateFormat: 'Y-m-d' }}
            />
          </FormGroup>
          <FormGroup>
            <Label className='form-label' for='task-tags'>
              Tags
            </Label>
            <Select
              isMulti
              id='task-tags'
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              options={tagOptions}
              theme={selectThemeColors}
              value={tags}
              onChange={data => {
                setTags(data !== null ? [...data] : [])
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label for='task-desc' className='form-label'>
              Description
            </Label>
            <Editor
              editorState={desc}
              editorClassName='rounded-0'
              toolbarClassName='rounded-0'
              wrapperClassName='toolbar-bottom'
              toolbar={{
                options: ['inline', 'textAlign'],
                inline: {
                  inDropdown: false,
                  options: ['bold', 'italic', 'underline']
                }
              }}
              onEditorStateChange={data => setDesc(data)}
            />
          </FormGroup>
          <FormGroup className='my-1'>{renderFooterButtons()}</FormGroup>
        </ModalBody>
      </Form>
    </Modal>
  )
}

export default TaskSidebar
