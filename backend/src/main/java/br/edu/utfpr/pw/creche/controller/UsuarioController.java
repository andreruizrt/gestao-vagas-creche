package br.edu.utfpr.pw.creche.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.edu.utfpr.pw.creche.model.Usuario;
import br.edu.utfpr.pw.creche.repository.UsuarioRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class UsuarioController {

  @Autowired
  private UsuarioRepository usuarioRepository;

  @GetMapping("/usuarios")
  public ResponseEntity<List<Usuario>> getAllUsuarios() {
    try {

      List<Usuario> usuarios = new ArrayList<Usuario>();
      usuarioRepository.findAll().forEach(usuarios::add);

      if (usuarios.isEmpty()) {
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
      }

      return new ResponseEntity<>(usuarios, HttpStatus.OK);

    } catch (Exception e) {

      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);

    }
  }

  @GetMapping("/usuarios/{id}")
  public ResponseEntity<Usuario> getUsuarioById(@PathVariable("id") Long id) {

    Optional<Usuario> usuarioData = usuarioRepository.findById(id);

    if (usuarioData.isPresent()) {
      return new ResponseEntity<>(usuarioData.get(), HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  @PostMapping("/usuarios")
  public ResponseEntity<Usuario> createUsuario(@RequestBody Usuario usuario) {
    try {
      Usuario _usuario = usuarioRepository
          .save(new Usuario(usuario.getUsername(), usuario.getSenha(), usuario.getEmail(), false));
      return new ResponseEntity<>(_usuario, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }

  }

  @PutMapping("/usuarios/{id}")
  public ResponseEntity<Usuario> updateUsuario(@PathVariable("id") Long id, @RequestBody Usuario usuario) {

    Optional<Usuario> usuarioData = usuarioRepository.findById(id);

    if (usuarioData.isPresent()) {
      Usuario _usuario = usuarioData.get();
      _usuario.setUsername(usuario.getUsername());
      _usuario.setSenha(usuario.getSenha());
      _usuario.setEmail(usuario.getEmail());
      _usuario.setAdmin(usuario.isAdmin());

      return new ResponseEntity<>(usuarioRepository.save(_usuario), HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

  }

  @DeleteMapping("/usuarios/{id}")
  public ResponseEntity<HttpStatus> deleteUsuario(@PathVariable("id") Long id) {

    try {
      usuarioRepository.deleteById(id);

      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

  }

  @DeleteMapping("/usuarios")
  public ResponseEntity<HttpStatus> deleteAllUsuarios() {

    try {
      usuarioRepository.deleteAll();

      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

  }
}