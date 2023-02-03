#!/bin/bash
GITPOD=$1
echo $GITPOD
if [[ "$GITPOD" == 1 ]]; then
  APP=/workspace/sympan
else
  APP="C:/Users/georg/Downloads/Projects/sympan"
fin
BACKEND="$APP/backend"
FRONTEND="$APP/frontend"

backend() {
    cd $BACKEND/venv || exit

    source "$BACKEND/venv/bin/activate"

    cd project || exit

    python3 manage.py runserver & python3 manage.py grpcrunserver --dev && fg
}

frontend() {
  cd $FRONTEND/components/src/app/ || exit

  ng build --base-href . --output-path $BACKEND/venv/project/app/static/ang/ --output-hashing none --watch
}

backend & frontend && fg
