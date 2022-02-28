import { Fragment } from 'react'
import Breadcrumbs from '@components/breadcrumbs'
import CardAction from '@components/card-actions'
import { ChevronDown, RotateCw, X } from 'react-feather'
import { CardBody, CardText, Row, Col, Table } from 'reactstrap'

const CardActions = () => {
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Card Actions' breadCrumbParent='Card' breadCrumbActive='Card Actions' />
      <Row>
        <Col sm='12'>
          <CardAction
            title='Card Actions'
            actions={['collapse', 'reload', 'remove']}
            endReload={endLoading => {
              setTimeout(() => endLoading(), 2000)
            }}
          >
            <CardBody className='pt-0'>
              <Table responsive bordered>
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Icon</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Collapse</td>
                    <td className='text-center'>
                      <ChevronDown className='collapse-icon' size={15} />
                    </td>
                    <td> Collapse card content using collapse action.</td>
                  </tr>
                  <tr>
                    <td>Refresh Content</td>
                    <td className='text-center'>
                      <RotateCw size={15} />
                    </td>
                    <td>Refresh your card content using refresh action.</td>
                  </tr>
                  <tr>
                    <td>Remove Card</td>
                    <td className='text-center'>
                      <X size={15} />
                    </td>
                    <td> Remove card from page using remove card action</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </CardAction>
        </Col>
      </Row>
      <Row>
        <Col md='6' sm='12'>
          <CardAction title='Collapse' actions='collapse'>
            <CardBody className='pt-0'>
              <CardText>
                You can create a collapsible content by using our
                <code>CardAction</code> component and by passing prop
                <code>actions='collapse'</code>.
              </CardText>
              <CardText className='mb-0'>
                Click on <ChevronDown size={15} /> to see card collapse in action
              </CardText>
            </CardBody>
          </CardAction>
        </Col>
        <Col md='6' sm='12'>
          <CardAction
            title='Reload'
            actions='reload'
            endReload={endLoading => {
              setTimeout(() => endLoading(), 2000)
            }}
          >
            <CardBody className='pt-0'>
              <CardText>
                To create a re-loadable card pass prop
                <code>actions='reload'</code> and pass prop <code>endReload</code>
                to end the loading.
              </CardText>
              <CardText className='mb-0'>
                Click on <RotateCw size={15} /> to see card refresh in action
              </CardText>
            </CardBody>
          </CardAction>
        </Col>
        <Col md='6' sm='12'>
          <CardAction title='Remove' actions='remove'>
            <CardBody className='pt-0'>
              <CardText>
                You can add refresh content action to card by adding class
                <code>.card-reload</code> with your card tag, and add conditional spinner into card body to show when
                card is refreshing.
              </CardText>
              <CardText className='mb-0'>
                Click on <RotateCw size={15} /> to see card refresh in action
              </CardText>
            </CardBody>
          </CardAction>
        </Col>
      </Row>
    </Fragment>
  )
}
export default CardActions
