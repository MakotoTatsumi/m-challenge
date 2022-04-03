import { ORDER_LIST } from "../../../../const"

export const getInitialCountData = () => ORDER_LIST.map((order) => ({ id: `${order.id}-count`, count: 0 }))
