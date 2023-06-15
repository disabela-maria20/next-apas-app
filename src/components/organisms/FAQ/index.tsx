import Style from './FAC.module.scss'

const FAQ = () => {
  return (
    <article
      style={{ backgroundImage: 'url("./images/bg-fac.webp")' }}
      className={Style.fac}
    >
      <div className={Style.container}>
        <section className={Style.gridFac}>
          <div>
            <p>Lorem Ipsum dolor suit?</p>
            <p>Lorem Ipsum dolor suit?</p>
            <p>Lorem Ipsum dolor suit?</p>
            <p>Lorem Ipsum dolor suit?</p>
            <p>Lorem Ipsum dolor suit?</p>
            <h2>FAC</h2>
          </div>
          <div>
            <h2 className={Style.titleForm}>Entre em contato</h2>
            <form className={Style.sponsorForm}>
              <label htmlFor="nome">
                <span>Nome</span>
                <input type="text" id="nome" placeholder="Nome" />
              </label>
              <label htmlFor="email">
                <span>E-mail</span>
                <input type="email" id="email" placeholder="E-mail" />
              </label>
              <label htmlFor="msg">
                <span>Mensagem</span>
                <textarea
                  name="msg"
                  id="msg"
                  rows={4}
                  placeholder="Mensagem"
                ></textarea>
              </label>
              <button type="submit">Enviar</button>
            </form>
          </div>
        </section>
      </div>
    </article>
  )
}

export default FAQ
