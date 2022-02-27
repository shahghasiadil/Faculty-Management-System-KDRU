import { Fragment, useEffect } from 'react'
import Prism from 'prismjs'
import { Row, Col, CardText } from 'reactstrap'
import BreadCrumbs from '@components/breadcrumbs'
import Card from '@components/card-snippet'
import AvatarInitials from './AvatarInitials'
import AvatarSizes from './AvatarSizes'
import AvatarColors from './AvatarColors'
import AvatarLightColors from './AvatarLightColors'
import AvatarIcons from './AvatarIcons'
import AvatarStatus from './AvatarStatus'
import AvatarGroup from './AvatarGroup'
import AvatarGroupTooltip from './AvatarGroupTooltip'
import {
  avatarColors,
  avatarLightColors,
  avatarInitials,
  avatarIcons,
  avatarSizes,
  avatarGroup,
  avatarGroupTooltip,
  avatarStatus
} from './AvatarSourceCode'

const Avatar = () => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <Fragment>
      <BreadCrumbs breadCrumbTitle='Avatar' breadCrumbParent='Extra Components' breadCrumbActive='Avatar' />
      <Row className='match-height'>
        <Col xl='6' lg='12'>
          <Card title='Sizes' code={avatarSizes}>
            <CardText className='mb-0'>
              Use <code>size=[sm | lg | xl]</code> prop to change avatar's size. You can also use <code>height</code> &{' '}
              <code>width</code> prop for a custom size
            </CardText>
            <AvatarSizes />
          </Card>
        </Col>
        <Col xl='6' lg='12'>
          <Card title='Intials' code={avatarInitials}>
            <CardText className='mb-0'>
              Use prop <code>initials</code> to show only Initials of content.
            </CardText>
            <AvatarInitials />
          </Card>
        </Col>
        <Col xl='6' lg='12'>
          <Card title='Colors' code={avatarColors}>
            <CardText className='mb-0'>
              Use prop
              <code>color=[primary | success | danger | info | warning | dark]</code>
              to change background color of your avatar.
            </CardText>
            <AvatarColors />
          </Card>
        </Col>
        <Col xl='6' lg='12'>
          <Card title='Light Colors' code={avatarLightColors}>
            <CardText className='mb-0'>
              Use prop
              <code>
                color=[light-primary | light-success | light-danger | light-info | light-warning | light-dark]
              </code>
              to change background color of your avatar.
            </CardText>
            <AvatarLightColors />
          </Card>
        </Col>
        <Col xl='6' lg='12'>
          <Card title='Icons' code={avatarIcons}>
            <CardText className='mb-0'>
              Use prop <code>icon</code> to create avatar with icon.
            </CardText>
            <AvatarIcons />
          </Card>
        </Col>
        <Col xl='6' sm='12'>
          <Card title='Status' code={avatarStatus}>
            <CardText className='mb-0'>
              Use prop<code>status=[online | offline | away | busy]</code> to create avatar with status.
            </CardText>
            <AvatarStatus />
          </Card>
        </Col>
        <Col xl='6' sm='12'>
          <Card title='Avatar Group' code={avatarGroup}>
            <CardText>
              Use <code>&lt;AvatarGroup /&gt;</code> component and pass <code>data</code> prop to create a grouped
              avatar.
            </CardText>
            <CardText>Data prop must be an array of object which contains props to be passed on avatar.</CardText>
            <AvatarGroup />
          </Card>
        </Col>
        <Col xl='6' sm='12'>
          <Card title='Avatar Group Tooltip' code={avatarGroupTooltip}>
            <CardText>
              Add an extra property of <code>title</code> in the data you pass in <code>&lt;AvatarGroup /&gt;</code> to
              create avatar group with tooltip.
            </CardText>

            <AvatarGroupTooltip />
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}
export default Avatar
