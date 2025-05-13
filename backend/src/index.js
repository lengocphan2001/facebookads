const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./config/database');


dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());


sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
    return sequelize.sync({ alter: true });
  })
  .then(() => {
    console.log('Database synchronized successfully');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


app.use('/api/campaigns', require('./routes/campaigns'));
app.use('/api/adgroups', require('./routes/adgroups'));
app.use('/api/ads', require('./routes/ads'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 