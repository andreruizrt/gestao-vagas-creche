const MaskApplier = () => {
    function cpfMask(cpf: string) {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
    }

    function cnpjMask(cnpj: string) {
        return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, '$1.$2.$3/$4-$5');
    }
    
    function telefoneMask(telefone: string) {
        return telefone.replace(/(\d{2})(\d{4})(\d{4})/g, '($1) $2-$3');
    }

    function cepMask(cep: string) {
        return cep.replace(/(\d{5})(\d{3})/g, '$1-$2');
    }

    return {
        cpfMask,
        cnpjMask,
        telefoneMask,
        cepMask
    }
}

export default MaskApplier;