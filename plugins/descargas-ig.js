import fetch from 'node-fetch';
import axios from 'axios';
import instagramGetUrl from 'instagram-url-direct';
import { instagram } from '@xct007/frieren-scraper';
import { instagramdl } from '@bochilteam/scraper';
import Scraper from '@SumiFX/Scraper';

const handler = async (m, { conn, args, usedPrefix, command }) => {
  // Configuración de mensajes y parámetros
  const waitMessage = '🍁 *Descargando su video de Instagram*';
  const errorMessage = '🍁 Ocurrió un error inesperado.';
  const videoCaption = `✅️ *Su Video De Instagram*`; // Eliminado botname
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
