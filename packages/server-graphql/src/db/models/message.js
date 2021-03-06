//
// Messages
//
// Model for storing system messages
//
import Sequelize from 'sequelize';
import sequelize from '../config/sequelize';

const Message = sequelize.define('Message', {
  type: { type: Sequelize.STRING },
  timestamp: { type: Sequelize.DATE },
}, {
  paranoid: true,
});

export default Message;
