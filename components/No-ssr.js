import dynamic from 'next/dynamic'
import React from 'react'

const NoSrr = props => <>{props.children}</>

export default dynamic(() => Promise.resolve(NoSrr), {
    ssr: false
})