import React from 'react'
import VectorSimbol from './VectorSimbol'

const Vector = ({ simbol, denumire }: { simbol: string, denumire?: string }) => {
  return (
    <div
        className="inline-flex items-center text-xl">
        <VectorSimbol simbol={simbol}/>
        <strong><i><sub><sub>{denumire}</sub></sub></i></strong>
    </div>
  )
}

export default Vector