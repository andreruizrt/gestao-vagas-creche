# MAPA API GESTÃO CRECHE

###### SQL ######

```
usuario
    idCliente int8 AUTO
    username varchar NOT NULL
    password varchar NOT NULL
    email varchar NOT NULL
    tipo bpchar DEFAULT 'C' (
        'G' GERENTE,
        'A' ADMINISTRADOR,
        'C' COMUM
    )
```

# ENDPOINTS

## GET ##

PEGAR TODOS OS USUÁRIOS

/api/users/

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
/api/users/1

```
{
    "id": 1,
    "username": "teste",
    "email": "teste@email.com",
    "tipo": "ADMINISTRADOR"
}
```


## POST ##

* /api/login *

###### LOGIN

-- REQ

```

Body {
    "username": "teste1",
    "password": "teste1"
}

```

-- RES

```

{
    "id": 1,
    "username": "teste1",
    "token": "DKWQKDEKFJJSCIAKLND#I#!EESKLDAJS",
    "tipo": "ADMINISTRADOR"
}

```
