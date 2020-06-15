/* eslint-disable global-require */

const images = {
  Clear: require('../assets/img/clear.png'),
  Hail: require('../assets/img/hail.png'),
  'Heavy Cloud': require('../assets/img/heavy-cloud.png'),
  'Light Cloud': require('../assets/img/light-cloud.png'),
  'Heavy Rain': require('../assets/img/heavy-rain.png'),
  'Light Rain': require('../assets/img/light-rain.png'),
  Showers: require('../assets/img/showers.png'),
  Sleet: require('../assets/img/sleet.png'),
  Snow: require('../assets/img/snow.png'),
  Thunder: require('../assets/img/thunder.png'),
};

export default weather => images[weather];
