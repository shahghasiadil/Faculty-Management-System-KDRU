export const mediaLeft = (
  <pre>
    <code className='language-jsx'>
      {`

import { Media } from 'reactstrap'
import mediaImg1 from '@src/assets/images/portrait/small/avatar-s-3.jpg'
import mediaImg2 from '@src/assets/images/portrait/small/avatar-s-4.jpg'
import mediaImg3 from '@src/assets/images/portrait/small/avatar-s-5.jpg'

const MediaLeft = () => {
  return (
    <div className='media-list'>
      <Media>
        <Media left href='#'>
          <Media
            object
            src={mediaImg1}
            height='64'
            width='64'
            alt='Generic placeholder image'
          />
        </Media>
        <Media body>
          <Media heading>Cookie candy</Media>
          Cookie candy dragée marzipan gingerbread pie pudding. Brownie
          fruitcake wafer bonbon gummi bears apple pie. Brownie lemon drops
          chocolate cake donut croissant cotton candy.
        </Media>
      </Media>

      <Media>
        <Media left href='#'>
          <Media
            object
            src={mediaImg2}
            height='64'
            width='64'
            alt='Generic placeholder image'
          />
        </Media>
        <Media body>
          <Media heading>Tootsie roll dessert</Media>
          Tootsie roll dessert tart candy canes ice cream gingerbread cookie.
          Jelly jelly-o bear claw bear claw halvah. Biscuit icing pastry tootsie
          roll gingerbread croissant chupa chups.
        </Media>
      </Media>

      <Media>
        <Media left href='#'>
          <Media
            object
            src={mediaImg3}
            height='64'
            width='64'
            alt='Generic placeholder image'
          />
        </Media>
        <Media body>
          <Media heading>Jelly chocolate cake</Media>
          Jelly chocolate cake lemon drops halvah dragée caramels jelly-o
          biscuit. Fruitcake jelly beans marzipan sesame snaps.Jelly beans cake
          chocolate cake gummi bears lollipop.
        </Media>
      </Media>
    </div>
  )
}
export default MediaLeft

`}
    </code>
  </pre>
)

export const mediaRight = (
  <pre>
    <code className='language-jsx'>
      {`
const MediaRight = () => {
  return (
    <div className='media-list'>
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

export default MediaRight
`}
    </code>
  </pre>
)

export const mediaLeftBordered = (
  <pre>
    <code className='language-jsx'>
      {`

import { Media } from 'reactstrap'
import mediaImg1 from '@src/assets/images/portrait/small/avatar-s-8.jpg'
import mediaImg2 from '@src/assets/images/portrait/small/avatar-s-9.jpg'
import mediaImg3 from '@src/assets/images/portrait/small/avatar-s-10.jpg'

const MediaLeftBordered = () => {
  return (
    <div className='media-list media-bordered'>
      <Media>
        <Media left href='#'>
          <Media
            object
            src={mediaImg1}
            height='64'
            width='64'
            alt='Generic placeholder image'
          />
        </Media>
        <Media body>
          <Media heading>Cookie candy</Media>
          Cookie candy dragée marzipan gingerbread pie pudding. Brownie
          fruitcake wafer bonbon gummi bears apple pie. Brownie lemon drops
          chocolate cake donut croissant cotton candy.
        </Media>
      </Media>

      <Media>
        <Media left href='#'>
          <Media
            object
            src={mediaImg2}
            height='64'
            width='64'
            alt='Generic placeholder image'
          />
        </Media>
        <Media body>
          <Media heading>Tootsie roll dessert</Media>
          Tootsie roll dessert tart candy canes ice cream gingerbread cookie.
          Jelly jelly-o bear claw bear claw halvah. Biscuit icing pastry tootsie
          roll gingerbread croissant chupa chups.
        </Media>
      </Media>

      <Media>
        <Media left href='#'>
          <Media
            object
            src={mediaImg3}
            height='64'
            width='64'
            alt='Generic placeholder image'
          />
        </Media>
        <Media body>
          <Media heading>Jelly chocolate cake</Media>
          Jelly chocolate cake lemon drops halvah dragée caramels jelly-o
          biscuit. Fruitcake jelly beans marzipan sesame snaps.Jelly beans cake
          chocolate cake gummi bears lollipop.
        </Media>
      </Media>
    </div>
  )
}
export default MediaLeftBordered
`}
    </code>
  </pre>
)

export const mediaRightBordered = (
  <pre>
    <code className='language-jsx'>
      {`

import { Media } from 'reactstrap'
import mediaImg1 from '@src/assets/images/portrait/small/avatar-s-11.jpg'
import mediaImg2 from '@src/assets/images/portrait/small/avatar-s-12.jpg'
import mediaImg3 from '@src/assets/images/portrait/small/avatar-s-13.jpg'

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
`}
    </code>
  </pre>
)

