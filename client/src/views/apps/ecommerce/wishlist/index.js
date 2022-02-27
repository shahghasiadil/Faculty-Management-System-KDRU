// ** React Imports
import { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'

// ** Custom Components
import BreadCrumbs from '@components/breadcrumbs'

// ** Third Party Components
import classnames from 'classnames'
import { Star, X, ShoppingCart, Info } from 'react-feather'
import { Card, CardBody, CardText, Button, Alert } from 'reactstrap'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import { getWishlistItems, deleteWishlistItem, addToCart } from '../store/actions'

// ** Styles
import '@styles/base/pages/app-ecommerce.scss'

const Wishlist = () => {
  // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.ecommerce)

  //** ComponentDidMount : get wishlist items
  useEffect(() => {
    dispatch(getWishlistItems())
  }, [])

  // ** Handle Move/Add to cart
  const handleCartBtn = (id, val) => {
    if (val === false) {
      dispatch(addToCart(id))
    }
    dispatch(getWishlistItems())
  }

  // ** Renders wishlist products
  const renderWishlist = () => {
    return store.wishlist.map(item => {
      const CartBtnTag = item.isInCart ? Link : 'button'
      return (
        <Card className='ecommerce-card' key={item.name}>
          <div className='item-img text-center mx-auto'>
            <Link to={`/apps/ecommerce/product-detail/${item.slug}`}>
              <img className='img-fluid' src={item.image} alt={item.name} />
            </Link>
          </div>
          <CardBody>
            <div className='item-wrapper'>
              <div className='item-rating'>
                <ul className='unstyled-list list-inline'>
                  {new Array(5).fill().map((listItem, index) => {
                    return (
                      <li key={index} className='ratings-list-item mr-25'>
                        <Star
                          className={classnames({
                            'filled-star': index + 1 <= item.rating,
                            'unfilled-star': index + 1 > item.rating
                          })}
                        />
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className='item-cost'>
                <h6 className='item-price'>$ {item.price}</h6>
              </div>
            </div>
            <div className='item-name'>
              <Link to={`/apps/ecommerce/product/${item.slug}`}>{item.name}</Link>
            </div>
            <CardText className='item-description'>{item.description}</CardText>
          </CardBody>
          <div className='item-options text-center'>
            <Button
              className='btn-wishlist remove-wishlist'
              color='light'
              onClick={() => {
                dispatch(deleteWishlistItem(item.id))
              }}
            >
              <X className='mr-25' size={14} />
              <span>Remove</span>
            </Button>
            <Button
              color='primary'
              tag={CartBtnTag}
              className='btn-cart move-cart'
              onClick={() => handleCartBtn(item.id, item.isInCart)}
              /*eslint-disable */
              {...(item.isInCart
                ? {
                    to: '/apps/ecommerce/checkout'
                  }
                : {})}
              /*eslint-enable */
            >
              <ShoppingCart className='mr-50' size={14} />
              <span>{item.isInCart ? 'View In Cart' : 'Add To Cart'}</span>
            </Button>
          </div>
        </Card>
      )
    })
  }

  return (
    <Fragment>
      <BreadCrumbs breadCrumbTitle='Wishlist' breadCrumbParent='eCommerce' breadCrumbActive='Wishlist' />
      {store.wishlist.length ? (
        <section className='grid-view wishlist-items'>{renderWishlist()}</section>
      ) : (
        <Alert color='info'>
          <div className='alert-body'>
            <Info size={14} />
            <span className='align-middle ml-50'>Your Wishlist is empty</span>
          </div>
        </Alert>
      )}
    </Fragment>
  )
}

export default Wishlist
