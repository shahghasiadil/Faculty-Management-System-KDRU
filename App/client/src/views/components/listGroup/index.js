import { Fragment, useEffect } from 'react'
import Prism from 'prismjs'
import { Row, Col, CardText } from 'reactstrap'
import BreadCrumbs from '@components/breadcrumbs'
import Card from '@components/card-snippet'
import ListGroupSimple from './ListGroupSimple'
import ListGroupDisabled from './ListGroupDisabled'
import ListGroupIcons from './ListGroupIcons'
import ListGroupBadges from './ListGroupBadges'
import ListGroupTags from './ListGroupTag'
import ListGroupContextual from './ListGroupContextual'
import ListGroupCustom from './ListGroupCustom'
import ListGroupFlush from './ListGroupFlush'
import ListGroupHorizontal from './ListGroupHorizontal'
import ListGroupNavigation from './ListGroupNavigation'
import {
  listGroupSimple,
  listGroupBadges,
  listGroupContextual,
  listGroupCustom,
  listGroupDisabled,
  listGroupFlush,
  listGroupHorizontal,
  listGroupIcons,
  listGroupNavigation,
  listGroupTag
} from './ListGroupSourceCode'
const ListGroup = () => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <Fragment>
      <BreadCrumbs breadCrumbTitle='List Group' breadCrumbParent='Components' breadCrumbActive='List Group' />
      <Row className='match-height'>
        <Col lg='6' md='12'>
          <Card title='Simple List Group' code={listGroupSimple}>
            <CardText>
              The most basic list group is simply an unordered list with list items, and the proper tags.
            </CardText>
            <ListGroupSimple />
          </Card>
        </Col>
        <Col lg='6' md='12'>
          <Card title='Disabled Items' code={listGroupDisabled}>
            <CardText>
              Add <code>disabled</code> prop to a<code>list-group-item</code> to gray it out to appear disabled.
            </CardText>
            <ListGroupDisabled />
          </Card>
        </Col>
        <Col lg='6' md='12'>
          <Card title='Icons' code={listGroupIcons}>
            <CardText>Just add an icon before your content to create a list group with icons</CardText>
            <ListGroupIcons />
          </Card>
        </Col>
        <Col lg='6' md='12'>
          <Card title='Badges' code={listGroupBadges}>
            <CardText>
              Use Utility classes <code>.d-flex</code> & <code>.justify-content-between</code>
              to create space between badge and your content.
            </CardText>
            <ListGroupBadges />
          </Card>
        </Col>
        <Col lg='6' md='12'>
          <Card title='Tags List Group' code={listGroupTag}>
            <CardText>
              Use <code>tag</code> prop with <code>ListGroupItem</code> tag to change item's tag. You can use{' '}
              <code>active</code> prop with <code>ListGroupItem</code> tag to show an item as active. Use
              <code>action</code> prop to make your list actionable.
            </CardText>
            <ListGroupTags />
          </Card>
        </Col>
        <Col lg='6' md='12'>
          <Card title='Contextual List Group' code={listGroupContextual}>
            <CardText>
              Use <code>color</code> prop with <code>ListGroupItem</code> to create a contextual list.
            </CardText>
            <ListGroupContextual />
          </Card>
        </Col>
        <Col lg='6' md='12'>
          <Card title='Custom List Group' code={listGroupCustom}>
            <ListGroupCustom />
          </Card>
        </Col>
        <Col lg='6' md='12'>
          <Card title='Flush List Group' code={listGroupFlush}>
            <CardText>
              Use <code>flush</code> prop with <code>ListGroup</code> tag to create a flush list group.
            </CardText>
            <ListGroupFlush />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Horizontal List Group' code={listGroupHorizontal}>
            <CardText>
              Use class <code>.list-group-horizontal</code> to change the layout of list group items from vertical to
              horizontal across all breakpoints.choose a responsive variant code.{' '}
              <code>list-group-horizontal-[sm | md | lg | xl]</code> to make a list group horizontal starting at that
              breakpoint’s min-width.
            </CardText>
            <ListGroupHorizontal />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Navigation List Group' code={listGroupNavigation}>
            <ListGroupNavigation />
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default ListGroup
