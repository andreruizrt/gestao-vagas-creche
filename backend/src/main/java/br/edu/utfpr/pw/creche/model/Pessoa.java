package br.edu.utfpr.pw.creche.model;

import java.util.Objects;
import javax.persistence.*;

import java.util.List;

@Entity
@Table(name = "pessoa")
public class Pessoa {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;
    @Column(name = "matricula", length = 10)
    private String matricula;
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

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "parentesco", joinColumns = { @JoinColumn(name = "responsavel_id") }, inverseJoinColumns = {
            @JoinColumn(name = "aluno_id") })
    private List<Pessoa> alunos;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "parentesco", joinColumns = { @JoinColumn(name = "aluno_id") }, inverseJoinColumns = {
            @JoinColumn(name = "responsavel_id") })
    private List<Pessoa> responsaveis;

    public Pessoa() {
    }
	private Integer tipo;


    public Pessoa() {}

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
        this.alunos = pessoa.getAlunos();
        this.responsaveis = pessoa.getResponsaveis();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMatricula() {
        return matricula;
    }

    public void setMatricula(String matricula) {
        this.matricula = matricula;
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

    public List<Pessoa> getResponsaveis() {
        return responsaveis;
    }

    public void setResponsaveis(List<Pessoa> responsaveis) {
        this.responsaveis = responsaveis;
    }

    public List<Pessoa> getAlunos() {
        return alunos;
    }

    public void setAlunos(List<Pessoa> alunos) {
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

    private String getParentesco(List<Pessoa> pessoas, Integer tipo) {
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append((!matricula.isEmpty() ? "Alunos [" : "Responsaveis ["));

        for (int i = 0; i < pessoas.size() - 1; i++) {
            Pessoa pessoa = pessoas.get(i);
            stringBuilder.append(i == pessoas.size() - 1 ? toStringAluno(pessoa) : toStringResponsavel(pessoa));
        }

        stringBuilder.append("]");
        
        System.out.println(stringBuilder.toString());
        return stringBuilder.toString();
    }

    public String toStringAluno(Pessoa aluno) {
        return "{id=" + aluno.getId() + ", nome=" + aluno.getNome() + ", telefone=" + aluno.getTelefone()
                        + ", email=" + aluno.getEmail() + ", cpf=" + aluno.getCpf()
                        + ", rg=" + aluno.getRg() + ", urlFoto=" + aluno.getUrl() + "}";
    }

    public String toStringResponsavel(Pessoa responsavel) {
        return "{id=" + responsavel.getId() + ", nome=" + responsavel.getNome() + ", telefone=" + responsavel.getTelefone()
                        + ", email=" + responsavel.getEmail() + ", cpf=" + responsavel.getCpf()
                        + ", rg=" + responsavel.getRg() + ", urlFoto=" + responsavel.getUrl() + "}";
    }

    @Override
    public String toString() {

        return "Pessoa [id=" + id + ", nome=" + nome + ", telefone=" + telefone + ", email=" + email + ", cpf=" + cpf
                + ", rg=" + rg + ", urlFoto=" + urlFoto + "]";
    }

}