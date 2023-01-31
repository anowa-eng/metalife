#!/bin/bash
APP=/workspace/sympan
BACKEND=$APP/backend
FRONTEND=$APP/frontend

backend() {
    cd $BACKEND || exit

    cd venv || exit
    source bin/activate

    cd project || exit

    if [[ $1 == 'runserver' ]]; then
        python3 manage.py runserver
    fi
}

frontend() {
  cd $FRONTEND/components/src/app/ || exit

  if [[ $1 == 'build' ]]; then
      ng build --base-href . --output-path $BACKEND/venv/project/app/static/ang/ --output-hashing none --watch
  fi
}

if [[ $1 == 'frontend' ]]; then
    frontend "$2"
elif [[ $1 == 'backend' ]]; then
    backend "$2"
fi
