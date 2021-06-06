import { Card, CardHeader, CardTitle, CardBody, CardText, Table } from 'reactstrap'

const HeadingColors = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Heading colors</CardTitle>
      </CardHeader>

      <CardBody>
        <CardText>
          Heading elements are also changed with different color options. Use class
          <code>text-[primary/secondary/success/danger/info/warning]</code> class with heading elements.
        </CardText>
      </CardBody>
      <Table responsive borderless className='mb-0'>
        <tbody>
          <tr>
            <td>
              <h1 className='text-primary'>Display heading</h1>
            </td>
          </tr>
          <tr>
            <td>
              <h2 className='text-success'>Display heading</h2>
            </td>
          </tr>
          <tr>
            <td>
              <h3 className='text-danger'>Display heading</h3>
            </td>
          </tr>
          <tr>
            <td>
              <h4 className='text-warning'>Display heading</h4>
            </td>
          </tr>
          <tr>
            <td>
              <h5 className='text-info'>Display heading</h5>
            </td>
          </tr>
          <tr>
            <td>
              <h6 className='text-dark'>Display heading</h6>
            </td>
          </tr>
        </tbody>
      </Table>
    </Card>
  )
}
export default HeadingColors
