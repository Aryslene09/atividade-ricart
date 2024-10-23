
function formatTime(unit) {
    return unit < 10 ? '0' + unit : unit;
  }
  
 
  const today = new Date();
  
  
  const daysOfWeek = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
  const currentDay = daysOfWeek[today.getDay()];
  
  
  const hours = formatTime(today.getHours());
  const minutes = formatTime(today.getMinutes());
  const seconds = formatTime(today.getSeconds());
  const currentTime = `${hours}:${minutes}:${seconds}`;
  
  
  console.log(`Hoje é: ${currentDay}.`);
  console.log(`A hora atual é: ${currentTime}.`);
  