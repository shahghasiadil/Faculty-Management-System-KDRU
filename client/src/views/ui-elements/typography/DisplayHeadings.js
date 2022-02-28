import { Card, CardHeader, CardTitle, CardBody, CardText, Table } from 'reactstrap'

const DisplayHeadings = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Display Headings</CardTitle>
      </CardHeader>

      <CardBody>
        <CardText>
          Traditional heading elements are designed to work best in the meat of your page content. When you need a
          heading to stand out, consider using a <code>display-[1-4]</code> for larger, slightly more opinionated
          heading style.
        </CardText>
      </CardBody>
      <Table responsive borderless className='mb-0'>
        <tbody>
          <tr>
            <td>
              <h1 className='display-1'>Display 1</h1>
            </td>
          </tr>
          <tr>
            <td>
              <h1 className='display-2'>Display 2</h1>
            </td>
          </tr>
          <tr>
            <td>
              <h1 className='display-3'>Display 3</h1>
            </td>
          </tr>
          <tr>
            <td>
              <h1 className='display-4'>Display 4</h1>
            </td>
          </tr>
        </tbody>
      </Table>
    </Card>
  )
}
export default DisplayHeadings
