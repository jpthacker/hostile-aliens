// HOSTILE ALIENS GAME
let fleetOfShipsArr = [];
let activeFleetArr;
const gameContainer = document.querySelector(".game");
const shipsContainer = document.querySelector(".ships");
const gameOverContainer = document.querySelector(".game-over");
const shootBtn = document.querySelector(".game__btn");
const restartBtn = document.querySelector(".game-over__btn");

// Alien ship class
class Ship {
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
    if (this.hp < 1) {
      return `
    <div class="ship__container sunk">
      <${titleType}>${this.type}</${titleType}>
    </div>
    `;
    }
    return `
    <div class="ship__container">
      <${titleType}>${this.type}</${titleType}>
    </div>
    `;
  }
}

// Generates an array of ships
const generateAllShips = (
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

const generateShipArrays = () => {
  fleetOfShipsArr = generateAllShips(Ship, 1, 5, 8);
  activeFleetArr = fleetOfShipsArr;
};
generateShipArrays();

const generateFleetHTML = (fleetArr, container, titleType) => {
  container.innerHTML = "";
  fleetArr.forEach((ship) => {
    container.innerHTML += ship.generateShipHTML(titleType);
  });
};

const getScores = (fleetArr) => {
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
const startingScores = getScores(fleetOfShipsArr);

const scoresContainer = document.querySelector(".scores__container");
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

const generateHTML = () => {
  generateFleetHTML(fleetOfShipsArr, shipsContainer, "h3");
  generateScoresHTML(scoresContainer, startingScores, "h3");
};
generateHTML();

const hitRandomShip = (fleetArr) => {
  fleetArr[Math.floor(Math.random() * fleetArr.length)].applyShipDamage();
};

const destroyShip = (fleetArr) => {
  const filteredFleetArr = fleetArr.filter((ship) => ship.hp > 0);
  return filteredFleetArr;
};

const loadGameOver = (fleetArr, gameContainer, gameOverContainer) => {
  if (!fleetArr[0]) {
    gameContainer.classList.add("hidden");
    gameOverContainer.classList.remove("hidden");
  }
};

const handleShootBtn = (fleetArr) => {
  hitRandomShip(fleetArr);
  filteredFleetArr = destroyShip(fleetArr);
  const currentScores = getScores(filteredFleetArr);
  generateScoresHTML(scoresContainer, currentScores, "h3");
  generateFleetHTML(fleetOfShipsArr, shipsContainer, "h3");
  activeFleetArr = filteredFleetArr;
};

shootBtn.addEventListener("click", () => {
  handleShootBtn(activeFleetArr);
  loadGameOver(activeFleetArr, gameContainer, gameOverContainer);
});

restartBtn.addEventListener("click", () => {
  gameContainer.classList.remove("hidden");
  gameOverContainer.classList.add("hidden");
  generateShipArrays();
  generateHTML();
});
