import { Fragment } from 'react'
import DndClone from './DndClone'
import DndCards from './DndCards'
import DndHandle from './DndHandle'
import { Row, Col } from 'reactstrap'
import DndMultiple from './DndMultiple'
import DndMultiDrag from './DndMultiDrag'
import DndListGroup from './DndListGroup'
import ExtensionsHeader from '@components/extensions-header'

import '@styles/react/libs/drag-and-drop/drag-and-drop.scss'

const DragAndDrop = () => {
  return (
    <Fragment>
      <ExtensionsHeader
        title='React Sortablejs'
        subTitle='Sortablejs wrapper for React'
        link='https://github.com/SortableJS/react-sortablejs'
      />
      <Row>
        <Col sm='12'>
          <DndCards />
        </Col>
        <Col sm='12'>
          <DndListGroup />
        </Col>
        <Col sm='12'>
          <DndMultiple />
        </Col>
        <Col sm='12'>
          <DndClone />
        </Col>
        <Col sm='12'>
          <DndHandle />
        </Col>
        <Col sm='12'>
          <DndMultiDrag />
        </Col>
      </Row>
    </Fragment>
  )
}

export default DragAndDrop
