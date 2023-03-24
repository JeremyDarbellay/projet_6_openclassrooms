import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import {
    RouterProvider,
    createMemoryRouter,
  } from "react-router-dom";

import Logement from './'

/**
 * by testing accessibility, we made at same time
 * existence and rendering tests.
 */
describe('Le composant Logement doit :', () => {

    test('être accessible', async () => {

        /**
         * mimic default loader
         * but use fake data
         * 
         * @return {array}
         */
        function loadFakeData(test) {
            const apartment = {
                id: "test",
                title: "Appartement test",
                cover: "test-cover.png",
                pictures: [
                    "img-test.png",
                    "img-test2.png",
                    
                ],
                description: "description test.",
                host: {
                    "name": "John doe",
                    "picture": "test-author.png"
                },
                rating: "5",
                location: "France",
                equipments: [
                    "equipement 1",
                    "equipement 2",
                ],
                tags: [
                    "1",
                    "2"
                ]
            }

            return { apartment }
        }
            

        const route = [{
            path: '/logements/:id',
            element: <Logement />,
            loader: loadFakeData,
        }]

        const router = createMemoryRouter(route, {
            initialEntries: ["/logements/test"]
        })

        render(<RouterProvider router={router} />)

    })
})