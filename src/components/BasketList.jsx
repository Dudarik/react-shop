import BasketItem from "./BasketItem"

export default function BasketList(props){
  const {order, decQuantity=Function.prototype, incQuantity = Function.prototype, handleBasketShow = Function.prototype, removeFromBasket = Function.prototype} = props
  const totalPrice = order.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (    
    <ul className="collection basket-list">
      <li className="collection-item active">Корзина<span className="close-basket right" onClick={() => handleBasketShow()}><i className="material-icons">close</i></span></li>
      {order.length ? order.map(item => <BasketItem decQuantity={decQuantity} incQuantity={incQuantity} removeFromBasket={removeFromBasket} key={item.id} {...item}/>) : <li className='collection-item'>Корзина пуста</li>}      
      <li className="collection-item active">Общая стоимость: {totalPrice}</li>
      <li className="collection-item active"><button className="btn btn-small teal darken-2">Оформить заказ</button></li>
    </ul>
  )
}