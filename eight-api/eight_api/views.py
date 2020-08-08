from flask import Blueprint, request, jsonify, Response

from .models import db, Item

items = Blueprint('users', __name__, url_prefix='/items')


@items.route('/', methods=['GET'])
def items_list():
    items = Item.query.all()
    return jsonify(items)


@items.route('/<id>', methods=['GET'])
def items_detail(id):
    item = Item.query.filter_by(id=id).first()
    return jsonify(item)


@items.route('/', methods=['POST'])
def items_create():
    body = request.json
    item = Item(
        name=body['name'],
        description=body.get('description', None),
        image=body.get('image', None)
    )
    db.session.add(item)
    db.session.commit()

    return Response(status=201)