import { igdl } from 'ruhend-scraper';
import fetch from 'node-fetch';
import axios from 'axios';

let enviando = false;

const getBuffer = async (url, options = {}) => {
  const res = await axios({
    method: 'get', 
    url, 
    headers: {'DNT': 1, 'Upgrade-Insecure-Request': 1},
    ...options, 
    responseType: 'arraybuffer'
  });
  return res.data;
};

const handler = async (m, { text, conn, args, usedPrefix, command }) => {
if (!args[0]) {
return conn.reply(m.chat, '*`Ingresa Un Link De Facebook`*', m);
}

  let res;
try {
await m.react('🕒');
  await conn.sendMessage(m.chat, { text: '*Descargando el video, por favor espera...*\n\n>Mientras esperas sigueme en mi canal carck\nhttps://whatsapp.com/channel/0029VakhAHc5fM5hgaQ8ed2N' }, { quoted: m });
res = await igdl(args[0]);
if (!res.data || res.data.length === 0) {}

let data = res.data.find(i => i.resolution === "720p (HD)") || res.data.find(i => i.resolution === "360p (SD)");
if (!data) {}

let video = data.url;
await conn.sendFile(m.chat, video, 'facebook.mp4', null, m, null);
await m.react('✅');
} catch {
console.log('error 1/2');

if (enviando) {}
if (!enviando) enviando = true;

try {
await m.react('🕒');
const response = await fetch(`https://deliriusapi-official.vercel.app/download/facebook?url=${args[0]}`);
const data = await response.json();

if (data?.status === true) {
const videoBuffer = await getBuffer(data.resultado.data);
await conn.sendFile(m.chat, videoBuffer, 'facebook.mp4', null, m, null);
await m.react('✅');
} else {}
} catch {
console.log('error 2/2');
await m.react('❌');
} finally {
enviando = false;
}}};

handler.help = ['facebook *<link>*'];
handler.tags = ['dl'];
handler.command = /^(facebook|fb|facebookdl|fbdl)$/i;

export default handler;
