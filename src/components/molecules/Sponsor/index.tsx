/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import PropagateLoader from 'react-spinners/PropagateLoader'

import Style from './Sponsor.module.scss'

import { SponsorFormSchema } from './Sponsor.schema'

import { Cnpj, Phone } from '@/utils/mask'
import { zodResolver as ResolverZod } from '@hookform/resolvers/zod'
import axios from 'axios'
import Swal from 'sweetalert2'
import { z } from 'zod'

export type SponsorForm = z.infer<typeof SponsorFormSchema>

const Sponsor = () => {
  const [loaging, setLoaging] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<SponsorForm>({
    resolver: ResolverZod(SponsorFormSchema)
  })

  const onSubmit = async (data: SponsorForm) => {
    setLoaging(true)
    try {
      const res = await axios.post(
        'https://apasshow.com/api/send-patrocinador-next',
        {
          nome: data.name,
          email: data.email,
          telefone: data.tel,
          cargo: data.office,
          empresa: data.company,
          cnpj: data.cnpj
        }
      )

      if (res.data.status === 'success') {
        Swal.fire({
          title: res.data.message,
          text: 'Em breve entraremos em contato',
          icon: 'success',
          confirmButtonText: 'Fechar',
          customClass: {
            popup: Style.Modal,
            confirmButton: Style.btn
          }
        })
        reset()
      } else {
        Swal.fire({
          title: res.data.menssage,
          text: 'Ocorreu um erro. Tente novamente mais tarde.',
          icon: 'error',
          confirmButtonText: 'Fechar',
          customClass: {
            popup: Style.Modal,
            confirmButton: Style.btn
          }
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
            <div className={Style.gridForm}>
              <label htmlFor="tel">
                <span>Telefone</span>
                <input
                  type="tel"
                  id="tel"
                  placeholder="Telefone"
                  {...register('tel')}
                  onChange={(e) =>
                    ((e.target as HTMLInputElement).value = Phone(
                      (e.target as HTMLInputElement).value
                    ))
                  }
                />
                {errors.tel && (
                  <small className="text-error">{errors.tel.message}</small>
                )}
              </label>
              <label htmlFor="cnpj">
                <span>CNPJ</span>
                <input
                  type="text"
                  id="cnpj"
                  placeholder="CNPJ"
                  {...register('cnpj')}
                  onChange={(e) =>
                    ((e.target as HTMLInputElement).value = Cnpj(
                      (e.target as HTMLInputElement).value
                    ))
                  }
                />
                {errors.cnpj && (
                  <small className="text-error">{errors.cnpj.message}</small>
                )}
              </label>
            </div>
            <div className={Style.gridForm}>
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
            </div>
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
