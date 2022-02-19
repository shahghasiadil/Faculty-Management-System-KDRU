import img1 from '@src/assets/images/portrait/small/avatar-s-5.jpg'
import img2 from '@src/assets/images/portrait/small/avatar-s-3.jpg'
import { Card, CardHeader, CardTitle, CardText, CardBody, Media } from 'reactstrap'

const BlockquotesAvatar = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Blockquotes with avatar</CardTitle>
      </CardHeader>

      <CardBody>
        <CardText>
          You can create a blockquot with avatar using <code>media</code> component.
        </CardText>
        <blockquote className='blockquote pl-1 border-left-primary border-left-3'>
          <Media>
            <Media className='mr-1' left>
              <Media object src={img1} alt='Generic placeholder image' height='64' width='64' />
            </Media>
            <Media body>Sometimes life is going to hit you in the head with a brick. Don't lose faith.</Media>
          </Media>
          <footer className='blockquote-footer text-right'>
            Steve Jobs
            <cite title='Source Title'>Entrepreneur</cite>
          </footer>
        </blockquote>
        <CardText className='mt-2'>Blockquotes with avatar rounded image example</CardText>
        <blockquote className='blockquote'>
          <Media>
            <Media className='mr-1' left>
              <Media
                className='rounded-circle'
                object
                src={img2}
                alt='Generic placeholder image'
                height='64'
                width='64'
              />
            </Media>
            <Media body>Sometimes life is going to hit you in the head with a brick. Don't lose faith.</Media>
          </Media>
          <footer className='blockquote-footer text-right'>
            Steve Jobs
            <cite title='Source Title'>Entrepreneur</cite>
          </footer>
        </blockquote>
      </CardBody>
    </Card>
  )
}
export default BlockquotesAvatar
