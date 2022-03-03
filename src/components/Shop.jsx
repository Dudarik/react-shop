import { useState, useEffect, useContext } from "react"
import { API_KEY, API_URL } from "../config"

import { ShopContext } from "../Context"

import Cart from "./Cart"
import Preloader from "./Preloader"
import GoodsList from "./GoodsList"
import BasketList from "./BasketList"
import Alert from "./Alert"

import Pagination from "material-ui-flat-pagination";

export default function Shop() {

  const {setGoods, isLoading, order, isBasketShow, alertName} = useContext(ShopContext)

  const [limitPage, setLimitPage] = useState(10)
  const [offsetPage, setOffsetPage] = useState(0)
  const [totalItems, setTotalItems] = useState(0)

  const handlePageClick = (offset) => {
    setOffsetPage(offset)
  }
  useEffect(function getGoods(){
    fetch(API_URL, {
      headers: {
        authorization: API_KEY,
      }
    })
    .then(responce => responce.json())
    .then(data => {      
      data.shop && setGoods(data.shop)
      data.shop && setTotalItems(data.shop.length)
    })
    //eslint-disable-next-line
  }, [])

  return(
    <main className="container content">
      <Cart quantity={order.length} />
      {isLoading ? 
        <Preloader/> 
        :
        <>
        <Pagination
          limit={limitPage}
          offset={offsetPage}
          total={totalItems}
          onClick={(e, offset) => handlePageClick(offset)}
        />
          <GoodsList offsetPage={offsetPage} limitPage={limitPage} />
        <Pagination
          limit={limitPage}
          offset={offsetPage}
          total={totalItems}
          onClick={(e, offset) => handlePageClick(offset)}
        />
        </> 
      }
      {isBasketShow && <BasketList />}
      {alertName ? <Alert /> : null}
    </main>
  )
}