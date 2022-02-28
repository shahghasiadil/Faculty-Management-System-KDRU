import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import {
  Circle,
  FeatureGroup,
  LayerGroup,
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  Rectangle,
  TileLayer
} from 'react-leaflet'

const { BaseLayer, Overlay } = LayersControl

const center = [51.505, -0.09]
const rectangle = [
  [51.49, -0.08],
  [51.5, -0.06]
]

const MapLayerControl = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Layer Control</CardTitle>
      </CardHeader>
      <CardBody>
        <MapContainer center={center} zoom={13} className='leaflet-map'>
          <LayersControl position='topright'>
            <BaseLayer checked name='OpenStreetMap.Mapnik'>
              <TileLayer
                attribution='&ampcopy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              />
            </BaseLayer>
            <BaseLayer name='OpenStreetMap.BlackAndWhite'>
              <TileLayer
                attribution='&ampcopy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
              />
            </BaseLayer>
            <Overlay name='Marker with popup'>
              <Marker position={center}>
                <Popup>You're here.</Popup>
              </Marker>
            </Overlay>
            <Overlay checked name='Layer group with circles'>
              <LayerGroup>
                <Circle center={center} fillColor='blue' radius={200} />
                <Circle center={center} fillColor='red' radius={100} stroke={false} />
                <LayerGroup>
                  <Circle center={[51.51, -0.08]} color='green' fillColor='green' radius={100} />
                </LayerGroup>
              </LayerGroup>
            </Overlay>
            <Overlay name='Feature group'>
              <FeatureGroup color='purple'>
                <Popup>Popup </Popup>
                <Circle center={[51.51, -0.06]} radius={200} />
                <Rectangle bounds={rectangle} />
              </FeatureGroup>
            </Overlay>
          </LayersControl>
        </MapContainer>
      </CardBody>
    </Card>
  )
}
export default MapLayerControl
