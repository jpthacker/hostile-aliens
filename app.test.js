import * as game from "./app.js";
game.getNewGameHTML();

// Preliminary requirements

describe("Hostile Aliens Game", () => {
  const testShip1 = new game.Ship("test", 45, 12, "test-ship");
  const testShip2 = new game.Ship("test", 60, 15, "test-ship");
  describe("HTML Function", () => {
    test("Should generate the correct HTML", () => {
      expect(game.getNewGameHTML()).toBe(`
    <div class="game">
      <h1 class="game__title">Hostile Aliens</h1>
      <h4 class="game__subtitle">Shoot to attack the ships</h4>
      <div class="scores">
        <h2 class="scores__title"></h2>
        <div class="scores__container"></div>
      </div>
      <div class="ships"></div>
    </div>
    `);
    });
  });

  describe("Fleet Array Function", () => {
    class Ship extends game.Ship {}
    class Mothership extends game.Mothership {}
    test("Should create ship objects and assign them to fleet array", () => {
      expect(game.generateAllShips(0, 0, 1)).toStrictEqual([
        { damage: 9, hp: 100, html: "attack-ship", type: "Attack Ship" },
      ]);
      expect(game.generateAllShips(1, 2, 3)).toStrictEqual([
        { damage: 9, hp: 100, html: "mothership", type: "Mothership" },
        { damage: 9, hp: 100, html: "defence-ship", type: "Defence Ship" },
        { damage: 9, hp: 100, html: "defence-ship", type: "Defence Ship" },
        { damage: 9, hp: 100, html: "attack-ship", type: "Attack Ship" },
        { damage: 9, hp: 100, html: "attack-ship", type: "Attack Ship" },
        { damage: 9, hp: 100, html: "attack-ship", type: "Attack Ship" },
      ]);
    });
    test("Should store ship data in correct way", () => {
      expect(game.generateAllShips(1, 1, 1)).toStrictEqual([
        { damage: 9, hp: 100, html: "mothership", type: "Mothership" },
        { damage: 9, hp: 100, html: "defence-ship", type: "Defence Ship" },
        { damage: 9, hp: 100, html: "attack-ship", type: "Attack Ship" },
      ]);
    });
  });

  describe("Alien Ship Class", () => {
    test("Ship should have a defined amount of HP", () => {
      expect(testShip1.getShipHP()).toBe(45);
      expect(testShip2.getShipHP()).toBe(60);
    });

    test("Ship should suffer a defined amount of damage", () => {
      testShip1.applyShipDamage();
      testShip2.applyShipDamage();
      expect(testShip1.getShipHP()).toBe(33);
      expect(testShip2.getShipHP()).toBe(45);
    });

    test("Ship should generate correct HTML", () => {
      expect(testShip1.generateShipHTML("h3")).toBe(`
    <div class="ship__container">
      <h3>test</h3>
    </div>
    `);
    });

    xtest("Ship should get destroyed when HP = 0", () => {
      // expected outcomes (unhittable + no HTML)
    });
  });

  xdescribe("Mother Ship Class", () => {
    test("Should destroy fleet if HP reaches ZERO", () => {
      // expected outcomes
    });
  });

  xdescribe("BTN Class", () => {
    // btn object
    test("Should hit a random ship", () => {
      // expected outcomes
    });

    test("Should reduce targeted ship's HP on a hit", () => {
      // expected outcomes
    });
  });

  xdescribe("Scores Class", () => {
    // score objects
    test("Should source a score from an array of objects by summing up specific key: value", () => {
      // expected outcomes
    });
    test("Should generate HTML for each score", () => {
      // expected outcomes
    });
  });

  xdescribe("Game Over Function", () => {
    // function
    // fleet object
    test("Should load HTML if all ships are destroyed", () => {
      // expected outcomes
    });
  });

  xdescribe("Restart Btn Function", () => {
    // btn function
    // fleet array
    test("Should load correct HTML", () => {
      // expected outcome
    });

    test("Should restore game data to default", () => {
      // expected outcomes
    });
  });
});
