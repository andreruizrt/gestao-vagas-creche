package br.edu.utfpr.pw.creche.model;

import java.util.Objects;
import javax.persistence.*;

import br.edu.utfpr.pw.creche.util.ENUMTIPOUSUARIO;

@Entity
@Table(name = "usuario")
public class Usuario {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@Column(name = "username", nullable = false, length = 16)
	private String username;
	@Column(name = "password", nullable = false)
	private String password;
	@Column(name = "email", nullable = true, length = 128)
	private String email;
	@Column(name = "tipo", nullable = false, columnDefinition = "int default  2 ")
	private ENUMTIPOUSUARIO tipo;


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

	public Usuario(String username, String password, String email, ENUMTIPOUSUARIO enumtipousuario) {
		this.username = username;
		this.password = password;
		this.email = email;
		this.tipo = enumtipousuario;
	}

	public Usuario(Usuario usuario) {
		this.username = usuario.getUsername();
		this.password = usuario.getPassword();
		this.email = usuario.getEmail();
		this.tipo = usuario.getTipo();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
    
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	
	public ENUMTIPOUSUARIO getTipo() {
		return tipo;
	}

	public void setTipo(ENUMTIPOUSUARIO tipo) {
		this.tipo = tipo;
	}

	@Override
	public String toString() {
		return "Usuario [id=" + id + ", username=" + username + ", tipo=" + tipo + "]";
	}
}