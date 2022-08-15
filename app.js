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
  shipClass,
  mothershipAmount,
  defenceShipAmount,
  attackShipAmount
) => {
  const fleet = [];
  for (let i = 0; i < mothershipAmount; i++) {
    fleet.push(new shipClass("Mothership", 100, 9, "mothership"));
  }
  for (let i = 0; i < defenceShipAmount; i++) {
    fleet.push(new shipClass("Defence Ship", 80, 10, "defence-ship"));
  }
  for (let i = 0; i < attackShipAmount; i++) {
    fleet.push(new shipClass("Attack Ship", 45, 12, "attack-ship"));
  }
  return fleet;
};

export const hitRandomShip = (fleetArr) => {
  fleetArr[Math.floor(Math.random() * fleetArr.length)].applyShipDamage();
};

// const scores = document.querySelector(".scores__container");
export const getScores = (fleetArr) => {
  const shipScores = [0, 0, 0];
  fleetArr.forEach((ship) => {
    switch (ship.type) {
      case "Mothership":
        shipScores[0] = ship.getShipHP();
        break;
      case "Defence Ship":
        shipScores[1] += 1;
        break;
      case "Attack Ship":
        shipScores[2] += 1;
    }
  });
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

export const destroyShip = (fleetArr) => {
  const filteredFleetArr = fleetArr.filter((ship) => ship.hp > 0);
  return filteredFleetArr;
};

export const loadGameOver = (fleetArr) => {};
