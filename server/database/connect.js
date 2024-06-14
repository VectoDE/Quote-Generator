const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to Database.');
    } catch (error) {
        console.error('Error connecting to Database:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
