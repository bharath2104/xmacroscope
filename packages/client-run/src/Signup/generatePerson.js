import faker from 'faker';
import { sample } from 'lodash';
import * as zipcodes from 'zipcodes';
import personOptions from './personOptions';

const usZipCodes = Object.keys(zipcodes.codes)
  .map(c => parseInt(c, 10))
  .filter(c => (zipcodes.lookup(c) || {}).country === 'US');

function fakeUSLocation() {
  return zipcodes.lookup(sample(usZipCodes)) || fakeUSLocation();
}

// Generate person
const generatePerson = () => {
  const fakeShape = sample(personOptions.shapes);

  const fakeColor = sample(personOptions.colors);

  const fakeGender = sample(personOptions.gender);

  const fakeAgeGroup = sample(personOptions.ageGroups);

  const fakeFavoriteActivity = sample(personOptions.favoriteActivity);

  // Height in inches
  const fakeHeight = faker.random.number(personOptions.height);

  // Location
  const fakeLocation = fakeUSLocation();

  return {
    name: faker.name.findName(),
    icon: fakeShape,
    color: fakeColor,
    gender: fakeGender,
    ageGroup: fakeAgeGroup,
    favoriteActivity: fakeFavoriteActivity,
    height: fakeHeight,
    zipCode: fakeLocation.zip,
    latitude: fakeLocation.latitude,
    longitude: fakeLocation.longitude,
    state: fakeLocation.state,
  };
};

export default generatePerson;
