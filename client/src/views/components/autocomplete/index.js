import { Fragment, useEffect } from 'react'
import Prism from 'prismjs'
import { Row, Col } from 'reactstrap'
import BreadCrumbs from '@components/breadcrumbs'
import Card from '@components/card-snippet'
import AutoCompleteBasic from './AutoCompleteBasic'
import AutoCompleteAjax from './AutoCompleteAjax'
import AutoCompleteSections from './AutoCompleteSections'
import AutoCompleteRender from './AutoCompleteRender'
import AutoCompleteSuggestions from './AutoCompleteSuggestions'
import AutoCompleteSearchLimit from './AutoCompleteLimit'
import {
  basicExample,
  sectionExample,
  ajaxExample,
  customRenderExample,
  defaultSuggestionsExample,
  searchLimitExample
} from './AutoCompleteSourceCode'

const AutoComplete = () => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <Fragment>
      <BreadCrumbs
        breadCrumbTitle='Auto Complete'
        breadCrumbParent='Extra Components'
        breadCrumbActive='Auto Complete'
      />
      <Row>
        <Col xl='6' lg='12'>
          <Card title='Basic' code={basicExample}>
            <AutoCompleteBasic />
          </Card>
        </Col>
        <Col xl='6' lg='12'>
          <Card title='Sections' code={sectionExample}>
            <AutoCompleteSections />
          </Card>
        </Col>
        <Col xl='6' lg='12'>
          <Card title='Ajax' code={ajaxExample}>
            <AutoCompleteAjax />
          </Card>
        </Col>
        <Col xl='6' lg='12'>
          <Card title='Custom Render' code={customRenderExample}>
            <AutoCompleteRender />
          </Card>
        </Col>
        <Col xl='6' lg='12'>
          <Card title='Default Suggestions' code={defaultSuggestionsExample}>
            <AutoCompleteSuggestions />
          </Card>
        </Col>
        <Col xl='6' lg='12'>
          <Card title='Search Limit' code={searchLimitExample}>
            <AutoCompleteSearchLimit />
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}
export default AutoComplete
