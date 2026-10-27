@echo off
title Web de Haia
cd /d "%~dp0"
echo Arrancando la web de Haia...
echo Se abre en http://localhost:8810
start "" http://localhost:8810
npm run dev
