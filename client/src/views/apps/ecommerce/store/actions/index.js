import axios from 'axios'

// ** GET Products
export const getProducts = params => {
  return dispatch => {
    return axios.get('/apps/ecommerce/products', { params }).then(res => {
      dispatch({ type: 'GET_PRODUCTS', data: res.data, params })
    })
  }
}

// ** Add Item to Cart
export const addToCart = id => {
  return (dispatch, getState) => {
    return axios.post('/apps/ecommerce/cart', { productId: id }).then(res => {
      dispatch({ type: 'ADD_TO_CART', data: res.data })
      dispatch(getProducts(getState().ecommerce.params))
    })
  }
}

// ** GET Wishlist Items
export const getWishlistItems = () => {
  return dispatch => {
    return axios.get('/apps/ecommerce/wishlist').then(res => {
      dispatch({ type: 'GET_WISHLIST', data: res.data })
    })
  }
}

// ** DELETE Wishlist Item
export const deleteWishlistItem = id => {
  return dispatch => {
    return axios.delete(`/apps/ecommerce/wishlist/${id}`).then(res => {
      dispatch({ type: 'DELETE_WISHLIST_ITEM', data: res.data })
      dispatch(getWishlistItems())
    })
  }
}

// ** GET Cart Items
export const getCartItems = () => {
  return dispatch => {
    return axios.get('/apps/ecommerce/cart').then(res => {
      dispatch({ type: 'GET_CART', data: res.data })
    })
  }
}

// ** GET Single Product
export const getProduct = slug => {
  return dispatch => {
    return axios.get(`/apps/ecommerce/products/${slug}`).then(res => {
      dispatch({ type: 'GET_PRODUCT', data: res.data })
    })
  }
}

// ** Add Item to Wishlist
export const addToWishlist = id => {
  return dispatch => {
    return axios.post('/apps/ecommerce/wishlist', { productId: id }).then(() => {
      dispatch({ type: 'ADD_TO_WISHLIST' })
    })
  }
}

// ** DELETE Cart Items
export const deleteCartItem = id => {
  return dispatch => {
    return axios.delete(`/apps/ecommerce/cart/${id}`).then(res => {
      dispatch({ type: 'DELETE_CART_ITEM', data: res.data })
      dispatch(getCartItems())
    })
  }
}
