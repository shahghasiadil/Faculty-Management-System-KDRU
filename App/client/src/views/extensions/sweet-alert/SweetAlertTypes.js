import { Card, CardHeader, CardBody, CardTitle, Button, CardText } from 'reactstrap'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const SweetAlertTypes = () => {
  const handleSuccess = () => {
    return MySwal.fire({
      title: 'Good job!',
      text: 'You clicked the button!',
      icon: 'success',
      customClass: {
        confirmButton: 'btn btn-primary'
      },
      buttonsStyling: false
    })
  }

  const handleInfo = () => {
    return MySwal.fire({
      title: 'Info!',
      text: 'You clicked the button!',
      icon: 'info',
      customClass: {
        confirmButton: 'btn btn-primary'
      },
      buttonsStyling: false
    })
  }

  const handleWarning = () => {
    return MySwal.fire({
      title: 'Warning!',
      text: ' You clicked the button!',
      icon: 'warning',
      customClass: {
        confirmButton: 'btn btn-primary'
      },
      buttonsStyling: false
    })
  }

  const handleError = () => {
    return MySwal.fire({
      title: 'Error!',
      text: ' You clicked the button!',
      icon: 'error',
      customClass: {
        confirmButton: 'btn btn-primary'
      },
      buttonsStyling: false
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Types</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText className='mb-0'>
          SweetAlert comes with 4 built-in types which will show a corresponding icon animation: "warning", "error",
          "success" and "info".
        </CardText>
        <div className='demo-inline-spacing'>
          <Button color='success' onClick={handleSuccess} outline>
            Success
          </Button>
          <Button color='danger' onClick={handleError} outline>
            Error
          </Button>
          <Button color='warning' onClick={handleWarning} outline>
            Warning
          </Button>
          <Button color='info' onClick={handleInfo} outline>
            Info
          </Button>
        </div>
      </CardBody>
    </Card>
  )
}

export default SweetAlertTypes
