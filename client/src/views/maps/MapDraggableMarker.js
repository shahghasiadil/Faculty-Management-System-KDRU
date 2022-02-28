import { useState, useRef } from 'react'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const MapDraggableMarker = () => {
  const [center] = useState({
    lat: 51.505,
    lng: -0.09
  })

  const [marker, setMarker] = useState({
    lat: 51.505,
    lng: -0.09
  })

  const [zoom] = useState(13)

  const [draggable, setDraggable] = useState(true)

  const refmarker = useRef()

  const toggleDraggable = () => {
    setDraggable(!draggable)
  }

  const updatePosition = () => {
    const marker = refmarker.current
    if (marker !== null) {
      setMarker(marker.leafletElement.getLatLng())
    }
  }

  const position = [center.lat, center.lng]
  const markerPosition = [marker.lat, marker.lng]
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Draggable Marker</CardTitle>
      </CardHeader>
      <CardBody>
        <MapContainer center={position} zoom={zoom} className='leaflet-map'>
          <TileLayer
            attribution='&ampcopy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Marker draggable={draggable} onDragend={updatePosition} position={markerPosition} ref={refmarker}>
            <Popup minWidth={90}>
              <span onClick={toggleDraggable}>{draggable ? 'DRAG MARKER' : 'MARKER FIXED'}</span>
            </Popup>
          </Marker>
        </MapContainer>
      </CardBody>
    </Card>
  )
}
export default MapDraggableMarker
