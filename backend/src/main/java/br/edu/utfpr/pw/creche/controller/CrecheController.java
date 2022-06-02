package br.edu.utfpr.pw.creche.controller;

import java.util.List;
import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.edu.utfpr.pw.creche.model.Creche;
import br.edu.utfpr.pw.creche.repository.CrecheRepository;

// @CrossOrigin(origins = "http://localhost:3000")
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class CrecheController {

    @Autowired
    private CrecheRepository crecheRepository;

    @GetMapping("/creche")
    public ResponseEntity<List<Creche>> getAllCreches(@RequestParam(required = false) String nomeFantasia) {
        try {

            List<Creche> creches = new ArrayList<Creche>();
            
            crecheRepository.findAll().forEach( creches::add );

            if ( creches.isEmpty() ) {
                return new ResponseEntity<>( HttpStatus.NO_CONTENT );
            }

            return new ResponseEntity<>( creches, HttpStatus.OK );
        } catch ( Exception e ) {
            return new ResponseEntity<>( null, HttpStatus.INTERNAL_SERVER_ERROR );
        }
    }

    @GetMapping("/creche/{id}")
    public ResponseEntity<Creche> getCrecheById( @PathVariable("id") Long id ) {
  
      Optional<Creche> crecheData = crecheRepository.findById( id );
      
      if ( crecheData.isPresent() ) {
        return new ResponseEntity<>( crecheData.get(), HttpStatus.OK );
      } else {
        return new ResponseEntity<>( HttpStatus.NOT_FOUND );
      }
    }

    @PostMapping("/creche")
    public ResponseEntity<Creche> createCreche( @RequestBody Creche creche ) {
        try {
			Creche createdCreche = crecheRepository.save(new Creche(creche));
			
            return new ResponseEntity<>( createdCreche, HttpStatus.CREATED );
		} catch ( Exception e ) {
			return new ResponseEntity<>( null, HttpStatus.INTERNAL_SERVER_ERROR );
		}
    }

    @PutMapping("/creche/{id}")
    public ResponseEntity<Creche> updateCreche( @PathVariable Long id, @RequestBody Creche creche ) {

        Optional<Creche> crecheData = crecheRepository.findById( id );
        
        if (crecheData.isPresent()) {
            Creche updatedCreche = crecheData.get();
            
        
            return new ResponseEntity<>(crecheRepository.save(updatedCreche), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/creche/{id}")
	public ResponseEntity<HttpStatus> deleteCreche( @PathVariable("id") Long id ) {
		try {
			crecheRepository.deleteById( id );
			return new ResponseEntity<>( HttpStatus.NO_CONTENT );
		} catch ( Exception e ) {
			return new ResponseEntity<>( HttpStatus.INTERNAL_SERVER_ERROR );
		}
	}

    @DeleteMapping("/creche")
    public ResponseEntity<HttpStatus> deleteAllCreches() {

        try {
            crecheRepository.deleteAll();

            return new ResponseEntity<>( HttpStatus.NO_CONTENT );
        } catch ( Exception e ) {
            return new ResponseEntity<>( HttpStatus.INTERNAL_SERVER_ERROR );
        }

    }

}