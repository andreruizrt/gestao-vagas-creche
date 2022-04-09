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
@RequestMapping("/pessoas")
public class PessoaController {

    @Autowired
    private PessoaRepository pessoaRepository;

    @GetMapping("/pessoas")
    public ResponseEntity<List<Pessoa>> getAllpessoas() {
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

    @PostMapping
    public ResponseEntity<Pessoa> createPessoa( @RequestBody Pessoa pessoa ) {
        try {
			Pessoa _pessoa = pessoaRepository.save( new Pessoa( pessoa.getNome(), pessoa.getCpf(), pessoa.getRg(), pessoa.getEmail(), pessoa.getTelefone(), pessoa.getUrl()));
			
            return new ResponseEntity<>( _pessoa, HttpStatus.CREATED );
		} catch ( Exception e ) {
			return new ResponseEntity<>( null, HttpStatus.INTERNAL_SERVER_ERROR );
		}
    }

    @PutMapping("/{id}")
    public ResponseEntity<Pessoa> updatePessoa( @PathVariable Long id, @RequestBody Pessoa pessoa ) {

        Optional<Pessoa> pessoaData = pessoaRepository.findById( id );
        
        if (pessoaData.isPresent()) {
            Pessoa _pessoa = pessoaData.get();
            _pessoa.setNome( pessoa.getNome() );
            _pessoa.setTelefone( pessoa.getTelefone() );
            _pessoa.setEmail( pessoa.getEmail() );
            _pessoa.setCpf( pessoa.getCpf() );
            _pessoa.setRg( pessoa.getRg() );
            _pessoa.setUrl( pessoa.getUrl() );
        
            return new ResponseEntity<>(pessoaRepository.save(_pessoa), HttpStatus.OK);
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