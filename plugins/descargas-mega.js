import fetch from "node-fetch";
import path from "path";

let handler = async (m, { conn, args, usedPrefix, text, command }) => {
    try {
        if (!text) return m.reply('*_Ingresa un enlace de la página web_*\n\n`Ejemplo:`\n' + `> ❒ *${usedPrefix + command}* https://example.com/file.pdf`);

        const url = text;
        const downloadingMessage = `*Descargando archivo desde la página web*`;
        m.reply(downloadingMessage);

        // Descargar el archivo usando fetch
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const buffer = await response.buffer();

        // Obtener el nombre del archivo desde la URL
        const urlParts = url.split('/');
        const fileName = urlParts[urlParts.length - 1];

        const fileExtension = path.extname(fileName).toLowerCase();
        const mimeTypes = {
            ".mp4": "video/mp4",
            ".pdf": "application/pdf",
            ".zip": "application/zip",
            ".rar": "application/x-rar-compressed",
            ".7z": "application/x-7z-compressed",
            ".jpg": "image/jpeg",
            ".jpeg": "image/jpeg",
            ".png": "image/png",
        };

        let mimetype = mimeTypes[fileExtension] || "application/octet-stream";

        const caption = `
*_Descarga Exitosa..._*

> ❒➺ *Archivo :* ${fileName}
> ❒➺ *Peso :* ${formatBytes(buffer.length)}`;

        await conn.sendFile(m.chat, buffer, fileName, caption, m, null, { mimetype, asDocument: true });

    } catch (error) {
        await conn.reply(m.chat, "*_❏ 🍃 Ocurrió un error inesperado_*", m, msg);
    }
}

handler.help = ["descargar"]
handler.tags = ['descargas']
handler.command = ["mega"]
export default handler

function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
