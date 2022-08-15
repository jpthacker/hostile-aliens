// HOSTILE ALIENS GAME

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

// const scores = document.querySelector(".scores__container");
export const getScores = (fleet) => {
  let mothership = 0;
  let defenceShips = 0;
  let attackShips = 0;
  fleet.forEach((ship) => {
    switch (ship.type) {
      case "Mothership":
        mothership = ship.getShipHP();
        break;
      case "Defence Ship":
        if (ship.hp > 0) {
          defenceShips += 1;
        }
        break;
      case "Attack Ship":
        if (ship.hp > 0) {
          attackShips += 1;
        }
    }
  });
  const shipScores = [mothership, defenceShips, attackShips];
  return shipScores;
};
// const currentScores = getScores(...);

const generateScoresHTML = (container, scores, titleType) => {
  container.innerHTML = `
  <div>
    <${titleType}>MOTHERSHIP</${titleType}>
    <${titleType}>${scores[0]}</${titleType}>
  </div>
  <div>
    <${titleType}>DEFENCE SHIPS</${titleType}>
    <${titleType}>${scores[1]}</${titleType}>
  </div>
  <div>
    <${titleType}>ATTACK SHIPS</${titleType}>
    <${titleType}>${scores[2]}</${titleType}>
  </div>
  `;
};
