import { Fragment, useEffect } from 'react'
import { Row, Col, CardText } from 'reactstrap'
import Prism from 'prismjs'
import BreadCrumbs from '@components/breadcrumbs'
import Card from '@components/card-snippet'
import NavBasic from './NavBasic'
import NavBorder from './NavBorder'
import NavCenter from './NavCenter'
import NavEnd from './NavEnd'
import NavVertical from './NavVertical'
import NavVerticalBorder from './NavVerticalBorder'
import NavSquareBorder from './NavSquareBorder'
import NavDivider from './NavDivider'
import {
  navBasic,
  navBorder,
  navCenter,
  navDivider,
  navEnd,
  navSquareBorder,
  navVertical,
  navVerticalBorder
} from './NavComponentSourceCode'

const NavComponent = () => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <Fragment>
      <BreadCrumbs breadCrumbTitle='Navs' breadCrumbParent='Components' breadCrumbActive='Navs' />
      <Row className='match-height'>
        <Col md='6' sm='12'>
          <Card title='Base Nav' code={navBasic}>
            <CardText>
              The base nav component provides a strong foundation for building all types of navigation components.
            </CardText>
            <NavBasic />
          </Card>
        </Col>
        <Col md='6' sm='12'>
          <Card title='With Border' code={navBorder}>
            <CardText>
              Use Class <code>.wrap-border</code> with your <code>nav</code> tag to wrap your nav with a border
            </CardText>
            <NavBorder />
          </Card>
        </Col>
        <Col md='6' sm='12'>
          <Card title='Center Alignment' code={navCenter}>
            <CardText>
              Use Class <code>.justify-content-center</code> with your
              <code>nav</code> tag to align your nav to center.
            </CardText>
            <NavCenter />
          </Card>
        </Col>
        <Col md='6' sm='12'>
          <Card title='End Alignment' code={navEnd}>
            <CardText>
              Use Class <code>.justify-content-end</code> with your
              <code>nav</code> tag to align your nav to End.
            </CardText>
            <NavEnd />
          </Card>
        </Col>
        <Col md='6' sm='12'>
          <Card title='Vertical Nav' code={navVertical}>
            <CardText>
              Use prop <code>vertical</code> with nav tag to make it vertical.
            </CardText>
            <NavVertical />
          </Card>
        </Col>
        <Col md='6' sm='12'>
          <Card title='Vertical Nav With Border' code={navVerticalBorder}>
            <CardText>
              To wrap with border, use <code>.wrap-border class</code>.
            </CardText>
            <NavVerticalBorder />
          </Card>
        </Col>
        <Col md='6' sm='12'>
          <Card title='Nav With square Border' code={navSquareBorder}>
            <CardText>
              To wrap with square border, use <code>.square-border</code> class with <code>.wrap-border</code> class.
            </CardText>
            <NavSquareBorder />
          </Card>
        </Col>
        <Col md='6' sm='12'>
          <Card title='Nav With Divider' code={navDivider}>
            <CardText>
              To add divider, use <code>.dropdown-divider</code> class to
              <code>NavItem</code>
            </CardText>
            <NavDivider />
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}
export default NavComponent
