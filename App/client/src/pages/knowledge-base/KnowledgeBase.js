import { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Breadcrumbs from '@components/breadcrumbs'
import KnowledgeBaseHeader from './KnowledgeBaseHeader'
import { Row, Col, Card, CardBody, CardImg } from 'reactstrap'

import '@styles/base/pages/page-knowledge-base.scss'

const KnowledgeBase = () => {
  const [data, setData] = useState(null),
    [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    axios.get('/faq/data/knowledge_base').then(res => setData(res.data))
  }, [])

  const Content = ({ item }) => (
    <Col className='kb-search-content' key={item.id} md='4' sm='6'>
      <Card>
        <Link to={`/pages/knowledge-base/${item.category}`}>
          <CardImg src={item.img} alt='knowledge-base-image' top />
          <CardBody className='text-center'>
            <h4>{item.title}</h4>
            <p className='text-body mt-1 mb-0'>{item.desc}</p>
          </CardBody>
        </Link>
      </Card>
    </Col>
  )

  const renderContent = () => {
    return data.map(item => {
      const titleCondition = item.title.toLowerCase().includes(searchTerm.toLowerCase()),
        descCondition = item.desc.toLowerCase().includes(searchTerm.toLowerCase())

      if (searchTerm.length < 1) {
        return <Content key={item.id} item={item} />
      } else if (titleCondition || descCondition) {
        return <Content key={item.id} item={item} />
      } else {
        return null
      }
    })
  }

  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Knowledge Base' breadCrumbParent='Pages' breadCrumbActive='Knowledge Base' />
      <KnowledgeBaseHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {data !== null ? (
        <div id='knowledge-base-content'>
          <Row className='kb-search-content-info match-height'>{renderContent()}</Row>
        </div>
      ) : null}
    </Fragment>
  )
}

export default KnowledgeBase
