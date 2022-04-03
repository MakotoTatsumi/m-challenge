import { useEffect, useState } from "react"
import { DisplayDataType, OrderCounterType } from "../../index.type"
import { INITIAL_DISPLAY_DATA } from "../../const"
import { getTotalCount } from "../../modules/getTotalCount"

export const useDisplayData = (counter: OrderCounterType[]) => {
  const [displayData, setDisplayData] = useState<DisplayDataType>(INITIAL_DISPLAY_DATA)

  useEffect(() => {
    setDisplayData(getTotalCount(counter))
  }, [counter])

  return {
    displayData,
  }
}
