1. .env.example in root kopieren en project naam ingeven, lowercase and dashes.
2. in ./web .env project name ingeven. en rest van env variables
3. in ./theme/gulp config file aanpassen met project name
4. in root 'docker-compose up -d'
5. in docker php container -> cd project folder -> composer install
6. in ./theme npm i