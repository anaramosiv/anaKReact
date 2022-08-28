//------Componente sin uso por que no lo he implementado bien!...---------

export const container={

    hidden:{},
    visible:{
        //     transition:{
        //     delayChildren: 0.3,
        //     staggerChildren: 0.3,
        // },
    },
};

export const downUpEffect = {
	hidden: { x: -200, opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,
        transition:{
            delay: 0.3,
          
        },
	},
};