import React, { memo } from 'react'

import Style from './LineUp.module.scss'

import LINE from './LineUp.json'

import { Line } from '@/components/atoms'

const LineUp = () => {
  return (
    <div className={Style.lineup}>
      <h2>LineUp</h2>
      <div className={Style.linupHours}>
        {LINE.map((data) => (
          <React.Fragment key={data.id}>
            <Line data={data as any} />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default memo(LineUp)
