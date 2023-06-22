import Style from './Marks.module.scss'

const Marks = () => {
  return (
    <article className={Style.marks}>
      <div className={Style.container}>
        <h2>patrocinadores</h2>
      </div>
      <div className={Style.marksTitle}>
        <h3>Tera</h3>
      </div>
      <div className={Style.container}>
        <img src="./images/div-5_big.png" alt="amostra" />
      </div>
      <div className={Style.marksTitle}>
        <h3>Big Data</h3>
      </div>
      <div className={Style.container}>
        <img src="./images/div-5.png" alt="amostra" />
      </div>
      <div className={Style.marksTitle}>
        <h3>Giga</h3>
      </div>
      <div className={Style.container}>
        <img src="./images/div-5.png" alt="amostra" />
      </div>
      <div className={Style.marksTitle}>
        <h3>mega</h3>
      </div>
      <div className={Style.container}>
        <img src="./images/div-5.png" alt="amostra" />
      </div>
      <div className={Style.admMarks}>
        <div className={Style.container}>
          <div className={Style.gridMark}>
            <figure>
              <legend>Administração e Realização</legend>
              <img
                src="./images/super-varejo.png"
                alt="Super Varejo"
                width={310}
                height={82}
              />
            </figure>
            <figure>
              <legend>Divulgação Oficial</legend>
              <img
                src="./images/apas.png"
                alt="Super Varejo"
                width={225}
                height={71}
              />
            </figure>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Marks
