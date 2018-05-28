const arrPrevL = [2]
let count = 0
let arrF1 = [2]

// обьем смесителя метров
const S = 2

// мин и макс уровень в смешивателе литров
const Lmin = 2
const Lmax = 8

//оптимальный уровень
const Lopt = (Lmin + Lmax) / 2

  setInterval(() => {
    //кол-во на вход, наход в соотношении в литрах
    let f1 = arrF1[count]//будет меняться в зависимости от уровня
    const f2 = f1 * 2
    const f3 = f1 * 4

    // предыдущий уровень
    let Lprev = arrPrevL[count] // надо будет менять

    // текущий уровень
    let Lcurr = Lprev + (f1 + f2 + f3 - Lopt) * S


    f1 < 0 ? f1 = f1 = f1 * (-1) : f1 = f1

    if (Lcurr === Lopt || Lcurr > Lopt - 1 && Lcurr < Lopt + 1) {
        setValue(f1, Lprev)
    }  else {
        if (Lcurr > Lopt) {
          setValue(f1 -= 1, Lcurr)
        } else {
          setValue(f1 += 1, Lcurr)
        }
      }

    console.log('Lopt: ', Lopt);
    console.log('Lcurr: ', Lcurr);
    console.log('f1: ', f1);
    console.log('_______________');

  }, 1000)

const setValue = (currF1, L) => {
    arrF1.push(currF1)
    arrPrevL.push(L)
    createChart()
}


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
  count ++
}
