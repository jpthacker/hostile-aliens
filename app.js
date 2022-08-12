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

// Generates an array of ships
export const generateAllShips = (
  class1,
  class1Amount,
  class2,
  class2Amount,
  class3,
  class3Amount
) => {
  const fleet = [];
  for (let i = 0; i < class1Amount; i++) {
    fleet.push(new class1("Mothership", 100, 9, "mothership"));
  }
  for (let i = 0; i < class2Amount; i++) {
    fleet.push(new class2("Defence Ship", 80, 10, "defence-ship"));
  }
  for (let i = 0; i < class3Amount; i++) {
    fleet.push(new class3("Attack Ship", 45, 12, "attack-ship"));
  }
  return fleet;
};

export const hitRandomShip = (fleet) => {
  fleet[Math.floor(Math.random() * fleet.length)].applyShipDamage();
};
