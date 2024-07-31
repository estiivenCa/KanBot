// RollWaifu.js

// Array de waifus
const waifus = [
  { nombre: 'Mikasa Ackerman', anime: 'Shingeki no Kyojin' },
  { nombre: 'Asuna Yuuki', anime: 'Sword Art Online' },
  { nombre: 'Hestia', anime: 'DanMachi' },
  { nombre: 'Rias Gremory', anime: 'High School DxD' },
  { nombre: 'Saber', anime: 'Fate/stay night' },
  // Agrega más waifus aquí...
];

// Función para obtener una waifu aleatoria
function obtenerWaifuAleatoria() {
  const indiceAleatorio = Math.floor(Math.random() * waifus.length);
  return waifus[indiceAleatorio];
}

// Función para mostrar la waifu obtenida
function mostrarWaifu(waifu) {
  console.log(`Tu waifu es: ${waifu.nombre} de ${waifu.anime}`);
}

// Ejecuta la función para obtener y mostrar una waifu aleatoria
const waifuAleatoria = obtenerWaifuAleatoria();
mostrarWaifu(waifuAleatoria);
};
handler.help = ['rollwaifu'];
handler.tags = ['anime'];
handler.command = ['rw', 'rollwaifu'];
handler.register = true;

export default handler;

 function clockString(ms) { 
   let h = Math.floor(ms / 3600000) 
   let m = Math.floor(ms / 60000) % 60 
   let s = Math.floor(ms / 1000) % 60 
   console.log({ms,h,m,s}) 
   return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':') 
 } 

 /*function msToTime(duration) { 
 var milliseconds = parseInt((duration % 1000) / 100), 
 seconds = Math.floor((duration / 1000) % 60), 
 minutes = Math.floor((duration / (1000 * 60)) % 60), 
 hours = Math.floor((duration / (1000 * 60 * 60)) % 24) 
  
 hours = (hours < 10) ? "0" + hours : hours 
 minutes = (minutes < 10) ? "0" + minutes : minutes 
 seconds = (seconds < 10) ? "0" + seconds : seconds 
  
 return minutes + " m y " + seconds + " s "  
 }  */