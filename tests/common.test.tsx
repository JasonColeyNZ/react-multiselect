import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { MultiSelect, MultiSelectProps } from '../src'

describe('Common render', () => {
  it('renders multi select without crashing', () => {
    const props: MultiSelectProps = {
      label: 'Tags',
      name: 'tags',
      size: 'small',
      optionList: [{ label: 'desktop' }, { label: 'demo' }],
      placeholder: 'Add tags',
      value: ['desktop'],
      valueChange: () => null,
    }
    render(<MultiSelect {...props} />)
  })
})
