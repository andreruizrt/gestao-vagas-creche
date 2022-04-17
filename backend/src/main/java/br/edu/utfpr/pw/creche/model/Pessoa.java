package br.edu.utfpr.pw.creche.model;

import java.util.Objects;
import javax.persistence.*;

import java.util.List;

@Entity
@Table(name = "pessoa")
@Inheritance(strategy = InheritanceType.JOINED)
public class Pessoa {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;
    @Column(name = "nome", nullable = false, length = 128)
    private String nome;
    @Column(name = "telefone", nullable = true, length = 20)
    private String telefone;
    @Column(name = "email", nullable = true, length = 128)
    private String email;
    @Column(name = "cpf", nullable = true, length = 14)
    private String cpf;
    @Column(name = "rg", nullable = false, length = 15)
    private String rg;
    @Column(name = "url_foto", nullable = false)
    private String urlFoto;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "parentesco", joinColumns = { @JoinColumn(name = "responsavel_id") }, inverseJoinColumns = {
            @JoinColumn(name = "aluno_id") })
    private List<Aluno> alunos;


    public Pessoa() {
    }

    public Pessoa(String nome, String telefone, String email, String cpf, String rg, String urlFoto) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.cpf = cpf;
        this.rg = rg;
        this.urlFoto = urlFoto;
    }

    public Pessoa(Pessoa pessoa) {
        this.nome = pessoa.getNome();
        this.telefone = pessoa.getTelefone();
        this.email = pessoa.getEmail();
        this.cpf = pessoa.getCpf();
        this.rg = pessoa.getRg();
        this.urlFoto = pessoa.getUrl();
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

    

    public String getUrlFoto() {
		return urlFoto;
	}

	public void setUrlFoto(String urlFoto) {
		this.urlFoto = urlFoto;
	}

	public List<Aluno> getAlunos() {
		return alunos;
	}

	public void setAlunos(List<Aluno> alunos) {
		this.alunos = alunos;
	}

	@Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public boolean equals(Object objeto) {
        if (this == objeto) {
            return true;
        }

        if (objeto == null) {
            return false;
        }

        if (getClass() != objeto.getClass()) {
            return false;
        }

        Pessoa other = (Pessoa) objeto;
        return Objects.equals(id, other.id);
    }

	@Override
	public String toString() {
		return "Pessoa [id=" + id + ", nome=" + nome + ", telefone=" + telefone + ", email=" + email + ", cpf=" + cpf
				+ ", rg=" + rg + ", urlFoto=" + urlFoto + ", alunos=" + alunos + "]";
	}
    
    
//    @Override
//    public String toString() {
//        StringBuilder stringBuilder = new StringBuilder();
//
//        stringBuilder.append(!matricula.isEmpty() ? toStringAluno() : toStringResponsavel());
//        stringBuilder.append("]");
//
//        System.out.println(stringBuilder.toString());
//
//        return stringBuilder.toString();
//    }
//
//    private String toStringAluno() {
//        return "Aluno [id=" + id + ", matricula=" + matricula + ", nome=" + nome + ", cpf=" + cpf + ", rg=" + rg
//                + ", url=" + urlFoto + "]";
//    }
//
//    private String toStringResponsavel() {
//        return "Responsavel [id=" + id + ", nome=" + nome + ", cpf=" + cpf + ", rg=" + rg + ", email=" + email
//                + ", telefone=" + telefone + ", url=" + urlFoto + "]";
//    }
}