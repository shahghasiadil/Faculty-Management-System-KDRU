import { Fragment, useEffect } from 'react'
import { Row, Col, CardBody, CardText } from 'reactstrap'
import prism from 'prismjs'
import TableBasic from './TableBasic'
import TableDark from './TableDark'
import TableTheadDark from './TableTheadDark'
import TableTheadLight from './TableTheadLight'
import TableStriped from './TableStriped'
import TableStripedDark from './TableStripedDark'
import TableBordered from './TableBordered'
import TableBorderless from './TableBorderless'
import TableHover from './TableHover'
import TableSmall from './TableSmall'
import TableContextual from './TableContextual'
import TableResponsive from './TableResponsive'
import TableHoverAnimation from './TableHoverAnimation'
import Breadcrumbs from '@components/breadcrumbs'
import Card from '@components/card-snippet'
import {
  tableBasic,
  tableDark,
  tableTheadOptions,
  tableStriped,
  tableStripedDark,
  tableBordered,
  tableBorderless,
  tableContextual,
  tableHover,
  tableSmall,
  tableHoverAnimation,
  tableResponsive
} from './TableSourceCode'

const Tables = () => {
  useEffect(() => {
    prism.highlightAll()
  })

  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Reactstrap Tables' breadCrumbParent='Forms & Tables' breadCrumbActive='Tables' />
      <Row>
        <Col sm='12'>
          <Card title='Basic' code={tableBasic} noBody>
            <TableBasic />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Dark' code={tableDark} noBody>
            <CardBody>
              <CardText>
                Use prop <code>dark</code> to create a dark inverted table.
              </CardText>
            </CardBody>
            <TableDark />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Table head Options' code={tableTheadOptions} noBody>
            <CardBody>
              <CardText>
                Similar to tables and dark tables, use the modifier classes <code>.thead-dark</code>
                to make <code>&lt;thead&gt;</code> appear dark.
              </CardText>
            </CardBody>
            <TableTheadDark />
            <CardBody className='mt-2'>
              <p className='m-0'>
                Use the modifier class <code>.thead-light</code> to make
                <code>&lt;thead&gt;</code>s appear light.
              </p>
            </CardBody>
            <TableTheadLight />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Striped' code={tableStriped} noBody>
            <CardBody>
              <CardText>
                Use prop <code>striped</code> to create a striped table.
              </CardText>
            </CardBody>
            <TableStriped />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Striped Dark' code={tableStripedDark} noBody>
            <CardBody>
              <CardText>
                Use props <code>striped</code> & <code>dark</code> to create a dark striped table.
              </CardText>
            </CardBody>
            <TableStripedDark />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Bordered' code={tableBordered} noBody>
            <CardBody>
              <CardText>
                Use prop <code>bordered</code> to create a bordered table.
              </CardText>
            </CardBody>
            <TableBordered />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Borderless' code={tableBorderless} noBody>
            <CardBody>
              <CardText>
                Use prop <code>borderless</code> to create a borderless table.
              </CardText>
            </CardBody>
            <TableBorderless />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Hoverable' code={tableHover} noBody>
            <CardBody>
              <CardText>
                Use prop <code>hover</code> to create a hoverable table.
              </CardText>
            </CardBody>
            <TableHover />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Small' code={tableSmall} noBody>
            <CardBody>
              <CardText>
                Use prop <code>size="sm"</code> to create a small table.
              </CardText>
            </CardBody>
            <TableSmall />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Contextual classes' code={tableContextual} noBody>
            <CardBody>
              <CardText>
                Use class <code>table-[colorName]</code> with <code>&lt;tr&gt;</code> for contextual rows.
              </CardText>
            </CardBody>
            <TableContextual />
          </Card>
        </Col>
        <Col className='my-2' sm='12'>
          <h5 className='mb-1'>Table without card</h5>
          <TableBasic />
        </Col>
        <Col sm='12'>
          <Card title='Responsive' code={tableResponsive} noBody>
            <CardBody>
              <CardText>
                Use prop <code>responsive</code> to make your table responsive.
              </CardText>
            </CardBody>
            <TableResponsive />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Table Hover Animation' code={tableHoverAnimation} noBody>
            <CardBody>
              <CardText>
                Use class <code>table-hover-animation</code> for Table Hover Animation.
              </CardText>
            </CardBody>
            <TableHoverAnimation />
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Tables
