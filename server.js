import http from 'http'
import app from './app.js' 
//  this server is reserved to front end dashbord

const server = http.createServer(app)

console.log('hello');
const PortServer = process.env.PORT || 5000;

app.set('port', )
server.listen(PortServer, (err)=>{
    if(!err){
        console.log('Listen to port:', PortServer);
    }
    else {
        console.log('Dont listen to any port');
    }
})
