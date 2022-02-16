// ** React Imports
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// ** Student Edit Components
import SubjectTab from './Edit'

import axios from 'axios'

// ** Store & Actions
import { getSubject } from '../store/action'
import { useSelector, useDispatch } from 'react-redux'

// ** Third Party Components
import { User } from 'react-feather'
import { Card, CardBody, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, Alert } from 'reactstrap'

// ** Styles
import '@styles/react/apps/app-users.scss'

const SubjectEdit = () => {
  // ** States & Vars
  const [activeTab, setActiveTab] = useState('1'),
    store = useSelector(state => state.subjects),
    dispatch = useDispatch(),
    { id } = useParams()

  // ** Function to toggle tabs
  const toggle = tab => setActiveTab(tab)
 
  // ** Function to get student on mount
  useEffect(() => {
    dispatch(getSubject(parseInt(id)))
  
  }, [dispatch])

  return store.selectedSubject !== null && store.selectedSubject !== undefined ? (
    <Row className='app-user-edit'>
      <Col sm='12'>
        <Card>
          <CardBody className='pt-2'>
            <Nav pills>
              <NavItem>
                <NavLink active={activeTab === '1'} onClick={() => toggle('1')}>
                  <User size={14} />
                  <span className='align-middle d-none d-sm-block'>Subjects</span>
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId='1'>
                <SubjectTab selectedSubject={store.selectedSubject}/>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </Col>
    </Row>
  ) : (
    <Alert color='danger'>
      <h4 className='alert-heading'>Subject not found</h4>
      <div className='alert-body'>
        Subject with id: {id} doesn't exist
      </div>
    </Alert>
  )
}
export default SubjectEdit
