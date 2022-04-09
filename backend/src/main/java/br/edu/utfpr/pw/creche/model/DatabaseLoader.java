package br.edu.utfpr.pw.creche.model;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import br.edu.utfpr.pw.creche.controller.PessoaController;
import br.edu.utfpr.pw.creche.controller.UsuarioController;

@Component
public class DatabaseLoader implements CommandLineRunner { 

	private final UsuarioController usuarioController;
	private final PessoaController 	pessoaController;
	
	final Usuario usuarioDefault = new Usuario(
		"andre",
		"123", 
		"andre@email.com.br",
		true
	);

	final Pessoa pessoaDefault = new Pessoa(
		"andre",
		"1199999999",
		"andre@email.com",
		"000000000",
		"123456789",
		"https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjNy7KHhMThAhWGzYUKHUg2D_EQjRx6BAgBEAU&url=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dfoto%2Busuario%26tbm%3Disch&psig=AOvVaw2_X_Z_X_X_X_X_X_X_X_X&ust=1560795909867000"
	);

	@Autowired
	public DatabaseLoader(UsuarioController usuarioController, PessoaController pessoaController) {
		this.usuarioController = usuarioController;
		this.pessoaController = pessoaController;
	}

	@Override
	public void run(String... strings) throws Exception {
		// ResponseEntity<List<Usuario>> usuarioData = this.usuarioController.getAllUsuarios(null);
		// ResponseEntity<List<Pessoa>> pessoaData = this.pessoaController.getAllPessoas();
		
		// final Boolean usuarioExists = usuarioData.getBody().stream().anyMatch(u -> u.getUsername().equals(this.usuarioDefault.getUsername()));
		// final Boolean pessoaExists = pessoaData.getBody().stream().anyMatch(u -> u.getCpf().equals(this.pessoaDefault.getCpf()));

		this.usuarioController.createUsuario(usuarioDefault);
		// this.pessoaController.createPessoa(pessoaDefault);

		// if (!usuarioExists) {
		// }

		// if (!pessoaExists) {
		// }

	}
}
