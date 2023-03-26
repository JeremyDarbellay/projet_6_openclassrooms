import { render, screen, waitForElementToBeRemoved, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import Accordion from './'

/**
 * by testing accessibility, we made at same time
 * existence and rendering tests.
 */
describe('Le composant Accordion doit :', () => {

    test('Être fermé lors du render initial', () => {

        render(<Accordion title="test title" content="test content" />)

        expect(screen.getByText('test title')).toBeTruthy()
        expect(screen.queryByText('test content')).toBeNull()

    }) 

    test('S\'ouvrir lors du clic, puis se refermer', async () => {

        render(<Accordion title="test title" content="test content" />)

        expect(screen.getByText('test title')).toBeTruthy()
        expect(screen.queryByText('test content')).toBeNull()

        fireEvent.click(screen.getByRole('button'))
            
        expect(await screen.findByText('test content')).toBeTruthy()


        fireEvent.click(screen.getByRole('button'))

        await waitForElementToBeRemoved(screen.queryByText('test content'))

    })

    test('être accessible', async () => {
        

        render(<Accordion title="test title" content="test content" />)

        // button is present and accordion not expanded
        expect(screen.getByRole('button', {expanded: false})).toBeTruthy()
        // has a text to click (in button)
        expect(screen.getByText('test title')).toBeTruthy()
        // content isn't here 'cause not expanded
        expect(screen.queryByText('test content')).toBeNull()
        // point something 
        const controlAttribute = screen.getByRole('button').getAttribute('aria-controls')
        expect(controlAttribute).toBeTruthy()


        fireEvent.click(screen.getByRole('button'))

        
        expect(await screen.findByRole('button', {expanded: true})).toBeTruthy()

        // check that button target content
        const element = await screen.findByRole('region')
        expect(element.id === controlAttribute).toBeTruthy()

        fireEvent.click(screen.getByRole('button'))

        await waitForElementToBeRemoved(screen.queryByText('test content'))

        expect(await screen.findByRole('button', {expanded: false})).toBeTruthy()

    })
})