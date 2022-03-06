// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Project Sidebar
import Sidebar from './Sidebar'
import Avatar from '@components/avatar'
// ** Columns
import { columns } from './columns'

// ** Store & Actions
import { getAllData, restoreProject } from '../store/action'
import { useDispatch, useSelector } from 'react-redux'

// ** Third Party Components
import { ChevronDown, Check } from 'react-feather'
import DataTable from 'react-data-table-component'
import { Card, Input, Row, Col, Label, Button } from 'reactstrap'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
import { store } from '@store/storeConfig/store'

import SidebarUpdateProject from './edit'

// ** ErrorToast Component for Undo Records
export const ErrorToast = ({ id }) => (
    <Fragment>
        <div className='toastify-header'>
            <div className='title-wrapper'>
                <Avatar size='sm' color='success' icon={<Check size={12} />} />
                <h6 className='toast-title'>Success</h6>
            </div>
            <small className='text-muted'> 3 secondes Ago</small>
        </div>
        <div className='toastify-body alert-danger'>
            <span role='img' aria-label='toast-text'>
                Record deleted  <strong>Oops</strong> <Button.Ripple color='flat-info' onClick={() => { store.dispatch(restoreProject(id)) }}>Undo</Button.Ripple>
            </span>
        </div>
    </Fragment>
)

const ProjectsList = () => {
    // ** Store Vars
    const dispatch = useDispatch()
    const store = useSelector(state => state.projects)

    // ** States
    const [searchTerm, setSearchTerm] = useState('')
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [sidebarOpenEdit, setSidebarOpenEdit] = useState(false)

    // ** Function to toggle sidebar
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    }

    const openEditSidebar = () => {

        if (sidebarOpenEdit === true) {
            store.selectedProject = null
        }
        setSidebarOpenEdit(!sidebarOpenEdit)

    }
    // ** Get data on mount
    useEffect(() => {
        dispatch(getAllData())

        if (store.selectedProject !== null) {
            openEditSidebar()
        }
    }, [dispatch, store.data.length, store.selectedProject])

    const [data, setData] = useState([])
    useEffect(() => {
        if (store.allData.length !== 0) {
            const filteredData = store.allData?.filter(item => item.name?.toLowerCase().includes(searchTerm))
            setData(filteredData)
        }
    }, [store.allData.length, searchTerm])

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
                        <Button.Ripple color='primary' onClick={toggleSidebar}>
                            Add New Project
                        </Button.Ripple>
                    </Col>
                </Row>
                <DataTable
                    noHeader
                    pagination
                    responsive
                    columns={columns}
                    sortIcon={<ChevronDown />}
                    className='react-dataTable'
                    data={data}
                />
            </Card>
            <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />

            <SidebarUpdateProject open={sidebarOpenEdit} selectedProject={store.selectedProject} openEditSidebar={openEditSidebar} />
        </Fragment>
    )
}

export default ProjectsList
