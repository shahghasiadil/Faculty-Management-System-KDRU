// ** React Imports
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// ** Store & Actions
import { getStudent } from '../../store/action'
import { useSelector, useDispatch } from 'react-redux'

// ** Third Party Components
import { User, Info, Share2 } from 'react-feather'
import { Card, CardBody, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, Alert } from 'reactstrap'
import CardActions from './moreInfo'
// ** Styles
import '@styles/react/apps/app-users.scss'

const StudentEdit = () => {
  // ** States & Vars
  const [activeTab, setActiveTab] = useState('1')
  const store = useSelector(state => state.students)
  const dispatch = useDispatch()
  const { id } = useParams()

  console.log(store)

  // ** Function to toggle tabs
  const toggle = tab => setActiveTab(tab)

  // ** Function to get student on mount
  useEffect(() => {
    dispatch(getStudent(parseInt(id)))
  }, [dispatch])

  return store.selectedStudent !== null && store.selectedStudent !== undefined ? (
    <Row className='app-user-edit'>
      <Col sm='12'>
        <Card>
          <CardBody className='pt-2'>
            <TabContent activeTab={activeTab}>
              <TabPane tabId='1'>
                <CardActions selectedStudent={store.selectedStudent} />
              </TabPane>

            </TabContent>
          </CardBody>
        </Card>
      </Col>
    </Row>
  ) : (
    <Alert color='danger'>
      <h4 className='alert-heading'>Student not found</h4>
      <div className='alert-body'>
        Student with id: {id} doesn't exist
      </div>
    </Alert>
  )
}
export default StudentEdit
