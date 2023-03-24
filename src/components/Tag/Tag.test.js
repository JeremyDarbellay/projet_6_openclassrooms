import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Tag from './'


test('Le composant tag doit afficher le texte passé en prop', () => {

    render(<Tag tag="test"/>)

    expect(screen.getByText('test')).toBeTruthy()

})