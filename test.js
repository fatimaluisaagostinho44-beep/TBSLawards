/* ==============================
   BANNER AUTOMÁTICO
============================== */

const slides = document.querySelectorAll(".slide");
const indicadores = document.querySelectorAll(".indicadores span");

let slideAtual = 0;

function mostrarSlide(index){

slides.forEach(slide=>{
slide.classList.remove("active");
});

indicadores.forEach(dot=>{
dot.classList.remove("ativo");
});

slides[index].classList.add("active");
indicadores[index].classList.add("ativo");

}

function proximoSlide(){

slideAtual++;

if(slideAtual >= slides.length){

slideAtual = 0;

}

mostrarSlide(slideAtual);

}

setInterval(proximoSlide,5000);

/* ==============================
      CLASSIFICAÇÃO
============================== */

const tabela = [

{
clube:"Galácticos FC",
pts:25
},

{
clube:"United Stars",
pts:22
},

{
clube:"Puli United",
pts:20
},

{
clube:"Black Team",
pts:18
},

{
clube:"The Kings",
pts:17
}

];

const miniTabela =
document.getElementById("miniTabela");

if(miniTabela){

tabela.forEach((time,index)=>{

miniTabela.innerHTML += `

<tr>

<td>${index+1}</td>

<td>${time.clube}</td>

<td>${time.pts}</td>

</tr>

`;

});

}

/* ==============================
       ARTILHARIA
============================== */

const artilharia=[

{

nome:"Nathan",

clube:"Galácticos",

golos:15,

foto:"https://picsum.photos/70?1"

},

{

nome:"Carlos",

clube:"United",

golos:12,

foto:"https://picsum.photos/70?2"

},

{

nome:"Pedro",

clube:"Black Team",

golos:11,

foto:"https://picsum.photos/70?3"

},

{

nome:"Luís",

clube:"Puli",

golos:10,

foto:"https://picsum.photos/70?4"

},

{

nome:"Mateus",

clube:"Kings",

golos:9,

foto:"https://picsum.photos/70?5"

}

];

const lista=
document.getElementById("miniArtilharia");

if(lista){

artilharia.forEach(jogador=>{

lista.innerHTML += `

<div class="player">

<div class="player-info">

<img src="${jogador.foto}">

<div>

<h3>${jogador.nome}</h3>

<p>${jogador.clube}</p>

</div>

</div>

<strong>${jogador.golos} ⚽</strong>

</div>

`;

});

}

/* ===========================
    CONTADORES ANIMADOS
=========================== */

const counters=document.querySelectorAll(".stats h2");

function animarContadores(){

counters.forEach(counter=>{

const alvo=parseInt(counter.innerText);

let numero=0;

const velocidade=30;

const intervalo=setInterval(()=>{

numero++;

counter.innerText=numero;

if(numero>=alvo){

counter.innerText=alvo;

clearInterval(intervalo);

}

},velocidade);

});

}

animarContadores();


/* ===========================
      TROCAR TEMPORADA
=========================== */

const temporadas=document.querySelectorAll(".season-card");

temporadas.forEach(card=>{

card.addEventListener("click",()=>{

temporadas.forEach(c=>{

c.classList.remove("selecionada");

});

card.classList.add("selecionada");

});

});


/* ===========================
      ANIMA