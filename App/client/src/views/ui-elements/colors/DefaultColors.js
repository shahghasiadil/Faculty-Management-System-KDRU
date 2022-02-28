import { ChevronsRight } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardText, Alert } from 'reactstrap'

const DefaultColors = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Default Colors</CardTitle>
      </CardHeader>
      <CardBody>
        <Alert color='primary'>
          <div className='alert-body'>
            For more color classes options please read the{' '}
            <a className='alert-link' href='http://' target='_blank' rel='noopener noreferrer'>
              Documentation
            </a>
          </div>
        </Alert>
        <CardText>We have a series of colors that are used by default. They include:</CardText>
        <ul className='colors-list list-unstyled'>
          <li>
            <ChevronsRight size='18' />
            Primary
          </li>
          <li>
            <ChevronsRight size='18' />
            Secondary
          </li>
          <li>
            <ChevronsRight size='18' />
            Success
          </li>
          <li>
            <ChevronsRight size='18' />
            Danger
          </li>
          <li>
            <ChevronsRight size='18' />
            Warning
          </li>
          <li>
            <ChevronsRight size='18' />
            Info
          </li>
        </ul>
        <CardText>
          For each color, we think has its functionality in the application as alerts of errors <b>(danger)</b>,
          warnings to the user <b>(warning)</b>, communications of approval <b>(success)</b>, or main color of the
          application <b>(primary)</b>.
        </CardText>
        <div className='d-flex justify-content-start flex-wrap'>
          <div className='text-center bg-primary colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow'>
            <span className='align-middle'>Primary</span>
          </div>
          <div className='text-center bg-secondary colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow'>
            <span className='align-middle'>Secondary</span>
          </div>
          <div className='text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50  my-1 shadow'>
            <span className='align-middle'>Success</span>
          </div>
          <div className='text-center bg-danger colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50  my-1 shadow'>
            <span className='align-middle'>Danger</span>
          </div>
          <div className='text-center bg-warning colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50  my-1 shadow'>
            <span className='align-middle'>Warning</span>
          </div>
          <div className='text-center bg-info colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center my-1 ml-50 shadow'>
            <span className='align-middle'>Info</span>
          </div>
        </div>
        <h6 className='mt-1'>Lighten Variant</h6>
        <p className='mb-0'>
          Use
          <code>.bg-[color].bg-lighten-[1 | 2 | 3 | 4 | 5]</code>
          classes for lighten background color.
        </p>
        <div className='d-flex justify-content-start flex-wrap'>
          <div className='text-center bg-primary bg-lighten-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow'>
            <span className='align-middle'>lighten-2</span>
          </div>
          <div className='text-center bg-secondary bg-lighten-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow'>
            <span className='align-middle'>lighten-2</span>
          </div>
          <div className='text-center bg-success bg-lighten-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50  my-1 shadow'>
            <span className='align-middle'>lighten-2</span>
          </div>
          <div className='text-center bg-danger bg-lighten-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50  my-1 shadow'>
            <span className='align-middle'>lighten-2</span>
          </div>
          <div className='text-center bg-warning bg-lighten-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50  my-1 shadow'>
            <span className='align-middle'>lighten-2</span>
          </div>
          <div className='text-center bg-info bg-lighten-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center my-1 ml-50 shadow'>
            <span className='align-middle'>lighten-2</span>
          </div>
        </div>
        <h6 className='mt-1'>Darken Variant</h6>
        <p className='mb-0'>
          Use
          <code>.bg-[color].bg-darken-[1 | 2 | 3 | 4 | 5]</code>
          classes for darken background color.
        </p>
        <div className='d-flex justify-content-start flex-wrap'>
          <div className='text-center bg-primary bg-darken-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow'>
            <span className='align-middle'>darken-2</span>
          </div>
          <div className='text-center bg-secondary bg-darken-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow'>
            <span className='align-middle'>darken-2</span>
          </div>
          <div className='text-center bg-success bg-darken-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50  my-1 shadow'>
            <span className='align-middle'>darken-2</span>
          </div>
          <div className='text-center bg-danger bg-darken-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50  my-1 shadow'>
            <span className='align-middle'>darken-2</span>
          </div>
          <div className='text-center bg-warning bg-darken-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50  my-1 shadow'>
            <span className='align-middle'>darken-2</span>
          </div>
          <div className='text-center bg-info bg-darken-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center my-1 ml-50 shadow'>
            <span className='align-middle'>darken-2</span>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
export default DefaultColors
