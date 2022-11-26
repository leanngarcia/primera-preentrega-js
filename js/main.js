let edadUsuario;
let medidaEntrepierna;
let tipoTerreno;
let medidaBicicleta;
let talleBicicleta;
let alturaUsuario;
let rodadoBicicleta;
let tipoBicicleta; 
const conversionMtb = 0.576;
const conversionRuta = 0.665;
const conversionHibrida = 0.685;

/*solicito al usuario la edad y verifico que el usuario ingrese un número*/
do {
  edadUsuario = parseInt(prompt("Ingrese su edad"));

  if (isNaN(edadUsuario)) {
    alert("Ingrese su edad por favor");
  }
} while (isNaN(edadUsuario));

console.log(edadUsuario); //imprimo en consola la edad obtenida

/*segun la edad del usuario se realizan los calculos para el talle de bicicleta mediante el IF*/

//solicitamos al usuario la altura en centimetros y verificamos que el tipo de dato sea correcto
if (edadUsuario < 12) {
  do {
    alturaUsuario = parseInt(prompt("Ingrese la altura en centímetros"));

    while (isNaN(alturaUsuario)) {
      alert("Ingrese la altura en centímetros por favor");
    }
  } while (isNaN(alturaUsuario));

  /*segun la altura del usuario se asigna el rodado de bicicleta correspondiente*/
  switch (true) {
    case alturaUsuario < 100:
      rodadoBicicleta = 12;
      break;

    case alturaUsuario < 110:
      rodadoBicicleta = 14;
      break;

    case alturaUsuario < 120:
      rodadoBicicleta = 16;
      break;

    case alturaUsuario < 130:
      rodadoBicicleta = 18;
      break;

    case alturaUsuario < 135:
      rodadoBicicleta = 20;
      break;

    case alturaUsuario < 145:
      rodadoBicicleta = 24;
      break;

    default:
      rodadoBicicleta = 26;
  }

  alert(`Estimado Usuario:
  Para la altura ingresada de ${alturaUsuario} cm. se recomienda elegir una bicicleta infantil rodado ${rodadoBicicleta}.`);
} else {
  /*solicito al usuario la medida desde entrepierna hasta el suelo para obtener el numero de talle de bicicleta y verifico que ingrese un numero*/
  do {
    medidaEntrepierna = parseInt(
      prompt(
        "Ingrese la medida que hay entre su entrepierna y el suelo en centimetros."
      )
    );

    while (isNaN(medidaEntrepierna)) {
      alert(
        "Ingrese la distancia desde su entrepierna hasta el suelo en centímetros por favor"
      );
    }
  } while (isNaN(medidaEntrepierna));

  console.log(medidaEntrepierna); //imprimo en consola la medida obtenida

  /*solicito al usuario que seleccione el tipo de terreno que va a recorrer para realizar el calculo correspondiente de talle 
y verifico que solo ingrese los datos solicitados*/
  do {
    tipoTerreno =
      prompt(`Seleccione el tipo de terreno donde desea utilizar su bicicleta.
Ingrese "A" para terrenos irregular y/o montaña.
Ingrese "B" para  asfalto y/o ruta.
Ingrese "C" para caminos urbanos y/o mixtos`).toUpperCase();

    if (tipoTerreno !== "A" && tipoTerreno !== "B" && tipoTerreno !== "C") {
      alert("Ingrese una opción entre A, B o C");
    }
  } while (tipoTerreno !== "A" && tipoTerreno !== "B" && tipoTerreno !== "C");
  console.log(tipoTerreno);

  /*funcion para realizar el calculo de talle adecuado para el usuario*/
  function calculoMedida(medidaEntrepierna, conversion) {
    medidaBicicleta = medidaEntrepierna * conversion;
    return medidaBicicleta;
  }

  /*mediante condicional switch hacemos uso de la funcion calculoMedida con los datos que el usuario ingreso*/
  switch (tipoTerreno) {
    case "A":
      calculoMedida(medidaEntrepierna, conversionMtb);

      tipoBicicleta = "Mountain Bike"

      //mediante switch asignamos el talle en letras
      switch (true) {
        case medidaBicicleta < 73 * conversionMtb:
          talleBicicleta = "XS";
          break;

        case medidaBicicleta < 76 * conversionMtb:
          talleBicicleta = "S";
          break;

        case medidaBicicleta < 78 * conversionMtb:
          talleBicicleta = "M";
          break;

        case medidaBicicleta < 81 * conversionMtb:
          talleBicicleta = "L";
          break;

        default:
          talleBicicleta = "XL";
          break;
      }
      break;

    case "B":
      calculoMedida(medidaEntrepierna, conversionRuta);

      tipoBicicleta = "Ruta"

      //mediante switch asignamos el talle en letras
      switch (true) {
        case medidaBicicleta < 69 * conversionRuta:
          talleBicicleta = "XS";
          break;

        case medidaBicicleta < 71 * conversionRuta:
          talleBicicleta = "S";
          break;

        case medidaBicicleta < 76 * conversionRuta:
          talleBicicleta = "M";
          break;

        case medidaBicicleta < 79 * conversionRuta:
          talleBicicleta = "L";
          break;

        default:
          talleBicicleta = "XL";
          break;
      }

      break;

    case "C":
      calculoMedida(medidaEntrepierna, conversionHibrida);

      tipoBicicleta = "Híbrida"

      //mediante switch asignamos el talle en letras
      switch (true) {
        case medidaBicicleta < 73 * conversionHibrida:
          talleBicicleta = "XS";
          break;

        case medidaBicicleta < 76 * conversionHibrida:
          talleBicicleta = "S";
          break;

        case medidaBicicleta < 78 * conversionHibrida:
          talleBicicleta = "M";
          break;

        case medidaBicicleta < 81 * conversionHibrida:
          talleBicicleta = "L";
          break;

        default:
          talleBicicleta = "XL";
          break;
      }

      break;
  }

  /*imprimo en consola las variables obtenidas*/
  console.log(medidaBicicleta);
  console.log(talleBicicleta);

  /*con metodo alert imprimimos en pantalla un mensaje con el resultado de bicicleta recomendada para el usuario*/
  alert(`Estimado Usuario:
  Para el tipo de terreno seleccionado se recomienda una bicicleta de tipo ${tipoBicicleta}.
  Para la medida ingresada de ${medidaEntrepierna} cm. Se recomienda seleccionar el talle ${talleBicicleta}`);
}
