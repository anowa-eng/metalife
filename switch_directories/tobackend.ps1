param (
    [bool]$RunServer
)

$App="C:\Users\georg\Downloads\Projects\sympan"
$Backend="$App\backend\"
$Frontend="$App\frontend\"

Set-Location "$Backend\venv"
.\bin\activate.ps1
Set-Location ".\project\"
if ($RunServer) {
    python3 manage.py runserver
    python3 manage.py grpcrunserver --dev
    Get-Job | Select-Object -Last 1 | Wait-Job
    Get-Job | Select-Object -Last 1 | Resume-Job
}