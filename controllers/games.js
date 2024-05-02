

const sendAllGames = async (req, res) => {

    res.send(req.games);
  };

  module.exports = {sendAllGames}