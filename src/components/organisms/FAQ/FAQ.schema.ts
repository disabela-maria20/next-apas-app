import { z } from 'zod'

export const contactFormSchema = z.object({
  nomemsg: z
    .string()
    .min(3, { message: 'A qualidade de caracteres minimas é 3' })
    .nonempty('O nome é obrigatório')
    .transform((name) =>
      name
        .trim()
        .split(' ')
        .map((data) => {
          return data[0].toLocaleUpperCase().concat(data.substring(1))
        })
        .join(' ')
    ),
  emailmsg: z
    .string()
    .email('Formato de e-mail invalido')
    .toLowerCase()
    .nonempty('Informe o e-mail')
    .refine(
      (value: string) => /^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$/.test(value),
      {
        message: 'Endereço de e-mail invalido'
      }
    ),
  tel: z.string().optional(),
  office: z.string().optional(),
  company: z.string().optional(),
  cnpj: z.string().optional(),

  message: z
    .string()
    .min(3, { message: 'A qualidade de caracteres minimas é 5' })
    .nonempty('Informe a mensagem obrigatório')
})
