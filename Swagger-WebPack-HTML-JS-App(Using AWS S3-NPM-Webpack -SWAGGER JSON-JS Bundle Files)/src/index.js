const SwaggerUI = require('swagger-ui');
require('swagger-ui/dist/swagger-ui.css');
//const spec = require('./swagger-config.yaml');
const spec = require('./swagger-config.json');
SwaggerUI({
    spec,
    dom_id: '#swagger',
});
