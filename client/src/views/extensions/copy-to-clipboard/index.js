import { Fragment, useState } from 'react'
import { toast } from 'react-toastify'
import { Check } from 'react-feather'
import Avatar from '@components/avatar'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import ExtensionsHeader from '@components/extensions-header'
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Button, Input } from 'reactstrap'

const ToastSuccess = () => (
  <Fragment>
    <div className='toastify-header pb-0'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='success' icon={<Check />} />
        <h6 className='toast-title'>Copied To Clipboard !</h6>
      </div>
    </div>
  </Fragment>
)

/*eslint-disable */
const Clipboard = () => {
  const [value, setValue] = useState('Copy Me!')
  const [copied, setCopied] = useState(false)
  /*eslint-enable */

  const handleCopy = ({ target: { value } }) => {
    setValue(value)
    setCopied(false)
  }

  const onCopy = () => {
    setCopied(true)
    toast.success(<ToastSuccess />, {
      autoClose: 3000,
      hideProgressBar: true,
      closeButton: false
    })
  }

  return (
    <Fragment>
      <ExtensionsHeader
        title='React Copy To Clipboard'
        subTitle='Copy to clipboard React component'
        link='https://github.com/nkbt/react-copy-to-clipboard'
      />
      <Row>
        <Col sm='12'>
          <Card>
            <CardHeader>
              <CardTitle tag='h4'>Clipboard</CardTitle>
            </CardHeader>
            <CardBody>
              <Row>
                <Col xl='3' md='4' sm='6' className='pr-sm-0 mb-md-0 mb-1'>
                  <Input value={value} onChange={handleCopy} />
                </Col>
                <Col md='2' sm='12'>
                  <CopyToClipboard onCopy={onCopy} text={value}>
                    <Button.Ripple color='primary' outline>
                      Copy!
                    </Button.Ripple>
                  </CopyToClipboard>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Clipboard
