let handler = async (m, { conn, usedPrefix }) => {
let git = '*乂  B O T  -  S C R I P T*\nhttps://github.com/Jxtxn17/BaileyBot-MD'
await conn.sendUrl(m.chat, git, m, { externalAdReply: { mediaType: 1, renderLargerThumbnail: true, thumbnail: imagen2, thumbnailUrl: imagen1, title: '\t\t\t\t\t\t᭡͡ᩬ🍧✩̣̣̣̣̣ͯ𝐁𝐚𝐢𝐥𝐞𝐲𝑩𝒐𝒕-𝑴𝑫᭡͡ᩬ🍧✩̣̣̣̣̣ͯ', }})
 
}
handler.tags =['info'] 
handler.help = ['script'] 
handler.command = ['sc', 'script', 'codigo', 'git', 'github'] 
handler.register = true 
export default handler
