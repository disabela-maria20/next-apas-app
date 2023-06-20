/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import PropagateLoader from 'react-spinners/PropagateLoader'

import Style from './Sponsor.module.scss'

import { SponsorFormSchema } from './Sponsor.schema'

import { zodResolver as ResolverZod } from '@hookform/resolvers/zod'
import Swal from 'sweetalert2'
import { z } from 'zod'

export type SponsorForm = z.infer<typeof SponsorFormSchema>

const Sponsor = () => {
  const [loaging, setLoaging] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SponsorForm>({
    resolver: ResolverZod(SponsorFormSchema)
  })

  const onSubmit = async (data: SponsorForm) => {
    setLoaging(true)
    try {
      const res = await fetch('/backend/email.php', {
        method: 'POST',
        body: JSON.stringify({
          nome: data.name,
          email: data.email,
          telefone: data.tel,
          cargo: data.office,
          empresa: data.company
        })
      })
      if (res.ok) {
        Swal.fire({
          title: 'Contato enviada com sucesso!',
          text: 'Em breve entraremos em contato',
          icon: 'success',
          confirmButtonText: 'Fechar'
        })
      } else {
        Swal.fire({
          title: 'Opss',
          text: 'Ocorreu um erro tente novamente mais tarde ',
          icon: 'error',
          confirmButtonText: 'Fechar'
        })
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoaging(false)
    }
  }

  return (
    <section
      className={Style.sponsor}
      style={{ backgroundImage: 'url("./images/silhouette.webp")' }}
      id="accreditation"
    >
      <div className={Style.container}>
        <div className={Style.sponsorBlock}>
          <h2>Seja um patrocinador!</h2>
          <form className={Style.sponsorForm} onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" name="form" value="cadastro" />
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
            <button type="submit" disabled={loaging}>
              {loaging ? (
                <span>
                  <PropagateLoader color="#000" size={8} />
                </span>
              ) : (
                'Enviar'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Sponsor
