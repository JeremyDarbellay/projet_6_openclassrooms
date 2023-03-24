import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import About from './'

/**
 * by testing accessibility, we made at same time
 * existence and rendering test.
 */
describe('Le composant About doit :', () => {

    test('être accessible et s\'afficher', () => {
        render(<About />)

        expect(screen.getByLabelText('à-propos')).toBeTruthy()
    })

})