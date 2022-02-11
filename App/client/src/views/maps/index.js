// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import { Row, Col } from 'reactstrap'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Maps
import MapBasic from './MapsBasic'
import MapEvents from './MapEvents'
import MapTooltip from './MapTooltip'
import MapMarkerList from './MapMarkerList'
import MapCustomIcon from './MapCustomIcon'
import MapLayerControl from './MapLayerControl'
import MapDrggableMarker from './MapDraggableMarker'

// ** Styles
import '@styles/react/libs/maps/map-leaflet.scss'

const Maps = () => {
  return (
    <Fragment>
      <Breadcrumbs
        breadCrumbTitle='React Leaflet Maps'
        breadCrumbParent='Charts & Maps'
        breadCrumbActive='Leaflet Maps'
      />
      <Row>
        <Col sm='12'>
          <p>
            React components for{' '}
            <a href='https://github.com/PaulLeCam/react-leaflet' target='_blank' rel='noopener noreferrer'>
              <span role='img' aria-label='leaflet'>
                🍃
              </span>{' '}
              Leaflet Maps
            </a>
          </p>
        </Col>
        <Col sm='12'>
          <MapBasic />
        </Col>
        <Col sm='12'>
          <MapEvents />
        </Col>
        <Col sm='12'>
          <MapTooltip />
        </Col>
        <Col sm='12'>
          <MapLayerControl />
        </Col>
        <Col sm='12'>
          <MapDrggableMarker />
        </Col>
        <Col sm='12'>
          <MapMarkerList />
        </Col>
        <Col sm='12'>
          <MapCustomIcon />
        </Col>
      </Row>
    </Fragment>
  )
}

export default Maps
