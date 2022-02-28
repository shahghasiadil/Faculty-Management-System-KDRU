// ** React Imports
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// ** Student Edit Components
import StudentTab from './Edit'


// ** Store & Actions
import { getFinalMark } from '../store/action'
import { useSelector, useDispatch } from 'react-redux'

// ** Third Party Components
import { User, Info, Share2 } from 'react-feather'
import { Card, CardBody, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, Alert } from 'reactstrap'

// ** Styles
import '@styles/react/apps/app-users.scss'

const StudentEdit = () => {
  // ** States & Vars
  const [activeTab, setActiveTab] = useState('1'),
    store = useSelector(state => state.finalMarks),
    dispatch = useDispatch(),
    { id } = useParams()

  // ** Function to toggle tabs
  const toggle = tab => setActiveTab(tab)

  // ** Function to get student on mount
  useEffect(() => {
    dispatch(getFinalMark(parseInt(id)))
  }, [dispatch])

  return store.selectedFinalMark !== null && store.selectedFinalMark !== undefined ? (
    <Row className='app-user-edit'>
      <Col sm='12'>
        <Card>
          <CardBody className='pt-2'>
            <Nav pills>
              <NavItem>
                <NavLink active={activeTab === '1'} onClick={() => toggle('1')}>
                  <User size={14} />
                  <span className='align-middle d-none d-sm-block'>FinalMarks</span>
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId='1'>
                <StudentTab selectedFinalMark={store.selectedFinalMark} />
              </TabPane>

            </TabContent>
          </CardBody>
        </Card>
      </Col>
    </Row>
  ) : (
    <Alert color='danger'>
      <h4 className='alert-heading'>Final Mark Form not found</h4>
      <div className='alert-body'>
        FinalMark with id: {id} doesn't exist
      </div>
    </Alert>
  )
}
export default StudentEdit
