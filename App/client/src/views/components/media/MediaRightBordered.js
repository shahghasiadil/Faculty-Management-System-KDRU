import { Media } from 'reactstrap'
import mediaImg1 from '@src/assets/images/portrait/small/avatar-s-9.jpg'
import mediaImg2 from '@src/assets/images/portrait/small/avatar-s-14.jpg'
import mediaImg3 from '@src/assets/images/portrait/small/avatar-s-21.jpg'

const MediaRightBordered = () => {
  return (
    <div className='media-list media-bordered'>
      <Media>
        <Media className='text-right' body>
          <Media heading>Oat cake</Media>
          Oat cake topping oat cake jelly soufflé donut jelly-o tootsie roll. Candy sweet cake. Tiramisu cookie toffee
          donut. Chocolate pie croissant gummi bears muffin dessert chocolate.
        </Media>
        <Media right href='#'>
          <Media
            className='rounded-circle'
            object
            src={mediaImg1}
            height='64'
            width='64'
            alt='Generic placeholder image'
          />
        </Media>
      </Media>

      <Media>
        <Media className='text-right' body>
          <Media heading>Jelly chocolate cake</Media>
          Jelly chocolate cake lemon drops halvah dragée caramels jelly-o biscuit. Fruitcake jelly beans marzipan sesame
          snaps.Jelly beans cake chocolate cake gummi bears lollipop Fruitcake.
        </Media>
        <Media right href='#'>
          <Media
            className='rounded-circle'
            object
            src={mediaImg2}
            height='64'
            width='64'
            alt='Generic placeholder image'
          />
        </Media>
      </Media>

      <Media>
        <Media className='text-right' body>
          <Media heading>Pudding marshmallow</Media>Pudding marshmallow cheesecake. Chocolate cake apple pie jelly-o
          bear claw ice cream sugar plum biscuit. Lemon drops brownie biscuit jelly-o biscuit gummies.
        </Media>
        <Media right href='#'>
          <Media
            className='rounded-circle'
            object
            src={mediaImg3}
            height='64'
            width='64'
            alt='Generic placeholder image'
          />
        </Media>
      </Media>
    </div>
  )
}

export default MediaRightBordered
