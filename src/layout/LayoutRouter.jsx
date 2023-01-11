import React from 'react'

import Header from '../component/Header'


const LayoutRouter = ({content}) => {
  return (
    <div>
        <Header content={content} />
    </div>
  )
}

export default LayoutRouter