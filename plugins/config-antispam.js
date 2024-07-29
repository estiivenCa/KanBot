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
console.log(Mensaje de spam detectado y eliminado: ${msg.body});
return false;
} else {
return true;
}
};

const handleCommand = (msg, chat) => {
if (msg.body === '.on antispam') {
antiSpamEnabled = true;
msg.reply('Filtro antispam activado');
} else if (msg.body === '.off antispam') {
antiSpamEnabled = false;
msg.reply('Filtro antispam desactivado');
}
};

if (msg.body.startsWith('.on antispam') || msg.body.startsWith('.off antispam')) {
handleCommand(msg, chat);
} else {
if (!antiSpam(msg, chat)) {
console.log('Mensaje es spam, no responder');
} else {
console.log('Mensaje no es spam, responder');
}
}
