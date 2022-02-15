import { Swiper, SwiperSlide } from 'swiper/react'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import img1 from '@src/assets/images/banner/banner-31.jpg'
import img2 from '@src/assets/images/banner/banner-32.jpg'
import img3 from '@src/assets/images/banner/banner-33.jpg'
import img4 from '@src/assets/images/banner/banner-34.jpg'
import img5 from '@src/assets/images/banner/banner-35.jpg'

const params = {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    clickable: true
  }
}

const SwiperMultiSlides = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Multi Slides Per View</CardTitle>
      </CardHeader>
      <CardBody>
        <Swiper {...params}>
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
      </CardBody>
    </Card>
  )
}

export default SwiperMultiSlides
