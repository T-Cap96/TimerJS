let txtHoras = document.querySelector('#txtHoras');
let txtMinutos = document.querySelector('#txtMinutos');
let txtSegundos = document.querySelector('#txtSegundos');
let txtSeparador = document.querySelectorAll('.txtSeparador');

let segundos = 0;
let minutos = 0;
let horas = 0;

function digitos ( numero )
{
    if( numero < 10 ){
        numero = '0'+ numero;
    }
    return numero;
}

function separador ( num )
{
    let separador = '';
    if ( num%2 == 0 ){
        separador = ':'
    }
    return separador;
}

function timer()
{
    segundos++;//incremento
    txtSegundos.innerText = digitos(segundos%60);

    minutos = Math.trunc(segundos/60);
    txtMinutos.innerText = digitos(minutos%60);

    horas = Math.trunc(minutos/60);
    txtHoras.innerText = digitos( horas );

    txtSeparador[0].innerText = separador( segundos );
    txtSeparador[1].innerText = separador( segundos );
}

setInterval( timer, 800 );  