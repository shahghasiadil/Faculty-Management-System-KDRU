import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '@components/avatar'
import { CardImg, Row, Col, Table, Breadcrumb, BreadcrumbItem } from 'reactstrap'

import img1 from '@src/assets/images/slider/06.jpg'
import img10 from '@src/assets/images/avatars/10.png'

const CardActions = () => {
  const selectedStudent = {}

  return (
    <Fragment>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to='/students'> Students </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <span> Attendance </span>
        </BreadcrumbItem>
      </Breadcrumb>

      <div className='attendance-div'>
        <Row className='attendance-top-row' md='12' >
          <Col md='4' className='attendance-logo-1'>
            <Avatar className='mr-1 ' img={img1} imgHeight='90' imgWidth='90' />
          </Col>
          <Col md='4' className='top-center-div'>
            <Row></Row>
            <Row><h4>کندهار پوهنتون</h4></Row>
            <Row><h4>کمپیوټر ساینس پوهنځی</h4></Row>
            <Row><h4>د تدریسې چارو عمومې مدیریت</h4></Row>
          </Col>
          <Col md='4'>
            <Avatar className='mr-1 ' img={img1} imgHeight='90' imgWidth='90' />
          </Col>
        </Row>
        <Col md='12' className='text-center'>
          <Table bordered className='table-student-info table-bordered'>
            <tr style={{ borderTop: 0 }}>
              <td colSpan="25" >
                <h4>د ۱۴۰۰-۱۳۹۹ ل تحصیلې کال د لومړی ټولګې لومړې سمسټر د (&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;) مضمون د  (&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;) استاد (&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;) کریډیټه قوس د میاشتې حاضرې</h4>
              </td>
            </tr>
            <tr style={{ textAlign: 'center' }}>
              <th rowSpan="3">کتنی</th>
              <th colSpan="2">حاضری</th>
              <th colSpan="16" className="test">3</th>
              <th colSpan="4">شهرت</th>
              <th rowSpan="3" className='col-code-number' style={{ padding: '0' }}>کود نمبر</th>
              <th rowSpan="3" className='col-gana' style={{ width: '10px' }}>گنه</th>
            </tr>
            <tr>
              <th rowSpan="2" className='col-absent' style={{ padding: '0' }}> غیرحاضر</th>
              <th rowSpan="2" className='col-present' style={{ padding: '0' }}>حاضر</th>
              <th colSpan="4">4</th>
              <th colSpan="4">3</th>
              <th colSpan="4">2</th>
              <th colSpan="4">1</th>
              <th rowSpan="2" colSpan="2" className='std-father-name'>د پلار نوم</th>
              <th rowSpan="2" colSpan="2">نوم</th>
            </tr>
            <tr>
              <th colSpan="2" width="50px"></th>
              <th colSpan="2" height="50"></th>
              <th colSpan="2"></th>
              <th colSpan="2"></th>
              <th colSpan="2"></th>
              <th colSpan="2"></th>
              <th colSpan="2"></th>
              <th colSpan="2"></th>
            </tr>
            {/* // ** data loop area start */}
            <tr style={{ borderTop: 0 }}>
              <td height="25px"></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td width="5px"></td>
              <td width="5px"></td>
              <td colSpan="2" >خالد</td>
              <td colSpan="2" >محمود</td>
              <td width="88px" >23323</td>
              <td>۲</td>
            </tr>

            {/* // ** data loop area end */}

            <tr style={{ borderTop: 0 }}>
              <td height="25px"></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td colSpan="6" >د استاد لاسلیک</td>
            </tr>
            <tr style={{ borderTop: 0 }}>
              <td colSpan="25" ><h4>د محترم استاد څخه هیله کوو چې حاضرې په جدې ډول روزمره کنټرول کړې ، امضا او تر ډکیدو وروسته یې پر ټاکلې وخت ادارې ته تسلیم کړې</h4>
              </td>
            </tr>
          </Table>
        </Col>
        <Row style={{ float: 'right', marginRight: '10px' }}>
        </Row>
      </div>

    </Fragment>
  )
}
export default CardActions
