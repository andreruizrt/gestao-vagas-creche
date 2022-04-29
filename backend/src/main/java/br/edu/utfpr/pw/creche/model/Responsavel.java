package br.edu.utfpr.pw.creche.model;

import java.util.Objects;
import javax.persistence.*;

@Entity
@Table(name = "responsavel")
public class Responsavel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(name = "id_usuario")
    private Long idUsuario;
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
    @Column(name = "url_comprovante_residencia", nullable = true)
    private String UrlComprovantResidencia;

    public Responsavel() {}

    public Responsavel(String nome, String telefone, String email, String cpf, String rg, String urlFoto) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.cpf = cpf;
        this.rg = rg;
        this.urlFoto = urlFoto;
    }

    public Responsavel(Responsavel responsavel) {
        this.nome = responsavel.getNome();
        this.telefone = responsavel.getTelefone();
        this.email = responsavel.getEmail();
        this.cpf = responsavel.getCpf();
        this.rg = responsavel.getRg();
        this.urlFoto = responsavel.getUrl();
    }

    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }

    public Long getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(Long idUsuario) {
        this.idUsuario = idUsuario;
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

        Responsavel other = (Responsavel) objeto;
        return Objects.equals(id, other.id);
    }

	@Override
	public String toString() {
		return "Responsavel [id_responsavel=" + id + ", nome=" + nome + ", telefone=" + telefone + ", email=" + email + ", cpf=" + cpf
				+ ", rg=" + rg + ", urlFoto=" + urlFoto + "]";
    }
}