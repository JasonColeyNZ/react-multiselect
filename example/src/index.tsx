import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { MultiSelect, MultiSelectProps } from '@uc-react-ui/multiselect'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const App = () => {
  const [value, setValue] = useState(['desktop'])
  const props: MultiSelectProps = {
    label: 'Tags',
    name: 'tags',
    size: 'small',
    optionList: [
      { label: 'desktop' },
      { label: 'demo' },
      { label: 'v1' },
      { label: 'development' },
      { label: 'test' },
      { label: 'production' },
    ],
    placeholder: 'Add tags',
    value: value,
    valueChange: setValue,
  }

  return (
    <div style={{ padding: '15px' }}>
      <MultiSelect {...props} />
    </div>
  )
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
