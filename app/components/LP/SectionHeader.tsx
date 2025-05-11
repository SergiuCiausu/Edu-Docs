import React from 'react'

const SectionHeader = ({ h2, p }: { h2: string, p: string}) => {
  return (
    <div
        className="flex flex-col gap-4 heading-container mx-auto">
        <h2 className="lp-h2 text-center">{h2}</h2>
        <p
        className="lp-p text-center">
        {p}
        </p>
    </div>
  )
}

export default SectionHeader