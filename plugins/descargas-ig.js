import { igdl } from "ruhend-scraper";

let handler = async (m, { args, conn }) => { 
    if (!args[0]) {
        return conn.reply(m.chat, '*`Ingresa un link de Instagram`*', m);
    }
    
    try {
        await m.react('🕑');
        
        let res = await igdl(args[0]);
        let data = res.data; 
        
        for (let media of data) {
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            await conn.sendFile(m.chat, media.url, 'instagram.mp4', null, m); 
        }
    } catch {
        await m.react('❌');
    }
}

handler.command = ['instagram'];
handler.tags = ['dl'];
handler.help = ['instagram'];

export default handler
