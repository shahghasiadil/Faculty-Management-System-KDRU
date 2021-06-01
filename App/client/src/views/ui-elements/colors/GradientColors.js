import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import { ChevronsRight } from 'react-feather'

const GradientColors = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Gradient Colors</CardTitle>
      </CardHeader>
      <CardBody>
        <p>
          We have created gradient colors based on our default colors, use below mentioned classes for gradient colors.
        </p>
        <ul className='colors-list list-unstyled mb-0'>
          <li>
            <ChevronsRight size='18' /> bg-gradient-primary
          </li>
          <li>
            <ChevronsRight size='18' /> bg-gradient-secondary
          </li>
          <li>
            <ChevronsRight size='18' /> bg-gradient-success
          </li>
          <li>
            <ChevronsRight size='18' /> bg-gradient-danger
          </li>
          <li>
            <ChevronsRight size='18' /> bg-gradient-warning
          </li>
          <li>
            <ChevronsRight size='18' /> bg-gradient-info
          </li>
        </ul>
        <p>
          For each color, we think has its functionality in the application as alerts of errors <b>(danger)</b>,
          warnings to the user <b>(warning)</b>, communications of approval <b>(success)</b>, or main color of the
          application <b>(primary)</b>.
        </p>
        <div className='d-flex justify-content-start flex-wrap'>
          <div className='text-center colors-container bg-gradient-primary rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow'>
            <span className='align-middle'>Primary Gradient</span>
          </div>
          <div className='text-center colors-container bg-gradient-secondary rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow'>
            <span className='align-middle'>Secondary Gradient</span>
          </div>
          <div className='text-center colors-container bg-gradient-success rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50  my-1 shadow'>
            <span className='align-middle'>Success Gradient</span>
          </div>
          <div className='text-center colors-container bg-gradient-danger rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50  my-1 shadow'>
            <span className='align-middle'>Danger Gradient</span>
          </div>
          <div className='text-center colors-container bg-gradient-warning rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50  my-1 shadow'>
            <span className='align-middle'>Warning Gradient</span>
          </div>
          <div className='text-center colors-container bg-gradient-info rounded text-white width-100 height-100 d-flex align-items-center justify-content-center my-1 ml-50 shadow px-1'>
            <span className='align-middle'>Info Gradient</span>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
export default GradientColors
