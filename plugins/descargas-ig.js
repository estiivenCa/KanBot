import Scraper from '@SumiFX/Scraper';

const handler = async (m, { conn, args, usedPrefix, command }) => {
  // Mensajes de proceso y error
  const waitMessage = '🍁 *Descargando su video de Instagram*';
  const errorMessage = '🍁 Ocurrió un error inesperado.';

  // Verifica si se ha proporcionado un enlace
  if (!args[0]) return m.reply('🍁 Ingresa un enlace de Instagram.');

  try {
    // Envía un mensaje de espera
    conn.reply(m.chat, waitMessage, m);

    // Obtiene la URL de descarga del video
    let { dl_url } = await Scraper.igdl(args[0]);

    // Envía el video descargado al chat
    await conn.sendMessage(m.chat, { video: { url: dl_url }, caption: '✅️ *Su Video De Instagram*' });
  } catch (e) {
    console.log(e);
    m.reply(errorMessage);
  }
};

handler.help = ['ig <enlace>'];
handler.tags = ['descargas'];
handler.command =/^(instagram|ig(dl)?)$/i
handler.register = true;
handler.limit = 1;

export default handler;
