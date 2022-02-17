// ** React Imports
import { Link } from 'react-router-dom'


// ** Store & Actions
import { store } from '@store/storeConfig/store'

// ** Third Party Components
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { MoreVertical, Delete, Trash2, Archive } from 'react-feather'
import { deleteRegistration, getRegistration } from '../store/action'


export const columns = [
 
  {
    name: 'Student',
    minWidth: '250px',
    selector: ['student.name'],
    sortable: true,
    cell: row => row.student?.name
  },
  {
    name: 'Subject',
    minWidth: '250px',
    selector: ['subject.name'],
    sortable: true,
    cell: row => row.subject?.name
  },
  {
    name: 'Date',
    minWidth: '250px',
    selector: ['created_at'],
    sortable: true,
    cell: row => row.created_at
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
            tag={Link}
            to={`/views/registrations/edit/${row.id}`}
            className='w-100'
            onClick={() => store.dispatch(getRegistration(row.id))}
          >
            <Archive size={14} className='mr-50' />
            <span className='align-middle'>Edit</span>
          </DropdownItem>
          <DropdownItem className='w-100' onClick={() => store.dispatch(deleteRegistration(row.id))}>
            <Delete  size={14} className='mr-50' />
            <span className='align-middle'>Delete</span>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
]
