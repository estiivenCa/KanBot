import Scraper from '@SumiFX/Scraper';

let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) return m.reply('🍁 Ingresa un enlace de Instagram.');

  try {
    // Enviar mensaje de descarga sin contextInfo
    conn.reply(m.chat, '🍁*Descargando su video de Instagram*', m);

    // Obtener la URL de descarga del video
    let { dl_url } = await Scraper.igdl(args[0]);

    // Enviar el video descargado al chat
    await conn.sendMessage(m.chat, { video: { url: dl_url }, caption: `✅️ *Su Video De Instagram*` }, { quoted: fkontak });
  } catch (e) {
    console.log(e);
    m.reply('🍁 Ocurrió un error inesperado.');
  }
};

handler.help = ['ig <enlace>'];
handler.tags = ['descargas'];
handler.command = ['ig', 'instagram'];

export default handler;

