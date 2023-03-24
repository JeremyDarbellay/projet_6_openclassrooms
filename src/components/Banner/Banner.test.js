import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Banner from './'

describe('Le composant Banner doit :', () => {
    
    test('doit s\'afficher sans crash', () => {

        render(<Banner img="test.png" alt="test alt" text="test" />)

    })
    test('doit s\'afficher sans passer de prop text', () => {

        render(<Banner img="test.png" alt="test alt" />)

    })
    test('être accessible', () => {

        const { rerender } = render(<Banner img="test.png" alt="test alt"/>)

        // we check that section label is present without text on banner
        expect(screen.getByLabelText('bannière')).toBeTruthy()
        // image has alt attribute (so image exist)
        expect(screen.getByAltText('test alt')).toBeTruthy()

        // we check if h2 is displayed when text is provided
        rerender(<Banner img="test.png" alt="test alt" text="test" />)

        expect(screen.getByRole('heading', {"level": 2})).toBeTruthy()

    })
})