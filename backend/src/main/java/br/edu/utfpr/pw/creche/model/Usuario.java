package br.edu.utfpr.pw.creche.model;

import java.util.Objects;
import javax.persistence.*;

@Entity
@Table(name = "usuario")
public class Usuario {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@Column(name = "username", nullable = false, length = 16)
	private String username;
	@Column(name = "password", nullable = false)
	private String senha;
	@Column(name = "email", nullable = true, length = 128)
	private String email;
	@Column(name = "admin", nullable = false)
	private Boolean admin;

    @Override
    public boolean equals(Object objeto) {
        if (this == objeto) return true;
        if (!(objeto instanceof Usuario)) return false;
        Usuario usuario = (Usuario) objeto;
		return Objects.equals(getId(), usuario.getId());
    }
 
    @Override
    public int hashCode() {
        return Objects.hash(getId());
    }
 
	public Usuario() {}

	public Usuario(String username, String senha, String email, Boolean admin) {
		this.username = username;
		this.senha = senha;
		this.email = email;
		this.admin = admin;
	}

	public Long getId() {
		return id;
	}

	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
    
	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Boolean isAdmin() {
		return admin;
	}
	public void setAdmin(Boolean admin) {
		this.admin = admin;
	}

	@Override
	public String toString() {
		return "Tutorial [id=" + id + ", username=" + username + ", isAdmin=" + admin + "]";
	}
}