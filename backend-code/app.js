require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const personalDetailsRoutes = require('./routes/personalDetailsRoutes');
const objectiveRoutes = require('./routes/objectiveRoutes');
const skillRoutes = require('./routes/skillRoutes');
const projectRoutes = require('./routes/projectRoutes');
const experienceRoutes = require('./routes/experienceRoutes');
const hobbyRoutes = require('./routes/hobbyRoutes');
const qualificationRoutes = require('./routes/qualificationRoutes');
const languageRoutes = require('./routes/languageRoutes');
const certificateRoutes = require('./routes/certificateRoutes');
const awardRoutes = require('./routes/awardRoutes');
const organizationRoutes = require('./routes/organizationRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Route'lar
app.use('/api/users', userRoutes);
app.use('/api/personal-details', personalDetailsRoutes);
app.use('/api/objectives', objectiveRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/hobbies', hobbyRoutes);
app.use('/api/qualifications', qualificationRoutes);
app.use('/api/languages', languageRoutes);
app.use('/api/certificates', certificateRoutes);
app.use('/api/awards', awardRoutes);
app.use('/api/organizations', organizationRoutes);

// Hata yakalayıcı
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => console.error(err));