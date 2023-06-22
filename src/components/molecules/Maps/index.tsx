import Style from './Maps.module.scss'

const Maps = () => {
  return (
    <article className={Style.bgMaps}>
      {/* <img
        src="./images/pattern.webp"
        role="presentation"
        sizes="1920px 1108px"
        className={Style.range}
      /> */}
      <section className={Style.maps}>
        <div className={Style.container}>
          <h3>agora em novo local:</h3>
          <h2>são paulo expo</h2>
          <p>
            Rodovia dos Imigrantes, 1,5 km - <br />
            Vila Água Funda, São Paulo - SP, 04329-900
          </p>
        </div>
      </section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d58491.827821179875!2d-46.62379755303865!3d-23.613683072042157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x94ce5adda4c3cb95%3A0x31916ce58f719167!2ss%C3%A3o%20paulo%20expo%2C%20rodovia%20dos%20imigrantes%2C%201%2C5%20km%20-%20vila%20%C3%A1gua%20funda%2C%20s%C3%A3o%20paulo%20-%20sp%2C%2004329-900!3m2!1d-23.6460103!2d-46.629656399999995!5e0!3m2!1spt-BR!2sbr!4v1686859983719!5m2!1spt-BR!2sbr"
        width="600"
        height="350"
        style={{ border: 0 }}
        loading="lazy"
        className={Style.iframe}
        title="Localização geografica"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </article>
  )
}

export default Maps
