// const { Schema, model, Types } = require('mongoose');
// const schema = new Schema({
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     links: [{ type: Types.ObjectID, ref: 'Link' }]
// });
// module.exports = model('User', schema);
const Sequelize = require('sequelize');
const schema = {
    email: {
        type: Sequelize.STRING,
        unique: true,
        required: true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false
    }
};
module.exports = ('User', schema);