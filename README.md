# Gestão de Vagas em Creche - Projeto Integrador - UTFPR
O PI é relacionado ao desenvolvimento de um novo sistema para gestão de vagas em creches.

Requistos para entrega do projeto
- [ ] Como **Administrador**, faço tudo no sistema, desejo acessar a página de administração, todas as rotas.
	- [ ] Rotas de administração do sistema.
	- [ ] Rota para cadastro de creches ( CRUD para creches ).
	- [ ] Impedir que outros tipos de usuários acesse rotas de administração do site. 
- [ ] Como **Administrador**, posso cadastrar várias creches.
- [ ] Como **Administrador**, posso gerar relatórios:
	- [ ]  Vagas livres/ocupadas para todas as creches
	- [ ]  listar a quantidade de alunos estudando no seu próprio bairro.
	- [ ]  listar a quantidade de alunos de outros bairros que estão estudando em um determinado bairro.
	- [ ]  listar a quantidade de alunos de outros bairros que estão estudando em um determinado creche.
- [ ] Como **Diretor de creche**, quero acessar as páginas de admistração de creche, cadastrar novas, deletar, e alterar informações.
- [ ] Como **Diretor de creche**, posso registrar a quantidade de vagas disponíveis para a creche. 
- [ ] Como os **Pais de criança**, quero poder alterar meus dados na sistema.
- [ ] Como os **Pais de criança**, quero poder cadastrar e gerenciar a vaga do meu filho.

- CRITÉRIOS DE ACEITE
	- Cada **Tipo de usuário** deve acessar uma página diferente.
	- Cada **creche** deve estar associada a um bairro.
	- O **site** deve permitir o envio da uma cópia do comprovante de endereço, que deve ser exigido.
	- Cabe ao **Administrador** validar o endereço:
		- O **Administrador** poder verificar se o endereço/bairro da criança confere com o do comprovante de residência.
		- O **Administrador** poder verificar se o nome do bairro (ou código do bairro) está digitado corretamente.
	- Os **Pais da criança** só poderão escolher uma creche de um bairro no qual a criança não mora, se não exitirem vagas para creches do mesmo 		bairro
	


# FRONTEND

- O frontend do projeto será desenvolvido na framework Nextjs ao configurar o modelo utilizado foi 
	o que implementa o typescript com o Chackra-ui para criação de componentes
	https://javascript.plainenglish.io/setup-a-next-js-app-with-typescript-and-chakra-ui-f3a6c39dec48

# BACKEND

- A principio como ferramenta será utilizado o Spring com Java.
- Modelo MVC.

# BANCO DE DADOS

- Postgres para persistencia de dados relacionais.
- Mongo para imagens, outros ( NOSQL )

## Diagrama Banco

 - Usuário
 - Responsável
 - Aluno
 - Creche

<img src="/docs/PI_Diagrama_BD.drawio-V01.png" alt="Diagrama banco"/>
diagrama relacional - versão 0.1
