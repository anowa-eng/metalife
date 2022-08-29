param (
    [bool]$Build
)

$App="C:\Users\georg\Downloads\Projects\sympan"
$Backend="$App\backend\"
$Frontend="$App\frontend\"

Set-Location "$Frontend\components\src\app"
if ($Build) {
    ng build --configuration development --base-href . --output-path "$Backend\venv\project\app\static\ang\" --output-hashing none --watch
}