import { Card, CardHeader, CardTitle, CardBody, CardText, Table } from 'reactstrap'

const CustomizingHeadings = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>
          Customizing headings <small className='text-muted'>Default</small>
        </CardTitle>
      </CardHeader>

      <CardBody>
        <CardText>Use the included utility classes to recreate the small secondary heading text.</CardText>
      </CardBody>

      <Table borderless responsive className='mb-0'>
        <tbody>
          <tr>
            <td>
              <h1>
                Display heading <small className='text-secondary'>Secondary text</small>
              </h1>
            </td>
          </tr>
          <tr>
            <td>
              <h2>
                Display heading <small className='text-secondary'>Secondary text</small>
              </h2>
            </td>
          </tr>
          <tr>
            <td>
              <h3>
                Display heading <small className='text-secondary'>Secondary text</small>
              </h3>
            </td>
          </tr>
          <tr>
            <td>
              <h4>
                Display heading <small className='text-secondary'>Secondary text</small>
              </h4>
            </td>
          </tr>
          <tr>
            <td>
              <h5>
                Display heading <small className='text-secondary'>Secondary text</small>
              </h5>
            </td>
          </tr>
          <tr>
            <td>
              <h6>
                Display heading <small className='text-secondary'>Secondary text</small>
              </h6>
            </td>
          </tr>
        </tbody>
      </Table>
    </Card>
  )
}
export default CustomizingHeadings
