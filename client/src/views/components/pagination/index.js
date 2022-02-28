import { Fragment, useEffect } from 'react'
import Prism from 'prismjs'
import { Row, Col, CardText } from 'reactstrap'
import BreadCrumbs from '@components/breadcrumbs'
import Card from '@components/card-snippet'
import PaginationBasic from './PaginationBasic'
import PaginationSeparated from './PaginationSeparated'
import PaginationIconText from './PaginationIconsAndText'
import PaginationIcon from './PaginationIcons'
import PaginationSuccess from './PaginationSuccess'
import PaginationDanger from './PaginationDanger'
import PaginationInfo from './PaginationInfo'
import PaginationWarning from './PaginationWarning'
import PaginationPositions from './PaginationPositions'
import PaginationSizes from './PaginationSizes'
import {
  paginationBasic,
  paginationSeparated,
  paginationIconsAndText,
  paginationIcons,
  paginationDanger,
  paginationInfo,
  paginationSuccess,
  paginationWarning,
  paginationPositions,
  paginationSizes
} from './PaginationSourceCode'

const Pagination = () => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <Fragment>
      <BreadCrumbs breadCrumbTitle='Pagination' breadCrumbParent='Components' breadCrumbActive='Pagination' />
      <Row className='match-height'>
        <Col md='6' sm='12'>
          <Card title='Basic Pagination' code={paginationBasic}>
            <CardText>A basic pagination with active item.</CardText>
            <PaginationBasic />
          </Card>
        </Col>
        <Col md='6' sm='12'>
          <Card title='Separated Pagination' code={paginationSeparated}>
            <CardText>
              To create separated pagination use <code>.prev-item</code> class for the first item and{' '}
              <code>.next-item</code> for the last item.
            </CardText>
            <PaginationSeparated />
          </Card>
        </Col>
        <Col md='6' sm='12'>
          <Card title='With Icon & Text' code={paginationIconsAndText}>
            <CardText>Pagination with icon and text.</CardText>
            <PaginationIconText />
          </Card>
        </Col>
        <Col md='6' sm='12'>
          <Card title='Icons Only' code={paginationIcons}>
            <CardText>Pagination with only icons.</CardText>
            <PaginationIcon />
          </Card>
        </Col>
        <Col md='6' sm='12'>
          <Card title='Success' code={paginationSuccess}>
            <CardText>
              Use class <code>.pagination-success</code> with
              <code>pagination</code> tag.
            </CardText>
            <PaginationSuccess />
          </Card>
        </Col>
        <Col md='6' sm='12'>
          <Card title='Danger' code={paginationDanger}>
            <CardText>
              Use class <code>.pagination-danger</code> with
              <code>pagination</code> tag.
            </CardText>
            <PaginationDanger />
          </Card>
        </Col>
        <Col md='6' sm='12'>
          <Card title='Info' code={paginationInfo}>
            <CardText>
              Use class <code>.pagination-info</code> with
              <code>pagination</code> tag.
            </CardText>
            <PaginationInfo />
          </Card>
        </Col>
        <Col md='6' sm='12'>
          <Card title='Warning' code={paginationWarning}>
            <CardText>
              Use class <code>.pagination-warning</code> with
              <code>pagination</code> tag.
            </CardText>
            <PaginationWarning />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm='12'>
          <Card title='Positions' code={paginationPositions}>
            <CardText>
              Use classes <code>.justify-content-[direction]</code> with
              <code>pagination</code> tag.
            </CardText>
            <PaginationPositions />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Sizes' code={paginationSizes}>
            <CardText>
              Use prop <code>size="lg"</code> for large size pagination & use
              <code>size="sm"</code>
              for small size pagination.
            </CardText>
            <PaginationSizes />
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}
export default Pagination
