const newman = require('newman');

newman.run(
  {
    collection: require('./user management project Copy.postman_collection.json'), // Pointing to local JSON file
    //environment: require('./user management project Copy.postman_collection.json'), // Pointing to local env file
    iterationCount: 1,
    reporters: 'htmlextra',
    reporter: {
      htmlextra: {
        export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
      },
    },
  },
  function (err) {
    if (err) {
      throw err;
    }
    console.log('Collection run complete!');
  }
);
