// ** React Imports
import { Link } from 'react-router-dom'


// ** Store & Actions
import { getMidTermMark, deleteMidTermMark, archiveMidTermMark } from '../store/action'
import { store } from '@store/storeConfig/store'

// ** Third Party Components
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { MoreVertical, Delete, Trash2, Archive } from 'react-feather'


export const columns = [
  {
    name: 'STUDNET NID',
    minWidth: '250px',
    selector: ['student.national_id'],
    sortable: true,
    cell: row => row.student?.national_id
  },
  {
    name: 'STUDENT',
    minWidth: '250px',
    selector: ['student.name'],
    sortable: true,
    cell: row => row.student?.name
  },
  {
    name: 'SUBJECT',
    minWidth: '250px',
    selector: ['subject.name'],
    sortable: true,
    cell: row => row.subject?.name
  },
  {
    name: 'CREDITS',
    minWidth: '250px',
    selector: ['subject.credit'],
    sortable: true,
    cell: row => row.subject?.credit
  },
  {
    name: 'MID TERM MARKS',
    minWidth: '138px',
    selector: 'marks',
    sortable: true,
    cell: row => row.marks
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
            onClick={() => store.dispatch(archiveMidTermMark(row.id))}
          >
            <Trash2 size={14} className='mr-50' />
            <span className='align-middle'>Archive</span>
          </DropdownItem>
          <DropdownItem
            tag={Link}
            to={`/views/mid-term-mark/edit/${row.id}`}
            className='w-100'
            onClick={() => store.dispatch(getMidTermMark(row.id))}
          >
            <Archive size={14} className='mr-50' />
            <span className='align-middle'>Edit</span>
          </DropdownItem>
          <DropdownItem className='w-100' onClick={() => store.dispatch(deleteMidTermMark(row.id))}>
            <Delete  size={14} className='mr-50' />
            <span className='align-middle'>Delete</span>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
]
