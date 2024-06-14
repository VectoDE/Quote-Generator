const express = require('express');
const cors = require('cors');
const connectDB = require('./database/connect');
const quoteRoutes = require('./routes/quoteRoutes');

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/quotes', quoteRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
