import React from 'react'
import ReactDOM from 'react-dom/client'
import { MultiSelect } from '@uc-react-ui/multiselect'
import '@uc-react-ui/multiselect/dist/main.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div>
      <h2>Default multiselect</h2>
      <MultiSelect label='Testing' />
    </div>
  </React.StrictMode>,
)
