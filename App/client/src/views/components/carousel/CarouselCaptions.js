import { useState } from 'react'
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap'
import sliderImage1 from '@src/assets/images/slider/09.jpg'
import sliderImage2 from '@src/assets/images/slider/08.jpg'
import sliderImage3 from '@src/assets/images/slider/10.jpg'

const images = [
  {
    src: sliderImage1,
    id: 1,
    header: 'Slide 1',
    caption:
      'Donut jujubes I love topping I love sweet. Jujubes I love brownie gummi bears I love donut sweet chocolate. Tart chocolate marshmallow.Tart carrot cake muffin.'
  },
  {
    src: sliderImage2,
    id: 2,
    header: 'Slide 2',
    caption:
      'Tart macaroon marzipan I love soufflé apple pie wafer. Chocolate bar jelly caramels jujubes chocolate cake gummies. Cupcake cake I love cake danish carrot cake.'
  },
  {
    src: sliderImage3,
    id: 3,
    header: 'Slide 3',
    caption:
      'Pudding sweet pie gummies. Chocolate bar sweet tiramisu cheesecake chocolate cotton candy pastry muffin Marshmallow cake powder icing.'
  }
]

const CarouselCaptions = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(0)

  const onExiting = () => {
    setAnimating(true)
  }

  const onExited = () => {
    setAnimating(false)
  }

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = newIndex => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = images.map(item => {
    return (
      <CarouselItem onExiting={onExiting} onExited={onExited} key={item.id}>
        <img src={item.src} className='img-fluid' alt={item.id} />
        <CarouselCaption captionText={item.caption} captionHeader={<span className='text-white'>{item.header}</span>} />
      </CarouselItem>
    )
  })
  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous} keyboard={false}>
      <CarouselIndicators items={images} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction='prev' directionText='Previous' onClickHandler={previous} />
      <CarouselControl direction='next' directionText='Next' onClickHandler={next} />
    </Carousel>
  )
}

export default CarouselCaptions
