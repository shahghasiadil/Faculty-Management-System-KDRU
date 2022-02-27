import { Fragment, useEffect } from 'react'
import { Row, Col, CardText } from 'reactstrap'
import Prism from 'prismjs'
import BreadCrumbs from '@components/breadcrumbs'
import Card from '@components/card-snippet'
import DividerDefault from './DividerDefault'
import DividerText from './DividerText'
import DividerPosition from './DividerPosition'
import DividerColors from './DividerColors'
import DividerIcons from './DividerIcons'
import DividerStyle from './DividerStyle'
import {
  dividerColors,
  dividerDefault,
  dividerIcon,
  dividerPosition,
  dividerStyle,
  dividerText
} from './DividerSourceCode'

const Divider = () => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <Fragment>
      <BreadCrumbs breadCrumbTitle='Divider' breadCrumbParent='Extra Components' breadCrumbActive='Divider' />
      <Row>
        <Col sm='12'>
          <Card title='Default' code={dividerDefault}>
            <CardText>
              You can add a line to divide your section using
              <code>&lt;hr /&gt;</code> tag.
            </CardText>
            <DividerDefault />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Text' code={dividerText}>
            <CardText>
              Use class <code>.divider</code> as wrapper for
              <code>.divider-text</code> to create a divider text
            </CardText>
            <DividerText />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Position' code={dividerPosition}>
            <CardText>
              Use class
              <code>.divider-[left | left-center | right | right-center]</code>
              with <code>.divider</code> to set text position.
            </CardText>
            <DividerPosition />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Colors' code={dividerColors}>
            <CardText>
              Use class
              <code>.divider-[left | left-center | right | right-center]</code>
              with <code>.divider</code> to set text position.
            </CardText>
            <DividerColors />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Icons' code={dividerIcon}>
            <DividerIcons />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Style' code={dividerStyle}>
            <CardText>
              use class <code>.divider-[dotted | dashed]</code> to change divider style. solid is default style you
              don't have to add any class for it.
            </CardText>
            <DividerStyle />
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}
export default Divider
