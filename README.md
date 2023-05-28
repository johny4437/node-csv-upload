
# Upload de Arquivo CSV com NodeJs e PostgreSQL.

Esta é uma api rest que realiza o upload de um arquivo csv para um banco de dados PostgreSQL construida em NodeJs.

## Description

Para essa aplicação funcionar são necessário alguns passos
## Primeiro passo

```bash
$ npm install
```

## Segundo passo
Para  rodar a aplicação

```bash
$ npm run start

```


## Funcionalidade a ser testada
## Fazer Upload do Arquivo CSV
```http
  POST /upload/file
```
| Parameter   | type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `file`      | `csv` | **required** |





### Observação
Se faz necessário ter o PostgreSQL instalado na sua máquina
e configurar o  arquivo```.env ``` com as suas credênciais do banco de dados PostgreSQL.

### Configuração arquivo env
```
DB_USER=''
DB_PASS=''
DB_NAME=''
DB_HOST=''
```
 

## Apêndice
Nesta aplicação foi ultilizada a ORM ``` sequelize ```

