export const obtenerCapital = (pais) => {

    const paisesCapitales = {

        Argentina: 'Buenos Aires',
        Brasil: 'Brasilia',
        Chile: 'Santiago',
        Perú: 'Lima',
        Uruguay: 'Montevideo',
        Colombia: 'Bogotá',
        Paraguay: 'Asunción',
        Bolivia: 'La Paz',
        Ecuador: 'Quito',
        Venezuela: 'Caracas'

    };

    return paisesCapitales[pais];
};

export const mostrarResultado = (pais, capital) => {

    const resultado = document.createElement('div');

    resultado.className = 'info-box';

    resultado.innerHTML = `
        <h3>Selección actual</h3>
        <p><strong>País:</strong> ${pais}</p>
        <p><strong>Capital:</strong> ${capital}</p>
    `;

    return resultado;
};