import { Swiper, SwiperSlide } from 'swiper/react'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import { Play, DollarSign, HelpCircle, FileText, Archive } from 'react-feather'

const SwiperCenterSlidesStyle = ({ isRtl }) => {
  const params = {
    className: 'swiper-centered-slides-2 p-1',
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    slideToClickedSlide: true
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Centered Slides option-2</CardTitle>
      </CardHeader>
      <CardBody>
        <Swiper dir={isRtl ? 'rtl' : 'ltr'} {...params}>
          <SwiperSlide className='rounded swiper-shadow py-1 px-3 d-flex align-items-center'>
            <Play size={18} />
            <span className='swiper-text align-middle ml-50'>Getting Started</span>
          </SwiperSlide>
          <SwiperSlide className='rounded swiper-shadow py-1 px-3 d-flex align-items-center'>
            <DollarSign size={18} />
            <span className='swiper-text align-middle ml-50'>Pricing & Plans</span>
          </SwiperSlide>
          <SwiperSlide className='rounded swiper-shadow py-1 px-3 d-flex align-items-center'>
            <HelpCircle size={18} />
            <span className='swiper-text align-middle ml-50'>Sales Questions</span>
          </SwiperSlide>
          <SwiperSlide className='rounded swiper-shadow py-1 px-3 d-flex align-items-center'>
            <FileText size={18} />
            <span className='swiper-text align-middle ml-50'>User Guides</span>
          </SwiperSlide>
          <SwiperSlide className='rounded swiper-shadow py-1 px-3 d-flex align-items-center'>
            <Archive size={18} />
            <span className='swiper-text align-middle ml-50'>General Guides</span>
          </SwiperSlide>
        </Swiper>
      </CardBody>
    </Card>
  )
}

export default SwiperCenterSlidesStyle
