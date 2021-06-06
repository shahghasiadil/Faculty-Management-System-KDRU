import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import { useRTL } from '@hooks/useRTL'
import SliderColors from './SliderColors'
import SliderValues from './SliderValues'
import SliderVertical from './SliderVertical'
import SliderBehaviour from './SliderBehaviour'
import SliderScalePips from './SliderScalePips'
import SliderWithInput from './SliderWithInput'
import SliderBootstrap from './SlidersBootstrap'
import SliderConnectUpper from './SliderConnectUpper'
import SliderVerticalLimit from './SliderVerticalLimit'
import SliderVerticalTooltip from './SliderVerticalTooltips'
import ExtensionsHeader from '@components/extensions-header'

import '@styles/react/libs/noui-slider/noui-slider.scss'

const Slider = () => {
  const [isRtl, setIsRtl] = useRTL()

  return (
    <Fragment>
      <ExtensionsHeader
        title='Noui Slider'
        subTitle='noUiSlider is a lightweight JavaScript range slider.'
        link='https://github.com/mmarkelov/react-nouislider'
      />

      <Row>
        <Col sm='12'>
          <SliderBootstrap />
        </Col>
        <Col sm='12'>
          <SliderValues direction={isRtl === true ? 'rtl' : 'ltr'} />
        </Col>
        <Col sm='12'>
          <SliderBehaviour direction={isRtl === true ? 'rtl' : 'ltr'} />
        </Col>
        <Col sm='12'>
          <SliderScalePips direction={isRtl === true ? 'rtl' : 'ltr'} />
        </Col>
        <Col sm='12'>
          <SliderColors direction={isRtl === true ? 'rtl' : 'ltr'} />
        </Col>
        <Col sm='12'>
          <SliderWithInput direction={isRtl === true ? 'rtl' : 'ltr'} />
        </Col>
      </Row>
      <Row>
        <Col lg='3' md='6' sm='12'>
          <SliderVertical direction={isRtl === true ? 'rtl' : 'ltr'} />
        </Col>
        <Col lg='3' md='6' sm='12'>
          <SliderConnectUpper direction={isRtl === true ? 'rtl' : 'ltr'} />
        </Col>
        <Col lg='3' md='6' sm='12'>
          <SliderVerticalTooltip direction={isRtl === true ? 'rtl' : 'ltr'} />
        </Col>
        <Col lg='3' md='6' sm='12'>
          <SliderVerticalLimit direction={isRtl === true ? 'rtl' : 'ltr'} />
        </Col>
      </Row>
    </Fragment>
  )
}

export default Slider
