export const carouselBasic = (
  <pre>
    <code className='language-jsx'>
      {`
import React, { useState } from 'react'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap'
import sliderImage1 from '@src/assets/images/slider/01.jpg'
import sliderImage2 from '@src/assets/images/slider/02.jpg'
import sliderImage3 from '@src/assets/images/slider/03.jpg'

const images = [
  {
    src: sliderImage1,
    id: 1
  },
  {
    src: sliderImage2,
    id: 2
  },
  {
    src: sliderImage3,
    id: 3
  }
]

const CarouselBasic = () => {
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
      </CarouselItem>
    )
  })
  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={images}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction='prev'
        directionText='Previous'
        onClickHandler={previous}
      />
      <CarouselControl
        direction='next'
        directionText='Next'
        onClickHandler={next}
      />
    </Carousel>
  )
}

export default CarouselBasic
    `}
    </code>
  </pre>
)

export const carouselCaptions = (
  <pre>
    <code className='language-jsx'>
      {`
import React, { useState } from 'react'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap'
import sliderImage1 from '@src/assets/images/slider/03.jpg'
import sliderImage2 from '@src/assets/images/slider/04.jpg'
import sliderImage3 from '@src/assets/images/slider/05.jpg'

const images = [
  {
    src: sliderImage1,
    id: 1,
    header: <span className="text-white">Slide 1 Header</span>
    caption: 'Cupcake ipsum dolor sit amet toffee lemon drops bonbon.'
  },
  {
    src: sliderImage2,
    id: 2,
    header: <span className="text-white">Slide 2 Header</span>
    caption: 'Cheesecake caramels wafer pie lollipop.'
  },
  {
    src: sliderImage3,
    id: 3,
    header: <span className="text-white">Slide 3 Header</span>
    caption: 'Candy canes toffee gummies soufflé fruitcake dragée icing.'
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
        <CarouselCaption
          captionText={item.caption}
          captionHeader={<span className="text-center">item.header</span>}
        />
      </CarouselItem>
    )
  })
  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={images}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction='prev'
        directionText='Previous'
        onClickHandler={previous}
      />
      <CarouselControl
        direction='next'
        directionText='Next'
        onClickHandler={next}
      />
    </Carousel>
  )
}

export default CarouselCaptions
    `}
    </code>
  </pre>
)

export const carouselUncontrolled = (
  <pre>
    <code className='language-jsx'>
      {`

import { UncontrolledCarousel } from 'reactstrap'
import sliderImage1 from '@src/assets/images/slider/06.jpg'
import sliderImage2 from '@src/assets/images/slider/02.jpg'
import sliderImage3 from '@src/assets/images/slider/05.jpg'

const items = [
  {
    src: sliderImage1,
    altText: 'Slide 1',
  },
  {
    src: sliderImage2,
    altText: 'Slide 2',
  },
  {
    src: sliderImage3,
    altText: 'Slide 3',
  }
]

const CarouselUncontrolled = () => {
  return <UncontrolledCarousel items={items} />
}
export default CarouselUncontrolled
        `}
    </code>
  </pre>
)

export const carouselInterval = (
  <pre>
    <code className='language-jsx'>
      {`

import { UncontrolledCarousel } from 'reactstrap'
import sliderImage1 from '@src/assets/images/slider/05.jpg'
import sliderImage2 from '@src/assets/images/slider/04.jpg'
import sliderImage3 from '@src/assets/images/slider/01.jpg'

const images = [
  {
    src: sliderImage1,
    id: 1,
    altText: 'Slide 1',
  },
  {
    src: sliderImage2,
    id: 2,
    altText: 'Slide 2',
  },
  {
    src: sliderImage3,
    id: 3,
    altText: 'Slide 3',
  }
]

const CarouselInterval = () => {
  return <UncontrolledCarousel items={images} interval='500' />
}
export default CarouselInterval`}
    </code>
  </pre>
)

export const carouselKeyboard = (
  <pre>
    <code className='language-jsx'>
      {`

import { UncontrolledCarousel } from 'reactstrap'
import { carouselKeyboard } from './CarouselSourceCode'
import sliderImage1 from '@src/assets/images/slider/04.jpg'
import sliderImage2 from '@src/assets/images/slider/01.jpg'
import sliderImage3 from '@src/assets/images/slider/05.jpg'

const images = [
  {
    src: sliderImage1,
    id: 1,
    altText: 'Slide 1',
  },
  {
    src: sliderImage2,
    id: 2,
    altText: 'Slide 2',
  },
  {
    src: sliderImage3,
    id: 3,
    altText: 'Slide 3',
  }
]

const CarouselKeyboard = () => {
  return <UncontrolledCarousel items={images} keyboard={false} />
}
export default CarouselKeyboard
            `}
    </code>
  </pre>
)

export const carouselPause = (
  <pre>
    <code className='language-jsx'>
      {`

import { UncontrolledCarousel } from 'reactstrap'
import sliderImage1 from '@src/assets/images/slider/02.jpg'
import sliderImage2 from '@src/assets/images/slider/06.jpg'
import sliderImage3 from '@src/assets/images/slider/05.jpg'

const images = [
  {
    src: sliderImage1,
    id: 1,
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: <span className="text-white">Slide 1 Header</span>
  },
  {
    src: sliderImage2,
    id: 2,
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: <span className="text-white">Slide 2 Header</span>
  },
  {
    src: sliderImage3,
    id: 3,
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: <span className="text-white">Slide 3 Header</span>
  }
]

const CarouselPause = () => {
  return <UncontrolledCarousel items={images} pause='hover' />
}
export default CarouselPause
`}
    </code>
  </pre>
)
