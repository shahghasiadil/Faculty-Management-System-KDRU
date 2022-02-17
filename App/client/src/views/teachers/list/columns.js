// ** React Imports
import { Link } from 'react-router-dom'


// ** Store & Actions
import { getTeacher, deleteTeacher, archiveTeacher } from '../store/action'
import { store } from '@store/storeConfig/store'

// ** Third Party Components
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { MoreVertical, Delete, Trash2, Archive } from 'react-feather'


export const columns = [
  {
    name: 'Name',
    minWidth: '200px',
    selector: 'name',
    sortable: true,
    cell: row => row.name
  },
  {
    name: 'Last Name',
    minWidth: '200px',
    selector: 'last_name',
    sortable: true,
    cell: row => row.last_name
  },
  {
    name: 'NID',
    minWidth: '100px',
    selector: 'national_id',
    sortable: true,
    cell: row => row.national_id
  },
  {
    name: 'Email',
    minWidth: '300px',
    selector: 'email',
    sortable: true,
    searchable:true,
    cell: row => row.user?.email
  },
  {
    name: 'Degree',
    minWidth: '100px',
    selector: 'degree',
    sortable: true,
    cell: row => row.degree
  },
  {
    name: 'Address',
    minWidth: '100px',
    selector: 'address',
    sortable: true,
    // searchable:true,
    cell: row => row.address?.city
  },
  {
    name: 'Bio',
    minWidth: '200px',
    selector: 'bio',
    sortable: true,
    cell: row => row.bio
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
            onClick={() => store.dispatch(archiveTeacher(row.id))}
          >
            <Trash2 size={14} className='mr-50' />
            <span className='align-middle'>Archive</span>
          </DropdownItem>
          <DropdownItem
            tag={Link}
            to={`/views/teachers/edit/${row.id}`}
            className='w-100'
            onClick={() => store.dispatch(getTeacher(row.id))}
          >
            <Archive size={14} className='mr-50' />
            <span className='align-middle'>Edit</span>
          </DropdownItem>
          <DropdownItem className='w-100' onClick={() => store.dispatch(deleteTeacher(row.id))}>
            <Delete  size={14} className='mr-50' />
            <span className='align-middle'>Delete</span>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
]
