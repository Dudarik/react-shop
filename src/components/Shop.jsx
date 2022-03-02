import { useState, useEffect } from "react"
import { API_KEY, API_URL } from "../config"
import Cart from "./Cart"
import Preloader from "./Preloader"
import GoodsList from "./GoodsList"
import BasketList from "./BasketList"
import Alert from "./Alert"

export default function Shop() {
  const [goods, setGoods] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [order, setOrder] = useState([])
  const [isBasketShow, setIsBasketShow] = useState(false)
  const [alertName, setAlertName] = useState('')

  useEffect(function getGoods(){
    fetch(API_URL, {
      headers: {
        authorization: API_KEY,
      }
    })
    .then(responce => responce.json())
    .then(data => {
      console.log(data.shop)
      data.shop && setGoods(data.shop)
      setIsLoading(false)
    })
  }, [])

  const closeAlert = () => {
    setAlertName('')
  }

  const addToBasket = item => {
    const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)

    if (itemIndex < 0){
      const newItem = {
        ...item,
        quantity: 1
      }    
      setOrder([...order, newItem])
    }else{
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex){
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1
          }
        }else{
          return orderItem
        }
      })
      setOrder(newOrder)
    }
    setAlertName(item.name)
  }

  const removeFromBasket = id => setOrder(order.filter(item => item.id !== id))

  const incQuantity = itemId => {
    const newOrder = order.map(orderItem => {
      if (orderItem.id === itemId){
        return {
          ...orderItem,
          quantity: orderItem.quantity + 1
        }
      }else{
        return orderItem
      }
    })
    setOrder(newOrder) 
  }; 

  const decQuantity = itemId => {
    const newOrder = order.map(orderItem => {
      if (orderItem.id === itemId){

        if(orderItem.quantity === 0 ) return orderItem   

        return {
          ...orderItem,
          quantity: orderItem.quantity - 1
        }
      }else{
        return orderItem
      }
    })
    setOrder(newOrder) 
  };

  const handleBasketShow = () => setIsBasketShow(!isBasketShow)

  return(
    <main className="container content">
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {isLoading ? <Preloader/> : <GoodsList addToBasket={addToBasket} goods={goods}/>}
      {isBasketShow && <BasketList order={order} decQuantity={decQuantity} incQuantity={incQuantity} handleBasketShow={handleBasketShow} removeFromBasket={removeFromBasket}/>}
      {alertName ? <Alert name={alertName} closeAlert={closeAlert}/> : null}
    </main>
  )
}