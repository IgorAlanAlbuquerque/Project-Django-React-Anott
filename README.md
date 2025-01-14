# Project-Django-React-Anott

## Explicação do sistema

Implementação de aplicação web de um sistema de notas. O usuario pode se cadastrar, autentificar, criar notas para si e deleta-las. Um usuário não pode acessar notas de outro usuário.

## Backend

O sistema foi feito usando Django REST framework para o backend junto de postgresql para o banco de dados. Para a autenficiação nas rotas usei jwt.

## Frontend

O frontend foi feito usando react com vite

## Deploy

Fiz o deploy com nível gratuito do choreo. Primeiro criei o banco de dados postgresql remoto então coloquei as credenciais no arquivo ".env" do backend.

Para o backend eu criei a pasta ".choreo" que vai conter o codigo ansible para criação dos endpoints da aplicação. O arquivo Procfile tem o comando a ser executado para iniciar a aplicação web. Fiz o deploy do backend como um serviço rest.

Para o frontend fiz o deploy como uma aplicação web.