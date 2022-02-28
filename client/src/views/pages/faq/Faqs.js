import { useState } from 'react'
import * as Icon from 'react-feather'
import AppCollapse from '@components/app-collapse'
import illustration from '@src/assets/images/illustration/faq-illustrations.svg'
import { Nav, NavItem, NavLink, Row, Col, TabContent, TabPane } from 'reactstrap'

const Faqs = ({ data }) => {
  const dataToRender = []

  const [activeTab, setActiveTab] = useState('Payment')

  const toggleTab = tab => setActiveTab(tab)

  Object.entries(data).forEach(([key, val]) => {
    dataToRender.push(val)
  })

  const renderTabs = () => {
    return dataToRender.map(item => {
      const IconTag = Icon[item.icon]
      return (
        <NavItem key={item.title} tag='li'>
          <NavLink active={activeTab === item.title} onClick={() => toggleTab(item.title)}>
            <IconTag size={18} className='mr-1' />
            <span className='font-weight-bold'>{item.title}</span>
          </NavLink>
        </NavItem>
      )
    })
  }

  const renderTabContent = () => {
    return dataToRender.map(item => {
      const IconTag = Icon[item.icon]

      return (
        <TabPane key={item.title} tabId={item.title}>
          <div className='d-flex align-items-center'>
            <div className='avatar avatar-tag bg-light-primary mr-1'>
              <IconTag size={20} />
            </div>
            <div>
              <h4 className='mb-0'>{item.title}</h4>
              <span>{item.subtitle}</span>
            </div>
          </div>
          <AppCollapse
            className='mt-2'
            type='margin'
            data={item.qandA}
            titleKey='question'
            contentKey='ans'
            accordion
            {...(item.title === 'Payment' ? { active: 1 } : {})}
          />
        </TabPane>
      )
    })
  }

  return (
    <div id='faq-tabs'>
      <Row>
        <Col lg='3' md='4' sm='12'>
          <div className='faq-navigation d-flex justify-content-between flex-column mb-2 mb-md-0'>
            <Nav tag='ul' className='nav-left' pills vertical>
              {renderTabs()}
            </Nav>
            <img
              className='img-fluid d-none d-md-block'
              src={illustration}
              alt='illustration'
              style={{
                transform: 'scaleX(1)'
              }}
            />
          </div>
        </Col>
        <Col lg='9' md='8' sm='12'>
          <TabContent activeTab={activeTab}>{renderTabContent()}</TabContent>
        </Col>
      </Row>
    </div>
  )
}

export default Faqs
