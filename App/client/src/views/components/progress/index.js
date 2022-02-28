import { Fragment, useEffect } from 'react'
import { Row, Col, CardText } from 'reactstrap'
import Prism from 'prismjs'
import BreadCrumbs from '@components/breadcrumbs'
import Card from '@components/card-snippet'
import ProgressBasic from './ProgressBasic'
import ProgressColored from './ProgressColored'
import ProgressMultipleStacked from './ProgressMultipleStacked'
import ProgressLabeled from './ProgressLabeled'
import ProgressStriped from './ProgressStriped'
import ProgressAnimated from './ProgressAnimated'
import {
  progressAnimated,
  progressBasic,
  progressColored,
  progressMultipleStacked,
  progressLabeled,
  progressStriped
} from './ProgressSourceCode'

const Progress = () => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <Fragment>
      <BreadCrumbs breadCrumbTitle='Progress' breadCrumbParent='Components' breadCrumbActive='Progress' />
      <Row>
        <Col lg='12'>
          <Card title='Basic Progress' code={progressBasic}>
            <ProgressBasic />
          </Card>
        </Col>
        <Col lg='12'>
          <Card title='Colored Progress' code={progressColored}>
            <CardText>
              Use <code>progress-bar-[color]</code> class with progress to change progress color.
            </CardText>
            <ProgressColored />
          </Card>
        </Col>
        <Col lg='12'>
          <Card title='Labeled Progress' code={progressLabeled}>
            <CardText>Add text between progress tag to create a labeled progress bar.</CardText>
            <ProgressLabeled />
          </Card>
        </Col>
        <Col lg='12'>
          <Card title='Multiple Stacked' code={progressMultipleStacked}>
            <CardText>
              To create a multi colored progress wrap all of your progresses in with <code>multi</code> prop.
            </CardText>
            <ProgressMultipleStacked />
          </Card>
        </Col>
        <Col lg='12'>
          <Card title='Striped Progress' code={progressStriped}>
            <CardText>
              Use <code>striped</code> prop with progress to create a striped progress bar.
            </CardText>
            <ProgressStriped />
          </Card>
        </Col>
        <Col lg='12'>
          <Card title='Animated Progress' code={progressAnimated}>
            <CardText>
              Use <code>animated</code> prop with progress to animate progress bar.
            </CardText>
            <ProgressAnimated />
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}
export default Progress
