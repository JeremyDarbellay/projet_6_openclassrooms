import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Slideshow from './'

/**
 * by testing accessibility, we made at same time
 * existence and rendering tests.
 */
describe('Le composant Slideshow doit :', () => {

    test('faire ceci', () => {

        render(<Slideshow pictures={["test.png","test2.png"]} alt="test alt"/>)

    }) 
})