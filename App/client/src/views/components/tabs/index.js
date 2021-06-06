import { Fragment, useEffect } from 'react'
import Prism from 'prismjs'
import { Row, Col } from 'reactstrap'
import BreadCrumbs from '@components/breadcrumbs'
import Card from '@components/card-snippet'
import TabsBasic from './TabsBasic'
import TabsIcons from './TabsIcons'
import TabsVerticalLeft from './TabsVerticalLeft'
import TabsVerticalRight from './TabsVerticalRight'
import TabsFilled from './TabsFilled'
import TabsJustified from './TabsJustified'
import TabsCentered from './TabsCentered'
import TabsEnd from './TabsEnd'
import {
  tabsBasic,
  tabsCentered,
  tabsEnd,
  tabsFilled,
  tabsJustified,
  tabsVerticalLeft,
  tabsVerticalRight
} from './TabSourceCode'

const Tabs = () => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <Fragment>
      <BreadCrumbs breadCrumbTitle='Tabs' breadCrumbParent='Components' breadCrumbActive='Tabs' />
      <Row>
        <Col xl='6' lg='12'>
          <Card title='Basic Tabs' code={tabsBasic}>
            <TabsBasic />
          </Card>
        </Col>
        <Col xl='6' lg='12'>
          <Card title='Tabs with icons' code={tabsBasic}>
            <TabsIcons />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xl='6' lg='12'>
          <Card title='Vertical Left Tabs' code={tabsVerticalLeft}>
            <TabsVerticalLeft />
          </Card>
        </Col>
        <Col xl='6' lg='12'>
          <Card title='Vertical Right Tabs' code={tabsVerticalRight}>
            <TabsVerticalRight />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xl='6' lg='12'>
          <Card title='Filled' code={tabsFilled}>
            <TabsFilled />
          </Card>
        </Col>
        <Col xl='6' lg='12'>
          <Card title='Justified' code={tabsJustified}>
            <TabsJustified />
          </Card>
        </Col>
        <Col xl='6' lg='12'>
          <Card title='Centered' code={tabsCentered}>
            <TabsCentered />
          </Card>
        </Col>
        <Col xl='6' lg='12'>
          <Card title='End' code={tabsEnd}>
            <TabsEnd />
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}
export default Tabs
