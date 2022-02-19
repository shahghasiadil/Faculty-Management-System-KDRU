import { Fragment, useEffect } from 'react'
import { Row, Col, CardText } from 'reactstrap'
import Prism from 'prismjs'
import CollapseDefault from './CollapseDefault'
import Accordion from './Accordion'
import AccordionShadow from './AccordionShadow'
import AccordionBorder from './AccordionBorder'
import AccordionMargin from './AccordionMargin'
import AccordionHover from './AccordionHover'
import BreadCrumbs from '@components/breadcrumbs'
import Card from '@components/card-snippet'
import {
  defaultCollapse,
  accordion,
  accordionBorder,
  accordionHover,
  accordionMargin,
  accordionShadow
} from './CollapseSourceCode'

const Collapse = () => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <Fragment>
      <BreadCrumbs breadCrumbTitle='Collapse' breadCrumbParent='Components' breadCrumbActive='Collapse' />
      <Row>
        <Col sm='12'>
          <Card title='Collapse Default' code={defaultCollapse}>
            <CollapseDefault />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Accordion' code={accordion}>
            <CardText>
              You may want to open one item at a time for that you can use prop <code>accordion</code>.
            </CardText>
            <Accordion />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Accordion Shadow' code={accordionShadow}>
            <CardText>
              Use prop <code>type='shadow'</code> to create collapse/accordion with shadow.
            </CardText>
            <AccordionShadow />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Accordion Border' code={accordionBorder}>
            <CardText>
              Use prop <code>type='border'</code> to create collapse/accordion with border.
            </CardText>
            <AccordionBorder />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Accordion Margin' code={accordionMargin}>
            <CardText>
              Use prop <code>type='margin'</code> to create collapse/accordion with margin.
            </CardText>
            <AccordionMargin />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Accordion Hover' code={accordionHover}>
            <CardText>
              Use prop <code>toggle='hover'</code> to create hoverable collapse/accordion.
            </CardText>
            <AccordionHover />
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}
export default Collapse
