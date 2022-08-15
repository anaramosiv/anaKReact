//------Componente sin uso por que no lo he implementado bien!...---------

export const container={

    hidden:{opacity:1, scale: 0},
    visible:{
        opacity:1,
        scale:1,
        transition:{
            delayChildren: 0.5,
            staggerChildren: 0.5,
        },
    },
};

export const  toRight ={
    hidden: {x:-20, opacity:0},
    visible:{
        x:0,
        opacity:1
    },
};