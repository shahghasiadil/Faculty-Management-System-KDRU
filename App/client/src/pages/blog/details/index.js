import { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import classnames from 'classnames'
import Sidebar from '../BlogSidebar'
import Avatar from '@components/avatar'
import cmtImg from '@src/assets/images/portrait/small/avatar-s-6.jpg'
import { kFormatter } from '@utils'
import {
  Share2,
  MessageSquare,
  Bookmark,
  GitHub,
  Gitlab,
  Facebook,
  Twitter,
  Linkedin,
  CornerUpLeft
} from 'react-feather'
import Breadcrumbs from '@components/breadcrumbs'
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Badge,
  Media,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Form,
  Input,
  Button,
  FormGroup,
  CustomInput
} from 'reactstrap'

import '@styles/base/pages/page-blog.scss'

const BlogDetails = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('/blog/list/data/detail').then(res => setData(res.data))
  }, [])

  const badgeColorsArr = {
    Quote: 'light-info',
    Fashion: 'light-primary',
    Gaming: 'light-danger',
    Video: 'light-warning',
    Food: 'light-success'
  }

  const renderTags = () => {
    return data.blog.tags.map((tag, index) => {
      return (
        <a key={index} href='/' onClick={e => e.preventDefault()}>
          <Badge
            className={classnames({
              'mr-50': index !== data.blog.tags.length - 1
            })}
            color={badgeColorsArr[tag]}
            pill
          >
            {tag}
          </Badge>
        </a>
      )
    })
  }

  const renderComments = () => {
    return data.comments.map(comment => {
      return (
        <Card className='mb-3' key={comment.userFullName}>
          <CardBody>
            <Media>
              <Avatar className='mr-75' img={comment.avatar} width='38' height='38' />
              <Media body>
                <h6 className='font-weight-bolder mb-25'>{comment.userFullName}</h6>
                <CardText>{comment.commentedAt}</CardText>
                <CardText>{comment.commentText}</CardText>
                <a href='/' onClick={e => e.preventDefault()}>
                  <div className='d-inline-flex align-items-center'>
                    <CornerUpLeft size={18} className='mr-50' />
                    <span>Reply</span>
                  </div>
                </a>
              </Media>
            </Media>
          </CardBody>
        </Card>
      )
    })
  }

  return (
    <Fragment>
      <Breadcrumbs
        breadCrumbTitle='Blog Details'
        breadCrumbParent='Pages'
        breadCrumbParent2='Blog'
        breadCrumbActive='Details'
      />
      <div className='blog-wrapper'>
        <div className='content-detached content-left'>
          <div className='content-body'>
            {data !== null ? (
              <Row>
                <Col sm='12'>
                  <Card className='mb-3'>
                    <CardImg src={data.blog.img} className='img-fluid' top />
                    <CardBody>
                      <CardTitle tag='h4'>{data.blog.title}</CardTitle>
                      <Media>
                        <Avatar className='mr-50' img={data.blog.avatar} imgHeight='24' imgWidth='24' />
                        <Media body>
                          <small className='text-muted mr-25'>by</small>
                          <small>
                            <a className='text-body' href='/' onClick={e => e.preventDefault()}>
                              {data.blog.userFullName}
                            </a>
                          </small>
                          <span className='text-muted ml-50 mr-25'>|</span>
                          <small className='text-muted'>{data.blog.createdTime}</small>
                        </Media>
                      </Media>
                      <div className='my-1 py-25'>{renderTags()}</div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data.blog.content
                        }}
                      ></div>
                      <Media>
                        <Avatar img={cmtImg} className='mr-2' imgHeight={60} imgWidth={60} />
                        <Media body>
                          <h6 className='font-weight-bolder'>Willie Clark</h6>
                          <CardText className='mb-0'>
                            Based in London, Uncode is a blog by Willie Clark. His posts explore modern design trends
                            through photos and quotes by influential creatives and web designer around the world.
                          </CardText>
                        </Media>
                      </Media>
                      <hr className='my-2' />
                      <div className='d-flex align-items-center justify-content-between'>
                        <div className='d-flex align-items-center'>
                          <div className='d-flex align-items-center mr-1'>
                            <a className='mr-50' href='/' onClick={e => e.preventDefault()}>
                              <MessageSquare size={21} className='text-body align-middle' />
                            </a>
                            <a href='/' onClick={e => e.preventDefault()}>
                              <div className='text-body align-middle'>{kFormatter(data.blog.comments)}</div>
                            </a>
                          </div>
                          <div className='d-flex align-items-cente'>
                            <a className='mr-50' href='/' onClick={e => e.preventDefault()}>
                              <Bookmark size={21} className='text-body align-middle' />
                            </a>
                            <a href='/' onClick={e => e.preventDefault()}>
                              <div className='text-body align-middle'>{data.blog.bookmarked}</div>
                            </a>
                          </div>
                        </div>
                        <UncontrolledDropdown className='dropdown-icon-wrapper'>
                          <DropdownToggle tag='span'>
                            <Share2 size={21} className='text-body cursor-pointer' />
                          </DropdownToggle>
                          <DropdownMenu right>
                            <DropdownItem className='py-50 px-1'>
                              <GitHub size={18} />
                            </DropdownItem>
                            <DropdownItem className='py-50 px-1'>
                              <Gitlab size={18} />
                            </DropdownItem>
                            <DropdownItem className='py-50 px-1'>
                              <Facebook size={18} />
                            </DropdownItem>
                            <DropdownItem className='py-50 px-1'>
                              <Twitter size={18} />
                            </DropdownItem>
                            <DropdownItem className='py-50 px-1'>
                              <Linkedin size={18} />
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm='12'>
                  <h6 className='section-label'>Comment</h6>
                  {renderComments()}
                </Col>
                <Col sm='12'>
                  <h6 className='section-label'>Leave a Comment</h6>
                  <Card>
                    <CardBody>
                      <Form className='form' onSubmit={e => e.preventDefault()}>
                        <Row>
                          <Col sm='6'>
                            <FormGroup className='mb-2'>
                              <Input placeholder='Name' />
                            </FormGroup>
                          </Col>
                          <Col sm='6'>
                            <FormGroup className='mb-2'>
                              <Input type='email' placeholder='Email' />
                            </FormGroup>
                          </Col>
                          <Col sm='6'>
                            <FormGroup className='mb-2'>
                              <Input type='url' placeholder='Website' />
                            </FormGroup>
                          </Col>
                          <Col sm='12'>
                            <FormGroup className='mb-2'>
                              <Input className='mb-2' type='textarea' rows='4' placeholder='Comment' />
                            </FormGroup>
                          </Col>
                          <Col sm='12'>
                            <CustomInput
                              className='mb-2'
                              type='checkbox'
                              id='exampleCustomCheckbox4'
                              label='Save my name, email, and website in this browser for the next time I comment.'
                              htmlFor='exampleCustomCheckbox4'
                            />
                          </Col>
                          <Col sm='12'>
                            <Button.Ripple color='primary'>Post Comment</Button.Ripple>
                          </Col>
                        </Row>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            ) : null}
          </div>
        </div>
        <Sidebar />
      </div>
    </Fragment>
  )
}

export default BlogDetails
