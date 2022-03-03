
export default function reducer(state, {type, payload}) {
  switch (type) {
    case 'ADD_TO_BASKET':{
      const itemIndex = state.order.findIndex(orderItem => orderItem.id === payload.id)

      let newOrder = null

      if (itemIndex < 0){
        const newItem = {
          ...payload,
          quantity: 1
        }    
        newOrder = [...state.order, newItem]
      }else{
        newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex){
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1
            }
          }else{
            return orderItem
          }
        })
      }
      
      return {
        ...state,
        order: newOrder,
        alertName: payload.name
      }
    }
    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        order: state.order.filter(item => item.id !== payload.id)
      }
    case 'CLOSE_ALERT':
      return{
        ...state,
        alertName:''
      }

    case 'DECREMENT_QUANTITY':{
      const newOrder = state.order.map(orderItem => {
        if (orderItem.id === payload.id){
  
          if(orderItem.quantity === 0 ) return orderItem   
  
          return {
            ...orderItem,
            quantity: orderItem.quantity - 1
          }
        }else{
          return orderItem
        }
      })
      return {
        ...state,
        order: newOrder
      }
    }

    case 'INCREMENT_QUANTITY':{
      const newOrder = state.order.map(orderItem => {
        if (orderItem.id === payload.id){  
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1
          }
        }else{
          return orderItem
        }
      })
      return {
        ...state,
        order: newOrder
      }
    }

    case 'TOGGLE_BASKET':
      return{
        ...state,
        isBasketShow: !state.isBasketShow,
      }

    case 'SET_GOODS': 
      return{
        ...state,
        goods: payload || [],
        isLoading: false
      }
  
    default:
      return state
  }
  
}