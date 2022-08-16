import * as game from "./app.js";

describe("Hostile Aliens Game", () => {
  const testShip1 = new game.Ship("test", 45, 12, "test-ship");
  const testShip2 = new game.Ship("test", 60, 15, "test-ship");
  const testShip3 = new game.Ship("test", 10, 15, "test-ship");
  const testShip4 = new game.Ship("test", 0, 15, "test-ship");
  const singleShipArr = game.generateAllShips(game.Ship, 0, 0, 1);
  const multipleShipArr = game.generateAllShips(game.Ship, 1, 2, 3);
  const testShipArr1 = [testShip1, testShip2, testShip3, testShip4];
  const testShipArr2 = [testShip4];

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
  });

  describe("Fleet Array Function", () => {
    test("Should create ship objects and assign them to fleet array", () => {
      expect(singleShipArr[0].getShipHP()).toBe(45);
      expect(multipleShipArr[0].type).toBe("Mothership");
      expect(multipleShipArr[1].type).toBe("Defence Ship");
      expect(multipleShipArr[5].type).toBe("Attack Ship");
      expect(multipleShipArr.length).toBe(6);
    });
  });

  describe("Hit Random Ship Function", () => {
    game.hitRandomShip(multipleShipArr);
    const filteredShipArr = multipleShipArr.filter((ship) => {
      return ship.hp === 33;
    });
    test("Should hit a random ship", () => {
      expect(filteredShipArr.length).toBe(1);
    });
    game.hitRandomShip(filteredShipArr);
    test("Should reduce targeted ship's HP on a hit", () => {
      expect(filteredShipArr[0].hp).toBe(21);
    });
  });

  describe("Scores Function", () => {
    test("Should source a score from an array of objects", () => {
      expect(game.getScores(singleShipArr)).toStrictEqual([0, 0, 1]);
      expect(game.getScores(multipleShipArr)).toStrictEqual([100, 2, 3]);
    });
  });

  describe("Dsetroy Ship Function", () => {
    test("Should filter fleet array if ship score is below 1", () => {
      expect(game.destroyShip(testShipArr1)).toStrictEqual([
        testShip1,
        testShip2,
        testShip3,
      ]);
      expect(game.destroyShip(multipleShipArr)).toStrictEqual(multipleShipArr);
      expect(game.destroyShip(testShipArr2)).toStrictEqual([]);
    });
  });
});
