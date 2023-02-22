#!/bin/bash
GITPOD=$1
if [[ "$GITPOD" == 1 ]]; then
  printf "\n\n%sGitpod setting enabled.%s\n\n" "$(tput bold)" "$(tput sgr0)"
  APP=/workspace/sympan
else
  APP="C:/Users/georg/Downloads/Projects/sympan"
fi
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

  cmd=("build" "--base-href" "." "--output-path" "$BACKEND/venv/project/app/static/ang/" "--output-hashing" "none" "--watch")
  if [[ $GITPOD == 0 ]]; then
    ng "${cmd[@]}"
  else
    npx @angular/cli "${cmd[@]}"
  fi
}

backend & frontend && fg