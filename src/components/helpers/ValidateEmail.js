export  const validateHandlerMail = (text) => {
        const emailRegex = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/i);
        if(!emailRegex.test(text)){
        console.log('email no valido');
    }
  }