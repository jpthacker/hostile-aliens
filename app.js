// HOSTILE ALIENS GAME

// Generates new game html
// const gameContainer = document.querySelector(".game");
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
// gameContainer.innerHTML = getNewGameHTML();

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

  generateShipHTML(titleType) {
    return `
    <div class="ship__container">
      <${titleType}>${this.type}</${titleType}>
    </div>
    `;
  }

  // Destroy ship function (STILL TO TEST)?
}

export class Mothership extends Ship {
  constructor(type, hp, damage, html) {
    super(type, hp, damage, html);
  }
}

// Generates the fleet Array
export const generateAllShips = (
  mothershipAmount,
  defenceShipAmount,
  attackShipAmount
) => {
  const mothership = new Mothership("Mothership", 100, 9, "mothership");
  const defenceShip = new Ship("Defence Ship", 100, 9, "defence-ship");
  const attackShip = new Ship("Attack Ship", 100, 9, "attack-ship");
  const fleet = [];
  for (let i = 0; i < mothershipAmount; i++) {
    fleet.push({ ...mothership });
  }
  for (let i = 0; i < defenceShipAmount; i++) {
    fleet.push({ ...defenceShip });
  }
  for (let i = 0; i < attackShipAmount; i++) {
    fleet.push({ ...attackShip });
  }
  return fleet;
};
