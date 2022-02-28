export const toastTranslucent = (
  <pre>
    <code className='language-jsx'>
      {`

import { Toast, ToastBody, ToastHeader, Row, Col } from 'reactstrap'
import transparentBg from '@src/assets/images/svg/transparent.svg'

const close = (
  <button type='button' className='ml-1 close'>
    <span>×</span>
  </button>
)

const ToastTranslucent = () => {
  return (
    <Row>
      <Col md='6' sm='12'>
        <div className='p-3 bg-primary my-2 rounded'>
          <Toast>
            <ToastHeader close={close}>Vuexy</ToastHeader>
            <ToastBody>
              This is a toast on a primary background — check it out!
            </ToastBody>
          </Toast>
        </div>
      </Col>
      <Col md='6' sm='12'>
        <div className='p-3 bg-secondary my-2 rounded'>
          <Toast>
            <ToastHeader close={close}>Vuexy</ToastHeader>
            <ToastBody>
              This is a toast on a secondary background — check it out!
            </ToastBody>
          </Toast>
        </div>
      </Col>
      <Col md='6' sm='12'>
        <div className='p-3 bg-success my-2 rounded'>
          <Toast>
            <ToastHeader close={close}>Vuexy</ToastHeader>
            <ToastBody>
              This is a toast on a success background — check it out!
            </ToastBody>
          </Toast>
        </div>
      </Col>
      <Col md='6' sm='12'>
        <div className='p-3 bg-danger my-2 rounded'>
          <Toast>
            <ToastHeader close={close}>Vuexy</ToastHeader>
            <ToastBody>
              This is a toast on a danger background — check it out!
            </ToastBody>
          </Toast>
        </div>
      </Col>
      <Col md='6' sm='12'>
        <div className='p-3 bg-warning my-2 rounded'>
          <Toast>
            <ToastHeader close={close}>Vuexy</ToastHeader>
            <ToastBody>
              This is a toast on a warning background — check it out!
            </ToastBody>
          </Toast>
        </div>
      </Col>
      <Col md='6' sm='12'>
        <div className='p-3 bg-info my-2 rounded'>
          <Toast>
            <ToastHeader close={close}>Vuexy</ToastHeader>
            <ToastBody>
              This is a toast on an info background — check it out!
            </ToastBody>
          </Toast>
        </div>
      </Col>

      <Col md='6' sm='12'>
        <div className='p-3 bg-dark my-2 rounded'>
          <Toast>
            <ToastHeader close={close}>Vuexy</ToastHeader>
            <ToastBody>
              This is a toast on an dark background — check it out!
            </ToastBody>
          </Toast>
        </div>
      </Col>

      <Col md='6' sm='12'>
        <div
          className='p-3 my-2 rounded'
          style={{
            background: "url(transparentBg)"
          }}
        >
          <Toast>
            <ToastHeader close={close}>Vuexy</ToastHeader>
            <ToastBody>
              This is a toast on a transparent background — check it out!
            </ToastBody>
          </Toast>
        </div>
      </Col>
    </Row>
  )
}
export default ToastTranslucent
`}
    </code>
  </pre>
)

export const toastHeaderIcons = (
  <pre>
    <code className='language-jsx'>
      {`

import { Toast, ToastBody, ToastHeader, Spinner, Row, Col } from 'reactstrap'
import logo from '@src/assets/images/logo/logo.png'

const close = (
  <button type='button' className='ml-1 close'>
    <span>×</span>
  </button>
)


const ToastHeaderIcons = () => {
  return (
    <Row>
      <Col md='6' sm='12'>
        <Toast>
          <ToastHeader close={close} icon='primary'>Vuexy</ToastHeader>
          <ToastBody>
            This is a toast with a primary icon — check it out!
          </ToastBody>
        </Toast>
      </Col>
      <Col md='6' sm='12'>
        <Toast>
          <ToastHeader close={close} icon='success'>Vuexy</ToastHeader>
          <ToastBody>
            This is a toast with a success icon — check it out!
          </ToastBody>
        </Toast>
      </Col>
      <Col md='6' sm='12'>
        <Toast>
          <ToastHeader close={close} icon='info'>Vuexy</ToastHeader>
          <ToastBody>
            This is a toast with a info icon — check it out!
          </ToastBody>
        </Toast>
      </Col>
      <Col md='6' sm='12'>
        <Toast>
          <ToastHeader close={close} icon='danger'>Vuexy</ToastHeader>
          <ToastBody>
            This is a toast with a danger icon — check it out!
          </ToastBody>
        </Toast>
      </Col>
      <Col md='6' sm='12'>
        <Toast>
          <ToastHeader close={close} icon='warning'>Vuexy</ToastHeader>
          <ToastBody>
            This is a toast with a warning icon — check it out!
          </ToastBody>
        </Toast>
      </Col>
      <Col md='6' sm='12'>
        <Toast>
          <ToastHeader close={close} icon='dark'>Vuexy</ToastHeader>
          <ToastBody>
            This is a toast with a dark icon — check it out!
          </ToastBody>
        </Toast>
      </Col>

      <Col md='6' sm='12'>
        <Toast>
          <ToastHeader close={close} icon={<Spinner size='sm' color='primary' />}>
            Vuexy
          </ToastHeader>
          <ToastBody>This is a toast with a spinner — check it out!</ToastBody>
        </Toast>
      </Col>

      <Col md='6' sm='12'>
        <Toast>
        <ToastHeader close={close} icon={logo}>Vuexy</ToastHeader>
          <ToastBody>This is a toast with a logo — check it out!</ToastBody>
        </Toast>
      </Col>
    </Row>
  )
}
export default ToastHeaderIcons
`}
    </code>
  </pre>
)
