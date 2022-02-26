import { Card, CardHeader, CardTitle, CardText, CardBody } from 'reactstrap'

const NamingSource = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Naming a source</CardTitle>
      </CardHeader>

      <CardBody>
        <CardText>
          Add a <code className='highlighter-rouge'>&lt;footer className="blockquote-footer"&gt;</code> for identifying
          the source. Wrap the name of the source work in <code className='highlighter-rouge'>&lt;cite&gt;</code>.
        </CardText>
        <blockquote className='blockquote mb-0'>
          <CardText className='mb-0'>
            Being the richest man in the cemetery doesn't matter to me. Going to bed at night saying we've done
            something wonderful, that's what matters to me.
          </CardText>
          <footer className='blockquote-footer'>
            Steve Jobs
            <cite title='Source Title'>Entrepreneur</cite>
          </footer>
        </blockquote>
      </CardBody>
    </Card>
  )
}
export default NamingSource
