import SwiperCore, { EffectCube, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import img1 from '@src/assets/images/banner/banner-21.jpg'
import img2 from '@src/assets/images/banner/banner-22.jpg'
import img3 from '@src/assets/images/banner/banner-23.jpg'
import img4 from '@src/assets/images/banner/banner-24.jpg'

const params = {
  effect: 'cube',
  className: 'swiper-cube-effect',
  pagination: {
    clickable: true
  }
}

SwiperCore.use([EffectCube, Pagination])

const SwiperThreeD = ({ isRtl }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>3D Cube Effect</CardTitle>
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
        </Swiper>
      </CardBody>
    </Card>
  )
}

export default SwiperThreeD
