from flask import Flask



def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'

    from .models import db
    db.init_app(app)

    from .views import items
    app.register_blueprint(items)
    return app

