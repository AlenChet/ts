import GameSavingLoader from './basic';

GameSavingLoader.load()
  .then((saving) => {
    console.log(saving);
  })
  .catch((error) => {
    console.error(error);
  });
