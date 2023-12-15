import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { PropagateLoader } from 'react-spinners'

import Style from './FAQ.module.scss'

import { contactFormSchema } from './FAQ.schema'

import { Cnpj, Phone } from '@/utils/mask'
import { zodResolver as ResolverZod } from '@hookform/resolvers/zod'
import axios from 'axios'
import Swal from 'sweetalert2'
import { z } from 'zod'

export type contactForm = z.infer<typeof contactFormSchema>

const FAQ = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [selectedItems, setSelectedItems] = useState<Array<boolean>>([])

  useEffect(() => {
    setSelectedItems(new Array(2).fill(false))
  }, [])

  const handleItemClick = (index: number) => {
    const newSelectedItems = [...selectedItems]
    newSelectedItems[index] = !newSelectedItems[index]
    setSelectedItems(newSelectedItems)
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<contactForm>({
    resolver: ResolverZod(contactFormSchema)
  })

  const onSubmit = async (data: contactForm) => {
    setLoading(true)
    try {
      const res = await axios.post('https://apasshow.com/api/send-next', {
        nome: data.nomemsg,
        email: data.emailmsg,
        telefone: data.tel,
        cargo: data.office,
        empresa: data.company,
        cnpj: data.cnpj,
        mensagem: data.message
      })
      console.log(res)

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
      setLoading(false)
    }
  }

  return (
    <>
      <article
        style={{ backgroundImage: 'url("./images/bg-fac.webp")' }}
        className={Style.fac}
        id="contact"
      >
        <div className={Style.container}>
          <section className={Style.gridFac}>
            <div className={Style.block}>
              {/* <div
                className={`${Style.details} ${
                  selectedItems[0] ? Style.active : ''
                }`}
              >
                <h2
                  className={Style.summary}
                  onClick={() => handleItemClick(0)}
                >
                  Data e Local do Evento
                </h2>
                <div className={Style.blockAccodion}>
                  <p> O NSG ocorrerá no dia 15 de agosto de 2023.</p>
                  <address>
                    São Paulo Expo (pavilhão 4) Rodovia dos Imigrantes, km 1,5
                    <br /> CEP: 04329-900 | São Paulo SP
                  </address>
                </div>
              </div> */}
              <div
                className={`${Style.details} ${
                  selectedItems[1] ? '' : Style.active
                }`}
              >
                <h2
                  className={Style.summary}
                  onClick={() => handleItemClick(1)}
                >
                  Como Chegar
                </h2>
                <div className={Style.blockAccodion}>
                  <p>
                    Para quem vai de carro, estamos há 10 minutos do Rodoanel
                    Mário Covas.
                  </p>
                  <p>
                    Fora do perímetro de restrição municipal de veículos
                    (rodízio).
                  </p>
                  <p>
                    Para quem vai de transporte público, estamos há 850 m do
                    metrô Jabaquara.
                  </p>
                  <p> Estamos há 10 minutos do Aeroporto de Congonhas.</p>
                </div>
              </div>
              <div
                className={`${Style.details} ${
                  selectedItems[2] ? '' : Style.active
                }`}
              >
                <h2
                  className={Style.summary}
                  onClick={() => handleItemClick(2)}
                >
                  Ainda estou com dúvidas
                </h2>
                <div className={Style.blockAccodion}>
                  <span>
                    E-mail:
                    <a href="mailto:central.apas@apas.com.br">
                      central.apas@apas.com.br
                    </a>
                  </span>
                  <span>
                    Telefone:
                    <a href="tel:+(11) 3647-5000">(11) 3647-5000</a>
                  </span>
                </div>
              </div>
              {/* <h2>fac</h2> */}
            </div>
            <div>
              <h2 className={Style.titleForm}>Entre em contato</h2>
              <form
                className={Style.sponsorForm}
                onSubmit={handleSubmit(onSubmit)}
              >
                <input type="hidden" name="form" value="contato" />
                <label htmlFor="nomemsg">
                  <span>Nome</span>
                  <input
                    type="text"
                    id="nomemsg"
                    placeholder="Nome"
                    {...register('nomemsg')}
                  />
                  {errors.nomemsg && (
                    <small className="text-error">
                      {errors.nomemsg.message}
                    </small>
                  )}
                </label>
                <label htmlFor="emailmsg">
                  <span>E-mail</span>
                  <input
                    type="email"
                    id="emailmsg"
                    placeholder="E-mail"
                    {...register('emailmsg')}
                  />
                  {errors.emailmsg && (
                    <small className="text-error">
                      {errors.emailmsg.message}
                    </small>
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
                      <small className="text-error">
                        {errors.cnpj.message}
                      </small>
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
                      <small className="text-error">
                        {errors.office.message}
                      </small>
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
                      <small className="text-error">
                        {errors.company.message}
                      </small>
                    )}
                  </label>
                </div>

                <label htmlFor="msg">
                  <span>Mensagem</span>
                  <textarea
                    id="msg"
                    rows={4}
                    placeholder="Mensagem"
                    {...register('message')}
                  ></textarea>
                  {errors.message && (
                    <small className="text-error">
                      {errors.message.message}
                    </small>
                  )}
                </label>
                <button type="submit" disabled={loading}>
                  {loading ? (
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
    </>
  )
}

export default FAQ
