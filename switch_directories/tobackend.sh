#!/bin/bash

APP=/workspace/sympan
BACKEND="$APP/backend"
FRONTEND="$APP/frontend"

backend() {
    cd $BACKEND/venv || exit

    source /workspace/sympan/backend/venv/bin/activate

    cd project || exit

    python3 manage.py runserver & python3 manage.py grpcrunserver --dev && fg
}

frontend() {
  cd $FRONTEND/components/src/app/ || exit

  ng build --base-href . --output-path $BACKEND/venv/project/app/static/ang/ --output-hashing none --watch
}

backend
