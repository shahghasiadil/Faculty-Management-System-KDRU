import { Card, CardHeader, CardTitle, CardBody, Button } from 'reactstrap'
import { Swiper, SwiperSlide } from 'swiper/react'

const SwiperVirtual = ({ isRtl }) => {
  const slides = []
  for (let i = 0; i < 10; i += 1) {
    slides.push(<SwiperSlide key={`slide-${i + 1}`}>Slide {i + 1}</SwiperSlide>)
  }

  let instance = null

  const appendSlide = () => {
    if (instance !== null) {
      slides.push(<SwiperSlide key={`slide-${slides.length + 1}`}>Slide {slides.length + 1}</SwiperSlide>)
      instance.update(true)
    }
  }

  const removeSlide = () => {
    if (instance !== null) {
      instance.removeAllSlides()
      slides.length = 0
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Virtual</CardTitle>
      </CardHeader>
      <CardBody>
        <Swiper
          dir={isRtl ? 'rtl' : 'ltr'}
          className='swiper-virtual'
          spaceBetween={50}
          slidesPerView={3}
          centeredSlides
          pagination={{ clickable: true }}
          onSwiper={swiper => (instance = swiper.virtual)}
          virtual
        >
          {slides}
        </Swiper>

        <div className='demo-inline-spacing'>
          <Button color='primary' outline onClick={appendSlide}>
            Append Slide
          </Button>
          <Button className='mr-0' color='primary' outline onClick={removeSlide}>
            Remove All Slides
          </Button>
        </div>
      </CardBody>
    </Card>
  )
}

export default SwiperVirtual
