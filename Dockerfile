# 1️⃣ Build da aplicação Angular
FROM node:22-bullseye as builder

# Diretório de trabalho dentro do container
WORKDIR /app

# Copiando package.json e package-lock.json
COPY package*.json ./

# Instalando Angular CLI globalmente (versão 19.2.19)
RUN npm install -g @angular/cli@19.2.19 --force

# Instalando dependências do projeto
RUN npm install --force

# Copiando todo o projeto para dentro do container
COPY . .

# Rodando build de produção
RUN ng build --configuration production

# 2️⃣ Container final com Nginx
FROM nginx:alpine

# Copiando os arquivos do build para o diretório do Nginx
COPY --from=builder /app/dist/escola-ui/browser /usr/share/nginx/html

# Expondo a porta padrão do Nginx
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
