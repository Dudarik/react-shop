import GoodsItem from "./GoodsItem"

export default function GoodsList({limitPage, offsetPage, goods = [], addToBasket}){
  if (goods.length === 0) return <h3>Не нашлось ни одного товара</h3>
  
  let partGoods = goods.slice(offsetPage, offsetPage + limitPage)  

  return (
    <div className="goods">
      
      {
      partGoods.map(item => <GoodsItem addToBasket={addToBasket} key={item.mainId} {...item}/>)
      }
    </div>
  )
}