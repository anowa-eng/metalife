#!/bin/bash
APP=/workspace/metalife
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
    cd $FRONTEND || exit
    
    cd venv || exit
    source bin/activate

    cd components/src/app/ || exit
    ng build --base-href . --output-url $BACKEND/project/app/static/ang/ --output-hashing none --watch
}


