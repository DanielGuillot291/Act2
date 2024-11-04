
const votos = [0, 0, 0, 0 ,0]
const partidos = ['Socialistas', 'Liberales', 'Animalistas', 'Centristas', 'Ecologistas']
let votoChart;

function initChart(){
    const ctx = document.getElementById('myChart').getContext('2d');

    votoChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: partidos,
        datasets: [{
        label: 'Votes',
        data: votos,
        backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(75, 192, 192, 0.6)' 
        ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            leyend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem){
                        return tooltipItem.label + ':' + tooltipItem.raw;
                    }
                }
            }
        }
    }
    });
}

function vote(partidosIndice){
    if(votoChart){
        votos[partidosIndice]++;
        votoChart.data.datasets[0].data = votos;
        votoChart.update();
    }
    else{
        console.log("El gráfico no está inicializado");
    }
}

function reset(){
    if(votoChart){
        for(let i = 0; i < votos.length; i++){
            votos[i] = 0
        }
        votoChart.data.datasets[0].data = votos;
        votoChart.update();
    }
    else{
        console.log("El gráfico no está iniciado")
    }
}

window.onload = initChart();