import { Card, CardHeader, CardBody, CardTitle, Button } from 'reactstrap'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import alertImg from '@src/assets/images/slider/04.jpg'

const MySwal = withReactContent(Swal)

const SweetAlertOptions = () => {
  const handleImageAlert = () => {
    return MySwal.fire({
      title: 'Sweet!',
      text: 'Modal with a custom image.',
      imageUrl: alertImg,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      customClass: { confirmButton: 'btn btn-primary' },
      buttonsStyling: false
    })
  }

  const handleTimeoutAlert = () => {
    let timerInterval
    Swal.fire({
      title: 'Auto close alert!',
      html: 'I will close in <strong></strong> seconds.',
      timer: 2000,
      onBeforeOpen() {
        Swal.showLoading()
        timerInterval = setInterval(function () {
          Swal.getContent().querySelector('strong').textContent = Swal.getTimerLeft()
        }, 100)
      },
      onClose() {
        clearInterval(timerInterval)
      }
    }).then(function (result) {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
  }

  const handleClickOutside = () => {
    return MySwal.fire({
      title: 'Click outside to close!',
      text: 'This is a cool message!',
      allowOutsideClick: true,
      customClass: { confirmButton: 'btn btn-primary' },
      buttonsStyling: false
    })
  }

  const handleQuestions = () => {
    return MySwal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2', '3'],
      buttonsStyling: false,
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1'
      }
    })
      .queue(['Question 1', 'Question 2', 'Question 3'])
      .then(function (result) {
        if (result.value) {
          MySwal.fire({
            title: 'All done!',
            html: `Your answers: <pre><code>${JSON.stringify(result.value)}</code></pre>`,
            confirmButtonText: 'Lovely!',
            customClass: { confirmButton: 'btn btn-primary' }
          })
        }
      })
  }

  const handleAjax = () => {
    MySwal.fire({
      title: 'Search for a user',
      input: 'text',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1'
      },
      buttonsStyling: false,
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Look up',
      showLoaderOnConfirm: true,
      preConfirm(login) {
        return fetch(`//api.github.com/users/${login}`)
          .then(function (response) {
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            return response.json()
          })
          .catch(function (error) {
            MySwal.showValidationMessage(`Request failed:  ${error}`)
          })
      }
    }).then(function (result) {
      if (result.value) {
        MySwal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url,
          customClass: {
            confirmButton: 'btn btn-primary'
          }
        })
      }
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Options</CardTitle>
      </CardHeader>
      <CardBody>
        <div className='demo-inline-spacing'>
          <Button color='primary' onClick={handleImageAlert} outline>
            Image
          </Button>
          <Button color='primary' onClick={handleTimeoutAlert} outline>
            Timeout
          </Button>
          <Button color='primary' onClick={handleClickOutside} outline>
            Click Outside
          </Button>
          <Button color='primary' onClick={handleQuestions} outline>
            Question
          </Button>
          <Button color='primary' onClick={handleAjax} outline>
            Ajax
          </Button>
        </div>
      </CardBody>
    </Card>
  )
}

export default SweetAlertOptions
