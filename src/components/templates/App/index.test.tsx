import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { App } from "."

test("Count", () => {
  render(<App />)
  const countElement = screen.getByTestId("count")
  fireEvent.click(screen.getByTestId("coffee"))
  expect(countElement).toHaveTextContent("1")
})
