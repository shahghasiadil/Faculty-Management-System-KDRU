import { useState } from 'react'
import Nouislider from 'nouislider-react'
import { Card, CardHeader, CardTitle, CardBody, Input, Row, Col } from 'reactstrap'

const SliderWithInput = ({ direction }) => {
  const [upperConnect, setUpperConnect] = useState(10)
  const [lowerConnect, setLowerConnect] = useState(30.0)

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Slider With Input</CardTitle>
      </CardHeader>
      <CardBody>
        <Nouislider
          className='my-1'
          start={[upperConnect, lowerConnect]}
          direction={direction}
          connect={true}
          range={{
            min: -20,
            max: 40
          }}
        />
        <Row>
          <Col md='3' sm='12' className='d-sm-flex d-block'>
            <Input
              className='mr-1 mt-2'
              type='select'
              name='selectUpper'
              value={upperConnect}
              onChange={e => setUpperConnect(e.target.value)}
            >
              <option value='-20'> -20 </option>
              <option value='-19'> -19 </option>
              <option value='-18'> -18 </option>
              <option value='-17'> -17 </option>
              <option value='-16'> -16 </option>
              <option value='-15'> -15 </option>
              <option value='-14'> -14 </option>
              <option value='-13'> -13 </option>
              <option value='-12'> -12 </option>
              <option value='-11'> -11 </option>
              <option value='-10'> -10 </option>
              <option value='-9'> -9 </option>
              <option value='-8'> -8 </option>
              <option value='-7'> -7 </option>
              <option value='-6'> -6 </option>
              <option value='-5'> -5 </option>
              <option value='-4'> -4 </option>
              <option value='-3'> -3 </option>
              <option value='-2'> -2 </option>
              <option value='-1'> -1 </option>
              <option value='0'>0</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
              <option value='11'>11</option>
              <option value='12'>12</option>
              <option value='13'>13</option>
              <option value='14'>14</option>
              <option value='15'>15</option>
              <option value='16'>16</option>
              <option value='17'>17</option>
              <option value='18'>18</option>
              <option value='19'>19</option>
              <option value='20'>20</option>
              <option value='21'>21</option>
              <option value='22'>22</option>
              <option value='23'>23</option>
              <option value='24'>24</option>
              <option value='25'>25</option>
              <option value='26'>26</option>
              <option value='27'>27</option>
              <option value='28'>28</option>
              <option value='29'>29</option>
              <option value='30'>30</option>
              <option value='31'>31</option>
              <option value='32'>32</option>
              <option value='33'>33</option>
              <option value='34'>34</option>
              <option value='35'>35</option>
              <option value='36'>36</option>
              <option value='37'>37</option>
              <option value='38'>38</option>
              <option value='39'>39</option>
              <option value='40'>40</option>
              <option value='-20'> -20 </option>
              <option value='-19'> -19 </option>
              <option value='-18'> -18 </option>
              <option value='-17'> -17 </option>
              <option value='-16'> -16 </option>
              <option value='-15'> -15 </option>
              <option value='-14'> -14 </option>
              <option value='-13'> -13 </option>
              <option value='-12'> -12 </option>
              <option value='-11'> -11 </option>
              <option value='-10'> -10 </option>
              <option value='-9'> -9 </option>
              <option value='-8'> -8 </option>
              <option value='-7'> -7 </option>
              <option value='-6'> -6 </option>
              <option value='-5'> -5 </option>
              <option value='-4'> -4 </option>
              <option value='-3'> -3 </option>
              <option value='-2'> -2 </option>
              <option value='-1'> -1 </option>
              <option value='0'>0</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
              <option value='11'>11</option>
              <option value='12'>12</option>
              <option value='13'>13</option>
              <option value='14'>14</option>
              <option value='15'>15</option>
              <option value='16'>16</option>
              <option value='17'>17</option>
              <option value='18'>18</option>
              <option value='19'>19</option>
              <option value='20'>20</option>
              <option value='21'>21</option>
              <option value='22'>22</option>
              <option value='23'>23</option>
              <option value='24'>24</option>
              <option value='25'>25</option>
              <option value='26'>26</option>
              <option value='27'>27</option>
              <option value='28'>28</option>
              <option value='29'>29</option>
              <option value='30'>30</option>
              <option value='31'>31</option>
              <option value='32'>32</option>
              <option value='33'>33</option>
              <option value='34'>34</option>
              <option value='35'>35</option>
              <option value='36'>36</option>
              <option value='37'>37</option>
              <option value='38'>38</option>
              <option value='39'>39</option>
              <option value='40'>40</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
            <Input
              type='number'
              className='mt-2'
              min='-20'
              max='40'
              step='1'
              value={lowerConnect}
              onChange={e => setLowerConnect(e.target.value)}
            />
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default SliderWithInput
