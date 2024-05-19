import React from 'react'

function Test() {
    const a = process.env.REACT_APP_GITHUB_URL 
    console.log (a) 
  return (
    <div>
        {a} 
    </div>
  )
}

export default est