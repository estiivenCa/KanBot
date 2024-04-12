import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `⚠️ Ya estás registrado\n\n¿Quiere volver a registrarse?\n\n💬 Use este comando para ver los cursos\n*${usedPrefix}cursos* <bins>`
  if (!Reg.test(text)) throw `⚠️ Formato incorrececto\n\n📝 Uso del comamdo: *${usedPrefix + command} curso.bin\n💡 Ejemplo : *${usedPrefix + command}* ${name2}.bin`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '¿Ya estas en el canal?'
  if (!age) throw '¿YA estas en el canal?'
  if (name.length >= 30) throw '¿Ya estas en el canal?' 
  age = parseInt(age)
  if (age > 100) throw '*👴🏻 Wow el abuelo quiere jugar al bot*'
  if (age < 5) throw '*👀 hay un bebé jsjsj*'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`ya estas en el curso:
${sn}

 *${usedPrefix}curso* para ver el canal
`.trim())
}
handler.help = ['reg'].map(v => v + ' <nombre.edad>')
handler.tags = ['rg']

handler.command = ['cursos', 'cursosgratis', 'cursocanal', 'canaldecursos', 'canalvip'] 

export default handler
