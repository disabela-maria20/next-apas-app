import Style from './Line.module.scss'

interface Talk {
  time: string
  stage: string
}

interface LineUpItem {
  data: {
    id: number
    time: string
    talks: string | Talk[]
    stage?: string
    color: number
    tema?: string
  }
}
const Line = ({ data }: LineUpItem) => {
  const AssignColor = (color: number) => {
    const colorArr = [
      Style.PainelNull,
      Style.painel1,
      Style.painel2,
      Style.painel3,
      Style.painel4
    ]
    return colorArr[color]
  }

  return (
    <div className={Style.linupSpeeches} key={data.id}>
      {data.time && (
        <>
          <div className={`${Style.speach} ${AssignColor(data.color)}`}>
            <h5 className={Style.time}>{data.time}</h5>
            {typeof data.talks === 'string' && (
              <div id="#single" className={Style.single}>
                {data?.talks}
              </div>
            )}
          </div>
        </>
      )}
      {typeof data.talks !== 'string' && (
        <>
          <div className={`${Style.speach} ${AssignColor(data.color)}`}>
            {data.tema}
          </div>
          {data.talks.map((data) => (
            <div className={Style.tema} key={data.time}>
              <h5 className={Style.time}>{data.time}</h5>
              <p>{data.stage}</p>
            </div>
          ))}
        </>
      )}
      {data.stage && (
        <div
          className={Style.tema}
          dangerouslySetInnerHTML={{ __html: data?.stage as never }}
        ></div>
      )}
    </div>
  )
}

export default Line
