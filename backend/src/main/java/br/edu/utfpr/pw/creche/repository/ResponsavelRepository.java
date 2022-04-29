package br.edu.utfpr.pw.creche.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.edu.utfpr.pw.creche.model.Responsavel;
@Repository
public interface ResponsavelRepository extends JpaRepository<Responsavel, Long> {
    Optional<Responsavel> findById(Long id);
    List<Responsavel> findByCpf(String cpf);
}