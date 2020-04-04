var usuarios = [
  {
    nome: 'Diego',
    habilidades: ['Javascript', 'ReactJS', 'Redux'],
  },
  {
    nome: 'Gabriel',
    habilidades: ['VueJS', 'Ruby on Rails', 'Elixir'],
  },
]
usuarios.forEach((usuario) => {
  const habilidadesSeparadasPorVirgula = usuario.habilidades.join(', ')
  const texto = `O ${usuario.nome} possui as habilidades: ${habilidadesSeparadasPorVirgula}`
  console.log(texto)
})
