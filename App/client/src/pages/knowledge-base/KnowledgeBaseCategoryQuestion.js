import { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import { Info, Smartphone } from 'react-feather'
import Breadcrumbs from '@components/breadcrumbs'
import { Row, Col, Card, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap'

const KnowledgeBaseCategoryQuestion = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('/faq/data/question').then(res => setData(res.data))
  }, [])

  const renderRelatedQuestions = () => {
    return data.relatedQuestions.map(i => (
      <ListGroupItem className='text-body' tag='a' href='/' key={i.id} onClick={e => e.preventDefault()}>
        {i.question}
      </ListGroupItem>
    ))
  }

  return (
    <Fragment>
      <Breadcrumbs
        breadCrumbTitle='Knowledge Base'
        breadCrumbParent='Pages'
        breadCrumbParent2='Knowledge Base'
        breadCrumbParent3='Category'
        breadCrumbActive='Question'
      />
      {data !== null ? (
        <div id='knowledge-base-question'>
          <Row>
            <Col lg='3' md={{ size: 5, order: 1 }} sm={{ size: 12 }} xs={{ order: 2 }}>
              <Card>
                <CardBody>
                  <h6 className='kb-title'>
                    <Info size={20} className='mr-50' />
                    <span>Related Questions</span>
                  </h6>
                  <ListGroup className='list-group-circle mt-1'>{renderRelatedQuestions()}</ListGroup>
                </CardBody>
              </Card>
            </Col>
            <Col lg='9' md={{ size: 7, order: 2 }} sm={{ size: 12 }} xs={{ order: 1 }}>
              <Card>
                <CardBody>
                  <CardTitle className='mb-1'>
                    <Smartphone size={21} className='mr-25' />
                    <span>{data.title}</span>
                  </CardTitle>
                  <p className='mb-2'>Last updated on {data.lastUpdated}</p>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data.content
                    }}
                  ></div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      ) : null}
    </Fragment>
  )
}

export default KnowledgeBaseCategoryQuestion
