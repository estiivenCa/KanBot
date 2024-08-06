import fs from 'fs'
import { parsePhoneNumber } from 'libphonenumber-js'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
import ct from 'countries-and-timezones'
import moment from 'moment-timezone'
import translate from '@vitalets/google-translate-api'
const { generateWAMessageFromContent, proto } = (await import('@whiskeysockets/baileys')).default

var handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {

    try {
        let user = conn.getName(m.sender)
        let pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')

        let fechaMoment, formatDate, nombreLugar, ciudad = null
        const phoneNumber = '+' + m.sender
        const parsedPhoneNumber = parsePhoneNumber(phoneNumber)
        const countryCode = parsedPhoneNumber.country
        const countryData = ct.getCountry(countryCode)
        const timezones = countryData.timezones
        const zonaHoraria = timezones.length > 0 ? timezones[0] : 'UTC'
        moment.locale('es')
        let lugarMoment = moment().tz(zonaHoraria)
        if (lugarMoment) {
            fechaMoment = lugarMoment.format('llll [(]a[)]')
            formatDate = fechaMoment.charAt(0).toUpperCase() + fechaMoment.slice(1)
            nombreLugar = countryData.name
            const partes = zonaHoraria.split('/')
            ciudad = partes[partes.length - 1].replace(/_/g, ' ')
        } else {
            lugarMoment = moment().tz('America/Mexico_City')
            fechaMoment = lugarMoment.format('llll [(]a[)]')
            formatDate = fechaMoment.charAt(0).toUpperCase() + fechaMoment.slice(1)
            nombreLugar = 'America'
            ciudad = 'Ciudad de México'
        }

        let listSections = [{
            title: 'Menú Completo',
            rows: [
                { title: "Menú Completo", description: "Para ver todos los comandos", id: '.allmenu' },
                { title: "Sub-bot", description: "Para volverte sub-bot 🤖 (usuarios premium)", id: '.jadibot --code' },
                { title: "Velocidad", description: "Ver velocidad del bot", id: '.ping' },
                { title: "Play", description: "Descarga tus músicas favoritas 🎧", id: '.play' },
                { title: "Dueño", description: "Contacta al dueño del bot", id: '.infobot' }
            ]
        }]

        await conn.sendList(m.chat, '👋🏻 Hola, Bienvenido A Mi Sub Menú\n\n*Creador:* Jxtxn17\n*Dueño:* ⁨𝑺̳̽𝒕̳̽𝒊̳𝒊̳𝒗̳̽𝒙̳̽𝒏̳̽×፝֟͜×⁩\n*Versión:* 1.0.0\n\nSi hay algún error o alguna duda, puedes contactarme usando el comando: .infobot\n\nGracias¡! 🔴', null, `Selecciona una opción`, listSections, { mentions: [m.sender] }, { quoted: m })

    } catch (e) {
        conn.reply(m.chat, `*🚩 Ocurrió un fallo*`, m)
        console.log(e)
    }
}

handler.help = ['menu']
handler.tags = ['bot']
handler.command = /^(menu|menú)$/i

export default handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
