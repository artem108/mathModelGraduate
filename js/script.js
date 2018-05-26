const arrPrevL = [2]
let count = 0
let arrF1 = [2]


setInterval(() => {
  //кол-во на вход, наход в соотношении в литрах
  let f1 = arrF1[count]//будет меняться в зависимости от уровня
  const f2 = f1 * 1.2
  const f3 = f1 * 1.4

  // обьем смесителя метров
  const S = 2

  // мин и макс уровень в смешивателе литров
  const Lmin = 2
  const Lmax = 10

  //оптимальный уровень
  const Lopt = (Lmin + Lmax) / 2

  // предыдущий уровень
  let Lprev = arrPrevL[count] // надо будет менять

  // текущий уровень
  let Lcurr = Lprev + (f1 + f2 + f3 - Lopt) * S


  f1 < 1 ? f1 = f1 + arrF1[arrF1.length -1] : f1 = f1

  if (Lcurr === Lopt || Lcurr > Lopt - 1 || Lcurr < Lopt + 1) {
    arrF1.push(f1)
  } else if (Lcurr > Lmax) {
    arrF1.push(f1 - 1)
  } else {
    if (Lcurr > Lopt - Lmin && Lcurr < Lopt - Lmin) {

        if ( Lcurr > Lopt) {
           arrF1.push(f1 -= 0.1)
        } else {
          arrF1.push(f1 += 0.1)
        }
    } else {

      if (Lcurr > Lopt) {
         arrF1.push(f1 -= 0.5)
      } else {
          arrF1.push(f1 += 0.5)
      }
    }
  }

  // Lcurr === Lopt || Lcurr > Lopt - 1 || Lcurr < Lopt + 1
  // ? arrF1.push(f1)
  // :Lcurr > Lmax ? arrF1.push(f1 - 1)
  // :Lcurr > Lopt - Lmin && Lcurr < Lopt - Lmin
  //   ? Lcurr > Lopt ? arrF1.push(f1 -= 0.1) : arrF1.push(f1 += 0.1)
  //   : Lcurr > Lopt ? arrF1.push(f1 -= 0.5) : arrF1.push(f1 += 0.5)


  arrPrevL.push(Lcurr)
  createChart()


  console.log('Lopt: ', Lopt);
  console.log('Lcurr: ', Lcurr);
  console.log('f1: ', f1);
  console.log('_______________');

}, 2000)

const createChart = () => {
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'line',
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
            borderWidth: 1
        }]
    },
});
  count ++
}
