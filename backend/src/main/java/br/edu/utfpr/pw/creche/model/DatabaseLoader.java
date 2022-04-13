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

	@Autowired
	public DatabaseLoader(UsuarioController usuarioController, PessoaController pessoaController) {
		this.usuarioController = usuarioController;
		this.pessoaController = pessoaController;
	}

	@Override
	public void run(String... strings) throws Exception {}
}
