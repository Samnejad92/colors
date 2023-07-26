const data = [
  'Teal',
  'SkyBlue',
  'DarkSeaGreen',
  'Purple',
  'LightPink',
  'Crimson'
];
const defaultColor = 'Silver';

// your code here...

var select = document.getElementById("color-select");

for(var i = 0; i < data.length; i++) {
    var opt = data[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}
select.addEventListener('change', (event) => {
    const color = event.target.value; // Selected Color 
    var bo = document.getElementById("box");
    bo.style.backgroundColor = color;
    setTimeout(setSilver,1000);
    
});

function setSilver(){
  var boxo = document.getElementById("box");
  boxo.style.backgroundColor = defaultColor;
}
