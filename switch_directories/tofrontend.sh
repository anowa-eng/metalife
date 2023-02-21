#!/bin/bash
<<<<<<< HEAD
GITPOD=$1
if [[ "$GITPOD" == 1 ]]; then
  APP=/workspace/sympan
else
  APP="C:/Users/georg/Downloads/Projects/sympan"
fi
=======

APP=/workspace/sympan
>>>>>>> parent of 146aa446 (Add more Bash support)
BACKEND="$APP/backend"
FRONTEND="$APP/frontend"

backend() {
    cd $BACKEND/venv || exit

    source /workspace/sympan/backend/venv/bin/activate

    cd project || exit

    python3 manage.py runserver
}

frontend() {
  cd $FRONTEND/components/src/app/ || exit

  ng build --base-href . --output-path $BACKEND/venv/project/app/static/ang/ --output-hashing none --watch
}

frontend
