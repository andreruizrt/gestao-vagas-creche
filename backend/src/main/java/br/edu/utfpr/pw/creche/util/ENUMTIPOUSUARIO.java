package br.edu.utfpr.pw.creche.util;

public enum ENUMTIPOUSUARIO {
	GERENTE(1), COMUM(2), ADMINISTRADOR(3);

	private final Integer valor;
	
	ENUMTIPOUSUARIO(Integer valorOpcao){
		valor = valorOpcao;
	}
	public Integer getValor(){
		return valor;
	}
	

}
