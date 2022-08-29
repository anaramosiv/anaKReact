export  const month = (number1, number2) =>{
    
    //Función para transformar los meses que vienen en número, en letras
    let mes = number1 + number2;

    const meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    
    return(
      meses[mes-1]
    )
  }