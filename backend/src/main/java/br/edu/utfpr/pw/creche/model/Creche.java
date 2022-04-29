package br.edu.utfpr.pw.creche.model;

import java.util.Objects;
import javax.persistence.*;

@Entity
@Table(name = "creche")
public class Creche {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(name = "nome_fantasia", nullable = false, length = 128)
    private String nomeFantasia;
    @Column(name = "razao_social", nullable = false, length = 128)
    private String razaoSocial;
    @Column(name = "cnpj", nullable = false, length = 14)
    private String cnpj;
    @Column(name = "telefone", nullable = false, length = 20)
    private String telefone;
    @Column(name = "email", nullable = true, length = 128)
    private String email;
    @Column(name = "endereco", nullable = false, length = 128)
    private String endereco;
    @Column(name = "numero", nullable = false, length = 10)
    private String numero;
    @Column(name = "bairro", nullable = false, length = 128)
    private String bairro;
    @Column(name = "cidade", nullable = false, length = 128)
    private String cidade;
    @Column(name = "estado", nullable = false, length = 2)
    private String estado;
    @Column(name = "cep", nullable = false, length = 10)
    private String cep;
    @Column(name = "qtd_vagas", nullable = true, length = 10)
    private String qtdVagas;
    
    public Creche() {}

    public Creche(String nomeFantasia, String razaoSocial, String cnpj, String telefone, String email, String endereco, String numero, String bairro, String cidade, String estado, String cep) {
        this.nomeFantasia = nomeFantasia;
        this.razaoSocial = razaoSocial;
        this.cnpj = cnpj;
        this.telefone = telefone;
        this.email = email;
        this.endereco = endereco;
        this.numero = numero;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.cep = cep;
    }

    public Creche(Creche creche) {
        this.nomeFantasia = creche.getNomeFantasia();
        this.razaoSocial = creche.getRazaoSocial();
        this.cnpj = creche.getCnpj();
        this.telefone = creche.getTelefone();
        this.email = creche.getEmail();
        this.endereco = creche.getEndereco();
        this.numero = creche.getNumero();
        this.bairro = creche.getBairro();
        this.cidade = creche.getCidade();
        this.estado = creche.getEstado();
        this.cep = creche.getCep();
        this.qtdVagas = creche.getQtdVagas();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNomeFantasia() {
        return nomeFantasia;
    }

    public void setNomeFantasia(String nomeFantasia) {
        this.nomeFantasia = nomeFantasia;
    }

    public String getRazaoSocial() {
        return razaoSocial;
    }

    public void setRazaoSocial(String razaoSocial) {
        this.razaoSocial = razaoSocial;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getQtdVagas() {
        return qtdVagas;
    }

    public void setQtdVagas(String qtdVagas) {
        this.qtdVagas = qtdVagas;
    }


    @Override
    public boolean equals(Object objeto) {
        if (this == objeto) return true;
        if (!(objeto instanceof Creche)) return false;
        Creche creche = (Creche) objeto;
        return Objects.equals(getId(), creche.getId());
    }
 
    @Override
    public int hashCode() {
        return Objects.hash(getId());
    }

    @Override
    public String toString() {
        return "Creche{" + "id=" + id + ", nomeFantasia=" + nomeFantasia + ", razaoSocial=" + razaoSocial + ", cnpj=" + cnpj + ", telefone=" + telefone + ", email=" + email + ", endereco=" + endereco + ", numero=" + numero + ", bairro=" + bairro + ", cidade=" + cidade + ", estado=" + estado + ", cep=" + cep + '}';
    }
}
