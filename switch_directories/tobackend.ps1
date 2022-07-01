param (
    [bool]$RunServer
)

$App="C:\Users\georg\sympan"
$Backend="$App\backend\"
$Frontend="$App\frontend\"

Set-Location "$Backend\venv"
.\bin\activate.ps1
Set-Location "project\"
if ($RunServer) {
    python manage.py runserver
}