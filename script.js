// Ejercicio 04 - Uso del operador lógico OR (||)
// Autor: Claudia (2025)
// Descripción: Verifica si un valor se encuentra en alguno de los dos rangos válidos (100-300 o 500-800)

document.getElementById("btn-ejecutar").addEventListener("click", ejecutarEjercicio);

function ejecutarEjercicio() {
  const resultado = document.getElementById("resultado");

  // Generar un número aleatorio entre 1 y 1000
  const valor = Math.floor(Math.random() * 1000) + 1;

  // Mostrar valor en la consola (para depuración)
  console.log("Valor generado:", valor);

  resultado.style.display = "block";

  // Condición con operador lógico OR (||)
  // Se cumple si el valor está en el rango 100–300 o en el 500–800
  if ((valor >= 100 && valor <= 300) || (valor >= 500 && valor <= 800)) {
    resultado.textContent = ` Dentro de rango: el valor ${valor} está dentro de los rangos válidos (100–300 o 500–800).`;
    resultado.style.color = "#155724";
    resultado.style.backgroundColor = "#e6ffed";
    resultado.style.borderColor = "#b6e8c1";
  } else {
    resultado.textContent = ` Fuera de rango: el valor ${valor} no pertenece a los rangos válidos (100–300 o 500–800).`;
    resultado.style.color = "#721c24";
    resultado.style.backgroundColor = "#f8d7da";
    resultado.style.borderColor = "#f5c6cb";
  }
}
