# MAPA API GESTÃO CRECHE

###### SQL ######

```
usuario
    id int8 AUTO
    username varchar NOT NULL
    password varchar NOT NULL
    email varchar NOT NULL
    tipo bpchar DEFAULT 'C' (
        'G' GERENTE,
        'A' ADMINISTRADOR,
        'C' COMUM
    )

responsavel
    id_responsavel int8 AUTO
    nome_completo varchar NOT NULL
    telefone varchar NOT NULL
    cpf varchar NOT NULL
    rg varchar NOT NULL
    url_foto varchar NOT NULL
    id_usuario FK usuario.id NOT NULL
```

# ENDPOINTS

## GET ##

PEGAR TODOS OS USUÁRIOS

> /api/users/

```
[{
    "id": 1,
    "username": "teste",
    "email": "teste@email.com",
    "tipo": "ADMINISTRADOR"
},
{
    "id": 2,
    "username": "teste2",
    "email": "teste2@email.com",
    "tipo": "GERENTE"
},
{
    "id": 3,
    "username": "teste3",
    "email": "teste3@email.com",
    "tipo": "COMUM"
}]
```
> /api/users/1

```
{
    "id": 1,
    "username": "teste",
    "email": "teste@email.com",
    "tipo": "ADMINISTRADOR"
}
```


## POST ##
###### LOGIN

> /api/login

```
REQUEST

Body {
    "username": "teste1",
    "password": "teste1"
}

```


```
RESPONSE

# modelo 1

{
    "id": 1,
    "username": "teste1",
    "token": "DKWQKDEKFJJSCIAKLND#I#!EESKLDAJS",
    "tipo": "ADMINISTRADOR"
}

# modelo 2

{
  "expires": "2055-12-07T09:56:01.450Z",
  "user": {
        "email": "sample@example.com",
        "image": "https://avatars2.githubusercontent.com/u/45228014?v=4",
        "name": "Ejiro Asiuwhu",
        "tipo": "ADMINISTRADOR"
    }
}

```
