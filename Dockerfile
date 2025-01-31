# Étape 1 : Build
FROM node:18 AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers nécessaires
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code source
COPY . .

# Construire l'application
RUN npm run build

# Étape 2 : Serveur Apache
FROM httpd:2.4

# Copier les fichiers build dans le répertoire par défaut d'Apache
COPY --from=build /app/dist /usr/local/apache2/htdocs/

# Exposer le port 80
EXPOSE 8080

# Apache démarre automatiquement, aucune commande supplémentaire n'est nécessaire
