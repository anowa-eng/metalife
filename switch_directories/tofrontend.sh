#!/bin/bash

if [[ "$GITPOD" == 1 ]]; then
  APP=/workspace/sympan
else
  APP="C:/Users/georg/Downloads/Projects/sympan"
fi
BACKEND="$APP/backend"
FRONTEND="$APP/frontend"

backend() {
    cd $BACKEND/venv || exit

    source /workspace/sympan/backend/venv/bin/activate

    cd project || exit

    python3 ./manage.py runserver & python3 ./manage.py grpcrunserver --dev && fg
}

frontend() {
  cd $FRONTEND/components/src/app/ || exit

  cmd=("build" "--base-href" "." "--output-path" "$BACKEND/venv/project/app/static/ang/" "--output-hashing" "none" "--watch")
  if [[ $GITPOD == 1 ]]; then
    npx @angular/cli "${cmd[@]}"
  else
    ng "${cmd[@]}"
  fi
}

frontend
