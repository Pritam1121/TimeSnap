
function timeDate(){
 const timeElement = document.getElementById('time')
 const dateElement = document.getElementById('date')

 const now = new Date();
  const hours = now.getHours() % 12 || 12 ;
  const formatedhours = hours.toString().padStart(2,'0');
  const minutes = now.getMinutes().toString().padStart(2,'0');
  const seconds = now.getSeconds().toString().padStart(2,'0');
  const ampm = now.getHours() > 12 ? 'PM' : 'AM' ;

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const nowdate = now.toLocaleDateString(undefined, options)

  timeElement.textContent = `${formatedhours}:${minutes}:${seconds} ${ampm}`;
  dateElement.textContent = `${nowdate}`;
}

setInterval(timeDate,1000)

timeDate();
