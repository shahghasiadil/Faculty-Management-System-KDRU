import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import BasicBlocking from './BasicBlocking'
import CustomSpinner from './CustomSpinner'
import CustomColorBlocking from './CustomColor'
import MessageBlocking from './MessageBlocking'
import ExtensionsHeader from '@components/extensions-header'

const Editor = () => {
  return (
    <Fragment>
      <ExtensionsHeader
        title='React BlockUI'
        subTitle='Easy way to block the user from interacting with your UI.'
        link='https://availity.github.io/react-block-ui/'
      />

      <Row>
        <Col sm={12}>
          <BasicBlocking />
        </Col>
        <Col sm={12}>
          <CustomColorBlocking />
        </Col>
        <Col sm={12}>
          <CustomSpinner />
        </Col>
        <Col sm={12}>
          <MessageBlocking />
        </Col>
      </Row>
    </Fragment>
  )
}

export default Editor
