import { render, screen } from '@testing-library/react'
import { RouterProvider, createMemoryRouter } from "react-router-dom"


import App from './'

describe('Le composant App', () => {

  test('devrait être affiché sans crash', async () => {

    const routes = [
      {
        path: "/",
        element: <App />
      },
    ]

    const router = createMemoryRouter(routes, {
      initialEntries: ["/"]
    })

    render(<RouterProvider router={router} />)
  })

  test('doit afficher le header et le footer', async () => {

    const routes = [
      {
        path: "/",
        element: <App />
      },
    ]

    const router = createMemoryRouter(routes, {
      initialEntries: ["/"]
    })

    render(<RouterProvider router={router} />)

    expect(screen.getByTestId('header')).toBeDefined()
    expect(screen.getByTestId('footer')).toBeDefined()

  })
})