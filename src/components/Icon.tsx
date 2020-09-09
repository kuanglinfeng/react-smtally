import React from 'react'

const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext)
try {
  importAll(require.context('../icons', true, /\.svg$/))
} catch (error) {
  console.log(error)
}

type Props = {
  name: string
}

function Icon(props: Props) {
  return (
    <svg className='icon'>
      <use xlinkHref={ '#' + props.name } />
    </svg>
  )
}

export default Icon
