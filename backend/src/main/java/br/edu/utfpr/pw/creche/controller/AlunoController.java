package br.edu.utfpr.pw.creche.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.utfpr.pw.creche.model.Aluno;
import br.edu.utfpr.pw.creche.repository.AlunoRepository;

@RestController
@RequestMapping("/api")
public class AlunoController {
	
    @Autowired
    private AlunoRepository alunoRepository;
    
    @GetMapping("/alunos")
    public ResponseEntity<List<Aluno>> getAllAlunos() {
        try {

            List<Aluno> alunos = new ArrayList<Aluno>();
            
            alunoRepository.findAll().forEach( alunos::add );

            if ( alunos.isEmpty() ) {
                return new ResponseEntity<>( HttpStatus.NO_CONTENT );
            }

            return new ResponseEntity<>( alunos, HttpStatus.OK );
        } catch ( Exception e ) {
            return new ResponseEntity<>( null, HttpStatus.INTERNAL_SERVER_ERROR );
        }
    }
    
    @GetMapping("/alunos/{id}")
    public ResponseEntity<Aluno> getAlunoById( @PathVariable("id") Long id ) {
  
      Optional<Aluno> alunoData = alunoRepository.findById( id );
      
      if ( alunoData.isPresent() ) {
        return new ResponseEntity<>( alunoData.get(), HttpStatus.OK );
      } else {
        return new ResponseEntity<>( HttpStatus.NOT_FOUND );
      }
    }

    @PostMapping("/alunos")
    public ResponseEntity<Aluno> createAluno( @RequestBody Aluno aluno ) {
        try {
        	System.out.println(aluno);
        	Aluno createdAluno = alunoRepository.save( 
                new Aluno(aluno.getMatricula(), aluno.getDataMatricula(),
                		  aluno.getNome(), aluno.getTelefone(), aluno.getEmail(),
                		  aluno.getCpf(), aluno.getRg(), aluno.getUrlFoto())
            );
			
            return new ResponseEntity<>( createdAluno, HttpStatus.CREATED );
		} catch ( Exception e ) {
			return new ResponseEntity<>( null, HttpStatus.INTERNAL_SERVER_ERROR );
		}
    }


    @PutMapping("/alunos/{id}")
    public ResponseEntity<Aluno> updateAluno( @PathVariable Long id, @RequestBody Aluno aluno ) {

        Optional<Aluno> alunoData = alunoRepository.findById( id );
        
        if (alunoData.isPresent()) {
        	Aluno updatedAluno = alunoData.get();
        	updatedAluno.setNome( aluno.getNome() );
        	updatedAluno.setTelefone( aluno.getTelefone() );
        	updatedAluno.setEmail( aluno.getEmail() );
            updatedAluno.setCpf( aluno.getCpf() );
            updatedAluno.setRg( aluno.getRg() );
            updatedAluno.setUrl( aluno.getUrl() );
        
            return new ResponseEntity<>(alunoRepository.save(updatedAluno), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/alunos/{id}")
	public ResponseEntity<HttpStatus> deleteAluno( @PathVariable("id") Long id ) {
		try {
			alunoRepository.deleteById( id );
			return new ResponseEntity<>( HttpStatus.NO_CONTENT );
		} catch ( Exception e ) {
			return new ResponseEntity<>( HttpStatus.INTERNAL_SERVER_ERROR );
		}
	}

    @DeleteMapping("/alunos")
    public ResponseEntity<HttpStatus> deleteAllAlunos() {

        try {
            alunoRepository.deleteAll();

            return new ResponseEntity<>( HttpStatus.NO_CONTENT );
        } catch ( Exception e ) {
            return new ResponseEntity<>( HttpStatus.INTERNAL_SERVER_ERROR );
        }

    }
    
}
