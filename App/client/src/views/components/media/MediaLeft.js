import { Media } from 'reactstrap'
import mediaImg1 from '@src/assets/images/portrait/small/avatar-s-3.jpg'
import mediaImg2 from '@src/assets/images/portrait/small/avatar-s-6.jpg'
import mediaImg3 from '@src/assets/images/portrait/small/avatar-s-1.jpg'

const MediaLeft = () => {
  return (
    <div className='media-list'>
      <Media>
        <Media left href='#'>
          <Media object src={mediaImg1} height='64' width='64' alt='Generic placeholder image' />
        </Media>
        <Media body>
          <Media heading>Cookie candy</Media>
          Cookie candy dragée marzipan gingerbread pie pudding. Brownie fruitcake wafer bonbon gummi bears apple pie.
          Brownie lemon drops chocolate cake donut croissant cotton candy.
        </Media>
      </Media>

      <Media>
        <Media left href='#'>
          <Media object src={mediaImg2} height='64' width='64' alt='Generic placeholder image' />
        </Media>
        <Media body>
          <Media heading>Tootsie roll dessert</Media>
          Tootsie roll dessert tart candy canes ice cream gingerbread cookie. Jelly jelly-o bear claw bear claw halvah.
          Biscuit icing pastry tootsie roll gingerbread croissant chupa chups.
        </Media>
      </Media>

      <Media>
        <Media left href='#'>
          <Media object src={mediaImg3} height='64' width='64' alt='Generic placeholder image' />
        </Media>
        <Media body>
          <Media heading>Jelly chocolate cake</Media>
          Jelly chocolate cake lemon drops halvah dragée caramels jelly-o biscuit. Fruitcake jelly beans marzipan sesame
          snaps.Jelly beans cake chocolate cake gummi bears lollipop.
        </Media>
      </Media>
    </div>
  )
}
export default MediaLeft
