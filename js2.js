import data from './data.json' assert {type:'json'};

//getting name from url
const urlParams = new URLSearchParams(window.location.search);
var x = urlParams.get('greeting');
x=x[0].toUpperCase()+x.slice(1);
console.log(x);
//converting json
var  str = JSON.stringify(data);
const obj = JSON.parse(str);

//finding name from json
var flag=1;
var k;
  for(k=0;k<46;k++){
    if((obj[k]?.name)===x){
    flag=0;
    break;
  }
}

//IFNOT IN JSON//
if (flag==1){
  alert("ENTER NAME CORRECTLY");

}



else{
  var sor="map/"+obj[k].name;
  sor=sor+".jpg";
  console.log(sor);
  h1.textContent=x;
  lon.textContent=obj[k].lon;
  lat.textContent=obj[k].lat;
  ele.textContent=obj[k].ele;
  pop.textContent=obj[k].pop;
  temp.textContent=obj[k].temp;
  cr20.textContent=obj[k].crime[0];
  cr21.textContent=obj[k].crime[1];
  cr22.textContent=obj[k].crime[2];
  var img = document.createElement("img");
  img.src =sor ;
  var src = document.getElementById("header");
  src.appendChild(img);;
}
