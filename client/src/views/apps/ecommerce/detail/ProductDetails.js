// ** React Imports
import { useState } from 'react'
import { Link } from 'react-router-dom'

// ** Third Party Components
import classnames from 'classnames'
import { Star, ShoppingCart, DollarSign, Heart, Share2, Facebook, Twitter, Youtube, Instagram } from 'react-feather'
import {
  Row,
  Col,
  CardText,
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from 'reactstrap'

const Product = props => {
  // ** Props
  const { data, deleteWishlistItem, dispatch, addToWishlist, getProduct, productId, addToCart } = props

  // ** State
  const [selectedColor, setSelectedColor] = useState('primary')

  // ** Renders color options
  const renderColorOptions = () => {
    return data.colorOptions.map(color => {
      return (
        <li
          key={color}
          className={classnames('d-inline-block', {
            selected: selectedColor === color
          })}
          onClick={() => setSelectedColor(color)}
        >
          <div className={`color-option b-${color}`}>
            <div className={`filloption bg-${color}`}></div>
          </div>
        </li>
      )
    })
  }

  // ** Handle Wishlist item toggle
  const handleWishlist = val => {
    if (val) {
      dispatch(deleteWishlistItem(productId))
    } else {
      dispatch(addToWishlist(productId))
    }
    dispatch(getProduct(productId))
  }

  // ** Handle Move/Add to cart
  const handleCartBtn = (id, val) => {
    if (val === false) {
      dispatch(addToCart(id))
    }
    dispatch(getProduct(productId))
  }

  // ** Condition btn tag
  const CartBtnTag = data.isInCart ? Link : 'button'

  return (
    <Row className='my-2'>
      <Col className='d-flex align-items-center justify-content-center mb-2 mb-md-0' md='5' xs='12'>
        <div className='d-flex align-items-center justify-content-center'>
          <img className='img-fluid product-img' src={data.image} alt={data.name} />
        </div>
      </Col>
      <Col md='7' xs='12'>
        <h4>{data.name}</h4>
        <CardText tag='span' className='item-company'>
          By
          <a className='company-name' href='/' onClick={e => e.preventDefault()}>
            {data.brand}
          </a>
        </CardText>
        <div className='ecommerce-details-price d-flex flex-wrap mt-1'>
          <h4 className='item-price mr-1'>${data.price}</h4>
          <ul className='unstyled-list list-inline'>
            {new Array(5).fill().map((listItem, index) => {
              return (
                <li key={index} className='ratings-list-item mr-25'>
                  <Star
                    className={classnames({
                      'filled-star': index + 1 <= data.rating,
                      'unfilled-star': index + 1 > data.rating
                    })}
                  />
                </li>
              )
            })}
          </ul>
        </div>
        <CardText>
          Available -<span className='text-success ml-25'>In stock</span>
        </CardText>
        <CardText>{data.description}</CardText>
        <ul className='product-features list-unstyled'>
          {data.hasFreeShipping ? (
            <li>
              <ShoppingCart size={19} />
              <span>Free Shipping</span>
            </li>
          ) : null}
          <li>
            <DollarSign size={19} />
            <span>EMI options available</span>
          </li>
        </ul>
        <hr />
        <div className='product-color-options'>
          <h6>Colors</h6>
          <ul className='list-unstyled mb-0'>{renderColorOptions()}</ul>
        </div>
        <hr />
        <div className='d-flex flex-column flex-sm-row pt-1'>
          <Button
            tag={CartBtnTag}
            className='btn-cart mr-0 mr-sm-1 mb-1 mb-sm-0'
            color='primary'
            onClick={() => handleCartBtn(data.id, data.isInCart)}
            /*eslint-disable */
            {...(data.isInCart
              ? {
                  to: '/apps/ecommerce/checkout'
                }
              : {})}
            /*eslint-enable */
          >
            <ShoppingCart className='mr-50' size={14} />
            {data.isInCart ? 'View in cart' : 'Move to cart'}
          </Button>
          <Button
            className='btn-wishlist mr-0 mr-sm-1 mb-1 mb-sm-0'
            color='secondary'
            outline
            onClick={() => handleWishlist(data.isInWishlist)}
          >
            <Heart
              size={14}
              className={classnames('mr-50', {
                'text-danger': data.isInWishlist
              })}
            />
            <span>Wishlist</span>
          </Button>
          <UncontrolledButtonDropdown className='dropdown-icon-wrapper btn-share'>
            <DropdownToggle className='btn-icon hide-arrow' color='secondary' caret outline>
              <Share2 size={14} />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem tag='a' href='/' onClick={e => e.preventDefault()}>
                <Facebook size={14} />
              </DropdownItem>
              <DropdownItem tag='a' href='/' onClick={e => e.preventDefault()}>
                <Twitter size={14} />
              </DropdownItem>
              <DropdownItem tag='a' href='/' onClick={e => e.preventDefault()}>
                <Youtube size={14} />
              </DropdownItem>
              <DropdownItem tag='a' href='/' onClick={e => e.preventDefault()}>
                <Instagram size={14} />
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </div>
      </Col>
    </Row>
  )
}

export default Product
