# :art: RandPic

<p>Gerador de imagens aleatório.</p>

<img alt="Home do sistema" title="#RandPic" src="./.github/home.png" />

---

## 🛠️ Tecnologias

- [ReactJS](https://pt-br.reactjs.org/)
- [Laravel](https://laravel.com/)
- [Docker](https://www.docker.com/)
- [Lorem Picsum API](https://picsum.photos/)

## :rocket: Features

- [X] Cadastro e autenticação de usuários
- [X] Edição de dados do usuário
- [X] Geração de imagens aleatórios
- [X] Favoritar imagem
- [X] Download da imagem
- [X] Histórico de downloads

---

### :computer: Pré-requisitos

Para executar a aplicação é necessario ter instalado na sua maquina os seguintes itens:

- [NodeJS](https://nodejs.org/en/)
- [PHP](https://www.php.net/)
- [Composer](https://getcomposer.org/)
- [Docker](https://www.docker.com/)

### ⚙️ Como rodar a aplicação

```bash
# Clone este repositório
$ git clone <https://github.com/gaoliveira21/randpic.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd randpic

# Crie um arquivo .env seguindo como modelo o arquivo .env.example
$ cp .env.example .env

# Instale as dependências
$ npm install
$ composer install

# Gere a chave para executar a api
$ php artisan key:generate

# Inicie o container
$ docker-compose up -d

# Execute as migrations
$ php artisan migrate

# Execute a API
$ php artisan serve

# Execute o laravelmix em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:8000 - acesse <http://localhost:8000>
```

:warning: endpoints da API disponíveis [aqui!](https://github.com/gaoliveira21/randpic/tree/master/.github)

---

### :construction_worker: Feito por:

<table>
  <tr>
    <td align="center"><a href="https://github.com/gaoliveira21"><img style="border-radius: 50%;" src="./.github/gabriel.jpg" width="100px;" alt=""/><br /><sub><b>Gabriel Oliveira</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/pedrooV2"><img style="border-radius: 50%;" src="./.github/pedro.jpg" width="100px;" alt=""/><br /><sub><b>Pedro Lucas</b></sub></a><br /></td>
  </tr>
</table>

### :memo: License
Esse projeto está sob MIT license. Veja [LICENSE](https://github.com/gaoliveira21/randpic/blob/master/LICENSE) para mais informações.

---