export const mediaNested = (
  <pre>
    <code className='language-jsx'>
      {`

import { Media } from 'reactstrap'
import mediaImg1 from '@src/assets/images/portrait/small/avatar-s-1.jpg'
import mediaImg2 from '@src/assets/images/portrait/small/avatar-s-2.jpg'

const MediaNested = () => {
  return (
    <div className='media-list'>
      <Media>
        <Media left href='#'>
          <Media
            object
            src={mediaImg1}
            alt='Generic placeholder image'
            height='64'
            width='64'
          />
        </Media>
        <Media body>
          <Media heading>Media heading</Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
          scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in
          vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
          vulputate fringilla. Donec lacinia congue felis in faucibus.
          <Media>
            <Media left href='#'>
              <Media
                object
                src={mediaImg2}
                alt='Generic placeholder image'
                height='64'
                width='64'
              />
            </Media>
            <Media body>
              <Media heading>Nested media heading</Media>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
              in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </Media>
          </Media>
        </Media>
      </Media>
    </div>
  )
}
export default MediaNested
`}
    </code>
  </pre>
)

export const mediaAlignment = (
  <pre>
    <code className='language-jsx'>
      {`

import { Media } from 'reactstrap'
import mediaImg1 from '@src/assets/images/portrait/small/avatar-s-9.jpg'
import mediaImg2 from '@src/assets/images/portrait/small/avatar-s-2.jpg'
import mediaImg3 from '@src/assets/images/portrait/small/avatar-s-5.jpg'

const MediaAlignment = () => {
  return (
    <div className='media-list media-bordered'>
      <Media>
        <Media left href='#'>
          <Media
            object
            src={mediaImg1}
            height='64'
            width='64'
            alt='Generic placeholder image'
          />
        </Media>
        <Media body>
          <Media heading>Cookie candy</Media>
          <p>
            Chocolate bar apple pie lollipop pastry candy canes. Candy soufflé
            brownie toffee tootsie roll. Brownie lemon drops chocolate cake
            donut croissant cotton candy ice cream. Chocolate pudding jelly
            beans powder carrot cake pastry. Sweet candy dragée cake brownie
            cheesecake jelly beans tart lemon drops. Liquorice cake fruitcake
            dragée sesame snaps candy canes biscuit pastry.
          </p>
          <p>
            Cookie caramels brownie carrot cake macaroon brownie pastry. Donut
            powder croissant tootsie roll cake cupcake. Cake tart icing jelly-o
            ice cream tootsie roll bear claw toffee brownie. Sugar plum danish
            muffin gummi bears. Bonbon chocolate bar candy canes sugar plum pie
            gingerbread wafer chupa chups gummi bears. Carrot cake oat cake
            jujubes cookie. Marzipan topping jelly brownie bear claw. Bonbon
            gummies fruitcake liquorice tart sesame snaps.
          </p>
        </Media>
      </Media>

      <Media>
        <Media left href='#' className='align-self-center'>
          <Media
            object
            src={mediaImg2}
            height='64'
            width='64'
            alt='Generic placeholder image'
            middle
          />
        </Media>
        <Media body>
          <Media heading>Tootsie roll dessert</Media>
          <p>
            Tootsie roll dessert tart candy canes ice cream gingerbread cookie.
            Jelly jelly-o bear claw bear claw halvah. Biscuit icing pastry
            tootsie roll gingerbread croissant chupa chups.
          </p>
          <p>
            Dragée topping chocolate dragée icing gingerbread. Ice cream jujubes
            pie sweet roll sweet roll marshmallow powder. Cotton candy dessert
            apple pie chocolate cake dessert lemon drops topping gingerbread
            biscuit. Sugar plum tootsie roll sweet gummi bears soufflé cake
            gummies lollipop jelly beans. Gummies sugar plum apple pie apple pie
            cake bear claw. Jelly beans gingerbread biscuit lollipop.
          </p>
        </Media>
      </Media>

      <Media>
        <Media left href='#' className='align-self-end'>
          <Media
            object
            src={mediaImg3}
            height='64'
            width='64'
            alt='Generic placeholder image'
            bottom
          />
        </Media>
        <Media body>
          <Media heading>Jelly chocolate cake</Media>
          <p>
            Jelly chocolate cake lemon drops halvah dragée caramels jelly-o
            biscuit. Fruitcake jelly beans marzipan sesame snaps.Jelly beans
            cake chocolate cake gummi bears lollipop.
          </p>
          <p>
            Sweet sesame snaps dragée chocolate tiramisu cotton candy sweet roll
            bonbon dessert. Chocolate cake tiramisu dragée. Carrot cake pudding
            marshmallow fruitcake carrot cake. Cotton candy pastry chocolate
            bar. Apple pie sesame snaps macaroon muffin cookie toffee bonbon
            gummies candy canes. Soufflé chocolate bar soufflé tart fruitcake
            muffin. Macaroon sweet roll apple pie jelly beans powder pudding.
          </p>
        </Media>
      </Media>
    </div>
  )
}
export default MediaAlignment

`}
    </code>
  </pre>
)
