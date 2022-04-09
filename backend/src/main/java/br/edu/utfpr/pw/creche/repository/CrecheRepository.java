package br.edu.utfpr.pw.creche.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.edu.utfpr.pw.creche.model.Creche;

@Repository
public interface CrecheRepository extends JpaRepository<Creche, Long> {
  List<Creche> findByNomeFantasia(String nomeFantasia);
}
