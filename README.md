### DocWim

## Prérequis
- Node.js (version 14 ou supérieure)
- npm (installé avec Node.js)
- Docker
- Docker Compose

## Installation

### Option 1 : Installation locale

1. Clonez le dépôt :
    ```bash
    git clone https://github.com/princeGedeon/docwim.git
    cd docwim
    ```

2. Installez les dépendances :
    ```bash
    npm install
    ```

3. Démarrez le serveur de développement :
    ```bash
    npm run dev
    ```

4. Accédez à l'application via votre navigateur web à l'adresse `http://localhost:3000/`.

### Option 2 : Installation avec Docker

1. Clonez le dépôt :
    ```bash
    git clone https://github.com/princeGedeon/docwim.git
    cd docwim
    ```

2. Construisez et démarrez les conteneurs Docker :
    ```bash
    docker-compose up --build
    ```

3. Accédez à l'application via votre navigateur à l'adresse `http://localhost:3000/`.

## Arrêter les conteneurs Docker

Pour arrêter les conteneurs en cours d'exécution :
```bash
docker-compose down
```
