import { UncontrolledCarousel } from 'reactstrap'
import sliderImage1 from '@src/assets/images/slider/01.jpg'
import sliderImage2 from '@src/assets/images/slider/02.jpg'
import sliderImage3 from '@src/assets/images/slider/03.jpg'

const items = [
  {
    key: 1,
    src: sliderImage2,
    caption: '',
    altText: 'Slide 1'
  },
  {
    key: 2,
    src: sliderImage3,
    caption: '',
    altText: 'Slide 2'
  },
  {
    key: 3,
    src: sliderImage1,
    caption: '',
    altText: 'Slide 3'
  }
]

const CarouselUncontrolled = () => {
  return <UncontrolledCarousel items={items} keyboard={false} />
}
export default CarouselUncontrolled
