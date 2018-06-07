
const arrPrevL = [2]
let count = 0 //текущий номер обращения к массивам arrF1, arrPrevL
let arrF1 = [1]
const Fmax = 10
const Fout = 3
// обьем смесителя метров
const S = 2
// мин и макс уровень в смешивателе литров
const Lmin = 100
const Lmax = 200
//оптимальный уровень
const Lopt = (Lmin + Lmax) / 2

  setInterval(() => {
    //кол-во на вход, наход в соотношении в литрах
    let f1 = arrF1[count]//будет меняться в зависимости от уровня
    const f2 = f1 * 2
    const f3 = f1 * 4
    let Fall = f1 * 7

    // пред. уровень
    let Lprev = arrPrevL[count]
    // текущий уровень

    let Lcurr = Lprev + (Fall - Fout) * S

    if(Lcurr == Lopt) {
      Fall =  Fout
    }
    else if (Lcurr > Lopt) {
      Fall = 0
    }
    else if((Lopt - Lcurr)  < (Fmax - Fout)){
      Fall = Lopt - Lcurr
    }
    else {
      Fall = Fmax
    }

    if (Fall < 0) Fall = 0
    else if (Fall > Fmax) Fall = Fmax

    setValue(Fall / 7, Lcurr)
    count ++

    console.log('Lprev', Lprev)
    console.log('Lcurr', Lcurr)
    console.log('____________');
  }, 1000)

const setValue = (currF1, L) => {
    arrF1.push(currF1)
    arrPrevL.push(L)
    createChart()
}

const roundNum = num => Math.round(num / 5) * 5

const createChart = () => {
let ctx = document.getElementById("myChart");
let myChart = new Chart(ctx, {
    type: 'line',
    responsiveAnimationDuration: 0,
    data: {
        labels: arrF1,
        datasets: [{
            label: '',
            data: arrPrevL,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
        }]
    },
});
}
