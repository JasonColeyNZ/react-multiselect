import React from 'react'

export type Props = {
  label: string
}

const MultiSelect = (props: Props) => {
  return <h1 className='text-3xl font-bold text-blue-800'>{props.label}</h1>
}

export default MultiSelect
