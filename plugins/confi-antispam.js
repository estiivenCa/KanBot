let antiSpamEnabled = false;

const antiSpam = (msg, chat) => {
  if (!antiSpamEnabled) return true;

  const spamKeywords = ['compra', 'venta', 'ganar dinero', 'haz clic aquí'];
  const spamThreshold = 3; 

  const messageText = msg.body.toLowerCase();
  const spamCount = spamKeywords.filter((keyword) => messageText.includes(keyword)).length;

  if (spamCount >= spamThreshold) {
    chat.deleteMessage((link unavailable));
    chat.removeContact(msg.from);
    console.log(`Mensaje de spam detectado y eliminado: ${msg.body}`);
    return false;
  } else {
    return true;
  }
};

const handleCommand = (msg) => {
  if (msg.body === '.on') {
    antiSpamEnabled = true;
    msg.reply('Filtro antispam activado');
  } else if (msg.body === '.off') {
    antiSpamEnabled = false;
    msg.reply('Filtro antispam desactivado');
  }
};

// En tu código de manejo de mensajes, agregar:
if (msg.body.startsWith('.')) {
  handleCommand(msg);
} else {
  if (!antiSpam(msg, chat)) {
    console.log('Mensaje es spam, no responder');
  } else {
    console.log('Mensaje no es spam, responder');
  }
}
