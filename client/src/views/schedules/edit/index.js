// ** React Imports
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// ** Student Edit Components
import SchedualEditView from './Edit'


// ** Store & Actions
import { getSchedule } from '../store/action'
import { useSelector, useDispatch } from 'react-redux'

// ** Third Party Components
import { User, Info, Share2 } from 'react-feather'
import { Card, CardBody, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, Alert } from 'reactstrap'

// ** Styles
import '@styles/react/apps/app-users.scss'

const SchedualeEdit = () => {
  // ** States & Vars
  const [activeTab, setActiveTab] = useState('1'),

    store = useSelector(state => state.Schedules),

    dispatch = useDispatch(),
    { id } = useParams()
   console.log(store.selectedSchedule)
  // ** Function to toggle tabs
  const toggle = tab => setActiveTab(tab)

  // ** Function to get student on mount
  useEffect(() => {
    dispatch(getSchedule(parseInt(id)))
  }, [dispatch])

  return store.selectedSchedule !== null && store.selectedSchedule !== undefined ? (
    <Row className='app-user-edit'>
      <Col sm='12'>
        <Card>
          <CardBody className='pt-2'>
            <Nav pills>
              <NavItem>
                <NavLink active={activeTab === '1'} onClick={() => toggle('1')}>
                  <User size={14} />
                  <span className='align-middle d-none d-sm-block'>Schedules</span>
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId='1'>
                <SchedualEditView selectedSchedule={store.selectedSchedule} />
              </TabPane>

            </TabContent>
          </CardBody>
        </Card>
      </Col>
    </Row>
  ) : (
    <Alert color='danger'>
      <h4 className='alert-heading'>Schedule not found</h4>
      <div className='alert-body'>
        Schedule with id: {id} doesn't exist
      </div>
    </Alert>
  )
}
export default SchedualeEdit
