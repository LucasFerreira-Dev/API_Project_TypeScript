FROM node:20-alpine

# define diretório base dentro do container
WORKDIR /app

# copia apenas os package primeiro (pra cache ficar melhor)
COPY package*.json ./

# instala dependências
RUN npm install

# copia o restante do projeto
COPY . .

# gera os binários do prisma pra o ambiente linux (necessário pra não dar erro de engine)
RUN npx prisma generate

# compila o typescript
RUN npm run build

# expõe porta do servidor
EXPOSE 3000

# comando de inicialização
CMD ["npm", "start"]