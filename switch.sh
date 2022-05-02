#!/bin/bash
APP=~/Downloads/metalife-main
BACKEND=$APP/backend
FRONTEND=$APP/frontend

backend() {
    cd $BACKEND || exit

    cd venv || exit
    source bin/activate

    cd project || exit

    while getopts 'r' opt; do
        if [[ $opt == 'r' ]]; then
            python3 manage.py runserver
        fi
    done
}

frontend() {
  cd $FRONTEND/components/src/app/ || exit
  if [[ $0 == 'build' ]]; then
    ng build --base-href . --output-path $BACKEND/venv/project/app/static/ang/ --output-hashing none --watch
  fi
}
