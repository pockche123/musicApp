import React from 'react'
import { describe, test, expect, beforeEach, afterEach, fireEvent } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'
import { MemoryRouter } from 'react-router-dom'
import HomePage from './HomePage'
import { data } from '../../assets/file'
import userEvent from '@testing-library/user-event'

expect.extend(matchers)

describe('HomePage Component', () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <HomePage />
            </MemoryRouter>
        )
    })

    afterEach(() => {
        cleanup()
    })

    test('renders album images', () => {
        const albumImages = screen.getAllByAltText('album')
        expect(albumImages).toHaveLength(data.length)
    })

    test('navigates to /album when an album image is clicked', () => {
        const albumImages = screen.getAllByRole('albumImg')
        expect(albumImages).toHaveLength(data.length)

        const albumImage = albumImages[0]; 
        userEvent.click(albumImage)
        expect(window.location.pathname).toBe('/')
    })

})
