import App from './app.js';
import { conectDB } from './db.js';
conectDB();

App.listen(3000);
console.log('Server on port ',3000)