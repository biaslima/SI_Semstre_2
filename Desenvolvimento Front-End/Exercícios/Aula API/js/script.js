function getMunicipioByName(nomeMunicipio) {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/municipios?orderBy=nome')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erro ao buscar municípios: ${response.statusText}`);
        }
        return response.json();
      })
      .then(municipios => {
        const municipioEncontrado = municipios.find(municipio => municipio.nome.toLowerCase() === nomeMunicipio.toLowerCase());
  
        if (!municipioEncontrado) {
          document.getElementById('resultado').innerText = `Município ${nomeMunicipio} não encontrado.`;
          return;
        }
  
        const { id, nome, microrregiao } = municipioEncontrado;
        const microrregiaoNome = microrregiao?.nome || 'N/A';
        const mesorregiaoNome = microrregiao?.mesorregiao?.nome || 'N/A';
        const regiaoImediataNome = microrregiao?.['regiao-imediata']?.nome || 'N/A';
        const regiaoIntermediariaNome = microrregiao?.['regiao-imediata']?.['regiao-intermediaria']?.nome || 'N/A';
  
        document.getElementById('resultado').innerText = `
          ID: ${id}
          Nome: ${nome}
          Microrregião: ${microrregiaoNome}
          Mesorregião: ${mesorregiaoNome}
          Região Imediata: ${regiaoImediataNome}
          Região Intermediária: ${regiaoIntermediariaNome}
        `;
      })
      .catch(error => {
        console.error('Erro:', error);
        document.getElementById('resultado').innerText = `Erro ao buscar município: ${error.message}`;
      });
  }
  
  function buscarMunicipio() {
    const nomeMunicipio = document.getElementById('nomeMunicipio').value;
    if (nomeMunicipio.trim() === '') {
      document.getElementById('resultado').innerText = 'Por favor, insira o nome de um município.';
      return;
    }
    getMunicipioByName(nomeMunicipio);
  }
  
  