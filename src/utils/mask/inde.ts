export function Cnpj(v: string) {
  if (!v) return ''
  v = v.replace(/\D/g, '')
  v = v.slice(0, 14)
  v = v.replace(/^(\d{2})(\d)/, '$1.$2')
  v = v.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
  v = v.replace(/\.(\d{3})(\d)/, '.$1/$2')
  v = v.replace(/(\d{4})(\d)/, '$1-$2')
  return v
}

export function Phone(v: string) {
  if (!v) return ''
  v = v.replace(/\D/g, '')
  v = v.slice(0, 11)
  v = v.replace(/(\d{2})(\d)/, '($1) $2')
  v = v.replace(/(\d)(\d{4})$/, '$1-$2')
  return v
}
