import { DisplayDataType, OrderCounterType } from "../../index.type"
import { INITIAL_DISPLAY_DATA, ORDER_LIST } from "../../const"

export const getTotalCount = (data: OrderCounterType[]) => {
  return data.reduce((result, value, index): DisplayDataType => {
    const totalCounts = result.totalCounts + value.count
    const totalPrice = result.totalPrice + ORDER_LIST[index].price * value.count

    return {
      totalCounts,
      totalPrice,
    }
  }, INITIAL_DISPLAY_DATA)
}
