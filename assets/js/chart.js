document.addEventListener('DOMContentLoaded', function() {
    fetch('chart.php')
        .then(response => response.json())
        .then(data => {
            const ctx = document.getElementById('glucose-chart').getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: data,
                    datasets: [{
                        label: 'Taxa de Glicemia',
                        backgroundColor: 'rgba(0, 123, 255, 0.5)',
                        borderColor: 'rgba(0, 123, 255, 1)',
                        data: [80, 90, 85, 100, 95, 92, 88], // Dados de exemplo
                        fill: false,
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            type: 'time',
                            time: {
                                unit: 'day'
                            }
                        },
                        y: {
                            suggestedMin: 70,
                            suggestedMax: 150,
                        }
                    }
                }
            });
        });
});

