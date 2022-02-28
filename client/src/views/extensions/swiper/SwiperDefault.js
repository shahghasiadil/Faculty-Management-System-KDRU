import { Swiper, SwiperSlide } from 'swiper/react'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import img1 from '@src/assets/images/banner/banner-1.jpg'
import img2 from '@src/assets/images/banner/banner-2.jpg'
import img3 from '@src/assets/images/banner/banner-4.jpg'
import img4 from '@src/assets/images/banner/banner-13.jpg'
import img5 from '@src/assets/images/banner/banner-7.jpg'

const SwiperDefault = ({ isRtl }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Default</CardTitle>
      </CardHeader>
      <CardBody>
        <Swiper>
          <SwiperSlide dir={isRtl ? 'rtl' : 'ltr'}>
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

export default SwiperDefault
