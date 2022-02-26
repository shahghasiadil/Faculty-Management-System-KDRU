import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import {
  Circle,
  CircleMarker,
  MapContainer,
  Marker,
  Polygon,
  Popup,
  Rectangle,
  TileLayer,
  Tooltip
} from 'react-leaflet'

const center = [51.505, -0.09]

const multiPolygon = [
  [
    [51.51, -0.12],
    [51.51, -0.13],
    [51.53, -0.13]
  ],
  [
    [51.51, -0.05],
    [51.51, -0.07],
    [51.53, -0.07]
  ]
]

const rectangle = [
  [51.49, -0.08],
  [51.5, -0.06]
]

const MapTooltip = () => {
  const [clicked, setClicked] = useState(0)

  const onClickCircle = () => {
    setClicked(clicked + 1)
  }

  const clickedText = clicked === 0 ? 'Click this Circle to change the Tooltip text' : `Circle click: ${clicked}`

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Tooltip</CardTitle>
      </CardHeader>
      <CardBody>
        <MapContainer center={center} zoom={13} className='leaflet-map'>
          <TileLayer
            attribution='&ampcopy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Circle center={center} fillColor='blue' onClick={onClickCircle} radius={200}>
            <Tooltip>{clickedText}</Tooltip>
          </Circle>
          <CircleMarker center={[51.51, -0.12]} color='red' radius={20}>
            <Tooltip>Tooltip for CircleMarker</Tooltip>
          </CircleMarker>
          <Marker position={[51.51, -0.09]}>
            <Popup>Popup for Marker</Popup>
            <Tooltip>Tooltip for Marker</Tooltip>
          </Marker>
          <Polygon color='purple' positions={multiPolygon}>
            <Tooltip sticky>sticky Tooltip for Polygon</Tooltip>
          </Polygon>
          <Rectangle bounds={rectangle} color='black'>
            <Tooltip direction='bottom' offset={[0, 20]} opacity={1} permanent>
              permanent Tooltip for Rectangle
            </Tooltip>
          </Rectangle>
        </MapContainer>
      </CardBody>
    </Card>
  )
}
export default MapTooltip
