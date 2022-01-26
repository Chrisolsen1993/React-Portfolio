
 export default function spliting() {
const name_chars = "Olsen Ogouchi".split('');
const name_element = document.getElementById('name-display');
console.log(name_element) 
const display_name = "";
const name_display_interval = setInterval(() => {
  if (name_chars.length > 0) {
    display_name += name_chars.shift();
    name_element.innerHTML = display_name;
  } else {
    clearInterval(name_display_interval);
  }
}, 600);
 }