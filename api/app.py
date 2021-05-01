from flask import Flask, request, jsonify
from yaml import load, dump
from datetime import datetime
try:
    from flask_restful import Api, Resource, reqparse
    from yaml import CLoader as Loader, CDumper as Dumper
    from flask_mysqldb import MySQL
    from flask_cors import CORS
except ImportError:
    from yaml import Loader, Dumper

# Init app
app = Flask(__name__)
# allow cross origin requests
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
# Configure db
db = load(open('db.yaml'), Loader=Loader)
app.config['MYSQL_HOST'] = db['mysql_host']
app.config['MYSQL_USER'] = db['mysql_user']
app.config['MYSQL_PASSWORD'] = db['mysql_password']
app.config['MYSQL_DB'] = db['mysql_db']
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)
api = Api(app)

class Users(Resource):
    def get(self):
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM users")
        rv = cur.fetchall()
        cur.close()
        return rv

class User(Resource):
    def get(self, user_id):
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM users where u_id=%d;" % user_id )
        rs = cur.fetchall()
        cur.close()
        return rs

conv_post_args = reqparse.RequestParser()
conv_post_args.add_argument("message", type=str, help="Message is reqired!", required=True)
conv_post_args.add_argument("admin_id", type=int, help="Admin is reqired!", required=True)
conv_post_args.add_argument("user_id", type=int, help="User is reqired!", required=True)
conv_post_args.add_argument("sender", type=str, help="Sender type is reqired!", required=True)

# Check if conversation exists
def convExists(args):
    cur = mysql.connection.cursor()
    u_id = args.user_id
    a_id = args.admin_id
    stmt = "SELECT * FROM conversation WHERE admin_id=%s AND user_id=%s;"
    data = (a_id, u_id)
    cur.execute(stmt, data)
    rs = cur.fetchall()
    if len(rs) > 0:
        return rs[0].get("c_id")
    return False

# Create new message
def createMessage(data):
    cur = mysql.connection.cursor()
    stmt = "INSERT INTO conversation_reply(message, sender, created_at, c_id) VALUES(%s, %s, %s, %s);"
    rs = cur.execute(stmt, data)
    mysql.connection.commit()
    cur.close()
    return rs

class Conversations(Resource):
    def get(self):
        return {"message": "Hey! quagmier"}

    def post(self):
        args = conv_post_args.parse_args()
        cur = mysql.connection.cursor()
        u_id = args.user_id
        a_id = args.admin_id
        sender = args.sender
        message = args.message
        c_time = datetime.now()
        exists = convExists(args)
        if not exists:
            stmt = "INSERT INTO conversation(admin_id, user_id, created_at, status) VALUES(%s, %s, %s, %s);"
            data = (a_id, u_id, c_time, 1)
            rs = cur.execute(stmt, data)
            mysql.connection.commit()
            cur.close()
            if rs > 0:
                conv_id = cur.lastrowid
                data = (message, sender, c_time, conv_id)
                createMessage(data)
        else:
            conv_id = exists
            data = (message, sender, c_time, conv_id)
            createMessage(data)
        
        return { "success": True, "data": args }, 201

# Define api routes
api.add_resource(Users, "/api/v1/users/")
api.add_resource(User, "/api/v1/users/<int:user_id>")
api.add_resource(Conversations, "/api/v1/conversations")

# Define index route
@app.route('/')
def index():
    return "<h1 align='center' style='color: green; margin-top: 100px'>Agromate API</h1>"

# Run server
if __name__ == '__main__':
    app.run(debug=True)