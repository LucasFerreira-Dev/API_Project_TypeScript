# API_Project_TypeScript

### **Instale as Dependências**

```bash
npm install
```

### **Configure o Banco de Dados**

#### Inicie o PostgreSQL com Docker:

```bash
docker-compose up -d
```

Isso irá:

- Criar um container PostgreSQL na porta **5433**
- Configurar usuário: `admin`, senha: `admin`
- Criar banco de dados: `banco`

#### Verifique se o container está rodando:

```bash
docker ps
```

###  **Execute as Migrações do Banco**

```bash
# Gerar o Prisma Client
npx prisma generate

# Executar migrações
npx prisma migrate dev
```

###  **Inicie a Aplicação**

```bash
npm run dev

# Build para produção
npm run build
npm start
```

A aplicação estará disponível em: **http://localhost:3333**

## 🧪 Testando a API

### **1. Usando Swagger (Recomendado)**

1. Acesse: http://localhost:3333/api-docs
2. Clique em qualquer endpoint
3. Clique em "Try it out"
4. Preencha os dados e clique em "Execute"
