// HOSTILE ALIENS GAME

// Generates new game html
const gameContainer = document.querySelector(".game");
export const getNewGameHTML = () => {
  return `
    <div class="game">
      <h1 class="game__title">Hostile Aliens</h1>
      <h4 class="game__subtitle">Shoot to attack the ships</h4>
      <div class="scores">
        <h2 class="scores__title"></h2>
        <div class="scores__container"></div>
      </div>
      <div class="ships"></div>
    </div>
    `;
};
gameContainer.innerHTML = getNewGameHTML();

// Generates the fleet Array (STILL TO TEST)
export const fleet = [];
export const generateShips = () => {};

// Alien ship class
export class Ship {
  constructor(type, hp, damage, html) {
    this.type = type;
    this.hp = hp;
    this.damage = damage;
    this.html = html;
  }

  getShipHP() {
    return this.hp;
  }

  applyShipDamage() {
    this.hp = this.hp - this.damage;
  }

  generateShipHTML(container, titleType) {
    container.innerHTML += `
    <div class="ship__container">
      <${textSize}>${this.name}</${titleType}>
    </div>
    `;
  }

  // Destroy ship function?
}

// export class MotherShip extends ship {
//   constructor(type, hp, damage, html) {
//     super(type, hp, damage, html);
//   }
// }
