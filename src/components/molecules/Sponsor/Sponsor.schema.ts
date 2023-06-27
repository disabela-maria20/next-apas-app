import { z } from 'zod'

export const SponsorFormSchema = z.object({
  name: z
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
  email: z
    .string()
    .email('Formato de e-mail invalido')
    .toLowerCase()
    .nonempty('O e-mail é obrigatório')
    .refine(
      (value: string) => /^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$/.test(value),
      {
        message: 'Endereço de e-mail invalido'
      }
    ),
  tel: z
    .string()
    .min(11, { message: 'Número de telefone invalido' })
    .nonempty('Telefone é obrigatorio'),
  // .refine((value: string) => /^\(\d{2}\)\s\d{5}-\d{4}$/.test(value), {
  //   message: 'Número de telefone invalido'
  // }),
  office: z
    .string()
    .min(3, { message: 'A qualidade de caracteres minimas é 3' })
    .nonempty('Infome o cargo'),
  company: z
    .string()
    .nonempty('O nome da empresa é obrigatório')
    .min(3, { message: 'A qualidade de caracteres minimas é 3' }),
  cnpj: z
    .string()
    .nonempty('O cnpj é obrigatório')
    .min(14, { message: 'A qualidade de caracteres minimas é 14' })
    .refine(
      (value: string) => /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/.test(value),
      {
        message: 'Infome o CNPJ valido'
      }
    )
})
