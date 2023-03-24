import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'

import Header from './'

/**
 * by testing accessibility, we made at same time
 * existence and rendering tests.
 */
describe('Le composant Header doit :', () => {

    test('être accessible', () => {
        render(
            <MemoryRouter >
                <Header />
            </MemoryRouter>
        )

        expect(screen.getByRole('banner')).toBeTruthy()
        expect(screen.getByRole('navigation')).toBeTruthy()
        expect(screen.getByText('Accueil')).toBeTruthy()
        expect(screen.getByText('A propos')).toBeTruthy()
        expect(screen.getByRole('img')).toBeTruthy()
        expect(screen.getByAltText('Logo de Kasa')).toBeTruthy()
        expect(screen.getByRole('heading', {"level": 1})).toBeTruthy()
        
    })
})