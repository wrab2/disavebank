const Col_names = ["","Normal","Hikers dream","Extreme","Extreme Dream","Hard","Hard Dream","Absurd","Absurd Dream","Absurd Extreme","Absurd Extereme Dream","Absurd Hard","Absurd Hard Dream"]
const Row_names = ["Normal","Easy","AAU","AAU Easy","NA","NA Easy","AAU NA","AAU NA Easy"]

const save_exists = [ //in format Col_namesRow_names
	"Absurd HardNA",
	"AbsurdNormal",
	"Extreme DreamNA",
	"Extreme DreamNormal",
	"ExtremeNA",
	"ExtremeNormal",
	"Hard DreamNA",
	"HardNA",
	"HardNormal",
	"Hikers dreamNA",
	"Hikers dreamNormal",
	"NormalAAU",
	"NormalAAU Easy",
	"NormalEasy",
	"NormalNA",
	"NormalNormal"
]

let loadedSaves = []
let loadedSavesName = ""
let currentpage = 0
function loadMode(url, savename) { //taken from https://jmperezperez.com/blog/ondemand-javascript-lazy-loading-stubs/
  loadedSavesName = savename.replace("rs","r's").replace(" Normal","")
  document.getElementById("listname").textContent = "Loaded saves for "+loadedSavesName+" mode"
  url = `./saves/${url}.js`
  var script = document.createElement('script');
  script.setAttribute('src', url);
  script.setAttribute('type', 'text/javascript');
  var loaded = false;
  var loadFunction = function () { if (loaded) return; loaded = true;};
  script.onload = loadFunction;
  script.onreadystatechange = loadFunction;
  document.getElementsByTagName("head")[0].appendChild(script);
};

function showSaves(){
	let list = ""
	for(const s of loadedSaves){
		list+=`<button onclick="navigator.clipboard.writeText('${s.string}')" class="savename ${s.group}">${s.name}</button>
		<span class="author">- ${s.author}</span></br>`
	}
	document.getElementById("savelist").innerHTML=list
	document.getElementById("mainmenu").style.display="none"
	document.getElementById("sourcelink").style.display="none"
	document.getElementById("savemenu").style.display="block"
}

function backtomenu(){
	loadedSaves = []
	document.getElementById("savelist").textContent=""
	document.getElementById("listname").textContent=""
	document.getElementById("mainmenu").style.display="table"
	document.getElementById("sourcelink").style.display="block"
	document.getElementById("savemenu").style.display="none"
}

//mode combination table
let table="<tbody><tr>"
for(const c of Col_names){
	table+=`<td>${c.replace("rs","r's")}</td>`//replace is for hiker's dream
}
table+="</tr>"
for(const r of Row_names){
	table+=`</tr><td>${r}</td>`
	for(let c = 1; c < Col_names.length; c++){
		table+="<td>"
		if(save_exists.includes(Col_names[c].concat(r))){
			table+=`<button class="active" onclick="loadMode('${Col_names[c].concat(r)}', '${Col_names[c]+" "+r}')">Show saves</button>`
		} else {
			table+="<button class='inactive'>No saves</button>"
		}
		table+="</td>"
	}
	table+="</tr>"
}
table+="</tbody>"
document.getElementById("mainmenu").innerHTML = table
