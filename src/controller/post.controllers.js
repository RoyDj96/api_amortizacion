// Api para plan de amortizacion
/*
Vcta = valor cuota
Mto = monto
rate = valor interes
Npla = numero de plazo
Vcap = valor capital
*/

export const Formula = async (req, res) => {
  const { Mto, Vint, Npla } = req.body;
  let Vcta = Math.round((Mto * Vint * (1 + Vint) ** Npla) / ((1 + Vint) ** Npla - 1));
  let rate = Mto * Vint;
  let Vcap = Vcta - rate;
  res.send({
    Vcta,
    rate,
    Vcap
  }) 
}





const planAmortizacion = (Npla) => {
  for(let i = 0; i<Npla; i++){
    
  }
}


