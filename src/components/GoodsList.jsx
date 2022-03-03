import GoodsItem from "./GoodsItem"
import { useContext } from "react"
import { ShopContext } from "../Context"

export default function GoodsList({limitPage, offsetPage}){
  const {goods} = useContext(ShopContext)
  
  if (goods.length === 0) return <h3>Не нашлось ни одного товара</h3>
  
  let partGoods = goods.slice(offsetPage, offsetPage + limitPage)  

  return (
    <div className="goods">
      
      {
      partGoods.map(item => <GoodsItem key={item.mainId} {...item}/>)
      }
    </div>
  )
}