module.exports = {
  preset: 'react-native',
  "transformIgnorePatterns": [
    "node_modules/(?!(jest-)?@react-native|react-native|react-navigation|@react-navigation|react-native-flash-message/*)"
  ],
  // "setupFilesAfterEnv": ["@testing-library/jest-native/extend-expect"]
};
