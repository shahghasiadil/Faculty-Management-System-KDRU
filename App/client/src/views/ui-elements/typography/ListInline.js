import { Card, CardHeader, CardTitle, CardBody, CardText } from 'reactstrap'

const ListInline = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Inline Lists</CardTitle>
      </CardHeader>

      <CardBody>
        <CardText>
          To create a inline list use <code>.list-inline</code> class with <code>&ltul&gt</code> tag and, class{' '}
          <code>.list-inline-item</code> with <code>&ltli&gt</code> tag.
        </CardText>
        <p>Use inline numbers, alphabet, icons etc... for ordered Inline List.</p>
        <ul className='list-inline'>
          <li className='list-inline-item'>Chocolate</li>
          <li className='list-inline-item'>Cake</li>
          <li className='list-inline-item'>Ice-Cream</li>
        </ul>
        <ul className='list-inline'>
          <li className='list-inline-item'>1. Chocolate</li>
          <li className='list-inline-item'>2. Cake</li>
          <li className='list-inline-item'>3. Ice-Cream</li>
        </ul>
        <ul className='list-inline'>
          <li className='list-inline-item'>$ 250</li>
          <li className='list-inline-item'>$ 110</li>
          <li className='list-inline-item'>$ 890</li>
        </ul>
      </CardBody>
    </Card>
  )
}
export default ListInline
