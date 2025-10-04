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