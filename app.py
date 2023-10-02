import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Configure the database URI
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('SQLALCHEMY_DATABASE_URI')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
#postgres://superheroes_f7bc_user:g8TAkWjkt0tlfMDynGwaZchWFd4rgovR@dpg-ckd6j3ect0pc73dotdd0-a.oregon-postgres.render.com/superheroes_f7bc

# Import your models here
from app.models import *

# Import your routes here
from app.routes import *

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True, port=5002)
