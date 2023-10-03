# app/__init__.py
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config import Config  # Update this line to import from 'config'
from flask_migrate import Migrate

app = Flask(__name__)
app.config.from_object(Config)

db = SQLAlchemy(app)
migrate = Migrate(app, db)


from app import routes, models
