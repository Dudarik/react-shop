import { useContext } from "react"
import { ShopContext } from "../Context"

export default function BasketItem(props){
  const {
    id,
    name,
    price,
    quantity,
  } = props

  const {removeFromBasket, decQuantity, incQuantity } = useContext(ShopContext)
  

  return(
    <li className="collection-item">
      {name} - {price}
       <i className="material-icons basket-quantity" onClick={() => decQuantity(id)}>remove</i> 
       x{quantity} 
       <i className="material-icons basket-quantity" onClick={() => incQuantity(id)}>add</i> 
       = {quantity * price}
      

      <span className="secondary-content" onClick={() => removeFromBasket(id)}><i className="material-icons basket-delete">delete_forever</i></span>
    </li>
  )
}