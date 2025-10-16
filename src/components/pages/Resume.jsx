import React from 'react'
import cv from '../../../public/cv.pdf'
function Resume() {
  return (

<div className="container my-5">
      <div className="d-flex justify-content-center">
        <iframe
          className='border border-2 border-light rounded shadow-lg'
          src="cv.pdf"
          width="80%"
          height="480px"
        ></iframe>
      </div>
    </div>

  )
}

export default Resume
