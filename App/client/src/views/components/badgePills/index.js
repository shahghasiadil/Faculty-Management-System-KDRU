import { Fragment, useEffect } from 'react'
import { Row, Col, CardText } from 'reactstrap'
import Prism from 'prismjs'
import BreadCrumbs from '@components/breadcrumbs'
import Card from '@components/card-snippet'
import BadgePillContextual from './BadgePillContextual'
import BadgeGlow from './BadgePillGlow'
import BadgeNotification from './BadgeNotification'
import BadgePillBlock from './BadgeBlock'
import BadgePillLink from './BadgePillLink'
import BadgePillLight from './BadgePillLight'
import {
  badgePillBlock,
  badgePillContextual,
  badgePillGlow,
  badgePillLight,
  badgePillLink,
  badgePillNotification
} from './BadgePillSourceCode'

const BadgePill = () => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <Fragment>
      <BreadCrumbs breadCrumbTitle='Pill Badges' breadCrumbParent='Components' breadCrumbActive='Pill Badges' />
      <Row>
        <Col sm='12'>
          <Card title='Contextual' code={badgePillContextual}>
            <CardText className='mb-0'>
              Use prop <code>pill</code> with <code>Badge</code> tag to create badge pill.
            </CardText>
            <BadgePillContextual />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Glow' code={badgePillGlow}>
            <CardText className='mb-0'>
              Use class <code>.badge-glow</code> with <code>Badge</code> tag to add glow effect to your badge.
            </CardText>
            <BadgeGlow />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Light' code={badgePillLight}>
            <CardText className='mb-0'>
              Use prop <code>pill</code> and <code>color="light-COLOR_NAME"</code> with <code>Badge</code> tag to create
              a light badge pill.
            </CardText>
            <BadgePillLight />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Notifications' code={badgePillNotification}>
            <CardText className='mb-0'>
              Use <code>.badge-up</code> to set pill badge to higher than other text. So that it can work with
              notifications also.
            </CardText>
            <BadgeNotification />
          </Card>
        </Col>
      </Row>
      <Row className='match-height'>
        <Col md='6' sm='12'>
          <Card title='Link' code={badgePillLink}>
            <CardText>
              Use <code>href="#"</code> prop to use badge as a link.
            </CardText>
            <BadgePillLink />
          </Card>
        </Col>
        <Col md='6' sm='12'>
          <Card title='Block' code={badgePillBlock}>
            <CardText>
              Use <code>.d-block</code> class to make badge display as block.
            </CardText>
            <BadgePillBlock />
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}
export default BadgePill
