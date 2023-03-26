import { render, screen, fireEvent } from '@testing-library/react'

import '@testing-library/jest-dom'

import Slideshow from './'

/**
 * by testing accessibility, we made at same time
 * existence and rendering tests.
 */
describe('Le composant Slideshow doit :', () => {

    test('être accessible avec plusieurs images', async () => {

        render(<Slideshow pictures={["test.png","test2.png"]} alt="test alt"/>)

        // controls
        expect(screen.getByRole('button', {name: 'Suivant'})).toBeInTheDocument()
        expect(screen.getByRole('button', {name: 'Précédent'})).toBeInTheDocument()

        //indicator
        const indicator = screen.getByText('1/2')
        expect(indicator.getAttribute('aria-atomic')).toBe('true')
        expect(indicator.getAttribute('aria-live')).toBe('polite')

        expect(screen.getByAltText('test alt')).toBeInTheDocument()

        fireEvent.click(screen.getByRole('button', {name: 'Suivant'}))

        expect(await screen.findByText('2/2')).toBeInTheDocument()

    }) 

    test('être accessible avec une seule image', () => {

        render(<Slideshow pictures={["test.png"]} alt="test alt"/>)

        // controls
        expect(screen.queryByRole('button', {name: 'Suivant'})).toBeNull()
        expect(screen.queryByRole('button', {name: 'Précédent'})).toBeNull()
        expect(screen.queryByText('1/1')).toBeNull()

    }) 

    test('disposer de toutes les fonctionnalités requises', async () => {

        render(<Slideshow pictures={["test.png","test2.png"]} alt="test alt"/>)

        // check that first is first
        expect(screen.getByText('1/2')).toBeInTheDocument()
        let firstSrc = screen.getByAltText('test alt').getAttribute('src')
        expect(firstSrc).toBe('test.png')

        // test previous on first slide goes to last
        fireEvent.click(screen.getByRole('button', {name: 'Précédent'}))
        expect(await screen.findByText('2/2')).toBeInTheDocument()
        // check that image has changed
        let secondSrc = screen.getByAltText('test alt').getAttribute('src')
        expect(firstSrc !== secondSrc).toBeTruthy()
        expect(secondSrc).toBe('test2.png')

        // test next on last slide goes to first
        fireEvent.click(screen.getByRole('button', {name: 'Suivant'}))
        expect(await screen.findByText('1/2')).toBeInTheDocument()
        // check that image has changed again
        // and image is back to original
        let nextSrc = screen.getByAltText('test alt').getAttribute('src')
        expect(nextSrc !== secondSrc).toBeTruthy()
        expect(firstSrc === nextSrc).toBeTruthy()

        // test next goes next
        fireEvent.click(screen.getByRole('button', {name: 'Suivant'}))
        expect(await screen.findByText('2/2')).toBeInTheDocument()
        expect(screen.getByAltText('test alt').getAttribute('src')).toBe('test2.png')

        // test previous goes previous
        fireEvent.click(screen.getByRole('button', {name: 'Suivant'}))
        expect(await screen.findByText('1/2')).toBeInTheDocument()
        expect(screen.getByAltText('test alt').getAttribute('src')).toBe('test.png')

    })
})