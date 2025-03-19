const newman = require('newman');

newman.run(
  {
    collection: require('./user management project Copy.postman_collection.json'),
    
    iterationCount: 1,
    reporters: 'htmlextra',
    reporter: {
      htmlextra: {
        export: './Reports/report.html', 
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
