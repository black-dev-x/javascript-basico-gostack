function temHabilidade(skills) {
  return skills.includes('Javascript')
}
const skills = ['Javascript', 'ReactJS', 'React Native']
const retorno = temHabilidade(skills)
console.log(retorno)
