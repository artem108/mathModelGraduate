const arrPrevL = [1]
let count = 0
let arrF1 = [2]


setInterval(() => {
  //кол-во на вход, наход в соотношении в литрах
  let f1 = arrF1[count]//будет меняться в зависимости от уровня
  const f2 = f1 * 2
  const f3 = f1 * 4

  // обьем смесителя метров
  const S = 4

  // мин и макс уровень в смешивателе литров
  const Lmin = 5
  const Lmax = 40

  //оптимальный уровень
  const Lopt = (Lmin + Lmax) / 2

  // предыдущий уровень
  let Lprev = arrPrevL[count] // надо будет менять

  // текущий уровень
  let Lcurr = Lprev + (f1 + f2 + f3 - Lopt) * S

  Lcurr > Lopt ? arrF1.push(f1 -= 0.5) : arrF1.push(f1 += 0.5)


  arrPrevL.push(Lcurr)
  count ++
  console.log('Lcurr: ', Lcurr);
  console.log('f1: ', f1);
}, 1000)
