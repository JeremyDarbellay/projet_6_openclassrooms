import { ErrorPage, Logement, About, App, Home } from './components'

import { createMemoryRouter, RouterProvider } from "react-router-dom"
import { render, screen, fireEvent, prettyDOM, within } from '@testing-library/react'

const data = [
	{
		"id": "apt1",
		"title": "Apartment1",
		"cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
		"pictures": [
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
		],
		"description": "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.",
		"host": {
			"name": "Nathalie Jean",
			"picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg"
		},
		"rating": "5",
		"location": "Ile de France - Paris 17e",
		"equipments": [
			"Équipements de base",
			"Micro-Ondes",
			"Douche italienne",
			"Frigo",
			"WIFI"
		],
		"tags": [
			"Batignolle",
			"Montmartre"
		]
	},
	{
		"id": "apt2",
		"title": "Apartment2",
		"cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg",
		"pictures": [
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-2.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-3.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-4.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-5.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-6.jpg"
		],
		"description": "Profitez du charme de la vie parisienne dans un magnifique appartement. A 3 minutes à pied du Canl Saint Martin, vous serez proche des transports, mais également de nombreux commerces. L'appartement est tout équipé, et possède également un parking pour ceux qui souhaitent se déplacer en voiture.",
		"host": {
			"name": "Della Case",
			"picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-1.jpg"
		},
		"rating": "4",
		"location": "Ile de France - Paris 10e",
		"equipments": [
			"Parking",
			"Sèche Cheveux",
			"Machine à laver",
			"Wi-fi",
			"Cuisine équipée",
			"Télévision"
		],
		"tags": [
			"Canal Saint Martin",
			"République",
			"Appartement"
		]
	}
]

/**
 * mimic default Home loader
 * but use fake data
 * 
 * @return {array}
 */
function loadFakeApartments() {

    const apartments = data

    if (apartments.length === 0) throw new Response('', { status: 404 })

    return { apartments }
}


/**
 * mimic default apartment loader
 * but use fake data
 * 
 * @param {string} id - the fake apartment id
 * 
 * @return {objet}
 */
function loadOneFakeApartment(id) {

    const apartmentArray = data.filter(apt => apt.id === id)

    if (apartmentArray.length !== 1) throw new Response('', { status: 404 })

    const apartment = apartmentArray[0]

    return { apartment }
}


const routes = [
    {
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: loadFakeApartments,
        },
        {
          path: "/a-propos",
          element: <About />
        },
        {
          element: <Logement />,
          path: "logement/:logementId",
          loader: async ({ params }) => {
            return loadOneFakeApartment(`${params.logementId}`)
          }
        }
      ],
    },
]


const router = createMemoryRouter(routes, {
    initialEntries: ["/"]
})

describe('L\'utilisateur devrait :', () => {

    test('pouvoir naviguer sur le site', async () => {

        render(<RouterProvider router={router} />)

        // footer
        expect(screen.getByText('© 2020 Kasa. All rights reserved')).toBeInTheDocument()

        // header
        expect(screen.getByText('Accueil')).toBeInTheDocument()

        // Banner
        expect(screen.getByText('Chez vous, partout et ailleurs')).toBeInTheDocument()

        // about
        await fireEvent.click(screen.getByRole('link', {name: 'A propos'}))
        expect(await screen.findByText('Respect')).toBeInTheDocument()

        // return to home
        await fireEvent.click(screen.getByRole('link', {name: 'Accueil'}))
        expect(await screen.findByText('Chez vous, partout et ailleurs')).toBeInTheDocument()

        // go to first apartment
        prettyDOM(screen.getByRole('main'));

        // get apartments links to navigate
        const linkFirstApartment = within(screen.getByRole('main')).getAllByRole('link')[0]
        const linkSecondApartment = within(screen.getByRole('main')).getAllByRole('link')[1]

        // first apartment
        await fireEvent.click(linkFirstApartment)
        expect(await screen.findByText('Apartment1')).toBeInTheDocument()

        // return to home
        await fireEvent.click(screen.getByRole('link', {name: 'Accueil'}))
        expect(await screen.findByText('Chez vous, partout et ailleurs')).toBeInTheDocument()

        // second apartment
        await fireEvent.click(linkSecondApartment)
        expect(await screen.findByText('Apartment2')).toBeInTheDocument()

    })

    test('être redirigé vers la page d\'erreur sur une mauvaise route, et en sortir', async () => {

        render(<RouterProvider router={createMemoryRouter(routes, { initialEntries: ["/", "/logement/route"] })} />)
       

        expect(await screen.findByAltText('404')).toBeInTheDocument()

        //test du lien sur la page d'erreur
        fireEvent.click(screen.getByText("Retournez sur la page d'accueil"))
        expect(await screen.findByText('Chez vous, partout et ailleurs')).toBeInTheDocument()

    })

})