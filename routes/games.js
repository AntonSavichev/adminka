const gamesRouter = require("express").Router(); // Создали роутер
const {sendAllGames} = require('../controllers/games');
const {getAllGames, updateGameFile, findGameById, sendUpdatedGames,  deleteGame, checkGameinArray, updateGamesArray } = require("../middlewares/games");


gamesRouter.get("/games", getAllGames, sendAllGames)
gamesRouter.delete("/games/:id", getAllGames, findGameById, deleteGame, updateGameFile, sendUpdatedGames);
gamesRouter.post("/games", getAllGames, checkGameinArray, updateGamesArray, updateGameFile, sendUpdatedGames)

module.exports = gamesRouter; 