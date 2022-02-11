import { Fragment } from 'react'
import ExtensionsHeader from '@components/extensions-header'
import { Row, Col } from 'reactstrap'
import ContextMenuBasic from './ContextMenuBasic'
import ContextMenuLeftClick from './ContextMenuLeftClick'
import ContextMenuDoubleClick from './ContextMenuDoubleClick'
import ContextSubMenu from './ContextSubmenu'
import ContextMenuAnimation from './ContextMenuAnimation'

import 'react-contexify/dist/ReactContexify.min.css'
import '@styles/react/libs/context-menu/context-menu.scss'

const Contexify = () => {
  return (
    <Fragment>
      <ExtensionsHeader
        title='React Contexify'
        subTitle='Adds a context menu to your react app with ease'
        link='https://github.com/fkhadra/react-contexify'
      />
      <Row>
        <Col sm='12'>
          <ContextMenuBasic />
        </Col>
        <Col sm='12'>
          <ContextSubMenu />
        </Col>
        <Col sm='12'>
          <ContextMenuLeftClick />
        </Col>
        <Col sm='12'>
          <ContextMenuDoubleClick />
        </Col>
        <Col sm='12'>
          <ContextMenuAnimation />
        </Col>
      </Row>
    </Fragment>
  )
}

export default Contexify
