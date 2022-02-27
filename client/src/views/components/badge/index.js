import { Fragment, useEffect } from 'react'
import { Row, Col, CardText } from 'reactstrap'
import Prism from 'prismjs'
import BreadCrumbs from '@components/breadcrumbs'
import Card from '@components/card-snippet'
import BadgeContextual from './BadgeContextual'
import BadgeIcons from './BadgeIcons'
import BadgeLink from './BadgeLink'
import BadgeBlock from './BadgeBlock'
import BadgeGlow from './BadgeGlow'
import BadgeLight from './BadgeLight'
import { badgeContextual, badgeGlow, badgeLight, badgeIcons, badgeLink, badgeBlock } from './BadgeSourceCode'

const Badges = () => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <Fragment>
      <BreadCrumbs breadCrumbTitle='Badges' breadCrumbParent='Components' breadCrumbActive='Badges' />
      <Row>
        <Col sm='12'>
          <Card title='Contextual Badges' code={badgeContextual}>
            <CardText className='mb-0'>
              Use prop <code>color</code> with <code>Badge</code> tag to create badge with different colors.
            </CardText>
            <BadgeContextual />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Glow Badges' code={badgeGlow}>
            <CardText className='mb-0'>
              Use class <code>badge-glow</code> with <code>Badge</code> tag to add glow effect to your badge
            </CardText>
            <BadgeGlow />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Light Badges' code={badgeLight}>
            <CardText className='mb-0'>
              Use prop <code>color="light-COLOR_NAME"</code> with <code>Badge</code> tag to create badge with different
              colors.
            </CardText>
            <BadgeLight />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Badges With Icons' code={badgeIcons}>
            <BadgeIcons />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md='6' sm='12'>
          <Card title='Link Badge' code={badgeLink}>
            <CardText>
              Use <code>href="#"</code> prop to use badge as a link.
            </CardText>
            <BadgeLink />
          </Card>
        </Col>
        <Col md='6' sm='12'>
          <Card title='Block Badge' code={badgeBlock}>
            <CardText>
              Use <code>.d-block</code> class to make badge display as block.
            </CardText>
            <BadgeBlock />
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}
export default Badges
