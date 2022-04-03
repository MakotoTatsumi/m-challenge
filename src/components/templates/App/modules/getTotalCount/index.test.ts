import { getTotalCount } from "./index"

describe("getTotalCount", () => {
  it("なにもクリックされていないとき", () => {
    const OrderCount = [
      {
        id: "coffee-count",
        count: 0,
      },
      {
        id: "tea-count",
        count: 0,
      },
      {
        id: "milk-count",
        count: 0,
      },
      {
        id: "coke-count",
        count: 0,
      },
      {
        id: "beer-count",
        count: 0,
      },
    ]

    const result = {
      totalCounts: 0,
      totalPrice: 0,
    }

    expect(getTotalCount(OrderCount)).toEqual(result)
  })

  it("コーヒーのみ", () => {
    const OrderCount = [
      {
        id: "coffee-count",
        count: 1,
      },
      {
        id: "tea-count",
        count: 0,
      },
      {
        id: "milk-count",
        count: 0,
      },
      {
        id: "coke-count",
        count: 0,
      },
      {
        id: "beer-count",
        count: 0,
      },
    ]

    const result = {
      totalCounts: 1,
      totalPrice: 480,
    }

    expect(getTotalCount(OrderCount)).toEqual(result)
  })

  it("すべて1つずつ", () => {
    const OrderCount = [
      {
        id: "coffee-count",
        count: 1,
      },
      {
        id: "tea-count",
        count: 1,
      },
      {
        id: "milk-count",
        count: 1,
      },
      {
        id: "coke-count",
        count: 1,
      },
      {
        id: "beer-count",
        count: 1,
      },
    ]

    const result = {
      totalCounts: 5,
      totalPrice: 480 + 280 + 180 + 190 + 580,
    }

    expect(getTotalCount(OrderCount)).toEqual(result)
  })
})
