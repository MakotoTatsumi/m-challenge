import { useState } from "react"
import { OrderCounterType } from "../../index.type"
import produce from "immer"

import { getInitialCountData } from "./modules/getInitialCountData"

export const useCounter = () => {
  const [counter, setCounter] = useState<OrderCounterType[]>(getInitialCountData())

  const handleClickOrder = (index: number) =>
    setCounter((prev) => {
      return produce(prev, (draft) => {
        draft[index] = {
          ...draft[index],
          count: draft[index].count + 1,
        }
      })
    })

  return {
    counter,
    handleClickOrder,
  }
}
