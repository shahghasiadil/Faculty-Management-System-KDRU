import { Fragment, useEffect } from 'react'
import Prism from 'prismjs'
import { Row, Col, CardText } from 'reactstrap'
import FilledButtons from './ButtonsFilled'
import OutlineButtons from './ButtonsOutline'
import FlatButtons from './ButtonsFlat'
import GradientButtons from './ButtonsGradient'
import ReliefButtons from './ButtonsRelief'
import RoundButtons from './ButtonsRound'
import IconButtons from './ButtonsIcon'
import IconOnlyButtons from './ButtonsIconOnly'
import ButtonGroups from './ButtonGroup'
import ButtonSizes from './ButtonSizes'
import ButtonBlock from './ButtonBlock'
import ButtonTags from './ButtonTags'
import ButtonCheckboxRadio from './ButtonCheckboxRadio'
import BreadCrumbs from '@components/breadcrumbs'
import Card from '@components/card-snippet'
import {
  filledButtons,
  outlineButtons,
  flatButtons,
  gradientButtons,
  reliefButtons,
  roundButtons,
  iconButtons,
  iconOnlyButtons,
  buttonGroup,
  buttonSizes,
  buttonBlock,
  buttonTags,
  buttonCBRadio
} from './ButtonsSourceCode'

const Buttons = () => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <Fragment>
      <BreadCrumbs breadCrumbTitle='Buttons' breadCrumbParent='Components' breadCrumbActive='Buttons' />
      <Row>
        <Col sm='12'>
          <Card title='Filled' code={filledButtons}>
            <CardText className='mb-0'>
              Reactstrap includes six predefined button styles, each serving its own semantic purpose.
            </CardText>
            <FilledButtons />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Outline' code={outlineButtons}>
            <CardText className='mb-0'>
              Use prop <code>outline</code> with button tag to create an outline button.
            </CardText>
            <OutlineButtons />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Flat' code={flatButtons}>
            <CardText className='mb-0'>
              Use <code>color="flat-{'colorName'}"</code> to create a flat button.
            </CardText>
            <FlatButtons />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Gradient' code={gradientButtons}>
            <CardText className='mb-0'>
              Use <code>color="gradient-{'colorName'}"</code> to create a gradient button.
            </CardText>
            <GradientButtons />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Relief' code={reliefButtons}>
            <CardText className='mb-0'>
              Use <code>color=relief-{'colorName'}</code> to create a relief button.
            </CardText>
            <ReliefButtons />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Round' code={roundButtons}>
            <CardText className='mb-0'>
              Use class <code>.round</code> create a square button.
            </CardText>
            <RoundButtons />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Icons' code={iconButtons}>
            <IconButtons />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Icon Only' code={iconOnlyButtons}>
            <CardText className='mb-0'>
              You can use class <code>.btn-icon</code>. You can create a rounded button by using{' '}
              <code>.rounded-circle</code> with <code>.btn-icon</code>. You can only use <code>.btn-icon</code> when you
              only want icon in your button
            </CardText>
            <IconOnlyButtons />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Button Groups' code={buttonGroup}>
            <CardText>Group a series of buttons together on a single line with the button group.</CardText>
            <ButtonGroups />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Checkbox & radio group' code={buttonCBRadio}>
            <ButtonCheckboxRadio />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Sizes' code={buttonSizes}>
            <CardText className='mb-0'>
              Use <code>size</code> prop to change size of a button.
            </CardText>
            <ButtonSizes />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Block Level Buttons' code={buttonBlock}>
            <CardText>
              Use prop <code>block</code> to create a block button.
            </CardText>
            <ButtonBlock />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Button Tags' code={buttonTags}>
            <ButtonTags />
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}
export default Buttons
