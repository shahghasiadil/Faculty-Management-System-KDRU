import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

const Icon1 = new L.Icon({
  iconUrl: require('@src/assets/images/svg/map-marker.png').default,
  iconRetinaUrl: require('@src/assets/images/svg/map-marker.png').default,
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [55, 55],
  shadowSize: [68, 95],
  shadowAnchor: [20, 92]
})

const Icon2 = new L.Icon({
  iconUrl: require('@src/assets/images/svg/map-marker-3.png').default,
  iconRetinaUrl: require('@src/assets/images/svg/map-marker-3.png').default,
  iconAnchor: [20, 40],
  popupAnchor: [0, -35],
  iconSize: [55, 55],
  shadowSize: [29, 40],
  shadowAnchor: [7, 40]
})

const MapCustomIcon = () => {
  const lat = 51.505
  const lng = -0.09
  const zoom = 15

  const position = [lat, lng]
  const position2 = [51.501, -0.09]
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Custom Icons</CardTitle>
      </CardHeader>
      <CardBody>
        <MapContainer center={position} zoom={zoom} className='leaflet-map'>
          <TileLayer
            attribution='&ampcopy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Marker position={position} icon={Icon1}>
            <Popup>This is a popup</Popup>
          </Marker>
          <Marker position={position2} icon={Icon2}>
            <Popup>You're here.</Popup>
          </Marker>
        </MapContainer>
      </CardBody>
    </Card>
  )
}
export default MapCustomIcon
