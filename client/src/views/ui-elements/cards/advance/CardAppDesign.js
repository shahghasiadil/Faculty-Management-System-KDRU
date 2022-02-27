import classnames from 'classnames'
import Avatar from '@components/avatar'
import { Card, CardTitle, CardBody, CardText, Badge, Button } from 'reactstrap'

const CardAppDesign = () => {
  const avatarArr = [
    {
      img: require('@src/assets/images/portrait/small/avatar-s-9.jpg').default,
      imgHeight: 34,
      imgWidth: 34
    },
    {
      content: 'PI',
      color: 'light-danger'
    },
    {
      img: require('@src/assets/images/portrait/small/avatar-s-14.jpg').default,
      imgHeight: 34,
      imgWidth: 34
    },
    {
      img: require('@src/assets/images/portrait/small/avatar-s-7.jpg').default,
      imgHeight: 34,
      imgWidth: 34
    },
    {
      content: 'AL',
      color: 'light-secondary'
    }
  ]

  const designPlanningArr = [
    {
      title: 'Due Date',
      subtitle: '12 Apr, 21'
    },
    {
      title: 'Budget',
      subtitle: '$49251.91'
    },
    {
      title: 'Cost',
      subtitle: '$840.99'
    }
  ]

  return (
    <Card className='card-app-design'>
      <CardBody>
        <Badge color='light-primary'>03 Sep, 20</Badge>
        <CardTitle className='mt-1 mb-75'>App design</CardTitle>
        <CardText className='font-small-2 mb-2'>
          You can Find Only Post and Quotes Related to IOS like ipad app design, iphone app design
        </CardText>
        <div className='design-group mb-2 pt-50'>
          <h6 className='section-label'>Team</h6>
          <Badge className='mr-1' color='light-warning'>
            Figma
          </Badge>
          <Badge color='light-primary'>Wireframe</Badge>
        </div>
        <div className='design-group pt-25'>
          <h6 className='section-label'>Members</h6>
          {avatarArr.map((obj, index) => {
            return (
              <Avatar
                className={classnames({
                  'mr-75': index !== avatarArr.length - 1
                })}
                key={index}
                {...obj}
              />
            )
          })}
        </div>
        <div className='design-planning-wrapper mb-2 py-75'>
          {designPlanningArr.map(item => (
            <div key={item.title} className='design-planning'>
              <CardText className='mb-25'>{item.title}</CardText>
              <h6 className='mb-0'>{item.subtitle}</h6>
            </div>
          ))}
        </div>
        <Button.Ripple color='primary' block>
          Join Team
        </Button.Ripple>
      </CardBody>
    </Card>
  )
}

export default CardAppDesign
