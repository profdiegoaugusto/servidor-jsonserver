# JSON Server Project

Este projeto utiliza o [json-server](https://github.com/typicode/json-server) para fornecer uma API REST falsa com um conjunto de dados JSON fictícios.

# Pré-requisitos

- [Node.js](https://nodejs.org/) instalado em sua máquina

## Passo a passo para configuração e execução do projeto

### 1. Baixar e instalar o Node.js

Se você ainda não tem o Node.js instalado, siga as instruções abaixo:

1. **Acesse o site oficial do Node.js**

   - Abra seu navegador e vá para [https://nodejs.org/](https://nodejs.org/).

2. **Escolha a versão do Node.js**

   - Na página inicial, você verá duas versões disponíveis para download: "LTS" (Long Term Support) e "Current". Para a maioria dos usuários, a versão "LTS" é recomendada, pois é mais estável.
   - Clique no botão verde correspondente à versão "LTS" para iniciar o download.

3. **Baixe o instalador**

   - O download do instalador adequado para o seu sistema operacional (Windows, macOS, ou Linux) começará automaticamente. Se não, você pode selecionar manualmente o instalador apropriado na seção "Downloads" do site.

4. **Execute o instalador**

   - Após o download, localize o arquivo do instalador em sua pasta de downloads e clique duas vezes para executá-lo.

5. **Siga as instruções do instalador**

   - **Windows**:
     - Clique em "Next" na janela de boas-vindas.
     - Aceite o contrato de licença e clique em "Next".
     - Escolha o diretório de instalação (ou deixe o padrão) e clique em "Next".
     - Na tela "Custom Setup", você pode deixar todas as opções selecionadas por padrão e clicar em "Next".
     - Clique em "Install" para iniciar a instalação.
     - Após a conclusão, clique em "Finish".
   - **macOS**:
     - Arraste o ícone do Node.js para a pasta "Applications".
   - **Linux**:
     - Para distribuições baseadas em Debian (como Ubuntu), use os seguintes comandos no terminal:
       ```sh
       sudo apt update
       sudo apt install nodejs npm
       ```
     - Para outras distribuições, consulte a documentação oficial no site do Node.js para instruções específicas.

6. **Verifique a instalação**
   - Abra o terminal (ou Prompt de Comando no Windows) e digite os seguintes comandos para verificar se o Node.js e o npm foram instalados corretamente:
     ```sh
     node -v
     npm -v
     ```
   - Você deve ver os números das versões instaladas para ambos os comandos.

### 2. Clonar o repositório

Abra o terminal e execute o seguinte comando para clonar o repositório:

```sh
git clone https://github.com/profdiegoaugusto/servidor-jsonserver.git

```

### 3. Navegar até o diretório do projeto

```sh
cd servidor-jsonserver
```

### 4. Instalar o json-server

Com o Node.js instalado, você pode usar o npm (Node Package Manager) para instalar o json-server globalmente:

```sh
npm install json-server@0.17.4
```

### 5. Executar o json-server

Dentro do diretório do projeto, execute o seguinte comando para iniciar o servidor:

```sh
npx json-server data/db.json
```

O servidor será iniciado e estará disponível em http://localhost:3000.

# Endpoints

O json-server cria automaticamente endpoints baseados no conteúdo do arquivo db.json. No caso deste projeto, você pode acessar os seguintes endpoints:

| Método | Endpoint       | Descrição                                |
| ------ | -------------- | ---------------------------------------- |
| GET    | /produtos      | Retorna todos os produtos                |
| GET    | /produtos/{id} | Retorna um produto específico pelo `id`  |
| POST   | /produtos      | Adiciona um novo produto                 |
| PUT    | /produtos/{id} | Atualiza um produto específico pelo `id` |
| DELETE | /produtos/{id} | Remove um produto específico pelo `id`   |

## Estrutura do Arquivo JSON

O arquivo db.json contém os seguintes dados fictícios:

```json
{
  "produtos": [
    {
      "id": 1,
      "nome": "Smartphone X",
      "categoria": "Eletrônicos",
      "pesoKgs": 0.18,
      "preco": 1200.00,
      "precoMinimoVenda": 1100.00,
      "garantiaMeses": 24,
      "descricao": "Smartphone de última geração com tela de 6.5 polegadas.",
      "estaDisponivel": true,
      "criadoEm": "2023-06-01T10:00:00",
      "atualizadoEm": "2024-06-01T10:00:00"
    },
    ...
  ]
}
```

# Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
