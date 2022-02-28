import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '@components/avatar'
import { Printer } from 'react-feather'
import { CardImg, Row, Col, Table, Breadcrumb, BreadcrumbItem } from 'reactstrap'

import img1 from '@src/assets/images/slider/06.jpg'
import img10 from '@src/assets/images/avatars/10.png'
import Button from 'reactstrap/lib/Button'


const CardActions = ({ selectedStudent }) => {


  const print = () => {

    const mainLayout = document.getElementById('printTable').innerHTML
    const originalContent = document.body.innerHTML
    document.body.style.direction = 'rtl'
    document.body.innerHTML = mainLayout
    window.print()
    document.body.style.direction = 'ltr'
    document.body.innerHTML = originalContent
    window.close()
  }

  return (
    <Fragment>
      <Row style={{
        justifyContent: 'space-between'
      }}>
        <Breadcrumb >
          <BreadcrumbItem>
            <Link to='/students'> Students </Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            <span> More Info </span>
          </BreadcrumbItem>

        </Breadcrumb>
        <Button onClick={print} color='info' className='text-nowrap px-1 d-flex justify-content-center align-items-center'>Print <Printer size={16} className='mr-50' /> </Button>
      </Row>

      <div className='root-div' id='printTable'>
        <Row className='std-logo'>
          <Avatar className='mr-1 ' img={img1} imgHeight='90' imgWidth='90' />
        </Row>
        <Row className='info' md='12'>
          <Col md='4' className='top-first-div'>
            <Row>
              <Col md="4">پوهنځی</Col>
              <Col md="8">دیپارتمنت عمومی صرف برای ذکور پوهنځی کمپیوتر ساینس پوهنتون کندهار</Col>
            </Row>
            <Row>
              <Col md="4"> ID محصل </Col>
              <Col md="8">368766</Col>
            </Row>
            <Row>
              <Col md="4">مکتوب ګڼه او نیټه</Col>
              <Col md="8">5765</Col>
            </Row>
            <Row>
              <Col md="4">صدور تاریخ مکتوب</Col>
              <Col md="8">1396/12/03</Col>
            </Row>
          </Col>
          <Col md='4' className='top-center-div'>
            <Row></Row>
            <Row>د لوړو زده کړو وزارت</Row>
            <Row>پوهنتون کندهار</Row>
            <Row>فورمه سوانح محصل</Row>
          </Col>
          <Col md='4'>
            <CardImg className='img-fluid student-image' src={img10} top imgHeight='90' imgWidth='90' />
          </Col>
        </Row>
        <Row >
          <Col md='12' className='text-center'>
            <Table responsive bordered className='table-student-info table-bordered'>
              <tr>
                <td colspan='6'>د محصل پیژند او نښې / شهرت ومشخصات محصل</td>
              </tr>
              <tr>
                <td colspan='2'>پیژند / شهرت</td>
                <td colspan='2'>د تذکرې معلومات / معلومات تذکره</td>
                <td colspan='2'>د زده کړی معلومات / معلومات تحصیلات</td>
              </tr>
              <tr>
                <td>نوم / نام </td>
                <td> {selectedStudent.name}</td>
                <td>عمومې ګڼه / نمبر عمومی</td>
                <td>587667</td>
                <td> ښوونځی نوم / نام مکتب</td>
                <td>{selectedStudent.school_name}</td>
              </tr>
              <tr>
                <td>پلارنوم / نام پدر </td>
                <td>{selectedStudent.father_name}</td>
                <td>توک / جلد</td>
                <td>{selectedStudent.tazkira_registration_number}</td>
                <td>فراغت کال / سال فراغت</td>
                <td>{selectedStudent.graduation_year}</td>
              </tr>
              <tr>
                <td>نیکه نوم / نام پدر کلان</td>
                <td>{selectedStudent.grand_father_name}</td>
                <td>پاڼه / صفحه</td>
                <td>{selectedStudent.tazkira_page}</td>
                <td>کانکور کال / سال کانکور</td>
                <td>{selectedStudent.kankor_year}</td>
              </tr>
              <tr>
                <td>کورنی نوم / نام فامیلی</td>
                <td>{selectedStudent.last_name}</td>
                <td>ثبت ګڼه / شماره ثبت</td>
                <td>89</td>
                <td>کانکور نمره / نمره کانکور</td>
                <td>{selectedStudent.kankor_score}</td>
              </tr>
              <tr>
                <td>ملیت</td>
                <td>افغان</td>
                <td>زیږیدلو کال / سال تولد</td>
                <td>{selectedStudent.birth_year}</td>
                <td>د کانکور ID / ID کانکور</td>
                <td>{selectedStudent.kankor_id}</td>
              </tr>
              <tr>
                <td>مورنی ژبه / زبان مادری</td>
                <td>{selectedStudent.native_tongue}</td>
                <td>مدنی حالت / حالت مدنی </td>
                <td>{selectedStudent.marital_status}</td>
                <td>د اړیکو شمیره / شماره تماس</td>
                <td>{selectedStudent.phone}</td>
              </tr>
              <tr>
                <td colspan='6'>د محصل استوګنه / سکونت محصل</td>
              </tr>
              <tr>
                <td colspan='1'>ولایت</td>
                <td colspan='1'>ولسوالی</td>
                <td colspan='2'>کلی / قریه ، ناحیه</td>
                <td colspan='2'>د کور او کوڅه شمیره / نمبر خانه و کوچه</td>
              </tr>
              <tr>
                <td colspan='1'>{selectedStudent.address.province}</td>
                <td colspan='1'>{selectedStudent.address.district}</td>
                <td colspan='2'>{selectedStudent.address.area} </td>
                <td colspan='2'>کوڅې نمبر {selectedStudent.address.street_number} -  کور نمبر{selectedStudent.address.house_number} </td>
              </tr>
              <tr>
                <td colspan='6'>د محصل خپلوان او د هغی دندې / اقارت محصل و وظایف آنها</td>
              </tr>
              <tr>
                <td colspan='1'>خپلوان / اقاربت</td>
                <td colspan='1'>پیژند / شهرت</td>
                <td colspan='2'>دنده او د دندې ځای / وظیفه ومحل آن</td>
                <td colspan='2'>د اړیکو شمیره / نمبر تماس</td>
              </tr>
              {selectedStudent.relatives.map((data, index) => (
                <tr key={index}>
                  <td colspan='1'>{data.relationship}</td>
                  <td colspan='1'> {data.name} - {data.father_name}</td>
                  <td colspan='2'>{data.job} </td>
                  <td colspan='2'>{data.phone}</td>
                </tr>
              ))}
            </Table>
          </Col>
        </Row>
        <Row>
          <Col md='1'></Col>
          <Col md='9' className='' >
            <Row>
              من / زه ({selectedStudent.name}) ولد / بنت ({selectedStudent.father_name})
            </Row>
            <Row className='mt-1'>
              <p>پورتنې په فورم کې درج شوې معلومات زما د نښو او تذکرې مطابق دی او د مغایرت په صورت کې مسولیت زما پر غاړه ده</p><br></br>
              <p>معلومات مندرج فورم فوق مطابق مشخصات وتذکره ام بوده و در صورت مغایرت  مسولیت بعدی بدوش بنده میباشد</p>
            </Row>
          </Col>
          <Col md='2' className=''>
            د محصل امضا او شصت <br></br> امضا وشصت محصل
          </Col>

        </Row>
        <Row className='text-center' style={{ justifyContent: 'center', marginTop: '10px' }}>
          <p>ثبت کوونکې نوم او امضا</p> &nbsp;
          / &nbsp;
          <p>نام و امضا ثبت کننده</p>&nbsp;&nbsp;&nbsp;
          (&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)
          &nbsp;&nbsp;&nbsp;
          <p>د محصلان آمر امضا</p>&nbsp;
          / &nbsp;
          <p> امضا آمر محصلان</p>
          &nbsp;&nbsp;&nbsp;
          (&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)
        </Row>
      </div>

    </Fragment>
  )
}
export default CardActions
