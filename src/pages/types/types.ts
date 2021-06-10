export default interface User {
  id: number
  email: string
  name: string
  newPassword: string
}

export default interface GitHubApi {
  seacrh: string
  cep: string, 
  logradouro: string, 
  complemento: string, 
  bairro: string, 
  localidade: string
  uf: string
  ibge: string
  ddd: string
  login: string
  name: string
  avatar_url: string
  followers: number
  following: number
}