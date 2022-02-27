// ** React Imports
import { Link } from 'react-router-dom'


// ** Store & Actions
import { archiveSubject, getSubject, deleteSubject } from '../store/action'
import { store } from '@store/storeConfig/store'

// ** Third Party Components
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { MoreVertical, Delete, Trash2, Archive } from 'react-feather'


export const columns = [
  {
    name: 'Project',
    minWidth: '250px',
    selector: 'name',
    sortable: true,
    cell: row => row.name
  },
  {
    name: 'Code',
    minWidth: '250px',
    selector: 'name',
    sortable: true,
    cell: row => row.code
  },
  {
    name: 'Teacher',
    minWidth: '250px',
    selector: 'credit',
    sortable: true,
    cell: row => row.teacher
  },
  {
    name: 'Students',
    minWidth: '250px',
    selector: ['semester.name'],
    sortable: true,
    cell: row => row.semester?.name
  },

  {
    name: 'Actions',
    minWidth: '100px',
    cell: row => (
      <UncontrolledDropdown>
        <DropdownToggle tag='div' className='btn btn-sm'>
          <MoreVertical size={14} className='cursor-pointer' />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem
            className='w-100'
            onClick={() => store.dispatch(archiveProject(row.id))}
          >
            <Trash2 size={14} className='mr-50' />
            <span className='align-middle'>Archive</span>
          </DropdownItem>
          <DropdownItem
            tag={Link}
            to={`/views/project/edit/${row.id}`}
            className='w-100'
            onClick={() => store.dispatch(getProject(row.id))}
          >
            <Archive size={14} className='mr-50' />
            <span className='align-middle'>Edit</span>
          </DropdownItem>
          <DropdownItem className='w-100' onClick={() => store.dispatch(deleteProject(row.id))}>
            <Delete size={14} className='mr-50' />
            <span className='align-middle'>Delete</span>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
]
