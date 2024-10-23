
function calcularAreaTriangulo(a, b, c) {
    
    if (a + b > c && a + c > b && b + c > a) {
    
      const semiPerimetro = (a + b + c) / 2;
  
      
      const area = Math.sqrt(
        semiPerimetro *
        (semiPerimetro - a) *
        (semiPerimetro - b) *
        (semiPerimetro - c)
      );
  
      return area;
    } else {
      return "Os valores fornecidos não podem formar um triângulo.";
    }
  }
  
 
  const lados = [5, 6, 7]; 
  
  const area = calcularAreaTriangulo(lados[0], lados[1], lados[2]);
  
  console.log("A área do triângulo é: " + area);
  