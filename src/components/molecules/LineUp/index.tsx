import React, { memo } from 'react'

import Style from './LineUp.module.scss'

import LINE from './LineUp.json'

const LineUp = () => {
  return (
    <div className={Style.lineup}>
      <h2>LineUp</h2>
      <div className={Style.linupHours}>
        {LINE.map((data) => (
          <div className={Style.linupSpeeches} key={data.id}>
            <h5 className={Style.time}>{data.time}</h5>
            <div
              className={Style.speach}
              dangerouslySetInnerHTML={{ __html: data?.talks }}
            />

            {data.stage && (
              <div
                dangerouslySetInnerHTML={{ __html: data?.stage as never }}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default memo(LineUp)
