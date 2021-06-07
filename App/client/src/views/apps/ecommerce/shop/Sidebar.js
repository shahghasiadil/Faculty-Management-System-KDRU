// ** Custom Hooks
import { useRTL } from '@hooks/useRTL'

// ** Third Party Components
import wNumb from 'wnumb'
import classnames from 'classnames'
import { Star } from 'react-feather'
import Nouislider from 'nouislider-react'
import { Card, CardBody, Row, Col, CustomInput, Button } from 'reactstrap'

// ** Styles
import '@styles/react/libs/noui-slider/noui-slider.scss'

const Sidebar = props => {
  // ** Props
  const { sidebarOpen } = props

  // ** Hooks
  const [isRtl, setIsRtl] = useRTL()

  // ** Array of categories
  const categories = [
    {
      id: 'appliances',
      title: 'Appliances',
      defaultChecked: true
    },
    {
      id: 'audio',
      title: 'Audio'
    },
    {
      id: 'camera-camcorders',
      title: 'Camera & Camcorders'
    },
    {
      id: 'car-electronics',
      title: 'Car Electronics & Gps'
    },
    {
      id: 'cellphones',
      title: 'Cell Phones'
    },
    {
      id: 'computers',
      title: 'Computers & Tablets'
    },
    {
      id: 'health-fitness-beauty',
      title: 'Health, Fitness & Beauty'
    },
    {
      id: 'office-school',
      title: 'Office & School Supplies'
    },
    {
      id: 'tv-home-theater',
      title: 'TV & Home Theater'
    },
    {
      id: 'video-games',
      title: 'Video Games'
    }
  ]

  // ** Array of brands
  const brands = [
    {
      title: 'Insignia™',
      total: 746
    },
    {
      title: 'Samsung',
      total: 633,
      checked: true
    },
    {
      title: 'Metra',
      total: 591
    },
    {
      title: 'HP',
      total: 530
    },
    {
      title: 'Apple',
      total: 422,
      checked: true
    },
    {
      title: 'GE',
      total: 394
    },
    {
      title: 'Sony',
      total: 350
    },
    {
      title: 'Incipio',
      total: 320
    },
    {
      title: 'KitchenAid',
      total: 318
    },
    {
      title: 'Whirlpool',
      total: 298
    }
  ]

  // ** Array of ratings
  const ratings = [
    {
      ratings: 4,
      total: 160
    },
    {
      ratings: 3,
      total: 176
    },
    {
      ratings: 2,
      total: 291
    },
    {
      ratings: 1,
      total: 190
    }
  ]

  return (
    <div className='sidebar-detached sidebar-left'>
      <div className='sidebar'>
        <div
          className={classnames('sidebar-shop', {
            show: sidebarOpen
          })}
        >
          <Row>
            <Col sm='12'>
              <h6 className='filter-heading d-none d-lg-block'>Filters</h6>
            </Col>
          </Row>
          <Card>
            <CardBody>
              <div className='multi-range-price'>
                <h6 className='filter-title mt-0'>Multi Range</h6>
                <ul className='list-unstyled price-range'>
                  <li>
                    <CustomInput id='all' name='price-range-radio' type='radio' label='All' defaultChecked />
                  </li>
                  <li>
                    <CustomInput id='10-dollars-below' name='price-range-radio' type='radio' label='<=$10' />
                  </li>
                  <li>
                    <CustomInput id='10-100-dollars' name='price-range-radio' type='radio' label='$10-$100' />
                  </li>
                  <li>
                    <CustomInput id='100-500-dollars' name='price-range-radio' type='radio' label='$100-$500' />
                  </li>
                  <li>
                    <CustomInput id='500-dollars-above' name='price-range-radio' type='radio' label='>=$500' />
                  </li>
                </ul>
              </div>
              <div className='price-slider'>
                <h6 className='filter-title'>Price Range</h6>
                <div className='price-slider'>
                  <Nouislider
                    className='range-slider mt-2'
                    direction={isRtl ? 'rtl' : 'ltr'}
                    start={[1500, 3500]}
                    connect={true}
                    tooltips={[true, true]}
                    format={wNumb({
                      decimals: 0
                    })}
                    range={{
                      min: 51,
                      max: 5000
                    }}
                  />
                </div>
              </div>
              <div id='product-categories'>
                <h6 className='filter-title'>Categories</h6>
                <ul className='list-unstyled categories-list'>
                  {categories.map(category => {
                    return (
                      <li key={category.id}>
                        <CustomInput
                          type='radio'
                          id={category.id}
                          label={category.title}
                          name='category-radio'
                          defaultChecked={category.defaultChecked}
                        />
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className='brands'>
                <h6 className='filter-title'>Brands</h6>
                <ul className='list-unstyled brand-list'>
                  {brands.map(brand => {
                    return (
                      <li key={brand.title}>
                        <CustomInput
                          type='checkbox'
                          id={brand.title}
                          label={brand.title}
                          defaultChecked={brand.checked}
                        />
                        <span>{brand.total}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div id='ratings'>
                <h6 className='filter-title'>Ratings</h6>
                {ratings.map(item => {
                  return (
                    <div key={item.total} className='ratings-list'>
                      <a href='/' onClick={e => e.preventDefault()}>
                        <ul className='unstyled-list list-inline'>
                          {new Array(5).fill().map((listItem, index) => {
                            return (
                              <li key={index} className='ratings-list-item mr-25'>
                                <Star
                                  className={classnames({
                                    'filled-star': index + 1 <= item.ratings,
                                    'unfilled-star': index + 1 > item.ratings
                                  })}
                                />
                              </li>
                            )
                          })}
                          <li>& up</li>
                        </ul>
                      </a>
                      <div className='stars-received'>{item.total}</div>
                    </div>
                  )
                })}
              </div>
              <div id='clear-filters'>
                <Button.Ripple color='primary' block>
                  Clear All Filters
                </Button.Ripple>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
