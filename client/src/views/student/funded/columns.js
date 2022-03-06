// ** React Imports
import { Link } from 'react-router-dom'


// ** Store & Actions
import { getStudent, deleteStudent, archiveStudent } from '../store/action'
import { store } from '@store/storeConfig/store'

// ** Third Party Components
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { MoreVertical, Delete, Trash2, Archive, Info } from 'react-feather'


export const columns = [
    {
        name: 'Name',
        minWidth: '250px',
        selector: 'name',
        sortable: true,
        cell: row => row.student.name
    },
    {
        name: 'Last Name',
        minWidth: '250px',
        selector: 'last_name',
        sortable: true,
        cell: row => row.student.last_name
    },
    {
        name: 'Father Name',
        minWidth: '200px',
        selector: 'father_name',
        sortable: true,
        cell: row => row.student.father_name
    },
    {
        name: 'GF/Name',
        minWidth: '200px',
        selector: 'grand_father_name',
        sortable: true,
        cell: row => row.student.grand_father_name
    },
    {
        name: 'Roll No',
        minWidth: '200px',
        selector: 'roll_no',
        sortable: true,
        cell: row => row.student.roll_no
    },
    {
        name: 'Period',
        minWidth: '138px',
        selector: 'period',
        sortable: true,
        cell: row => row.student.period
    }
]
