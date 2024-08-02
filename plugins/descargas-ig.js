import fetch from 'node-fetch';
import axios from 'axios';
import instagramGetUrl from 'instagram-url-direct';
import { instagram } from '@xct007/frieren-scraper';
import { instagramdl } from '@bochilteam/scraper';

const handler = async (m, { conn, args, command, usedPrefix }) => {
  const wait = '🍁 *Descargando su contenido...*';
  const waitt = '🍁 *Esperando respuesta...*';
  const waittt = '🍁 *Procesando...*';
  const waitttt = '🍁 *Finalizando...*';
  const wm = '✨ *Powered by Your Bot Name*'; // Replace with your bot's watermark

  if (!args[0]) throw `🍁 Ingresa un enlace de Instagram.\n*${usedPrefix + command} https://www.instagram.com/p/CCoI4DQBGVQ/?igshid=YmMyMTA2M2Y=*`;

  const { key } = await conn.sendMessage(m.chat, { text: wait }, { quoted: fkontak });
  
  await conn.sendMessage(m.chat, { text: waitt, edit: key });
  await conn.sendMessage(m.chat, { text: waittt, edit: key });
  await conn.sendMessage(m.chat, { text: waitttt, edit: key });

  try {
    const apiUrll = `https://api.betabotz.org/api/download/igdowloader?url=${encodeURIComponent(args[0])}&apikey=bot-secx3`;
    const responsel = await axios.get(apiUrll);
    const resultl = responsel.data;
    
    for (const item of resultl.message) {
      const shortUrRRl = await (await fetch(`https://tinyurl.com/api-create.php?url=${item.thumbnail}`)).text();
      let tXXxt = `✨ *ENLACE | URL:* ${shortUrRRl}\n\n${wm}`.trim();
      conn.sendFile(m.chat, item._url, null, tXXxt, m);
      await new Promise((resolve) => setTimeout(resolve, 10000));
    }
  } catch {
    try {
      const datTa = await instagram.v1(args[0]);
      
      for (const urRRl of datTa) {
        const shortUrRRl = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
        const tXXxt = `✨ *ENLACE | URL:* ${shortUrRRl}\n\n${wm}`.trim();
        conn.sendFile(m.chat, urRRl.url, 'error.mp4', tXXxt, m);
        await new Promise((resolve) => setTimeout(resolve, 10000));
      }
    } catch {
      try {
        const resultss = await instagramGetUrl(args[0]).url_list[0];
        const shortUrl2 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
        const txt2 = `✨ *ENLACE | URL:* ${shortUrl2}\n\n${wm}`.trim();
        await conn.sendFile(m.chat, resultss, 'error.mp4', txt2, m);
      } catch {
        try {
          const resultssss = await instagramdl(args[0]);
          const shortUrl3 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
          const txt4 = `✨ *ENLACE | URL:* ${shortUrl3}\n\n${wm}`.trim();
          
          for (const { url } of resultssss) {
            await conn.sendFile(m.chat, url, 'error.mp4', txt4, m);
          }
        } catch {
          try {
            const human = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkeysapi}&url=${args[0]}`);
            const json = await human.json();
            const videoig = json.result;
            const shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
            const txt1 = `✨ *ENLACE | URL:* ${shortUrl1}\n\n${wm}`.trim();
            await conn.sendFile(m.chat, videoig, 'error.mp4', txt1, m);
          } catch (e) {
            conn.sendMessage(m.chat, { text: `🍁 Ocurrió un error inesperado. #report ${usedPrefix + command}\n\n${wm}`, edit: key });
            console.log(`❗❗ Ocurrió un error con el comando ${usedPrefix + command} ❗❗`);
            console.log(e);
            handler.limit = 0;
          }
        }
      }
    }
  }
};

handler.help = ['instagram <link ig>'];
handler.tags = ['downloader'];
handler.command = /^(instagram|ig(dl)?)$/i;
handler.limit = 2;
handler.exp = 70;
handler.register = true;

export default handler;
