import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'

import ErrorPage from './'

/**
 * by testing accessibility, we made at same time
 * existence and rendering tests.
 */
describe('Le composant ErrorPage doit :', () => {

    test('être accessible', () => {
        render(
            <MemoryRouter >
                <ErrorPage />
            </MemoryRouter>
        )

        expect(screen.getByRole('heading', {"level": 2})).toBeTruthy()
        expect(screen.getByAltText('404')).toBeTruthy()
        expect(screen.getByText("Retournez sur la page d'accueil")).toBeTruthy()
        expect(screen.getByRole('main')).toBeTruthy()
    })
})