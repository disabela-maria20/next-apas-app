import Style from './Sponsor.module.scss'

const Sponsor = () => {
  return (
    <section
      className={Style.sponsor}
      style={{ backgroundImage: 'url("./images/silhouette.webp")' }}
    >
      <div className={Style.container}>
        <div className={Style.sponsorBlock}>
          <h2>Seja um patrocinador!</h2>
          <form className={Style.sponsorForm}>
            <label htmlFor="nome">
              <span>Nome</span>
              <input type="text" id="nome" placeholder="Nome" />
            </label>
            <label htmlFor="email">
              <span>E-mail</span>
              <input type="email" id="email" placeholder="E-mail" />
            </label>
            <label htmlFor="tel">
              <span>Telefone</span>
              <input type="text" id="tel" placeholder="Telefone" />
            </label>
            <label htmlFor="cargo">
              <span>Cargo</span>
              <input type="text" id="cargo" placeholder="Cargo" />
            </label>
            <label htmlFor="empresa">
              <span>Empresa</span>
              <input type="text" id="empresa" placeholder="Empresa" />
            </label>
            <label htmlFor="cnpj">
              <span>CNPJ</span>
              <input type="text" id="cnpj" placeholder="CNPJ" />
            </label>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Sponsor
