package br.edu.utfpr.pw.creche.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "aluno")
public class Aluno {
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
	@Column(name = "id_responsavel", nullable = true, length = 128)
    private Long idResponsavel;
	@Column(name = "nome", nullable = false, length = 128)
    private String nome;
    @Column(name = "cpf", nullable = true, length = 14)
    private String cpf;
    @Column(name = "rg", nullable = false, length = 15)
    private String rg;
    @Column(name = "url_foto", nullable = true)
    private String urlFoto;
    @Column(name = "matricula", length = 10, unique = true)
    private String matricula;
    @Column(name = "data_matricula")
    @Temporal(TemporalType.TIMESTAMP)
    private Date dataMatricula;
    
    
	public Aluno() {}
	
	public Aluno(Long idResponsavel, String nome, String cpf, String rg, String urlFoto, String matricula, Date dataMatricula) {
		this.idResponsavel = idResponsavel;
		this.nome = nome;
		this.cpf = cpf;
		this.rg = rg;
		this.urlFoto = urlFoto;
		this.matricula = matricula;
		this.dataMatricula = dataMatricula;
	}

	public Aluno(Aluno aluno) {
		this.idResponsavel = aluno.getIdResponsavel();
		this.nome = aluno.getNome();
		this.cpf = aluno.getCpf();
		this.rg = aluno.getRg();
		this.urlFoto = aluno.getUrlFoto();
		this.matricula = aluno.getMatricula();
		this.dataMatricula = aluno.getDataMatricula();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getIdResponsavel() {
		return idResponsavel;
	}

	public void setIdResponsavel(Long idResponsavel) {
		this.idResponsavel = idResponsavel;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
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

	public String getUrlFoto() {
		return urlFoto;
	}

	public void setUrlFoto(String urlFoto) {
		this.urlFoto = urlFoto;
	}

	public String getMatricula() {
		return matricula;
	}

	public void setMatricula(String matricula) {
		this.matricula = matricula;
	}

	public Date getDataMatricula() {
		return dataMatricula;
	}

	public void setDataMatricula(Date dataMatricula) {
		this.dataMatricula = dataMatricula;
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

        Aluno other = (Aluno) objeto;
        return Objects.equals(id, other.id);
    }

	@Override
	public String toString() {
		return "Aluno [id=" + id + ", idResponsavel=" + idResponsavel + ", nome=" + nome + ", cpf=" + cpf + ", rg=" + rg + ", urlFoto=" + urlFoto + ", matricula=" + matricula + ", dataMatricula=" + dataMatricula + "]";
	}

}
