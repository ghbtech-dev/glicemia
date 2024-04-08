document.addEventListener('DOMContentLoaded', function() {
    fetch('chart.php')
        .then(response => response.json())
        .then(data => {
            const dates = data.map(item => item[0] + ' ' + item[1]);
            const glucose = data.map(item => item[2]);

            const ctx = document.getElementById('glucose-chart').getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: dates,
                    datasets: [{
                        label: 'Taxa de Glicemia',
                        backgroundColor: 'rgba(0, 123, 255, 0.5)',
                        borderColor: 'rgba(0, 123, 255, 1)',
                        data: glucose,
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
