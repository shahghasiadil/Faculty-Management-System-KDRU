import { Fragment } from 'react'
import classnames from 'classnames'
import Avatar from '@components/avatar'
import { Heart, MessageSquare, Share2 } from 'react-feather'
import { Card, CardBody, CardText, Row, Col, UncontrolledTooltip, Input, Label, Button } from 'reactstrap'

const ProfilePosts = ({ data }) => {
  const renderPosts = () => {
    return data.map(post => {
      return (
        <Card className='post' key={post.username}>
          <CardBody>
            <div className='d-flex justify-content-start align-items-center mb-1'>
              <Avatar className='mr-1' img={post.avatar} imgHeight='50' imgWidth='50' />
              <div className='profile-user-info'>
                <h6 className='mb-0'>{post.username}</h6>
                <small className='text-muted'>{post.postTime}</small>
              </div>
            </div>
            <CardText>{post.postText}</CardText>
            {post.postImg ? (
              <img src={post.postImg} alt={post.username} className='img-fluid rounded mb-75' />
            ) : post.postVid ? (
              <iframe
                src='https://www.youtube.com/embed/6stlCkUDG_s'
                className='w-100 rounded height-250 mb-50 border-0'
              ></iframe>
            ) : null}
            <Row className='d-flex justify-content-start align-items-center flex-wrap pb-50 post-actions'>
              <Col className='d-flex justify-content-between justify-content-sm-start mb-2' sm='6'>
                <div className='d-flex align-items-center text-muted text-nowrap cursor-pointer'>
                  <Heart
                    size={18}
                    className={classnames('mr-50', {
                      'profile-likes': post.youLiked === true
                    })}
                  />
                  <span>{post.likes}</span>
                </div>
                <div className='d-flex align-items-center'>
                  <div className='avatar-group ml-1'>
                    {post.likedUsers.map(user => {
                      return (
                        <Fragment key={user.username}>
                          <Avatar
                            className='pull-up'
                            img={user.avatar}
                            id={user.username.toLowerCase().split(' ').join('-')}
                            imgHeight='26'
                            imgWidth='26'
                          />
                          <UncontrolledTooltip
                            target={user.username.toLowerCase().split(' ').join('-')}
                            placement='top'
                          >
                            {user.username}
                          </UncontrolledTooltip>
                        </Fragment>
                      )
                    })}
                  </div>
                  <a href='/' className='text-muted text-nowrap ml-50' onClick={e => e.preventDefault()}>
                    +140 more
                  </a>
                </div>
              </Col>
              <Col className='d-flex justify-content-between justify-content-sm-end align-items-center mb-2' sm='6'>
                <a href='/' className='text-nowrap' onClick={e => e.preventDefault()}>
                  <MessageSquare size={18} className='text-body mr-50'></MessageSquare>
                  <span className='text-muted mr-1'>{post.comments}</span>
                </a>
                <a href='/' className='text-nowrap share-post' onClick={e => e.preventDefault()}>
                  <Share2 size={18} className='text-body mx-50'></Share2>
                  <span className='text-muted mr-1'>{post.share}</span>
                </a>
              </Col>
            </Row>
            {post.detailedComments.map(comment => (
              <div key={comment.username} className='d-flex align-items-start mb-1'>
                <Avatar img={comment.avatar} className='mt-25 mr-75' imgHeight='34' imgWidth='34' />
                <div className='profile-user-info w-100'>
                  <div className='d-flex align-items-center justify-content-between'>
                    <h6 className='mb-0'>{comment.username}</h6>
                    <a href='/' onClick={e => e.preventDefault()}>
                      <Heart
                        size={18}
                        className={classnames('text-body', {
                          'profile-likes': comment.youLiked === true
                        })}
                      />
                      <span className='align-middle ml-25 text-muted'>{comment.commentsLikes}</span>
                    </a>
                  </div>
                  <small>{comment.comment}</small>
                </div>
              </div>
            ))}
            <fieldset className='form-label-group mb-50'>
              <Input id={`add-comment-${post.username}`} type='textarea' rows='3' placeholder='Add Comment' />
              <Label for={`add-comment-${post.username}`}>Add Comment</Label>
            </fieldset>
            <Button.Ripple color='primary' size='sm'>
              Post Comment
            </Button.Ripple>
          </CardBody>
        </Card>
      )
    })
  }
  return renderPosts()
}
export default ProfilePosts
