import App from './App'
import React from 'react'
import { describe, test, expect, beforeEach, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'
import { MemoryRouter } from 'react-router-dom'

expect.extend(matchers)

describe('App component', () => {
    beforeEach(() => {
        render(
        <MemoryRouter>
            <App/>
        </MemoryRouter> )
    })

    afterEach(() => {
        cleanup()
    })

    test(' it only displays one h1', () => {
        const h1s = screen.queryAllByRole('heading', {
          level:1
        })
        expect(h1s.length).not.toBeGreaterThan(1)
        
    })

})