class GameIntro extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.innerHTML =/*html*/`
<style>
:host{display:block;width:100%;height:100%;overflow:hidden}.pantalla-inicio{position:relative;width:100%;height:100%;overflow:hidden;background:hsl(95 55% 82%)}.fondo{position:absolute;inset:0;z-index:0;width:100%;height:100%;object-fit:cover;object-position:center}.escena{position:relative;width:100%;height:100%;overflow:hidden}.logo{position:absolute;top:1%;left:50%;z-index:80;width:clamp(14rem,25vw,24rem);transform:translateX(-50%);user-select:none;pointer-events:none}.vegetales{position:absolute;inset:0;z-index:10;overflow:hidden;pointer-events:none}.vegetal{position:absolute;width:var(--tamano);user-select:none;pointer-events:none;transform-origin:center bottom;animation:baile var(--duracion) ease-in-out var(--retraso) infinite alternate}.muneca{position:absolute;left:50%;bottom:0;z-index:60;width:clamp(14rem,25vw,23rem);max-height:70%;object-fit:contain;transform:translateX(-50%);transform-origin:center bottom;animation:muneca 5s ease-in-out infinite;user-select:none;pointer-events:none}#nuevo-jugador{position:absolute;left:50%;bottom:11%;z-index:100;width:min(70%,19rem);padding:.9rem 2.2rem;border:.18rem solid hsl(40 70% 24%);border-radius:999rem;background:linear-gradient(180deg,hsl(47 100% 76%),hsl(42 94% 58%) 48%,hsl(36 86% 45%));color:hsl(35 70% 17%);font-size:clamp(.95rem,1.6vw,1.2rem);font-weight:900;letter-spacing:.08em;cursor:pointer;transform:translateX(-50%);box-shadow:0 .3rem 0 hsl(40 70% 25%),0 .65rem 1rem hsl(40 50% 20%/.25),inset 0 .15rem 0 hsl(0 0% 100%/.45);transition:transform .15s ease,box-shadow .15s ease,filter .15s ease}#nuevo-jugador::before{content:"";position:absolute;top:.25rem;left:12%;width:76%;height:.3rem;border-radius:999rem;background:hsl(0 0% 100%/.35)}#nuevo-jugador:hover{transform:translateX(-50%) translateY(-.15rem);filter:brightness(1.06);box-shadow:0 .42rem 0 hsl(40 70% 25%),0 .75rem 1.1rem hsl(40 50% 20%/.3),inset 0 .15rem 0 hsl(0 0% 100%/.45)}#nuevo-jugador:active{transform:translateX(-50%) translateY(.08rem);box-shadow:0 .16rem 0 hsl(40 70% 25%),0 .35rem .7rem hsl(40 50% 20%/.2)}
@keyframes baile{0%{transform:translate(0,0) rotate(var(--rotacion-1))}25%{transform:translate(var(--movimiento-x-1),var(--movimiento-y-1)) rotate(var(--rotacion-2))}50%{transform:translate(var(--movimiento-x-2),var(--movimiento-y-2)) rotate(var(--rotacion-3))}75%{transform:translate(var(--movimiento-x-3),var(--movimiento-y-3)) rotate(var(--rotacion-4))}100%{transform:translate(var(--movimiento-x-4),var(--movimiento-y-4)) rotate(var(--rotacion-5))}}
@keyframes muneca{0%,100%{transform:translateX(-50%) translateY(0) rotate(-1deg)}50%{transform:translateX(-50%) translateY(-.55rem) rotate(1deg)}}
@media(max-width:48rem){.logo{top:2%;width:clamp(10rem,46vw,18rem)}.vegetal{width:calc(var(--tamano)*.82)}.muneca{bottom:1%;width:clamp(12rem,52vw,19rem);max-height:66%}#nuevo-jugador{bottom:10%;width:min(72%,17rem);padding:.8rem 1.5rem}}
@media(max-width:30rem){.logo{width:clamp(9rem,52vw,15rem)}.vegetal{width:calc(var(--tamano)*.7)}.muneca{width:clamp(10.5rem,57vw,16rem);max-height:63%}#nuevo-jugador{bottom:11%;width:min(76%,16rem);font-size:.9rem}}
@media(prefers-reduced-motion:reduce){.muneca,.vegetal{animation:none}}
</style>
<section class="pantalla-inicio">
<img class="fondo" src="./img/fondo_02.jpg" alt="">
<div class="escena">
<img class="logo" src="./img/logo-cab.svg" alt="UCO Garden">
<div class="vegetales"></div>
<img class="muneca" src="./img/muneca01.svg" alt="">
<button id="nuevo-jugador">NUEVA PARTIDA</button>
</div>
</section>`;
    this.crearVegetales();
    this.shadow.querySelector("#nuevo-jugador").addEventListener("click", () => this.dispatchEvent(new CustomEvent("nueva-partida", { bubbles: true })));
  }
  crearVegetales() {
    const contenedor = this.shadow.querySelector(".vegetales"), vegetales = ["./img/patatas.svg", "./img/tomate.svg", "./img/zanahoria.svg", "./img/berenjenas.svg", "./img/brocoli.svg"], duraciones = [2.1, 2.4, 2.8, 3.2, 3.7, 4.1, 4.6, 5.1, 5.7, 6.3, 6.9, 7.5], rotaciones = [-18, -14, -11, -8, -5, 4, 7, 10, 13, 17], movimientoX = [".3rem", ".5rem", ".8rem", "1rem", "1.3rem", "1.6rem", "2rem"], movimientoY = ["-.3rem", "-.5rem", "-.8rem", "-1rem", "-1.3rem", "-1.6rem", "-2rem"];
    for (let indice = 0; indice < 160; indice++) {
      const vegetal = document.createElement("img"), tipo = indice % 3 === 0 || indice % 3 === 1 ? 0 : 1 + Math.floor(Math.random() * 4);
      vegetal.className = "vegetal"; vegetal.src = vegetales[tipo]; vegetal.alt = "";
      let left, bottom;
      do { left = -2 + Math.random() * 98; bottom = Math.random() * 31 } while (left > 28 && left < 66 && bottom < 12);
      vegetal.style.left = `${left}%`; vegetal.style.bottom = `${bottom}%`;
      vegetal.style.setProperty("--tamano", `${tipo === 0 ? 5 + Math.random() * 5 : 2.8 + Math.random() * 5.8}rem`);
      vegetal.style.setProperty("--duracion", `${duraciones[Math.floor(Math.random() * duraciones.length)]}s`);
      vegetal.style.setProperty("--retraso", `${-Math.random() * 7}s`);
      for (let paso = 1; paso <= 4; paso++) { const x = movimientoX[Math.floor(Math.random() * movimientoX.length)], y = movimientoY[Math.floor(Math.random() * movimientoY.length)]; vegetal.style.setProperty(`--movimiento-x-${paso}`, Math.random() > .5 ? x : `-${x}`); vegetal.style.setProperty(`--movimiento-y-${paso}`, y) }
      for (let paso = 1; paso <= 5; paso++)vegetal.style.setProperty(`--rotacion-${paso}`, `${rotaciones[Math.floor(Math.random() * rotaciones.length)]}deg`);
      contenedor.appendChild(vegetal);
    }
  }
}
customElements.define("game-intro", GameIntro);