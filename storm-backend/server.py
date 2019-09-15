from flask import Flask, jsonify, request, make_response, abort
from flask_cors import CORS
from flask_socketio import SocketIO, emit

app = Flask(__name__)
socketio = SocketIO(app)
CORS(app)


@app.route('/create', methods=["POST"])
def send_socket():
    # Maybe change to .form

    object_names = ["hack the north", "evil goose", "coding project", "three boys and one girl", "prizes", "amazon echo's"]

    send_object = request.args.get('object_name').lower()

    print(send_object)
    socketio.emit("add_object", {"object_name": send_object})

    obj = object_names.index(send_object)

    if obj + 1 > len(object_names):
        d = {
            "success" : "success"
        }
    else:
        d = {
            "success": object_names[obj + 1]
        }

    return jsonify(d)


if __name__ == '__main__':
    socketio.run(app)
