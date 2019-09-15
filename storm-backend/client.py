import socketio

sio = socketio.Client()
sio.connect('http://localhost:5000')

@sio.on('add_object')
def on_connect(message):
    print(message)

23