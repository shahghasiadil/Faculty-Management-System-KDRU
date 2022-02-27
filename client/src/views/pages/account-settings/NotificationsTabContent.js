import { useState } from 'react'
import { Row, Col, CustomInput, Button } from 'reactstrap'

const NotificationsTabContent = ({ data }) => {
  const [followMe, setFollowMe] = useState(data.followMe)
  const [blogDigest, setBlogDigest] = useState(data.blogDigest)
  const [answerOnForm, setAnswerOnForm] = useState(data.answerOnForm)
  const [productUpdates, setProductUpdates] = useState(data.productUpdates)
  const [newAnnouncements, setNewAnnouncements] = useState(data.newAnnouncements)
  const [commentOnArticle, setCommentOnArticle] = useState(data.commentOnArticle)

  return (
    <Row>
      <h6 className='section-label mx-1 mb-2'>Activity</h6>
      <Col sm='12' className='mb-2'>
        <CustomInput
          type='switch'
          id='commentOnArticle'
          checked={commentOnArticle}
          onChange={e => setCommentOnArticle(e.target.checked)}
          name='customSwitch'
          label='Email me when someone comments on my article'
        />
      </Col>
      <Col sm='12' className='mb-2'>
        <CustomInput
          type='switch'
          id='answerOnForm'
          checked={answerOnForm}
          onChange={e => setAnswerOnForm(e.target.checked)}
          name='customSwitch'
          label='Email me when someone answers on my form'
        />
      </Col>
      <Col sm='12' className='mb-2'>
        <CustomInput
          type='switch'
          id='followMe'
          checked={followMe}
          onChange={e => setFollowMe(e.target.checked)}
          name='customSwitch'
          label='Email me when someone follows me'
        />
      </Col>
      <h6 className='section-label mx-1 mt-2'>Application</h6>
      <Col sm='12' className='mt-1 mb-2'>
        <CustomInput
          type='switch'
          id='newAnnouncements'
          checked={newAnnouncements}
          onChange={e => setNewAnnouncements(e.target.checked)}
          name='customSwitch'
          label='News and announcements'
        />
      </Col>
      <Col sm='12' className='mb-2'>
        <CustomInput
          type='switch'
          id='productUpdates'
          checked={productUpdates}
          onChange={e => setProductUpdates(e.target.checked)}
          name='customSwitch'
          label='Weekly product updates'
        />
      </Col>
      <Col sm='12' className='mb-75'>
        <CustomInput
          type='switch'
          id='blogDigest'
          checked={blogDigest}
          onChange={e => setBlogDigest(e.target.checked)}
          name='customSwitch'
          label='Weekly blog digest'
        />
      </Col>
      <Col className='mt-1' sm='12'>
        <Button.Ripple className='mr-1' color='primary'>
          Save changes
        </Button.Ripple>
        <Button.Ripple color='secondary' outline>
          Cancel
        </Button.Ripple>
      </Col>
    </Row>
  )
}

export default NotificationsTabContent
