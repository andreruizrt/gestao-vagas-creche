package br.edu.utfpr.pw.creche.controller;

import java.util.List;
import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.edu.utfpr.pw.creche.model.Pessoa;
import br.edu.utfpr.pw.creche.repository.PessoaRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class PessoaController {

    @Autowired
    private PessoaRepository pessoaRepository;

    @GetMapping("/pessoas")
    public ResponseEntity<List<Pessoa>> getAllPessoas() {
        try {

            List<Pessoa> pessoas = new ArrayList<Pessoa>();
            
            pessoaRepository.findAll().forEach( pessoas::add );

            if ( pessoas.isEmpty() ) {
                return new ResponseEntity<>( HttpStatus.NO_CONTENT );
            }

            return new ResponseEntity<>( pessoas, HttpStatus.OK );
        } catch ( Exception e ) {
            return new ResponseEntity<>( null, HttpStatus.INTERNAL_SERVER_ERROR );
        }
    }

    @GetMapping("/pessoas/{id}")
    public ResponseEntity<Pessoa> getPessoaById( @PathVariable("id") Long id ) {
  
      Optional<Pessoa> pessoaData = pessoaRepository.findById( id );
      
      if ( pessoaData.isPresent() ) {
        return new ResponseEntity<>( pessoaData.get(), HttpStatus.OK );
      } else {
        return new ResponseEntity<>( HttpStatus.NOT_FOUND );
      }
    }

    @PostMapping("/pessoas")
    public ResponseEntity<Pessoa> createPessoa( @RequestBody Pessoa pessoa ) {
        try {
			Pessoa createdPessoa = pessoaRepository.save( 
                new Pessoa( 
                    pessoa.getNome(),
                    pessoa.getCpf(),
                    pessoa.getRg(),
                    pessoa.getEmail(),
                    pessoa.getTelefone(),
                    pessoa.getUrl()
                )
            );
			
            return new ResponseEntity<>( createdPessoa, HttpStatus.CREATED );
		} catch ( Exception e ) {
			return new ResponseEntity<>( null, HttpStatus.INTERNAL_SERVER_ERROR );
		}
    }

    @PutMapping("/pessoas/{id}")
    public ResponseEntity<Pessoa> updatePessoa( @PathVariable Long id, @RequestBody Pessoa pessoa ) {

        Optional<Pessoa> pessoaData = pessoaRepository.findById( id );
        
        if (pessoaData.isPresent()) {
            Pessoa updatedPessoa = pessoaData.get();
            updatedPessoa.setNome( pessoa.getNome() );
            updatedPessoa.setTelefone( pessoa.getTelefone() );
            updatedPessoa.setEmail( pessoa.getEmail() );
            updatedPessoa.setCpf( pessoa.getCpf() );
            updatedPessoa.setRg( pessoa.getRg() );
            updatedPessoa.setUrl( pessoa.getUrl() );
        
            return new ResponseEntity<>(pessoaRepository.save(updatedPessoa), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/pessoas/{id}")
	public ResponseEntity<HttpStatus> deletePessoa( @PathVariable("id") Long id ) {
		try {
			pessoaRepository.deleteById( id );
			return new ResponseEntity<>( HttpStatus.NO_CONTENT );
		} catch ( Exception e ) {
			return new ResponseEntity<>( HttpStatus.INTERNAL_SERVER_ERROR );
		}
	}

    @DeleteMapping("/pessoas")
    public ResponseEntity<HttpStatus> deleteAllPessoas() {

        try {
            pessoaRepository.deleteAll();

            return new ResponseEntity<>( HttpStatus.NO_CONTENT );
        } catch ( Exception e ) {
            return new ResponseEntity<>( HttpStatus.INTERNAL_SERVER_ERROR );
        }

    }

}