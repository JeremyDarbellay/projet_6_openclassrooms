import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import {
    RouterProvider,
    createMemoryRouter,
  } from "react-router-dom";

import Logement from './'


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

    
const route = [
    {
      element: <Logement />,
      path: "logement/:logementId",
      loader: async ({ params }) => {
        return loadFakeData({params})
      }
    }
]

const router = createMemoryRouter(route, {
    initialEntries: ["/logement/test"]
})

/**
 * by testing accessibility, we made at same time
 * existence and rendering tests.
 */
describe('Le composant Logement doit :', () => {

    test('être accessible', async () => {    

        await render(<RouterProvider router={router} />)


        const apartment = await loadFakeData().apartment

        expect(await screen.findByAltText(apartment.host.name)).toBeInTheDocument()

        // sections
        expect(screen.getByRole('region', {name: "Carrousel d'image du logement"})).toBeInTheDocument()
        expect(screen.getByRole('region', {name: "détails sur le logement"})).toBeInTheDocument()
        expect(screen.getByRole('region', {name: apartment.title})).toBeInTheDocument()
        // apartment title
        expect(screen.getByRole('heading', {level: 2})).toBeInTheDocument()
        // rating for screen readers
        expect(screen.getByText(`Note : ${apartment.rating} sur 5`)).toBeInTheDocument()

    })

    test('doit afficher les informations passées dans le logement', async () => {

        await render(<RouterProvider router={router} />)

        const apartment = await loadFakeData().apartment

        expect(await screen.findByText(apartment.title)).toBeInTheDocument()

        expect(screen.getByText(apartment.location)).toBeInTheDocument()
        expect(screen.getByText(apartment.host.name)).toBeInTheDocument()
        expect(screen.getByText(apartment.tags[0])).toBeInTheDocument()
        expect(screen.getByText(apartment.tags[1])).toBeInTheDocument()

        await fireEvent.click(screen.getByText('Description'))

        expect(await screen.findByText(apartment.description)).toBeInTheDocument()

        await fireEvent.click(screen.getByRole('button', {name: "Équipements" }))

        expect(await screen.findByText(apartment.equipments[0])).toBeInTheDocument()
        expect(screen.getByText(apartment.equipments[1])).toBeInTheDocument()

    })
})