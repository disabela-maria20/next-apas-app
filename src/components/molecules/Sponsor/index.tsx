/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from 'react-hook-form'

import Style from './Sponsor.module.scss'

import { SponsorFormSchema } from './Sponsor.schema'

import { zodResolver as ResolverZod } from '@hookform/resolvers/zod'
import { z } from 'zod'

export type SponsorForm = z.infer<typeof SponsorFormSchema>

const Sponsor = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SponsorForm>({
    resolver: ResolverZod(SponsorFormSchema)
  })

  const onSubmit = (data: SponsorForm) => {
    console.log(data)
  }

  return (
    <section
      className={Style.sponsor}
      style={{ backgroundImage: 'url("./images/silhouette.webp")' }}
    >
      <div className={Style.container}>
        <div className={Style.sponsorBlock}>
          <h2>Seja um patrocinador!</h2>
          <form className={Style.sponsorForm} onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="nome">
              <span>Nome</span>
              <input
                type="text"
                id="nome"
                placeholder="Nome"
                {...register('name')}
              />
              {errors.name && (
                <small className="text-error">{errors.name.message}</small>
              )}
            </label>
            <label htmlFor="email">
              <span>E-mail</span>
              <input
                type="email"
                id="email"
                placeholder="E-mail"
                {...register('email')}
              />
              {errors.email && (
                <small className="text-error">{errors.email.message}</small>
              )}
            </label>
            <label htmlFor="tel">
              <span>Telefone</span>
              <input
                type="text"
                id="tel"
                placeholder="Telefone"
                {...register('tel')}
              />
              {errors.tel && (
                <small className="text-error">{errors.tel.message}</small>
              )}
            </label>
            <label htmlFor="cargo">
              <span>Cargo</span>
              <input
                type="text"
                id="office"
                placeholder="Cargo"
                {...register('office')}
              />
              {errors.office && (
                <small className="text-error">{errors.office.message}</small>
              )}
            </label>
            <label htmlFor="empresa">
              <span>Empresa</span>
              <input
                type="text"
                id="empresa"
                placeholder="Empresa"
                {...register('company')}
              />
              {errors.company && (
                <small className="text-error">{errors.company.message}</small>
              )}
            </label>
            <label htmlFor="cnpj">
              <span>CNPJ</span>
              <input
                type="text"
                id="cnpj"
                placeholder="CNPJ"
                {...register('cnpj')}
              />
              {errors.cnpj && (
                <small className="text-error">{errors.cnpj.message}</small>
              )}
            </label>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Sponsor
