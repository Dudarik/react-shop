import GoodsItem from "./GoodsItem"

export default function GoodsList({goods = [], addToBasket}){
  if (goods.length === 0) return <h3>Не нашлось ни одного товара</h3>
  return (
    <div className="goods">
      {goods.map(item => <GoodsItem addToBasket={addToBasket} key={item.mainId} {...item}/>)}
    </div>
  )
}