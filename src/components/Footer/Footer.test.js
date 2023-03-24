import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Footer from './'

/**
 * by testing accessibility, we made at same time
 * existence and rendering tests.
 */
describe('Le composant Footer doit :', () => {

    test('S\'afficher sans crash et présenter le copyright', () => {

        render(<Footer />)

        expect(screen.getByText('© 2020 Kasa. All rights reserved')).toBeTruthy()

    }) 

    test('être accessible', () => {
        render(<Footer />)

        expect(screen.getByRole('contentinfo')).toBeTruthy()
        expect(screen.getByRole('img')).toBeTruthy()
        expect(screen.getByAltText('logo de kasa en noir et blanc')).toBeTruthy()
    })
})