import React, { VFC } from "react"
import styles from "./index.module.scss"

import { ORDER_LIST } from "./const"
import { useCounter } from "./hooks/useCounter"
import { useDisplayData } from "./hooks/useDisplayData"

export const App: VFC = () => {
  const { counter, handleClickOrder } = useCounter()
  const { displayData } = useDisplayData(counter)

  return (
    <div className={styles.root}>
      <div className={styles.title}>注文リスト</div>

      <div className={styles.contents}>
        <ul className={styles.order}>
          {ORDER_LIST.map((order, index) => {
            const { id, count } = counter[index]

            return (
              <li key={order.id} className={styles.order__item}>
                <div className={styles.order__count} id={id}>
                  {count}
                </div>
                <button
                  id={order.id}
                  className={styles.order__button}
                  type="button"
                  onClick={() => handleClickOrder(index)}
                >
                  <span>{order.label}</span>
                  <span>{order.price}円</span>
                </button>
              </li>
            )
          })}
        </ul>

        <div className={styles.display}>
          <div className={styles.display__title}>お会計</div>
          <div className={styles.display__counts}>
            商品数:<span id="count">{displayData.totalCounts}</span>個
          </div>
          <div className={styles.display__totalPrice}>
            合計金額:<span id="price">{displayData.totalPrice}</span>円
          </div>
        </div>
      </div>
    </div>
  )
}
