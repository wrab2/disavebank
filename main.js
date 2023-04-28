const Col_names = ["  ","Normal","Hiker's dream","Extreme","Extreme Dream","Hard","Hard Dream","Absurd","Absurd Dream","Absurd Extreme","Absurd Extereme Dream","Absurd Hard","Absurd Hard Dream"]
const Row_names = ["Normal","Easy","AAU","AAU Easy","NA","NA Eassy","AAU NA","AAU NA Easy"]
const groups = ['pre-infinity','infinity','elementary','multiverse']


const save_exists = [ //in format Col_namesRow_names
"NormalNormal",
"Hiker's dreamNormal",
"ExtremeNormal",
"Extreme DreamNormal",
"AbsurdNormal",
"NormalEasy",
"HardNormal",
"HardNA",
"Absurd HardNA",
]
loadedSaves = [{}]
function howmuch() {return loadedSaves.length} 
function bakktomenu(){currentpage=0;loadedSaves = [{}];app.$forceUpdate();}
var currentpage=0
var selectedmode='none'

function loadMode(url) { //Shamelessly stolen from https://jmperezperez.com/blog/ondemand-javascript-lazy-loading-stubs/
  url = "./saves/".concat(url).concat('.js')
  var script = document.createElement('script');
  script.setAttribute('src', url);
  script.setAttribute('type', 'text/javascript');
  var loaded = false;
  var loadFunction = function () { if (loaded) return; loaded = true;};
  script.onload = loadFunction;
  script.onreadystatechange = loadFunction;
  document.getElementsByTagName("head")[0].appendChild(script);
  currentpage=1;
  selectedmode=url
};

var app = new Vue({
  el: "#app",
  data: {
  },
})
