// HOSTILE ALIENS GAME

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
