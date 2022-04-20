package br.edu.utfpr.pw.creche.util;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

@Converter(autoApply = true)
public class ENUMTIPOUSUARIOCONVERT implements AttributeConverter<ENUMTIPOUSUARIO, Integer>{

	@Override
	public Integer convertToDatabaseColumn(ENUMTIPOUSUARIO attribute) {
        if (attribute == null) {
            return null;
        }
        return attribute.getValor();
	}

	@Override
	public ENUMTIPOUSUARIO convertToEntityAttribute(Integer dbData) {
        if (dbData == null) {
            return null;
        }

        switch (dbData) {
		case 1:
			return ENUMTIPOUSUARIO.GERENTE;
		case 2:
			return ENUMTIPOUSUARIO.COMUM;
		case 3:
			return ENUMTIPOUSUARIO.ADMINISTRADOR;
		default:
			return ENUMTIPOUSUARIO.COMUM;
		}
	}

}
