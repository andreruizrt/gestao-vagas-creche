package br.edu.utfpr.pw.creche.controller;

import java.util.List;
import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.edu.utfpr.pw.creche.model.Responsavel;
import br.edu.utfpr.pw.creche.repository.ResponsavelRepository;

@CrossOrigin(origins = "*")
// @CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class ResponsavelController {

    @Autowired
    private ResponsavelRepository responsavelRepository;

    @GetMapping("/responsaveis")
    public ResponseEntity<List<Responsavel>> getAllResponsaveis() {
        try {

            List<Responsavel> responsaveis = new ArrayList<Responsavel>();
            
            responsavelRepository.findAll().forEach( responsaveis::add );

            if ( responsaveis.isEmpty() ) {
                return new ResponseEntity<>( HttpStatus.NO_CONTENT );
            }

            return new ResponseEntity<>( responsaveis, HttpStatus.OK );
        } catch ( Exception e ) {
            return new ResponseEntity<>( null, HttpStatus.INTERNAL_SERVER_ERROR );
        }
    }

    @GetMapping("/responsaveis/{id}")
    public ResponseEntity<Responsavel> getResponsavelById( @PathVariable("id") Long id ) {
  
      Optional<Responsavel> responsavelData = responsavelRepository.findById( id );
      
      if ( responsavelData.isPresent() ) {
        return new ResponseEntity<>( responsavelData.get(), HttpStatus.OK );
      } else {
        return new ResponseEntity<>( HttpStatus.NOT_FOUND );
      }
    }

    @PostMapping("/responsaveis")
    public ResponseEntity<Responsavel> createResponsavel( @RequestBody Responsavel responsavel ) {
        
        try {
			Responsavel createdResponsavel = responsavelRepository.save(new Responsavel(responsavel));
			
            return new ResponseEntity<>( createdResponsavel, HttpStatus.CREATED );
		} catch ( Exception e ) {
			System.out.println(e.getMessage());
			System.out.println(e.getCause());
			return new ResponseEntity<>( null, HttpStatus.INTERNAL_SERVER_ERROR );
		}
    }


    @PutMapping("/responsaveis/{id}")
    public ResponseEntity<Responsavel> updateResponsavel( @PathVariable Long id, @RequestBody Responsavel responsavel ) {

        Optional<Responsavel> responsavelData = responsavelRepository.findById( id );
        
        if (responsavelData.isPresent()) {
            Responsavel updatedResponsavel = responsavelData.get();
            updatedResponsavel.setNome( responsavel.getNome() );
            updatedResponsavel.setTelefone( responsavel.getTelefone() );
            updatedResponsavel.setEmail( responsavel.getEmail() );
            updatedResponsavel.setCpf( responsavel.getCpf() );
            updatedResponsavel.setRg( responsavel.getRg() );
            updatedResponsavel.setUrl( responsavel.getUrl() );
        
            return new ResponseEntity<>(responsavelRepository.save(updatedResponsavel), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/responsaveis/{id}")
	public ResponseEntity<HttpStatus> deleteResponsavel( @PathVariable("id") Long id ) {
		try {
			responsavelRepository.deleteById( id );
			return new ResponseEntity<>( HttpStatus.NO_CONTENT );
		} catch ( Exception e ) {
			return new ResponseEntity<>( HttpStatus.INTERNAL_SERVER_ERROR );
		}
	}

    @DeleteMapping("/responsaveis")
    public ResponseEntity<HttpStatus> deleteAllResponsaveis() {

        try {
            responsavelRepository.deleteAll();

            return new ResponseEntity<>( HttpStatus.NO_CONTENT );
        } catch ( Exception e ) {
            return new ResponseEntity<>( HttpStatus.INTERNAL_SERVER_ERROR );
        }

    }
    

}