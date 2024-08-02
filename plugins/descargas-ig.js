import fetch from 'node-fetch';
import axios from 'axios';
import instagramGetUrl from 'instagram-url-direct';
import { instagram } from '@xct007/frieren-scraper';
import { instagramdl } from '@bochilteam/scraper';
import Scraper from '@SumiFX/Scraper';

const handler = async (m, { conn, args, usedPrefix, command }) => {
  const waitMessage = '🍁 *Descargando su contenido...*';
  const errorMessage = '🍁 Ocurrió un error inesperado.';
  const videoCaption = `✅️ *Su Video De Instagram*`; // Reemplaza con la descripción deseada
  const packname = 'TuPackName'; // Reemplaza con el nombre de tu paquete
  const wm = '✨ *Powered by Your Bot Name*'; // Reemplaza con tu marca de agua
  const icons = 'https://example.com/thumbnail.jpg'; // Reemplaza con la URL de tu imagen en miniatura
  const channel = 'https://example.com'; // Reemplaza con la URL de tu canal


  if (!args[0]) return m.reply('🍁 Ingresa un enlace de Instagram.');

  // Envía un mensaje de espera con información de contexto
  conn.reply(m.chat, waitMessage, m, {
    contextInfo: {
      externalAdReply: {
        mediaUrl: null,
        mediaType: 1,
        showAdAttribution: true,
        title: packname,
        body: wm,
        previewType: 0,
        thumbnail: icons,
        sourceUrl: channel
      }
    }
  });

  try {
    // Intenta obtener la URL de descarga del video usando Scraper
    let { dl_url } = await Scraper.igdl(args[0]);

    // Envía el video descargado al chat
    await conn.sendMessage(m.chat, { video: { url: dl_url }, caption: videoCaption }, { quoted: fkontak });
  } catch (e) {
    console.log(e);
    m.reply(errorMessage);
  }
};

handler.help = ['ig <enlace>'];
handler.tags = ['descargas'];
handler.command = ['ig', 'instagram'];
handler.register = true;
handler.limit = 1;

export default handler;
