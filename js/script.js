
const arrPrevL = [2]
let count = 0
let arrF1 = [1]
const Fmax = 10
const Fout = 1
const countArr = [count]

const S = 10

const Lmin = 2
const Lmax = 10
const Lopt = (Lmin + Lmax) / 2

  setInterval(() => {

    const f1 = arrF1[count]
    const f2 = f1 * 2
    const f3 = f1 * 4
    let Fall = f1 * 7

    let Lprev = arrPrevL[count]

    let Lcurr = Lprev + (Fall - Fout) / S

    if (Lcurr == Lopt) Fall =  Fout

    else if (Lcurr > Lopt) Fall = 0

    else if ((Lopt - Lcurr)  < (Fmax - Fout) /S ) Fall = (Lopt - Lcurr) * S

    else Fall = Fmax

    if (Fall < 0) Fall = 0
    else if (Fall > Fmax) Fall = Fmax

    setValue(Fall / 7, Lcurr)

    console.log('Lopt', Lopt)
    console.log('Fall', Fall)
    console.log('Lcurr', Lcurr)
    console.log('____________')
  }, 1000)

const setValue = (currF1, L) => {
    arrF1.push(currF1)
    arrPrevL.push(L)
    count ++
    countArr.push(count)
    createChart()
}

const roundNum = num => Math.round(num / 5) * 5

const createChart = () => {
let ctx = document.getElementById("myChart");
let myChart = new Chart(ctx, {
    type: 'line',
    responsiveAnimationDuration: 0,
    data: {
        labels: countArr,
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
