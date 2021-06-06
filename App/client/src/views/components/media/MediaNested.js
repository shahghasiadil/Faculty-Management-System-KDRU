import { Media } from 'reactstrap'
import mediaImg1 from '@src/assets/images/portrait/small/avatar-s-12.jpg'
import mediaImg2 from '@src/assets/images/portrait/small/avatar-s-13.jpg'

const MediaNested = () => {
  return (
    <Media>
      <Media left href='#'>
        <Media className='mr-1' object src={mediaImg1} alt='Generic placeholder image' height='64' width='64' />
      </Media>
      <Media body>
        <Media heading>Media heading</Media>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus
        odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
        Donec lacinia congue felis in faucibus.
        <Media className='mt-3'>
          <Media left href='#'>
            <Media className='mr-1' object src={mediaImg2} alt='Generic placeholder image' height='64' width='64' />
          </Media>
          <Media body>
            <Media heading>Nested media heading</Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras
            purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
            fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Media>
      </Media>
    </Media>
  )
}
export default MediaNested
