// Api para plan de amortizacion
/*
Vcta = valor cuota
Mto = monto
rate = valor interes
Npla = numero de plazo
Vcap = valor capital
Sfinal = saldo final
Sini = saldo inicial
*/

export const Formula = async (req, res) => {
  const { Mto, Vint, Npla } = req.body;
  let Vcta = Math.round((Mto * Vint * (1 + Vint) ** Npla) / ((1 + Vint) ** Npla - 1));
  let Sini = Mto;
  let Amortizacion = [];
  for (let i = 1; i <= Npla; i++) {
    const rate = Sini * Vint;
    const Vcap = Vcta - rate;
    Sini -= Vcap;
    Amortizacion = [...Amortizacion, {
      Mes: i,
      capital: Vcap,
      interes: rate,
      saldo_final: Sini
    }];
  }
  res.send({
    Vcta,
    amortizacion: Amortizacion
  })
}



