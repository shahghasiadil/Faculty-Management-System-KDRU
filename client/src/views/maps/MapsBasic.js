import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

const MapsBasic = () => {
  const center = [51.5074, 0.1278],
    zoom = 13

  return (
    <Card className='overflow-hidden'>
      <CardHeader>
        <CardTitle tag='h4'>Basic</CardTitle>
      </CardHeader>
      <CardBody>
        <MapContainer center={center} zoom={zoom} className='leaflet-map'>
          <TileLayer
            attribution='&ampcopy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          <Marker position={center} />
        </MapContainer>
      </CardBody>
    </Card>
  )
}
export default MapsBasic
