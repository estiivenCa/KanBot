var handler = async (m, {command, conn, args, usedPrefix, text}) => {
  if (command == "y" || command == "y") {
    let mp4 = `*_descargando :_
_${usedPrefix}ytmp4_`.trim();

    m.reply(mp4);
  }

  if (command == "cursos") {
    var play = `*[ CURSOS ]*\n\n*Mini cursos de programación*\n
*Entra al canal de cursos y guias gratis *\n*en el canal hay cursos básicos de programación*\n\n*aparte si tienes dudas mande mensaje al creador, o al numero +573027866596*\n\n¡¡Disfruta de los mini cursos!!`.trim();
    m.reply(play);
  }
};
handler.command = ["cursos", "clases", ""];
handler.tags = ["internet"];
export default handler
