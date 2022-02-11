import { Card, CardHeader, CardTitle, CardBody, CardText, Table } from 'reactstrap'

const LightBoldHeadings = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Light / Bold Headings</CardTitle>
      </CardHeader>

      <CardBody>
        <CardText>
          All HTML headings are available with light and bold font-weight. Use <code>.font-weight-normal</code> for
          light heading and <code>.font-weight-bolderer</code> for bold headings along with heading tags or classes.
        </CardText>
      </CardBody>
      <Table responsive borderless className='mb-0'>
        <thead>
          <tr>
            <th>Light headings</th>
            <th className='text-right'>Bold headings</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <h1 className='font-weight-normal'>Heading 1</h1>
            </td>
            <td className='text-right'>
              <h1 className='font-weight-bolder'>Heading 1</h1>
            </td>
          </tr>
          <tr>
            <td>
              <h2 className='font-weight-normal'>Heading 2</h2>
            </td>
            <td className='text-right'>
              <h2 className='font-weight-bolder'>Heading 2</h2>
            </td>
          </tr>
          <tr>
            <td>
              <h3 className='font-weight-normal'>Heading 3</h3>
            </td>
            <td className='text-right'>
              <h3 className='font-weight-bolder'>Heading 3</h3>
            </td>
          </tr>
          <tr>
            <td>
              <h4 className='font-weight-normal'>Heading 4</h4>
            </td>
            <td className='text-right'>
              <h4 className='font-weight-bolder'>Heading 4</h4>
            </td>
          </tr>
          <tr>
            <td>
              <h5 className='font-weight-normal'>Heading 5</h5>
            </td>
            <td className='text-right'>
              <h5 className='font-weight-bolder'>Heading 5</h5>
            </td>
          </tr>
          <tr>
            <td>
              <h6 className='font-weight-normal'>Heading 6</h6>
            </td>
            <td className='text-right'>
              <h6 className='font-weight-bolder'>Heading 6</h6>
            </td>
          </tr>
        </tbody>
      </Table>
    </Card>
  )
}
export default LightBoldHeadings
