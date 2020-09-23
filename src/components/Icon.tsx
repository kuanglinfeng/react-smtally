import React from 'react'

const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext)
try {
  importAll(require.context('../icons', true, /\.svg$/))
} catch (error) {
  console.log(error)
}

type Props = {
  name: string
  onClick?: () => void
}

function Icon(props: Props) {
  return (
    <svg className='icon' onClick={ props.onClick }>
      <use xlinkHref={ '#' + props.name } />
    </svg>
  )
}

export default Icon
