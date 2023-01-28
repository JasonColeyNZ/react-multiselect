import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { MultiSelect } from '../src'

describe('Common render', () => {
  it('renders multi select without crashing', () => {
    render(<MultiSelect label='test' />)
  })
})
