package br.edu.utfpr.pw.creche.util;

public enum ENUMTIPOUSUARIO {
	GERENTE('G'), COMUM('C'), ADMINISTRADOR('A');

	private final Character valor;
	
	ENUMTIPOUSUARIO(Character valorOpcao){
		valor = valorOpcao;
	}
	public Character getValor(){
		return valor;
	}
}
