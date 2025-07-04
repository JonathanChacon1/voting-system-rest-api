const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json());

// Middleware de autenticación
const authenticateJWT = (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
      return res.status(401).json({ message: 'Acceso denegado. Token no proporcionado.' });
    }
    
    const token = authHeader.startsWith('Bearer ') ? authHeader.substring(7) : authHeader;
    
    jwt.verify(token, 'secret_key', (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Token no válido.' });
      }
      req.user = user;
      next();
    });
};

app.use('/voters', authenticateJWT, require('./routes/voters'));
app.use('/candidates', authenticateJWT, require('./routes/candidates'));
app.use('/votes', authenticateJWT, require('./routes/votes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
