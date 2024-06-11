@echo off
echo -----------------------------
echo Composing docker container !
docker-compose -f docker-compose.yml up --build
echo Docker container composed!
echo -----------------------------