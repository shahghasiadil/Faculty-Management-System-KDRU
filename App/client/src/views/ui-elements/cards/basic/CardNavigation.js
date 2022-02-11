import { Fragment, useState } from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardText,
  Row,
  Col,
  Button,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

const CardNavigation = () => {
  const [activePill, setPillActive] = useState('1')
  const [activeTab, setTabActive] = useState('1')

  const togglePills = tab => {
    if (activePill !== tab) {
      setPillActive(tab)
    }
  }

  const toggleTabs = tab => {
    if (activeTab !== tab) {
      setTabActive(tab)
    }
  }
  return (
    <Fragment>
      <h5 className='mt-3 mb-2'>Navigation</h5>
      <Row>
        <Col md='6'>
          <Card className='text-center'>
            <CardHeader>
              <Nav pills>
                <NavItem>
                  <NavLink
                    active={activePill === '1'}
                    onClick={() => {
                      togglePills('1')
                    }}
                  >
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    active={activePill === '2'}
                    onClick={() => {
                      togglePills('2')
                    }}
                  >
                    Profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink disabled>Disabled</NavLink>
                </NavItem>
              </Nav>
            </CardHeader>
            <CardBody>
              <TabContent activeTab={activePill}>
                <TabPane tabId='1'>
                  <CardTitle tag='h4'>Special title treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button.Ripple color='primary' outline>
                    Go somewhere
                  </Button.Ripple>
                </TabPane>
                <TabPane tabId='2'>
                  <CardTitle tag='h4'>Special title </CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button.Ripple color='primary' outline>
                    Go somewhere
                  </Button.Ripple>
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Col>
        <Col md='6'>
          <Card className='text-center'>
            <CardHeader>
              <Nav tabs>
                <NavItem>
                  <NavLink
                    active={activeTab === '1'}
                    onClick={() => {
                      toggleTabs('1')
                    }}
                  >
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    active={activeTab === '2'}
                    onClick={() => {
                      toggleTabs('2')
                    }}
                  >
                    Profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink disabled>Disabled</NavLink>
                </NavItem>
              </Nav>
            </CardHeader>
            <CardBody>
              <TabContent activeTab={activeTab}>
                <TabPane tabId='1'>
                  <CardTitle tag='h4'>Special title treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button.Ripple color='primary' outline>
                    Go somewhere
                  </Button.Ripple>
                </TabPane>
                <TabPane tabId='2'>
                  <CardTitle tag='h4'>Special title </CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button.Ripple color='primary' outline>
                    Go somewhere
                  </Button.Ripple>
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default CardNavigation
