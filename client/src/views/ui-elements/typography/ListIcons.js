import { Card, CardHeader, CardTitle, CardBody, CardText } from 'reactstrap'
import { ArrowRight, ChevronRight } from 'react-feather'

const ListIcons = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Lists icons</CardTitle>
      </CardHeader>

      <CardBody>
        <CardText>
          Use <code>.list-style-icons</code> class with <code>&ltul&gt</code> tag to create a list with icons.
        </CardText>
        <ul className='list-style-icons'>
          <li>
            <ArrowRight size={14} className='mr-50' />
            Facilisis in pretium nisl aliquet
          </li>
          <li>
            <ArrowRight size={14} className='mr-50' />
            Nulla volutpat aliquam velit
            <ul className='list-style-icons'>
              <li className='ml-1'>
                <ChevronRight size={14} className='mr-50' />
                Phasellus iaculis neque
              </li>
              <li className='ml-1'>
                <ChevronRight size={14} className='mr-50' />
                Ac tristique libero volutpat at
              </li>
            </ul>
          </li>
          <li>
            <ArrowRight size={14} className='mr-50' />
            Faucibus porta lacus fringilla vel
          </li>
          <li>
            <ArrowRight size={14} className='mr-50' />
            Aenean sit amet erat nunc
          </li>
        </ul>
      </CardBody>
    </Card>
  )
}
export default ListIcons
