// load config
const config = require('./md/config');
const dao = require('./md/dao');

// casually log it - it can be done much better with a dedicated logging module
console.log(config);

// insert something
let data = {first: "the first value", second: "the second value"};
dao.insertData(data, (error) => {
    if (error) {
        console.log('error while inserting: ' + error);
    }
    else {
        // insertion ok, continue
        console.log('insert successful');
        // select all the records and display
        dao.selectData((error, results) => {
            if (error) {
                console.log('error selecting info: ' + error);
            }
            else {
                console.log("successful selecting info");
                console.log("results: " + JSON.stringify(results));
            }
        })
    }
});
