import { useContext, useEffect, useState } from 'react'
import { kFormatter } from '@utils'
import Avatar from '@components/avatar'
import Timeline from '@components/timeline'
import AvatarGroup from '@components/avatar-group'
import jsonImg from '@src/assets/images/icons/json.png'
import InvoiceList from '@src/views/apps/invoice/list'
import ceo from '@src/assets/images/portrait/small/avatar-s-9.jpg'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import Sales from '@src/views/ui-elements/cards/analytics/Sales'
import AvgSessions from '@src/views/ui-elements/cards/analytics/AvgSessions'
import CardAppDesign from '@src/views/ui-elements/cards/advance/CardAppDesign'
import SupportTracker from '@src/views/ui-elements/cards/analytics/SupportTracker'
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Media } from 'reactstrap'
import OrdersReceived from '@src/views/ui-elements/cards/statistics/OrdersReceived'
import CardCongratulations from '@src/views/ui-elements/cards/advance/CardCongratulations'
import SubscribersGained from '@src/views/ui-elements/cards/statistics/SubscribersGained'
import StatsWithAreaChart from '@components/widgets/stats/StatsWithAreaChart'
import '@styles/react/libs/charts/apex-charts.scss'
import { BookOpen } from 'react-feather'
import axios from 'axios'

const AnalyticsDashboard = () => {
  const { colors } = useContext(ThemeColors)
  const [students, setStudents] = useState(0)
  const [subjects, setSubjects] = useState(0)
  const [teachers, setTeachers] = useState(0)
  const [male, setMales] = useState(0)
  const [female, setFemale] = useState(0)

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/dashboard').then((res) => {
      const {students, subjects, teachers, maleStudents, femaleStudents} = res.data
      setTeachers(teachers)
      setStudents(students)
      setSubjects(subjects)
      setMales(maleStudents)
      setFemale(femaleStudents)
    })
  }, [])


  const avatarGroupArr = [
      {
        title: 'Billy Hopkins',
        img: require('@src/assets/images/portrait/small/avatar-s-9.jpg').default,
        placement: 'bottom',
        imgHeight: 33,
        imgWidth: 33
      },
      {
        title: 'Amy Carson',
        img: require('@src/assets/images/portrait/small/avatar-s-6.jpg').default,
        placement: 'bottom',
        imgHeight: 33,
        imgWidth: 33
      },
      {
        title: 'Brandon Miles',
        img: require('@src/assets/images/portrait/small/avatar-s-8.jpg').default,
        placement: 'bottom',
        imgHeight: 33,
        imgWidth: 33
      },
      {
        title: 'Daisy Weber',
        img: require('@src/assets/images/portrait/small/avatar-s-7.jpg').default,
        placement: 'bottom',
        imgHeight: 33,
        imgWidth: 33
      },
      {
        title: 'Jenny Looper',
        img: require('@src/assets/images/portrait/small/avatar-s-20.jpg').default,
        placement: 'bottom',
        imgHeight: 33,
        imgWidth: 33
      }
    ],
    data = [
      {
        title: '12 Invoices have been paid',
        content: 'Invoices have been paid to the company.',
        meta: '',
        metaClassName: 'mr-1',
        customContent: (
          <Media>
            <img className='mr-1' src={jsonImg} alt='data.json' height='23' />
            <Media className='mb-0' body>
              data.json
            </Media>
          </Media>
        )
      },
      {
        title: 'Client Meeting',
        content: 'Project meeting with john @10:15am.',
        meta: '',
        metaClassName: 'mr-1',
        color: 'warning',
        customContent: (
          <Media className='align-items-center'>
            <Avatar img={ceo} />
            <Media className='ml-50' body>
              <h6 className='mb-0'>John Doe (Client)</h6>
              <span>CEO of Infibeam</span>
            </Media>
          </Media>
        )
      },
      {
        title: 'Create a new project for client',
        content: 'Add files to new design folder',
        color: 'info',
        meta: '',
        metaClassName: 'mr-1',
        customContent: <AvatarGroup data={avatarGroupArr} />
      },
      {
        title: 'Create a new project for client',
        content: 'Add files to new design folder',
        color: 'danger',
        meta: '',
        metaClassName: 'mr-1'
      }
    ]

  return (
    <div id='dashboard-analytics'>
      <Row className='match-height'>
      <Col lg='4' sm='6'>
          <SubscribersGained kFormatter={kFormatter} value={students ?? 0} title="Students" />
      </Col>
      <Col lg='4' sm='6'>
          <SubscribersGained kFormatter={kFormatter} value={teachers ?? 0} title="Teachers" />
      </Col>
        <Col lg='4' sm='6'>
          <SubscribersGained kFormatter={kFormatter} value={male ?? 0} title="Male Students"  />
        </Col>
        <Col lg='4' sm='6'>
          <SubscribersGained kFormatter={kFormatter} value={female ?? 0} title="Female Students"  />
        </Col>
        <Col lg='4' sm='6'>
        <StatsWithAreaChart
      icon={<BookOpen size={21}/>}
      color='primary'
      stats={subjects}
      statTitle="Subjects"
      series={[
        {
          name: 'Subscribers',
          data: [28, 40, 36, 52, 38, 60, 55]
        }
      ]}
      type='area'
    />
        </Col>
      </Row>

    </div>
  )
}

export default AnalyticsDashboard
