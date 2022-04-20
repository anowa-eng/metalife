#!/bin/bash

backend() {
    cd /workspace/metalife/backend/ || exit

    cd venv || exit
    source bin/activate

    cd project || exit
}

frontend() {
    cd /workspace/metalife/frontend/ || exit
    
    cd venv || exit
    source bin/activate
}


