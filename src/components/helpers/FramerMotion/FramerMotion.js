//Framer motion para animacion de entrada en el detalle

export const container={

    hidden:{},
    visible:{
            transition:{
            delayChildren: 0,
            staggerChildren: 0,
        },
    },
};

export const toRightEffect = {
	hidden: { x: -200, opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,
        transition:{
            delay: 0.3,
          
        },
	},
};