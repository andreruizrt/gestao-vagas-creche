package br.edu.utfpr.pw.creche.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import java.util.Date;

@Entity
@PrimaryKeyJoinColumn(name="id")
public class Aluno extends Pessoa {
	
    @Column(name = "matricula", nullable = true, length = 10, unique = true)
    private String matricula;
    
    @Column(name = "data_matricula")
    @Temporal(TemporalType.TIMESTAMP)
    private Date dataMatricula;
    
    
	public Aluno() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Aluno(Pessoa pessoa) {
		super(pessoa);
		// TODO Auto-generated constructor stub
	}

	public Aluno(String matricula,Date dataMatricula,String nome, String telefone, String email, String cpf, String rg, String urlFoto) {
		super(nome, telefone, email, cpf, rg, urlFoto);
		this.matricula = matricula;
		this.dataMatricula = dataMatricula;
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
		if(dataMatricula == null) {
			dataMatricula = new Date();
		}
		this.dataMatricula = dataMatricula;
	}
    
    @Override
    public String getCpf() {
    	// TODO Auto-generated method stub
    	return super.getCpf();
    }
    
    @Override
    public String getNome() {
    	// TODO Auto-generated method stub
    	return super.getNome();
    }
    
    @Override
    public String getRg() {
    	// TODO Auto-generated method stub
    	return super.getRg();
    }
    
    @Override
    public String getEmail() {
    	// TODO Auto-generated method stub
    	return super.getEmail();
    }
    
    @Override
    public String getTelefone() {
    	// TODO Auto-generated method stub
    	return super.getTelefone();
    }
    
    @Override
    public String getUrlFoto() {
    	// TODO Auto-generated method stub
    	return super.getUrlFoto();
    }
    
    @Override
    public Long getId() {
    	// TODO Auto-generated method stub
    	return super.getId();
    }
    
    @Override
    public void setNome(String nome) {
    	// TODO Auto-generated method stub
    	super.setNome(nome);
    }
    
    @Override
    public void setCpf(String cpf) {
    	// TODO Auto-generated method stub
    	super.setCpf(cpf);
    }
    
    @Override
    public void setEmail(String email) {
    	// TODO Auto-generated method stub
    	super.setEmail(email);
    }
    
    @Override
    public void setRg(String rg) {
    	// TODO Auto-generated method stub
    	super.setRg(rg);
    }
    
    @Override
    public void setTelefone(String telefone) {
    	// TODO Auto-generated method stub
    	super.setTelefone(telefone);
    }
    
    @Override
    public void setUrlFoto(String urlFoto) {
    	// TODO Auto-generated method stub
    	super.setUrlFoto(urlFoto);
    }
}
