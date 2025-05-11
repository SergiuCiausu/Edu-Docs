import React from 'react'

const VectorSimbol = ({ simbol }: { simbol: string }) => {
  return (
    <div
        className="inline-flex flex-col">
        <p className="vector-sageata"><strong><i>→</i></strong></p>
        <p className="vector-simbol"><strong><i>{simbol}</i></strong></p>
    </div>
  )
}

export default VectorSimbol