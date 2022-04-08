package br.edu.utfpr.pw.creche.model;

import java.util.Objects;
import javax.persistence.*;

@Entity
@Table(name = "pessoa")
public class Pessoa {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(name = "nome", nullable = false, length = 128)
    private String nome;
    @Column(name = "telefone", nullable = false, length = 20)
    private String telefone;
    @Column(name = "email", nullable = true, length = 128)
    private String email;
    @Column(name = "cpf", nullable = false, length = 14)
    private String cpf;
    @Column(name = "rg", nullable = false, length = 15)
    private String rg;
    @Column(name = "url_foto", nullable = true)
    private String urlFoto;


    @Override
    public boolean equals(Object objeto) {
        if (this == objeto) return true;
        if (!(objeto instanceof Pessoa)) return false;
        Pessoa pessoa = (Pessoa) objeto;
        return Objects.equals(getId(), pessoa.getId());
    }
 
    @Override
    public int hashCode() {
        return Objects.hash(getId());
    }

    public Pessoa() {}

    public Pessoa(String nome, String telefone, String email, String cpf, String rg, String urlFoto) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.cpf = cpf;
        this.rg = rg;
        this.urlFoto = urlFoto;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
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

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getRg() {
        return rg;
    }

    public void setRg(String rg) {
        this.rg = rg;
    }

    public String getUrl() {
        return urlFoto;
    }

    public void setUrl(String urlFoto) {
        this.urlFoto = urlFoto;
    }
    

	@Override
	public String toString() {
		return "Pessoa [id=" + id + ", nome=" + nome + ", telefone=" + telefone + ", email=" + email + ", cpf=" + cpf
                + ", rg=" + rg + ", urlFoto=" + urlFoto + "]";
    }
}