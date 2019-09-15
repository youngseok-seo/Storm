var express = require('express');
var app = express();

var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.post('/create', (req, res) => {
    object_names = ["hack the north", "evil goose", "coding project", "three boys and one girl", "prizes", "amazon echo's"]
    object_name = req.query['object_name']

    var index_current = object_names.indexOf(object_name)

    var resp = {}
    if (index_current + 1 < object_names.length)
    {
        resp['success'] = object_names[index_current + 1]
    }
    else
    {
        resp['success'] = "success"
    }

    io.emit("object_name", object_name)

    console.log(resp)

    res.json(resp)
})


io.on('connection', function(client){
    console.log('Client connected...');
    client.emit("lol", "Hello from server");
})

server.listen(3001);