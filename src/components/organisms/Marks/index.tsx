import Style from './Marks.module.scss'

import LOGOS from './Marks.json'

const Marks = () => {
  return (
    <>
      <section className={Style.marks} id="marks">
        <div className={Style.container}>
          <h2>patrocinadores</h2>
        </div>
        <div className={Style.marksTitle}>
          <h3>Tera</h3>
        </div>
        <div className={Style.container}>
          <div className={Style.logoMarks}>
            {LOGOS.tera.map((data) => (
              <img
                src={data.image}
                alt={data.name}
                width={120}
                height={70}
                key={data.id}
                className={Style.max1x}
              />
            ))}
          </div>
        </div>

        <div className={Style.marksTitle}>
          <h3>Giga</h3>
        </div>
        <div className={Style.logoMarks}>
          {LOGOS.giga.map((data) => (
            <img
              src={data.image}
              alt={data.name}
              width={120}
              height={70}
              key={data.id}
              className={Style.max3x}
            />
          ))}
        </div>
        <div className={Style.marksTitle}>
          <h3>mega</h3>
        </div>
        <div className={Style.container}>
          <div className={Style.logoMarks}>
            {LOGOS.mega.map((data) => (
              <img
                src={data.image}
                alt={data.name}
                width={120}
                height={70}
                key={data.id}
                className={Style.max2x}
              />
            ))}
          </div>
        </div>
        <div className={Style.marksTitle}>
          <h3>LOUNGE</h3>
        </div>
        <div className={Style.container}>
          <div className={Style.logoMarks}>
            {LOGOS.lounge.map((data) => (
              <img
                src={data.image}
                alt={data.name}
                width={120}
                height={70}
                key={data.id}
                className={Style.max4x}
              />
            ))}
          </div>
        </div>
      </section>
      <div className={Style.admMarks}>
        <div className={Style.container}>
          <div className={Style.gridMark}>
            <figure>
              <legend>Divulgação Oficial</legend>
              <img
                src="./images/super-varejo.png"
                alt="Super Varejo"
                width={310}
                height={82}
              />
            </figure>
            <figure>
              <legend>Administração e Realização</legend>
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
    </>
  )
}

export default Marks
