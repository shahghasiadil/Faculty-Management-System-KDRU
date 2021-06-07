import { Swiper, SwiperSlide } from 'swiper/react'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import img1 from '@src/assets/images/banner/banner-9.jpg'
import img2 from '@src/assets/images/banner/banner-8.jpg'
import img3 from '@src/assets/images/banner/banner-7.jpg'
import img4 from '@src/assets/images/banner/banner-20.jpg'
import img5 from '@src/assets/images/banner/banner-5.jpg'
import img6 from '@src/assets/images/banner/banner-4.jpg'

const params = {
  lazy: true,
  navigation: true,
  pagination: {
    clickable: true
  }
}

const SwiperLazyLoad = ({ isRtl }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Lazy Loading</CardTitle>
      </CardHeader>
      <CardBody>
        <Swiper dir={isRtl ? 'rtl' : 'ltr'} {...params}>
          <SwiperSlide>
            <img src={img1} alt='swiper 1' className='swiper-lazy img-fluid' />
            <div className='swiper-lazy-preloader swiper-lazy-preloader-white'></div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt='swiper 2' className='swiper-lazy img-fluid' />
            <div className='swiper-lazy-preloader swiper-lazy-preloader-white'></div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt='swiper 3' className='swiper-lazy img-fluid' />
            <div className='swiper-lazy-preloader swiper-lazy-preloader-white'></div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt='swiper 4' className='swiper-lazy img-fluid' />
            <div className='swiper-lazy-preloader swiper-lazy-preloader-white'></div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} alt='swiper 5' className='swiper-lazy img-fluid' />
            <div className='swiper-lazy-preloader swiper-lazy-preloader-white'></div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img6} alt='swiper 6' className='swiper-lazy img-fluid' />
            <div className='swiper-lazy-preloader swiper-lazy-preloader-white'></div>
          </SwiperSlide>
        </Swiper>
      </CardBody>
    </Card>
  )
}

export default SwiperLazyLoad
