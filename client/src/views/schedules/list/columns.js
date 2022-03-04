// ** React Imports
import { Link } from 'react-router-dom'

// ** Store & Actions
import { getSchedule, deleteSchedule, archiveSchedule } from '../store/action'
import { store } from '@store/storeConfig/store'

// ** Third Party Components
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { MoreVertical, Delete, Trash2, Archive } from 'react-feather'


export const columns = [
  {
    name: 'Week Day',
    minWidth: '250px',
    selector: 'week_days',
    sortable: true,
    cell: row => row.week_day?.day
  },
  {
    name: 'Subject',
    minWidth: '100px',
    selector: 'subject',
    sortable: true,
    cell: row => row.subject?.name
  },
  {
    name: 'Hour Count',
    minWidth: '250px',
    selector: 'hour_count',
    sortable: true,
    cell: row => row.hour_count
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
            onClick={() => store.dispatch(archiveSchedule(row.id))}
          >
            <Trash2 size={14} className='mr-50' />
            <span className='align-middle'>Archive</span>
          </DropdownItem>
          <DropdownItem
            tag={Link}
            to={`/views/schedules/edit/${row.id}`}
            className='w-100'
            onClick={() => store.dispatch(getSchedule(row.id))}
          >
            <Archive size={14} className='mr-50' />
            <span className='align-middle'>Edit</span>
          </DropdownItem>
          <DropdownItem className='w-100' onClick={() => store.dispatch(deleteSchedule(row.id))}>
            <Delete  size={14} className='mr-50' />
            <span className='align-middle'>Delete</span>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
]
