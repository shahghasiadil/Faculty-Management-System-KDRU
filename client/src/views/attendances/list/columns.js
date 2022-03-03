// ** React Imports
import { Link } from 'react-router-dom'


// ** Store & Actions
import { archiveAttendance, getAttendance, deleteAttendance } from '../store/action'
import { store } from '@store/storeConfig/store'

// ** Third Party Components
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { MoreVertical, Delete, Trash2, Archive } from 'react-feather'
export const columns = [
    {
        name: 'Student',
        minWidth: '250px',
        selector: 'name',
        sortable: true,
        cell: row => row.student.name
    },
    {
        name: 'Subject',
        minWidth: '250px',
        selector: 'name',
        sortable: true,
        cell: row => row.subject.name
    },
    {
        name: 'Present',
        minWidth: '250px',
        selector: 'credit',
        sortable: true,
        cell: row => row.present
    },
    {
        name: 'Absent',
        minWidth: '250px',
        selector: 'credit',
        sortable: true,
        cell: row => row.absent
    },
    {
        name: 'Leave',
        minWidth: '250px',
        selector: 'credit',
        sortable: true,
        cell: row => row.leave
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
                        onClick={() => store.dispatch(archiveAttendance(row.id))}
                    >
                        <Trash2 size={14} className='mr-50' />
                        <span className='align-middle'>Archive</span>
                    </DropdownItem>
                    <DropdownItem
                        tag={Link}
                        className='w-100'
                        onClick={() => store.dispatch(getAttendance(row.id))}
                    >
                        <Archive size={14} className='mr-50' />
                        <span className='align-middle'>Edit</span>
                    </DropdownItem>
                    <DropdownItem className='w-100' onClick={() => store.dispatch(deleteAttendance(row.id))}>
                        <Delete size={14} className='mr-50' />
                        <span className='align-middle'>Delete</span>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }
]
