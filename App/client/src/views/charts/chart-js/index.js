// ** React Imports
import { Fragment, useContext, useEffect } from 'react'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Third Party Components
import { Row, Col } from 'reactstrap'
import { Chart } from 'react-chartjs-2'

// ** Charts
import BarChart from './ChartjsBarChart'
import LineChart from './ChartjsLineChart'
import AreaChart from './ChartjsAreaChart'
import RadarChart from './ChartjsRadarChart'
import BubbleChart from './ChartjsBubbleChart'
import ScatterChart from './ChartjsScatterChart'
import DoughnutChart from './ChartjsDoughnutChart'
import PolarAreaChart from './ChartjsPolarAreaChart'
import HorizontalBarChart from './ChartjsHorizontalBar'

// ** Custom Hooks
import { useSkin } from '@hooks/useSkin'

// ** Context
import { ThemeColors } from '@src/utility/context/ThemeColors'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'

const ChartJS = () => {
  // ** Context, Hooks & Vars
  const { colors } = useContext(ThemeColors),
    [skin, setSkin] = useSkin(),
    labelColor = skin === 'dark' ? '#b4b7bd' : '#6e6b7b',
    tooltipShadow = 'rgba(0, 0, 0, 0.25)',
    gridLineColor = 'rgba(200, 200, 200, 0.2)',
    lineChartPrimary = '#666ee8',
    lineChartDanger = '#ff4961',
    warningColorShade = '#ffe802',
    warningLightColor = '#FDAC34',
    successColorShade = '#28dac6',
    primaryColorShade = '#836AF9',
    infoColorShade = '#299AFF',
    yellowColor = '#ffe800',
    greyColor = '#4F5D70',
    blueColor = '#2c9aff',
    blueLightColor = '#84D0FF',
    greyLightColor = '#EDF1F4'

  // ** To Set Border Radius On Mount
  useEffect(() => {
    /*eslint-disable */
    Chart.elements.Rectangle.prototype.draw = function () {
      let ctx = this._chart.ctx
      let viewVar = this._view
      let left, right, top, bottom, signX, signY, borderSkipped, radius
      let borderWidth = viewVar.borderWidth
      let cornerRadius = 20
      if (!viewVar.horizontal) {
        left = viewVar.x - viewVar.width / 2
        right = viewVar.x + viewVar.width / 2
        top = viewVar.y
        bottom = viewVar.base
        signX = 1
        signY = top > bottom ? 1 : -1
        borderSkipped = viewVar.borderSkipped || 'bottom'
      } else {
        left = viewVar.base
        right = viewVar.x
        top = viewVar.y - viewVar.height / 2
        bottom = viewVar.y + viewVar.height / 2
        signX = right > left ? 1 : -1
        signY = 1
        borderSkipped = viewVar.borderSkipped || 'left'
      }

      if (borderWidth) {
        let barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom))
        borderWidth = borderWidth > barSize ? barSize : borderWidth
        let halfStroke = borderWidth / 2
        let borderLeft = left + (borderSkipped !== 'left' ? halfStroke * signX : 0)
        let borderRight = right + (borderSkipped !== 'right' ? -halfStroke * signX : 0)
        let borderTop = top + (borderSkipped !== 'top' ? halfStroke * signY : 0)
        let borderBottom = bottom + (borderSkipped !== 'bottom' ? -halfStroke * signY : 0)
        if (borderLeft !== borderRight) {
          top = borderTop
          bottom = borderBottom
        }
        if (borderTop !== borderBottom) {
          left = borderLeft
          right = borderRight
        }
      }

      ctx.beginPath()
      ctx.fillStyle = viewVar.backgroundColor
      ctx.strokeStyle = viewVar.borderColor
      ctx.lineWidth = borderWidth
      let corners = [
        [left, bottom],
        [left, top],
        [right, top],
        [right, bottom]
      ]

      let borders = ['bottom', 'left', 'top', 'right']
      let startCorner = borders.indexOf(borderSkipped, 0)
      if (startCorner === -1) {
        startCorner = 0
      }

      function cornerAt(index) {
        return corners[(startCorner + index) % 4]
      }

      let corner = cornerAt(0)
      ctx.moveTo(corner[0], corner[1])

      for (let i = 1; i < 4; i++) {
        corner = cornerAt(i)
        let nextCornerId = i + 1
        if (nextCornerId == 4) {
          nextCornerId = 0
        }

        let nextCorner = cornerAt(nextCornerId)

        let width = corners[2][0] - corners[1][0],
          height = corners[0][1] - corners[1][1],
          x = corners[1][0],
          y = corners[1][1]

        let radius = cornerRadius

        if (radius > height / 2) {
          radius = height / 2
        }
        if (radius > width / 2) {
          radius = width / 2
        }

        if (!viewVar.horizontal) {
          ctx.moveTo(x + radius, y)
          ctx.lineTo(x + width - radius, y)
          ctx.quadraticCurveTo(x + width, y, x + width, y + radius)
          ctx.lineTo(x + width, y + height - radius)
          ctx.quadraticCurveTo(x + width, y + height, x + width, y + height)
          ctx.lineTo(x + radius, y + height)
          ctx.quadraticCurveTo(x, y + height, x, y + height)
          ctx.lineTo(x, y + radius)
          ctx.quadraticCurveTo(x, y, x + radius, y)
        } else {
          ctx.moveTo(x + radius, y)
          ctx.lineTo(x + width - radius, y)
          ctx.quadraticCurveTo(x + width, y, x + width, y + radius)
          ctx.lineTo(x + width, y + height - radius)
          ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
          ctx.lineTo(x + radius, y + height)
          ctx.quadraticCurveTo(x, y + height, x, y + height)
          ctx.lineTo(x, y + radius)
          ctx.quadraticCurveTo(x, y, x, y)
        }
      }

      ctx.fill()
      if (borderWidth) {
        ctx.stroke()
      }
    }
  }, [])

  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='React ChartJS 2' breadCrumbParent='Charts' breadCrumbActive='ChartJS' />
      <Row className='match-height'>
        <Col sm='12'>
          <p>
            React wrapper for Chart.js. Click{' '}
            <a href='https://github.com/jerairrest/react-chartjs-2' target='_blank' rel='noopener noreferrer'>
              here
            </a>{' '}
            for github repo.
          </p>
        </Col>
        <Col xl='6' sm='12'>
          <BarChart
            successColorShade={successColorShade}
            labelColor={labelColor}
            tooltipShadow={tooltipShadow}
            gridLineColor={gridLineColor}
          />
        </Col>
        <Col xl='6' sm='12'>
          <HorizontalBarChart
            info={colors.info.main}
            labelColor={labelColor}
            tooltipShadow={tooltipShadow}
            gridLineColor={gridLineColor}
          />
        </Col>
        <Col sm='12'>
          <LineChart
            warningColorShade={warningColorShade}
            lineChartDanger={lineChartDanger}
            lineChartPrimary={lineChartPrimary}
            labelColor={labelColor}
            tooltipShadow={tooltipShadow}
            gridLineColor={gridLineColor}
          />
        </Col>
        <Col lg='6' sm='12'>
          <RadarChart labelColor={labelColor} tooltipShadow={tooltipShadow} gridLineColor={gridLineColor} />
        </Col>
        <Col lg='6' sm='12'>
          <PolarAreaChart
            primary={colors.primary.main}
            labelColor={labelColor}
            primaryColorShade={primaryColorShade}
            warningColorShade={warningColorShade}
            infoColorShade={infoColorShade}
            greyColor={greyColor}
            successColorShade={successColorShade}
            tooltipShadow={tooltipShadow}
          />
        </Col>
        <Col sm='12'>
          <BubbleChart
            labelColor={labelColor}
            primaryColorShade={primaryColorShade}
            warningColorShade={warningColorShade}
            tooltipShadow={tooltipShadow}
            gridLineColor={gridLineColor}
          />
        </Col>
        <Col lg='4' sm='12'>
          <DoughnutChart
            tooltipShadow={tooltipShadow}
            successColorShade={successColorShade}
            warningLightColor={warningLightColor}
            primary={colors.primary.main}
          />
        </Col>
        <Col lg='8' sm='12'>
          <ScatterChart
            labelColor={labelColor}
            tooltipShadow={tooltipShadow}
            gridLineColor={gridLineColor}
            primary={colors.primary.main}
            yellowColor={yellowColor}
            successColorShade={successColorShade}
          />
        </Col>
        <Col sm='12'>
          <AreaChart
            labelColor={labelColor}
            tooltipShadow={tooltipShadow}
            gridLineColor={gridLineColor}
            blueColor={blueColor}
            blueLightColor={blueLightColor}
            greyLightColor={greyLightColor}
          />
        </Col>
      </Row>
    </Fragment>
  )
}

export default ChartJS
