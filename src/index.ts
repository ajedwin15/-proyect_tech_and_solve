require('dotenv').config()
import app from './app'
import db from './db'

db();

app.listen(app.get('port'), () => {
    console.log('Server listening on por', app.get('port'));
})