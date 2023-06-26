import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { PropagateLoader } from 'react-spinners'

import Style from './FAQ.module.scss'

import { contactFormSchema } from './FAQ.schema'

import { zodResolver as ResolverZod } from '@hookform/resolvers/zod'
import axios from 'axios'
import Swal from 'sweetalert2'
import { z } from 'zod'
export type contactForm = z.infer<typeof contactFormSchema>

const FAQ = () => {
  const [loaging, setLoaging] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<contactForm>({
    resolver: ResolverZod(contactFormSchema)
  })
  const onSubmit = async (data: contactForm) => {
    setLoaging(true)
    try {
      const res = await axios.post('https://apasshow.com/api/send-next', {
        nome: data.name,
        email: data.email,
        mensagem: data.message
      })
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
          title: 'Opss',
          text: 'Ocorreu um erro tente novamente mais tarde ',
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
    <article
      style={{ backgroundImage: 'url("./images/bg-fac.webp")' }}
      className={Style.fac}
      id="contact"
    >
      <div className={Style.container}>
        <section className={Style.gridFac}>
          <div>
            <p> O NSG ocorrerá no dia 15 de agosto de 2023.</p>
            <address>
              São Paulo Expo (pavilhão 4) Rodovia dos Imigrantes, km 1,5 <br />{' '}
              CEP: 04329-900 | São Paulo SP
            </address>
            <p>10 minutos do Rodoanel Mário Covas e Aeroporto de Congonhas.</p>
            <p>850 m do metrô Jabaquara.</p>
            <p>
              Fora do perímetro de restrição municipal de veículos (rodízio).
            </p>
          </div>
          <div>
            <h2 className={Style.titleForm}>Entre em contato</h2>
            <form
              className={Style.sponsorForm}
              onSubmit={handleSubmit(onSubmit)}
            >
              <input type="hidden" name="form" value="contato" />
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
              <label htmlFor="msg">
                <span>Mensagem</span>
                <textarea
                  id="msg"
                  rows={4}
                  placeholder="Mensagem"
                  {...register('message')}
                ></textarea>
                {errors.message && (
                  <small className="text-error">{errors.message.message}</small>
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
        </section>
      </div>
    </article>
  )
}

export default FAQ
