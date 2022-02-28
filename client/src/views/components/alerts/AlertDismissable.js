import { useState } from 'react'
import { Alert } from 'reactstrap'

const AlertDismissable = () => {
  const [visible, setVisible] = useState(true)

  return (
    <div className='demo-spacing-0'>
      <Alert color='primary' isOpen={visible} toggle={() => setVisible(false)}>
        <div className='alert-body'>
          Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.
        </div>
      </Alert>
    </div>
  )
}
export default AlertDismissable
