import React from 'react'

import Style from './LineUp.module.scss'

const LineUp = () => {
  return (
    <div className={Style.lineup}>
      <h2>LineUp</h2>
      <div className={Style.linupHours}>
        <div className={Style.linupSpeeches}>
          <div className={Style.time}>8H45</div>
          <div className={Style.speach}>Abertura: Metaverso</div>
        </div>
        <div className={Style.linupSpeeches}>
          <div className={Style.time}>8H45</div>
          <div className={Style.speach}>Abertura: Metaverso</div>
        </div>
      </div>
    </div>
  )
}

export default LineUp
