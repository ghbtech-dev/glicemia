const salvarDados = (data, hora, glicemia) => {
  // Validação de entrada
  if (!data || !hora || !glicemia) {
    return false;
  }

  // Formatação da data
  const dataFormatada = data.split('-').reverse().join('/');

  // Criação da string para o CSV
  const linhaCSV = `${dataFormatada},${hora},${glicemia}\n`;

  // Salvar no arquivo CSV
  // Utilize a biblioteca/método adequado para salvar a string no arquivo "glicemia.csv" de acordo com seu ambiente de hospedagem.

  // Exibir mensagem de sucesso
  document.getElementById('mensagem').innerHTML = 'Dados salvos com sucesso!';

  return true;
};

const atualizarGrafico = (periodo) => {
  // Leitura do CSV e filtragem por período
  // Utilize a biblioteca/método adequado para ler o "glicemia.csv" e obter os dados de acordo com o período selecionado.

  // Criação dos datasets para o gráfico
  const labels = [];
  const data = [];

  // Preenchimento de labels e data com os dados filtrados

  const ctx = document.getElementById('grafico').getContext('2d');
  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: 'Glicemia (mg/dL)',
        data
      }]
    }
  });

  chart.update();
};

// Eventos
document.getElementById('registro-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const data = document.getElementById('data').value;
  const hora = document.getElementById('hora').value;
  const glicemia = document.getElementById('glicemia').value;

  if (salvarDados(data, hora, glicemia)) {
    // Limpar campos de entrada
    document.getElementById('registro-form').reset();
  }
});

document.getElementById('periodo').addEventListener('change', (e) => {
  atualizarGrafico(e.target.value);
});

atualizarGrafico('dia'); // Gráfico inicial por dia

