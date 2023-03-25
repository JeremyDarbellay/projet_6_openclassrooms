import { render, screen, waitFor, within } from '@testing-library/react'
import '@testing-library/jest-dom'
import {
    RouterProvider,
    createMemoryRouter,
  } from "react-router-dom";

import Home from '.'

/**
 * by testing accessibility, we made at same time
 * existence and rendering tests.
 */
describe('Le composant Home doit :', () => {

    test('être accessible', async () => {

        /**
         * mimic default loader
         * but use fake data
         * 
         * @return {array}
         */
        function loadFakeData() {
            const apartments = [
                {"id": "1a", "cover": "test.png", "title": "test title"},
                {"id": "2b", "cover": "test2.png", "title": "test 2 title"},
            ]

            return { apartments }
        }
            

        const route = [{
            path: '/',
            element: <Home />,
            loader: loadFakeData,
        }]

        const router = createMemoryRouter(route, {
            initialEntries: ["/"]
        })

        render(<RouterProvider router={router} />)

        await waitFor( () => screen.findByLabelText('Logements'))

        expect(screen.getByLabelText('Logements')).toBeTruthy()

        const allLinks = await screen.findAllByRole('link')
        expect(allLinks.length === 2).toBeTruthy()
        expect(within(allLinks[0]).getByText('test title')).toBeTruthy()
        expect(within(allLinks[1]).getByText('test 2 title')).toBeTruthy()
        
    })
})