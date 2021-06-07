import { Fragment, useEffect } from 'react'
import Prism from 'prismjs'
import { Row, Col } from 'reactstrap'
import BreadCrumbs from '@components/breadcrumbs'
import Card from '@components/card-snippet'
import PillsBasic from './PillsBasic'
import PillsFilled from './PillsFilled'
import PillsJustified from './PillsJustified'
import PillsCentered from './PillsCentered'
import PillsEnd from './PillsEnd'
import PillsVertical from './PillsVertical'
import PillThemes from './PillThemes'
import {
  pillBasic,
  pillsCentered,
  pillsEnd,
  pillsFilled,
  pillsJustified,
  pillsVertical,
  pillThemes
} from './TabPillsSourceCode'

const PillTabs = () => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <Fragment>
      <BreadCrumbs breadCrumbTitle='Pills' breadCrumbParent='Components' breadCrumbActive='Pills' />
      <Row className='match-height'>
        <Col xl='6' lg='12'>
          <Card title='Basic' code={pillBasic}>
            <PillsBasic />
          </Card>
        </Col>
        <Col xl='6' lg='12'>
          <Card title='Vertical Stacked' code={pillsVertical}>
            <PillsVertical />
          </Card>
        </Col>
        <Col xl='6' lg='12'>
          <Card title='Filled' code={pillsFilled}>
            <PillsFilled />
          </Card>
        </Col>
        <Col xl='6' lg='12'>
          <Card title='Justified' code={pillsJustified}>
            <PillsJustified />
          </Card>
        </Col>
        <Col xl='6' lg='12'>
          <Card title='Centered' code={pillsCentered}>
            <PillsCentered />
          </Card>
        </Col>
        <Col xl='6' lg='12'>
          <Card title='End' code={pillsEnd}>
            <PillsEnd />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Themes' code={pillThemes}>
            <PillThemes />
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}
export default PillTabs
