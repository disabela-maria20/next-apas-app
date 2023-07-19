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
          nome: data.s_name,
          email: data.s_email,
          telefone: data.s_tel,
          cargo: data.s_office,
          empresa: data.s_company,
          cnpj: data.s_cnpj
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
            <label htmlFor="s_nome">
              <span>Nome</span>
              <input
                type="text"
                id="s_nome"
                placeholder="Nome"
                {...register('s_name')}
              />
              {errors.s_name && (
                <small className="text-error">{errors.s_name.message}</small>
              )}
            </label>
            <label htmlFor="s_email">
              <span>E-mail</span>
              <input
                type="email"
                id="s_email"
                placeholder="E-mail"
                {...register('s_email')}
              />
              {errors.s_email && (
                <small className="text-error">{errors.s_email.message}</small>
              )}
            </label>
            <div className={Style.gridForm}>
              <label htmlFor="s_tel">
                <span>Telefone</span>
                <input
                  type="tel"
                  id="s_tel"
                  placeholder="Telefone"
                  {...register('s_tel')}
                  onChange={(e) =>
                    ((e.target as HTMLInputElement).value = Phone(
                      (e.target as HTMLInputElement).value
                    ))
                  }
                />
                {errors.s_tel && (
                  <small className="text-error">{errors.s_tel.message}</small>
                )}
              </label>
              <label htmlFor="s_cnpj">
                <span>CNPJ</span>
                <input
                  type="text"
                  id="s_cnpj"
                  placeholder="CNPJ"
                  {...register('s_cnpj')}
                  onChange={(e) =>
                    ((e.target as HTMLInputElement).value = Cnpj(
                      (e.target as HTMLInputElement).value
                    ))
                  }
                />
                {errors.s_cnpj && (
                  <small className="text-error">{errors.s_cnpj.message}</small>
                )}
              </label>
            </div>
            <div className={Style.gridForm}>
              <label htmlFor="s_office">
                <span>Cargo</span>
                <input
                  type="text"
                  id="s_office"
                  placeholder="Cargo"
                  {...register('s_office')}
                />
                {errors.s_office && (
                  <small className="text-error">
                    {errors.s_office.message}
                  </small>
                )}
              </label>
              <label htmlFor="s_empresa">
                <span>Empresa</span>
                <input
                  type="text"
                  id="s_empresa"
                  placeholder="Empresa"
                  {...register('s_company')}
                />
                {errors.s_company && (
                  <small className="text-error">
                    {errors.s_company.message}
                  </small>
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
