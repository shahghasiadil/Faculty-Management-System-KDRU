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
    name: 'Name',
    minWidth: '250px',
    selector: 'name',
    sortable: true,
    cell: row => row.name
  },
  {
    name: 'Credit',
    minWidth: '250px',
    selector: 'credit',
    sortable: true,
    cell: row => row.credit
  },
  {
    name: 'Semester',
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
            onClick={() => store.dispatch(archiveSubject(row.id))}
          >
            <Trash2 size={14} className='mr-50' />
            <span className='align-middle'>Archive</span>
          </DropdownItem>
          <DropdownItem
            tag={Link}
            to={`/views/subject/edit/${row.id}`}
            className='w-100'
            onClick={() => store.dispatch(getSubject(row.id))}
          >
            <Archive size={14} className='mr-50' />
            <span className='align-middle'>Edit</span>
          </DropdownItem>
          <DropdownItem className='w-100' onClick={() => store.dispatch(deleteSubject(row.id))}>
            <Delete  size={14} className='mr-50' />
            <span className='align-middle'>Delete</span>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
]
