import { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import * as Icon from 'react-feather'
import classnames from 'classnames'
import { Link, useParams } from 'react-router-dom'
import Breadcrumbs from '@components/breadcrumbs'
import KnowledgeBaseHeader from './KnowledgeBaseHeader'
import { Row, Col, Card, CardBody, ListGroup, ListGroupItem } from 'reactstrap'

import '@styles/base/pages/page-knowledge-base.scss'

const KnowledgeBaseCategory = () => {
  const [data, setData] = useState(null),
    [filteredData, setFilteredData] = useState([]),
    [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    axios.get('/faq/data/category').then(res => setData(res.data))
  }, [])

  const params = useParams()

  const Content = ({ item }) => {
    const IconTag = Icon[item.icon]
    return (
      <Col className='kb-search-content' md='4' sm='6'>
        <Card>
          <CardBody>
            <h6 className='kb-title'>
              <IconTag
                size={20}
                className={classnames('mr-50', {
                  [item.iconColor]: item.iconColor
                })}
              />
              <span>
                {item.title} {`(${item.questions.length})`}
              </span>
            </h6>
            <ListGroup className='list-group-circle mt-2'>
              {item.questions.map(listItem => (
                <ListGroupItem
                  tag={Link}
                  to={`/pages/knowledge-base/${params.category}/${listItem.slug}`}
                  className='text-body'
                  key={listItem.id}
                >
                  {listItem.question}
                </ListGroupItem>
              ))}
            </ListGroup>
          </CardBody>
        </Card>
      </Col>
    )
  }

  const renderContent = () => {
    const dataToMap = searchTerm.length ? filteredData : data

    return dataToMap.map(item => <Content key={item.id} item={item} />)
  }

  const handleFilter = e => {
    const value = e.target.value,
      knowledgeBaseSearchQueryLower = e.target.value.toLowerCase()

    setSearchTerm(e.target.value)

    let arr = []

    if (value.length) {
      arr = data.filter(item => {
        return (
          item.title.toLowerCase().includes(knowledgeBaseSearchQueryLower) ||
          item.questions.filter(queObj => queObj.question.toLowerCase().includes(knowledgeBaseSearchQueryLower)).length
        )
      })
    }

    setFilteredData([...arr])
  }

  return (
    <Fragment>
      <Breadcrumbs
        breadCrumbTitle='Knowledge Base'
        breadCrumbParent='Pages'
        breadCrumbParent2='Knowledge Base'
        breadCrumbActive='Category'
      />
      <KnowledgeBaseHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleFilter={handleFilter} />
      {data !== null ? (
        <div id='knowledge-base-category'>
          <Row className='kb-search-content-info match-height'>{renderContent()}</Row>
        </div>
      ) : null}
    </Fragment>
  )
}

export default KnowledgeBaseCategory
