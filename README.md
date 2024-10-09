# API de Lista de Tarefas

## Configuração

### Instale as Dependências

Para começar, instale as dependências necessárias:

```bash
npm install
```

### Configure as Variáveis de Ambiente

Copie o modelo das variáveis de ambiente:

```bash
cp .env .env.example
```

Certifique-se de editar o arquivo `.env.example` para definir suas variáveis de ambiente reais.

### Inicialize o Prisma

Execute o seguinte comando para configurar o esquema do seu banco de dados:

```bash
npx prisma migrate dev --name init
```

### Inicie o Servidor

Por fim, inicie o servidor com:

```bash
npm run dev
```
