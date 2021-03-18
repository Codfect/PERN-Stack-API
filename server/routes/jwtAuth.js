const router = require('express').Router();
const pool = require('../db')

//register
router.post('/register', async(req, res) => {
  try {
    //corpo da requisição
    const { nome, sobrenome, username, senha } = req.body;

    //verifica se usuario existe
    const user = await pool.query("SELECT * FROM users WHERE username = $1", [
      username
    ]);

    //caso exista retorna -> 401 unauthenticated
    if(user.rows.length !== 0) {
      return res.status(401).send("Esse usuario já existe");
    }
    
  } catch (error) {
    console.error(err.message);
  }
})

module.exports = router;