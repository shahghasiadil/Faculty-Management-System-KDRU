// ** React Imports
import { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// ** FinalMark List Sidebar
import Sidebar from './Sidebar'
import Avatar from '@components/avatar'
// ** Columns
//import { columns } from './columns'

// ** Store & Actions
import { getAllData, getData, restoreMidTermMark, deleteMidTermMark, archiveMidTermMark } from '../store/action'
import { useDispatch, useSelector } from 'react-redux'

// ** Third Party Components
import { ChevronDown, Check, MoreVertical, Delete, Trash2, Archive } from 'react-feather'
import DataTable from 'react-data-table-component'
import { Card, Input, Row, Col, Label, CustomInput, Button, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
import { store } from '@store/storeConfig/store'

// ** ErrorToast Component for Undo Records
export const ErrorToast = ({ id }) => (
    <Fragment>
        <div className='toastify-header'>
            <div className='title-wrapper'>
                <Avatar size='sm' color='success' icon={<Check size={12} />} />
                <h6 className='toast-title'>Success</h6>
            </div>
            <small className='text-muted'>3 secondes Ago</small>
        </div>
        <div className='toastify-body alert-danger'>
            <span role='img' aria-label='toast-text'>
                Record deleted  <strong>Oops</strong> <Button.Ripple color='flat-info' onClick={() => { store.dispatch(restoreMidTermMark(id)) }}>Undo</Button.Ripple>
            </span>
        </div>
    </Fragment>
)

const MidTermMarksList = () => {

    // ** Store Vars
    const dispatch = useDispatch()
    const store = useSelector(state => state.midTermMarks)

    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [marksId, setMarksId] = useState('')
    const [searchTerm, setSearchTerm] = useState('')
    //const [data, setData] = useState([])

    // ** Get data on mount

    // ** Function to toggle sidebar
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    }

    const openSideBar = (id) => {
        setMarksId(id)
        toggleSidebar()
    }

    useEffect(() => {
        dispatch(getAllData())

    }, [dispatch, store.data.length])

    // ** Search filtering
    const [data, setData] = useState([])
    useEffect(() => {
        if (store.allData.length !== 0) {
            const filteredData = store.allData.filter(item => item.student.name.toLowerCase().includes(searchTerm))
            setData(filteredData)
        }
    }, [store.allData.length, searchTerm])


    const columns = [

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
                            onClick={() => dispatch(archiveMidTermMark(row.id))}
                        >
                            <Trash2 size={14} className='mr-50' />
                            <span className='align-middle'>Archive</span>
                        </DropdownItem>
                        <DropdownItem
                            tag={Link}
                            className='w-100'
                            //onClick={() => store.dispatch(getMidTermMark(row.id))}
                            onClick={() => openSideBar(row.id)}
                        >

                            <Archive size={14} className='mr-50' />
                            <span className='align-middle'>Edit</span>
                        </DropdownItem>
                        <DropdownItem className='w-100' onClick={() => dispatch(deleteMidTermMark(row.id))}>
                            <Delete size={14} className='mr-50' />
                            <span className='align-middle'>Delete</span>
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            )
        }
    ]

    return (
        <Fragment>
            <Card>
                <Row style={{ padding: '15px' }}>
                    <Col xl='6' className='d-flex align-items-center p-0'>
                    </Col>
                    <Col
                        xl='6'
                        className='d-flex align-items-sm-center justify-content-lg-end justify-content-start flex-lg-nowrap flex-wrap flex-sm-row flex-column pr-lg-1 p-0 mt-lg-0 mt-1'
                    >
                        <div className='d-flex align-items-center mb-sm-0 mb-1 mr-1'>
                            <Label className='mb-0' for='search-invoice'>
                                Search:
                            </Label>
                            <Input
                                id='search-invoice'
                                className='ml-50 w-100'
                                type='text'
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </Col>
                </Row>
                <DataTable
                    noHeader
                    pagination
                    responsive
                    columns={columns}
                    sortIcon={<ChevronDown />}
                    className="react-dataTable"
                    data={data}
                />
            </Card>
            <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} marksId={marksId} />

        </Fragment>
    )
}

export default MidTermMarksList
