// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import classnames from 'classnames'
import { Star } from 'react-feather'
import { CardText } from 'reactstrap'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// ** Related products images
import img1 from '@src/assets/images/elements/apple-watch.png'
import img2 from '@src/assets/images/elements/macbook-pro.png'
import img3 from '@src/assets/images/elements/homepod.png'
import img4 from '@src/assets/images/elements/magic-mouse.png'
import img5 from '@src/assets/images/elements/iphone-x.png'

// ** Styles
import '@styles/react/libs/swiper/swiper.scss'

const RelatedProducts = () => {
  SwiperCore.use([Navigation])

  // ** Related products Slides
  const slides = [
    {
      name: 'Apple Watch Series 6',
      brand: 'Apple',
      ratings: 4,
      price: 399.98,
      img: img1
    },
    {
      name: 'Apple MacBook Pro - Silver',
      brand: 'Apple',
      ratings: 2,
      price: 2449.49,
      img: img2
    },
    {
      name: 'Apple HomePod (Space Grey)',
      brand: 'Apple',
      ratings: 3,
      price: 229.29,
      img: img3
    },
    {
      name: 'Magic Mouse 2 - Black',
      brand: 'Apple',
      ratings: 3,
      price: 90.98,
      img: img4
    },
    {
      name: 'iPhone 12 Pro',
      brand: 'Apple',
      ratings: 4,
      price: 1559.99,
      img: img5
    }
  ]

  // ** Slider params
  const params = {
    className: 'swiper-responsive-breakpoints swiper-container px-4 py-2',
    slidesPerView: 5,
    spaceBetween: 55,
    navigation: true,
    breakpoints: {
      1600: {
        slidesPerView: 4,
        spaceBetween: 55
      },
      1300: {
        slidesPerView: 3,
        spaceBetween: 55
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 55
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 55
      }
    }
  }

  return (
    <Fragment>
      <div className='mt-4 mb-2 text-center'>
        <h4>Related Products</h4>
        <CardText>People also search for this items</CardText>
      </div>
      <Swiper {...params}>
        {slides.map(slide => {
          return (
            <SwiperSlide key={slide.name}>
              <a href='/' onClick={e => e.preventDefault()}>
                <div className='item-heading'>
                  <h5 className='text-truncate mb-0'>{slide.name}</h5>
                  <small className='text-body'>by {slide.brand}</small>
                </div>
                <div className='img-container w-50 mx-auto py-75'>
                  <img src={slide.img} alt='swiper 1' className='img-fluid' />
                </div>
                <div className='item-meta'>
                  <ul className='unstyled-list list-inline mb-25'>
                    {new Array(5).fill().map((listItem, index) => {
                      return (
                        <li key={index} className='ratings-list-item mr-25'>
                          <Star
                            className={classnames({
                              'filled-star': index + 1 <= slide.ratings,
                              'unfilled-star': index + 1 > slide.ratings
                            })}
                          />
                        </li>
                      )
                    })}
                  </ul>
                  <CardText className='text-primary mb-0'>${slide.price}</CardText>
                </div>
              </a>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Fragment>
  )
}

export default RelatedProducts
