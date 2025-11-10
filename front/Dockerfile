# Usa imagem do Node baseada em Alpine (mais leve)
FROM node:20-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia somente os arquivos de dependências para criar cache da instalação
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia todo restante do projeto para dentro do container
COPY . .

# Expõe a porta 5173 (porta padrão do Vite)
EXPOSE 5173

# Inicia o front em modo desenvolvimento e habilita acesso externo ao Vite
CMD ["npm", "run", "dev", "--", "--host"]