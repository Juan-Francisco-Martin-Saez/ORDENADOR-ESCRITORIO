class GameIntro extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" })
    this.shadow.innerHTML = /*html*/`
      <style>
        :host {
          display: block;
          width: 100%;
          height: 100%;
          max-width: 100%;
          min-width: 0;
          min-height: 0;
          box-sizing: border-box;
          overflow: hidden;
          background: hsl(120 25% 75%);
        }
        .pantalla-inicio {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 100%;
          min-width: 0;
          min-height: 0;
          box-sizing: border-box;
          padding: 4rem 2rem;
          background: hsl(120 25% 75%);
          overflow: hidden;
        }
        .escenario {
          width: min(100%, 70rem);
          height: 55vh;
          min-height: 20rem;
          box-sizing: border-box;
          background: hsl(100 30% 55%);
          border-radius: 1.5rem;
        }
        .titulo {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          color: hsl(40 80% 20%);
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: bold;
          text-align: center;
        }
        .titulo span {
          font-size: 0.55em;
          letter-spacing: 0.2em;
        }
        #nuevo-jugador {
          padding: 1rem 2.5rem;
          border: 0;
          border-radius: 0.75rem;
          background: hsl(40 80% 45%);
          color: hsl(0 0% 100%);
          font-size: 1.1rem;
          font-weight: bold;
          cursor: pointer;
        }
        #nuevo-jugador:hover {
          background: hsl(40 80% 40%);
        }
        @media (max-width: 48rem) {
          .pantalla-inicio {
            padding: 2rem 1rem;
          }
          .escenario {
            width: 100%;
            height: 50vh;
            min-height: 15rem;
            border-radius: 1rem;
          }
          .titulo {
            font-size: clamp(2rem, 12vw, 3.5rem);
          }
          #nuevo-jugador {
            width: min(100%, 20rem);
            padding: 0.9rem 1.5rem;
          }
        }
      </style>
      <section class="pantalla-inicio">
        <div class="escenario">
          <!-- SVG -->
        </div>
        <div class="titulo">
          <!-- LOGO UCO -->
          <span>GARDEN</span>
        </div>
        <button id="nuevo-jugador">
          NUEVO JUGADOR
        </button>
      </section>
    `;
    this.shadow
      .querySelector("#nuevo-jugador")
      .addEventListener("click", this.iniciarPartida);
  }
  iniciarPartida() {
    console.log("Nueva partida");
  }
}
customElements.define("game-intro", GameIntro);