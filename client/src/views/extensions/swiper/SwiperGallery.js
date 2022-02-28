import { useState } from 'react'
import SwiperCore, { Thumbs } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import img1 from '@src/assets/images/banner/banner-11.jpg'
import img2 from '@src/assets/images/banner/banner-12.jpg'
import img3 from '@src/assets/images/banner/banner-13.jpg'
import img4 from '@src/assets/images/banner/banner-14.jpg'
import img5 from '@src/assets/images/banner/banner-15.jpg'

SwiperCore.use([Thumbs])

const SwiperGallery = ({ isRtl }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  const params = {
    className: 'swiper-gallery',
    spaceBetween: 10,
    navigation: true,
    pagination: {
      clickable: true
    },
    thumbs: { swiper: thumbsSwiper }
  }

  const paramsThumbs = {
    className: 'gallery-thumbs',
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    onSwiper: setThumbsSwiper
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Gallery</CardTitle>
      </CardHeader>
      <CardBody>
        <div className='swiper-gallery'>
          <Swiper dir={isRtl ? 'rtl' : 'ltr'} {...params}>
            <SwiperSlide>
              <img src={img1} alt='swiper 1' className='img-fluid' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt='swiper 2' className='img-fluid' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt='swiper 3' className='img-fluid' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} alt='swiper 4' className='img-fluid' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img5} alt='swiper 5' className='img-fluid' />
            </SwiperSlide>
          </Swiper>
          <Swiper {...paramsThumbs}>
            <SwiperSlide>
              <img src={img1} alt='swiper 1' className='img-fluid' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt='swiper 2' className='img-fluid' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt='swiper 3' className='img-fluid' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} alt='swiper 4' className='img-fluid' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img5} alt='swiper 5' className='img-fluid' />
            </SwiperSlide>
          </Swiper>
        </div>
      </CardBody>
    </Card>
  )
}

export default SwiperGallery
