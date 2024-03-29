    const app = require('./server');
        https = require('https'),
        fs = require('fs');

    let options = {
      ca: [fs.readFileSync('./ssl/ebseiten_com/ebseiten_com.ca-bundle')],
      cert: fs.readFileSync('./ssl/ebseiten_com/ebseiten_com.crt'),
      key: fs.readFileSync('./ssl/ebseiten_com/ebseiten_com.key')
    }

var httpsServer = https.createServer(options, app);

    
module.exports = httpsServer;