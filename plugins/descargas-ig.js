import fetch from 'node-fetch';
import axios from 'axios';
import instagramGetUrl from 'instagram-url-direct';
import { instagram } from '@xct007/frieren-scraper';
import { instagramdl } from '@bochilteam/scraper';

const handler = async (m, { conn, args, usedPrefix, command }) => {
  // Configuración de mensajes y parámetros
  const waitMessage = '🍁 *Descargando su video de Instagram*';
  const errorMessage = '🍁 Ocurrió un error inesperado.';
  const videoCaption = `✅️ *Su Video De Instagram*\n${botname}`; // Reemplaza botname con el nombre de tu bot
  const packname = 'TuPackName'; // Reemplaza con el nombre de tu paquete
  const wm = 'TuMarcaDeAgua'; // Reemplaza con tu marca de agua
  const icons = 'https://example.com/thumbnail.jpg'; // Reemplaza con la URL de tu imagen en miniatura
  const channel = 'https://example.com'; // Reemplaza con la URL de tu canal
  const fkontak = { // Define aquí cómo debería ser `fkontak`
    key: {
      fromMe: false,
      participant: '1234567890@s.whatsapp.net',
      remoteJid: 'status@broadcast'
    },
    message: {
      contactMessage: {
        displayName: 'Bot',
        vcard: 'BEGIN:VCARD\nVERSION:3.0\nFN:Bot\nTEL;TYPE=CELL:1234567890\nEND:VCARD'
      }
    }
  };

  // Verifica si se ha proporcionado un enlace
  if (!args[0]) return m.reply('🍁 Ingresa un enlace de Instagram.');

  try {
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

    // Obtiene la URL de descarga del video
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
