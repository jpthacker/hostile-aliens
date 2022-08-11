// HOSTILE ALIENS GAME

// Preliminary requirements

describe("Hostile Aliens Game", ( => {

  describe("HTML Function", () => {
    // function
    test("Should generate the correct HTML", () => {
      // expected output
    })
    test("Should target the defined container", () => {
      // expected output
    })
  })  

  describe("Fleet Array", () => {
    // fleet array
    // ship objects
    test("Should store ship data in correct way", () => {
      // expected outcome
    })
  })

  describe("Alien Ship Class", () => {
    // object based on class
    // fleet array
    test("Should create ship object and assign to fleet array", () => {

    })

    test("Ship should have a defined amount of HP", () => {
      // expected outcomes
    })

    test("Ship should suffer a defined amount of damage", () => {
      // expected outcomes
    })

    test("Ship should generate correct HTML", () => {
      // expected outcomes
    })

    test("Ship should get destroyed when HP = 0", () => {
      // expected outcomes (unhittable + no HTML)
    })
  })

  describe("Mother Ship Class", () => {
    test("Should destroy fleet if HP reaches ZERO", () => {
      // expected outcomes
    })
  })

  describe("BTN Class", () => {
    // btn object
    test("Should hit a random ship", () => {
      // expected outcomes
    })

    test("Should reduce targeted ship's HP on a hit", () => {
      // expected outcomes
    })
  })

  describe("Scores Class", () => {
    // score objects
    test("Should source a score from an array of objects by summing up specific key: value", () => {
      // expected outcomes
    })
    test("Should generate HTML for each score", () => {
      // expected outcomes
    })
  })

  describe("Game Over Function", () => {
    // function
    // fleet object
    test("Should load HTML if all ships are destroyed", () => {
      // expected outcomes
    })
  })

  describe("Restart Btn Function", () => {
    // btn function
    // fleet array
    test("Should load correct HTML", () => {
      // expected outcome
    })

    test("Should restore game data to default", () => {
      // expected outcomes
    })
  })
}))