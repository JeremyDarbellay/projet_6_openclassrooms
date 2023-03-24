import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Card from './'

/**
 * by testing accessibility, we made at same time
 * existence and rendering tests.
 */
describe('Le composant Card doit :', () => {

    test('être accessible', () => {
        render(<Card title="test title" image="test.png"/>)

        expect(screen.getByRole('article')).toBeTruthy()
        expect(screen.getByRole('img')).toBeTruthy()
        expect(screen.getByRole('heading', {"level": 3})).toBeTruthy()
        expect(screen.getByAltText('test title')).toBeTruthy()
    })
})