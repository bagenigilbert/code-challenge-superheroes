from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Configure the database URI
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///superheroes.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Import your models here
from app.models import *

# Import your routes here
from app.routes import *

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True, port=5003)
