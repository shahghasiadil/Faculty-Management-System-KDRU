import { Fragment } from 'react'
import { useRTL } from '@hooks/useRTL'
import SwiperCore, {
  Navigation,
  Pagination,
  EffectFade,
  EffectCube,
  EffectCoverflow,
  Autoplay,
  Lazy,
  Virtual
} from 'swiper'
import SwiperDefault from './SwiperDefault'
import SwiperNavigation from './SwiperNavigation'
import SwiperPagination from './SwiperPagination'
import SwiperProgress from './SwiperProgress'
import SwiperMultiSlides from './SwiperMultiSlides'
import SwiperRows from './SwiperRows'
import CenterSlidesStyle1 from './CenteredSlidesStyle1'
import CenterSlidesStyle2 from './CenteredSlidesStyle2'
import SwiperFade from './SwiperFade'
import SwiperCube from './3DEffect'
import SwiperCoverflow from './SwiperCoverflow'
import SwiperAutoplay from './SwiperAutoplay'
import SwiperGallery from './SwiperGallery'
import SwiperLazy from './SwiperLazyload'
import SwiperResponsive from './SwiperResponsive'
import SwiperVirtual from './SwiperVirtual'
import ExtensionsHeader from '@components/extensions-header'
import { Row, Col } from 'reactstrap'

import '@styles/react/libs/swiper/swiper.scss'

SwiperCore.use([Navigation, Pagination, EffectFade, EffectCube, EffectCoverflow, Autoplay, Lazy, Virtual])

const Slider = () => {
  const [isRtl, setIsRtl] = useRTL()

  return (
    <Fragment>
      <ExtensionsHeader
        title='Swiper'
        subTitle='Swiper is the most modern free mobile touch slider'
        link='https://swiperjs.com/'
      />
      <Row>
        <Col sm='12'>
          <SwiperDefault isRtl={isRtl} />
        </Col>
        <Col sm='12'>
          <SwiperNavigation isRtl={isRtl} />
        </Col>
        <Col sm='12'>
          <SwiperPagination isRtl={isRtl} />
        </Col>
        <Col sm='12'>
          <SwiperProgress isRtl={isRtl} />
        </Col>
        <Col sm='12'>
          <SwiperMultiSlides isRtl={isRtl} />
        </Col>
        <Col sm='12'>
          <SwiperRows isRtl={isRtl} />
        </Col>
        <Col sm='12'>
          <CenterSlidesStyle1 isRtl={isRtl} />
        </Col>
        <Col sm='12'>
          <CenterSlidesStyle2 isRtl={isRtl} />
        </Col>
        <Col sm='12'>
          <SwiperFade isRtl={isRtl} />
        </Col>
        <Col sm='12'>
          <SwiperCube isRtl={isRtl} />
        </Col>
        <Col sm='12'>
          <SwiperCoverflow isRtl={isRtl} />
        </Col>
        <Col sm='12'>
          <SwiperAutoplay isRtl={isRtl} />
        </Col>
        <Col sm='12'>
          <SwiperGallery isRtl={isRtl} />
        </Col>
        <Col sm='12'>
          <SwiperLazy isRtl={isRtl} />
        </Col>
        <Col sm='12'>
          <SwiperResponsive isRtl={isRtl} />
        </Col>
        <Col sm='12'>
          <SwiperVirtual isRtl={isRtl} />
        </Col>
      </Row>
    </Fragment>
  )
}

export default Slider
