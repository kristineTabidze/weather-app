import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Home', () => {
    it('renders a heading', () => {
        render(<Home />)

        const heading = screen.getByTestId('test1');
        expect(heading).toBeInTheDocument()
    })
})