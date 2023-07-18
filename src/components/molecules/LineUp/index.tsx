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
            <div className={Style.speach}>
              <h5 className={Style.time}>{data.time}</h5>
              {data.talks && (
                <div
                  dangerouslySetInnerHTML={{ __html: data?.talks as never }}
                  className={Style.title}
                ></div>
              )}
            </div>

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
