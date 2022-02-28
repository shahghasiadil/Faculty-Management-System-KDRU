import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import FileUploaderBasic from './FileUploaderBasic'
import FileUploaderMulti from './FileUploaderMulti'
import FileUploaderRestrictions from './FileUploaderRestrictions'
import ExtensionsHeader from '@components/extensions-header'

import 'uppy/dist/uppy.css'
import '@uppy/status-bar/dist/style.css'
import '@styles/react/libs/file-uploader/file-uploader.scss'

const Uploader = () => {
  return (
    <Fragment>
      <ExtensionsHeader
        title='React Uppy'
        subTitle='Uppy is a sleek, modular React file uploader that integrates seamlessly with any application.'
        link='https://github.com/transloadit/uppy'
      />

      <Row>
        <Col sm='12'>
          <FileUploaderBasic />
        </Col>
        <Col sm='12'>
          <FileUploaderMulti />
        </Col>
        <Col sm='12'>
          <FileUploaderRestrictions />
        </Col>
      </Row>
    </Fragment>
  )
}

export default Uploader
