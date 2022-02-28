import { Swiper, SwiperSlide } from 'swiper/react'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import img1 from '@src/assets/images/banner/banner-26.jpg'
import img2 from '@src/assets/images/banner/banner-39.jpg'
import img3 from '@src/assets/images/banner/banner-28.jpg'
import img4 from '@src/assets/images/banner/banner-29.jpg'
import img5 from '@src/assets/images/banner/banner-30.jpg'
import img6 from '@src/assets/images/banner/banner-31.jpg'
import img7 from '@src/assets/images/banner/banner-32.jpg'
import img8 from '@src/assets/images/banner/banner-33.jpg'
import img9 from '@src/assets/images/banner/banner-34.jpg'
import img10 from '@src/assets/images/banner/banner-35.jpg'

const params = {
  slidesPerView: 3,
  slidesPerColumn: 2,
  spaceBetween: 30,
  slidesPerColumnFill: 'row',
  pagination: {
    clickable: true
  }
}

const SwiperMultiSlides = ({ isRtl }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Multi Row Slides Layout</CardTitle>
      </CardHeader>
      <CardBody>
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
          <SwiperSlide>
            <img src={img6} alt='swiper 6' className='img-fluid' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img7} alt='swiper 7' className='img-fluid' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img8} alt='swiper 8' className='img-fluid' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img9} alt='swiper 9' className='img-fluid' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img10} alt='swiper 10' className='img-fluid' />
          </SwiperSlide>
        </Swiper>
      </CardBody>
    </Card>
  )
}

export default SwiperMultiSlides
