import { Card, CardHeader, CardTitle, CardText, CardBody } from 'reactstrap'

const BlockquoteDefault = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>
          Blockquotes <small className='text-muted'>Default</small>
        </CardTitle>
      </CardHeader>

      <CardBody>
        <CardText>
          Left aligned basic blockquotes. Use text utilities classes like <code>.text-center / .text-right</code> as
          needed to change the alignment of your blockquote.
        </CardText>
        <blockquote className='blockquote'>
          <p>Design is not just what it looks like and feels like. Design is how it works.</p>
        </blockquote>
      </CardBody>
    </Card>
  )
}
export default BlockquoteDefault
