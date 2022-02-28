import { Fragment } from 'react'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const MyPopupMarker = ({ position, content }) => (
  <Marker position={position}>
    <Popup>{content}</Popup>
  </Marker>
)

const MyMarkersList = ({ markers }) => {
  const items = markers.map(({ key, ...props }) => <MyPopupMarker key={key} {...props} />)
  return <Fragment>{items}</Fragment>
}

const MapMarkerList = () => {
  const markers = [
    { key: 'marker1', position: [51.52, -0.1], content: 'My first popup' },
    { key: 'marker2', position: [51.51, -0.1], content: 'My second popup' },
    { key: 'marker3', position: [51.49, -0.1], content: 'My third popup' }
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Marker List</CardTitle>
      </CardHeader>
      <CardBody>
        <MapContainer center={[51.505, -0.09]} zoom={13} className='leaflet-map'>
          <TileLayer
            attribution='&ampcopy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <MyMarkersList markers={markers} />
        </MapContainer>
      </CardBody>
    </Card>
  )
}
export default MapMarkerList
