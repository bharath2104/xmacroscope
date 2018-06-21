import baseResolver from './baseResolver';
import db from '../../db/models/index';

//------------------------------------------------------------------------------
// Queries
//------------------------------------------------------------------------------

//
// A setting for a specific location
//
const settings = baseResolver
  .createResolver((root, args) => db.setting.findOne({
    where: {
      location: args.location,
    },
  }));

const SettingResolver = {
  Query: {
    settings,
  },
};

export default SettingResolver;
