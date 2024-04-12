import { createHash } from 'crypto'
let handler = async function (m, { args }) {
if (!args[0]) throw `Canal Bins`
let user = global.db.data.users[m.sender]
let sn = createHash('md5').update(m.sender).digest('hex')
if (args[0] !== sn) throw `Canal Bins`
user.registered = false
m.reply(`siii`)
}
handler.help = ['', 'ister'].map(v => 'cursos' + v + ' <Bins>')
handler.tags = ['rg']
handler.command = /^cursos(curso)?$/i
handler.register = true
export default handler
