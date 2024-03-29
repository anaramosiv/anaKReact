
//Array de los productos para enviar a Firebase. Queda para eventuales actualizaciones
// Extracto y desanidamiento de API de ticketmaster
const eventos = [
    {
        "image": "https://s1.ticketm.net/img/tat/dam/a/a29/7aa8c7a4-c56a-4114-8508-2de9acb63a29_1625891_CUSTOM.jpg",
        "name": "Andalucía Big Festival by Mad Cool 3 días",
        "descripcion": "Entrada para 8-9 y 10 de septiembre. El festival contará con unos cincuenta artistas de todo el mundo y con una diversa propuesta que contará con artistas de la talla de Muse, Jamiroquai, Biffy Clyro, Vetusta Morla, Los Planetas, Michael Kiwanuka o Stereophonics, entre otros.",
        "id": "Z612xP2qZa74",
        "title": "Andalucía Big Festival by Mad Cool 3 días",
        "time": "18:00:00",
        "date": "2022-09-08",
        "status": "onsale",
        "priceMax": 275,
        "genrename": "Various",
        "Location": "Recinto Ferial Cortijo de Torres",
        "city": "Malaga",
        "address":  "Recinto Ferial Cortijo de Torres, 29006 Málaga, España",
        "category": "Festivales",
        "url": "https://www.ticketmaster.es/event/andalucia-big-festival-by-mad-cool-entradas/31951"
    },
    {
        "image": 	"https://s1.ticketm.net/img/tat/dam/a/a29/7aa8c7a4-c56a-4114-8508-2de9acb63a29_1625891_CUSTOM.jpg",
        "name": 	"Andalucía Big Festival by Mad Cool 1 día",
        "descripcion": "Entrada para 1 día. El festival contará con unos cincuenta artistas de todo el mundo y con una diversa propuesta que contará con artistas de la talla de Muse, Jamiroquai, Biffy Clyro, Vetusta Morla, Los Planetas, Michael Kiwanuka o Stereophonics, entre otros.",
        "id":           	"Z812x23SZa74",
        "title": 		"Andalucía Big Festival by Mad Cool 3 días",
        "time": 	"18:00:00",
        "date": "2022-09-08",
        "status": 	"onsale",
         "priceMax":     137.5,
        "genrename": 	"Various",
        "Location": "Recinto Ferial Cortijo de Torres",
        "city": "Malaga",
        "address":  "Recinto Ferial Cortijo de Torres, 29006 Málaga, España",
        "category": "Festivales",
        "url": "https://www.ticketmaster.es/event/andalucia-big-festival-by-mad-cool-entradas/31951"
    },
    {
        "image": 	"https://s1.ticketm.net/img/tat/dam/a/f16/bce7d32a-9fd8-428e-9b5a-6d2f0f29df16_1307571_CUSTOM.jpg",
        "name": 	"SUM 41 WITH SPECIAL GUEST SIMPLE PLAN",
        "descripcion": "Sum 41 acaba de embarcarse junto a Simple Plan en el 'Blame Canadá Tour' en Estados Unidos, En septiembre comenzará la gira europea ‘Does This Look No Killer No Filler’.",
        "id":           	"Z692xZ2qZagf",
        "title": 		"SUM 41 WITH SPECIAL GUEST SIMPLE PLAN",
        "time": 	"21:00:00",
        "date": "2022-09-27",
        "status": 	"onsale",
        "priceMax":     42,
        "genrename": 	"Punk",
        "Location": "WiZink Center, Madrid",
        "city": "Madrid",
        "address":  "Av. Felipe II, s/n, 28009 Madrid, España",
        "category": "Conciertos",
        "url": "https://www.ticketmaster.es/event/cafe-tacvba-tickets/30283?language=es-es"
    },

    {
        "image": "https://s1.ticketm.net/img/tat/dam/a/f74/af436a6b-ac81-488f-a06d-3042159c8f74_1637311_CUSTOM.jpg",
        "name": "Café Tacvba",
        "descripcion": "El grupo de rock, con más 30 años de trayectoria, deleitará a todos sus fans con su inconfundible estilo mezcla de rock, folk indígena, música electrónica y punk.",
        "id": "Z698xZ2qZa6_5",
        "title": "Café Tacvba",
        "time": "21:00:00",
        "date": "2022-09-04",
        "status": "onsale",
        "priceMax": 28.5,
        "genrename": "Pop",
        "Location": "La Riviera, Madrid",
        "city": "Madrid",
        "address": "Paseo Bajo de la Virgen del Puerto, s/n, 28005 Madrid, España",
        "category": "Conciertos",
        "url": "https://www.ticketmaster.es/event/cafe-tacvba-tickets/30283?language=es-es"
    },
    {
        "image": "https://s1.ticketm.net/img/tat/dam/a/742/9c5a8b40-c69b-4b93-b036-cc91f4dd9742_1522401_CUSTOM.jpg",
        "name": "Counting Crows",
        "descripcion": "Los menores de 16 años sólo podrán acceder al recinto acompañados de padre, madre o tutor legal.",
        "id": "Z698xZ2qZakM5",
        "title": "Counting Crows",
        "time": "21:00:00",
        "date": "2022-09-26",
        "status": "rescheduled",
        "priceMax": 42,
        "genrename":"Rock",
        "Location":"Sala Razzmatazz",
        "city": "Barcelona",
        "address":"C. Almogàvers, 122, 08018 Barcelona, España",
        "category": "Conciertos",
        "url":"https://www.ticketmaster.es/event/counting-crows-tickets/28107?language=es-es",
    },
    {
        "image": "https://s1.ticketm.net/img/tat/dam/a/fb2/562be00e-cc2f-4fbc-8268-b820b39a1fb2_1649431_CUSTOM.jpg",
        "name": 	"Angel Olsen",
        "descripcion": "Acceso permitido a mayores de 16 años. Los menores de 16 años, deberán estar acompañados por madre, padre o tutor legal.",
        "id":   "Z698xZ2qZa6Qa",
        "title": 	"Angel Olsen",
        "time":     	"21:00:00",
        "date": 	"2022-09-29",
        "status":   	"onsale",
        "priceMax": 	31.3,
        "genrename":    	"Pop",
        "Location": "La Riviera, Madrid",
        "city":     "Madrid",
        "address":  "Paseo Bajo de la Virgen del Puerto, s/n, 28005 Madrid, España",
        "category": "Conciertos",
        "url":  	"https://www.ticketmaster.es/event/angel-olsen-entradas/30345"
    },
    {
        "image": "https://s1.ticketm.net/img/tat/dam/a/e1b/f6f7ed52-f226-4e36-acc1-43882824de1b_1703061_CUSTOM.jpg",
        "name": "DCODE 2022",
        "descripcion": "Cartel DCODE 2022: Crystal FighterS, The Kooks, Years and Years, The Hives, entre otros...",
        "id":    "Z698xdsqZa6Qa",
        "title": 	"DCODE 2022",
        "time":     	"21:00:00",
        "date":  "2022-09-17",
        "status": "onsale",
        "priceMax": 61,
        "genrename":"Various",
        "Location": "Campus Universidad Complutense",
        "city":  "Madrid",
        "address": "Universidad Complutense",
        "category": "Festivales",
        "url":  "https://www.ticketmaster.es/artist/dcode-2019-entradas/973359?int_cmp_name=Dcode-Festival&int_cmp_id=ES-Home-501&int_cmp_creative=Home-main-1&tm_link=tm_ccp_Home_main_Dcode-Festival#info"
    },

    {
        "image": "https://s1.ticketm.net/dam/a/b2f/8b6be8fb-c563-43a5-b40d-07577b654b2f_1510231_CUSTOM.jpg",
        "name": "Andrea Bocelli - Festival Starlite",
        "descripcion": "Adquiere tus entradas para el concierto de Andrea Bocelli - Festival Starlite",
        "id": "Z698xZ2qZakzg",
        "title": "Andrea Bocelli - Festival Starlite",
        "time": "22:00:00",
        "date": "2022-09-15",
        "status": "onsale",
        "priceMax": 177.27,
        "genrename": "Opera",
        "Location": "Auditorio Starlite",
        "city": "Marbella",
        "address": "Calle Albinoni, s/n. Cantera de Nagüeles, 29602 Marbella, España",
        "category": "Festivales",
        "url": "https://www.ticketmaster.es/event/andrea-bocelli-festival-starlite-tickets/28213?language=en-us"
    },
    {
        "image": "https://s1.ticketm.net/dam/a/4c6/9468f0e0-6f4e-4158-acf0-c3c4501774c6_1591651_RECOMENDATION_16_9.jpg",
        "name": "Ballet Flamenco Sara Baras - Festival Starlite",
        "descripcion": "Adquiere tus entradas para el concierto de Ballet Flamenco Sara Baras - Festival Starlite",
        "id": "Z698xZ2qZa6u_",
        "title": "Ballet Flamenco Sara Baras - Festival Starlite",
        "time": "22:00:00",
        "date": "2022-08-31",
        "status": "onsale",
        "priceMax": 75.45,
        "genrename": "Flamenco",
        "Location": "Auditorio Starlite",
        "city": "Marbella",
        "address": "Calle Albinoni, s/n. Cantera de Nagüeles, 29602 Marbella, España",
        "category": "Festivales",
        "url": "https://www.ticketmaster.es/event/ballet-flamenco-sara-baras-festival-starlite-tickets/29529?language=en-us"
    },


 
    {
        "image": "https://s1.ticketm.net/dam/a/b21/ddd0398a-d821-45b7-bfe8-539aa145db21_1658851_RETINA_PORTRAIT_16_9.jpg",
        "name": "Luis Fonsi - Festival Starlite",
        "descripcion": "Adquiere tus entradas para el concierto de Luis Fonsi - Festival Starlite",
        "id": "Z698xZ2qZa6Ov",
        "title": "Luis Fonsi - Festival Starlite",
        "time": "22:00:00",
        "date": "2022-08-29",
        "status": "onsale",
        "priceMax": 134.72,
        "genrename": "Pop",
        "Location": "Auditorio Starlite",
        "city": "Marbella",
        "address": "Calle Albinoni, s/n. Cantera de Nagüeles, 29602 Marbella, España",
        "category": "Festivales",
        "url": "https://www.ticketmaster.es/event/luis-fonsi-festival-starlite-tickets/30721?language=en-us"
    },
    

    {
        "image": "https://s1.ticketm.net/dam/a/7bd/6063bf0e-dcfa-4615-ad58-4fbd62e3e7bd_1657941_CUSTOM.jpg",
        "name": "Morat - Festival Starlite",
        "descripcion": "Adquiere tus entradas para el concierto de Morat - Festival Starlite",
        "id": "Z698xZ2qZa60M",
        "title": "Morat - Festival Starlite",
        "time": "22:00:00",
        "date": "2022-08-30",
        "status": "onsale",
        "priceMax": 79.09,
        "genrename": "Rock",
        "Location": "Auditorio Starlite",
        "city": "Marbella",
        "address": "Calle Albinoni, s/n. Cantera de Nagüeles, 29602 Marbella, España",
        "category": "Festivales",
        "url": "https://www.ticketmaster.es/event/morat-festival-starlite-tickets/31031?language=en-us"
    },    

    {
        "image": "https://s1.ticketm.net/dam/a/c20/4af9c733-9cb8-4803-a2d5-4b5251d14c20_1551221_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        "name": "Estopa - Festival Starlite",
        "descripcion": "Adquiere tus entradas para el concierto de Estopa - Festival Starlite",
        "id": "Z698xZ2qZakTt",
        "title": "Estopa - Festival Starlite",
        "time": "22:00:00",
        "date": "2022-09-03",
        "status": "onsale",
        "priceMax": 112.73,
        "genrename": "Rock",
        "Location": "Auditorio Starlite",
        "city": "Marbella",
        "address": "Calle Albinoni, s/n. Cantera de Nagüeles, 29602 Marbella, España",
        "category": "Festivales",
        "url": "https://www.ticketmaster.es/event/estopa-festival-starlite-tickets/28649?language=en-us"
    },
    {
        "image": "https://s1.ticketm.net/dam/a/382/13e36aef-7e31-4b3e-85cb-45d197308382_1640991_RETINA_PORTRAIT_3_2.jpg",
        "name": "Anastacia - Festival Starlite",
        "descripcion": "Adquiere tus entradas para el concierto de Anastacia - Festival Starlite",
        "id": "Z698xZ2qZa68E",
        "title": "Anastacia - Festival Starlite",
        "time": "22:00:00",
        "date": "2023-07-12",
        "status": "rescheduled",
        "priceMax": 83.46,
        "genrename": "Rock",
        "Location": "Auditorio Starlite",
        "city": "Marbella",
        "address": "Calle Albinoni, s/n. Cantera de Nagüeles, 29602 Marbella, España",
         "category": "Festivales",
        "url": "https://www.ticketmaster.es/event/anastacia-festival-starlite-tickets/29735?language=en-us"
    },
    {
        "image": "https://s1.ticketm.net/dam/a/939/beb7171b-8055-4a48-8223-92449c968939_1666351_RETINA_LANDSCAPE_16_9.jpg",
        "name": "Rosalía: MOTOMAMI WORLD TOUR",
        "descripcion": "Adquiere tus entradas para el concierto de Rosalía: MOTOMAMI WORLD TOUR",
        "id": "Z698xZ2qZa6rD",
        "title": "Rosalía: MOTOMAMI WORLD TOUR",
        "time": "21:30:00",
        "date": "2022-09-29",
        "status": "onsale",
        "priceMax": 136.5,
        "genrename": "Urban",
        "Location": "WiZink Center",
        "city": "Madrid",
        "address": "Av. Felipe II, s/n",
        "category": "Conciertos",
        "url": "https://www.ticketmaster.es/event/rosalia-motomami-world-tour-tickets/30651?language=en-us"
    },



    {
        "image": "https://s1.ticketm.net/dam/a/d8e/5432bf7a-0f5e-4b47-8b7d-177892dd2d8e_1464461_RETINA_PORTRAIT_3_2.jpg",
        "name": "Limp Bizkit",
        "descripcion":"Este concierto está reprogramado hasta nuevo aviso",
        "id": "Z698xZ2qZaAl9",
        "date": "2022-09-24",
        "time": "19:00:00",
        "status": "rescheduled",
        "genrename": "Rock",
        "priceMax": 58.0,
        "Location": "WiZink Center",
        "city": "Madrid",
        "address": "Av. Felipe II, s/n",
        "category": "Conciertos",
        "url": "https://www.ticketmaster.es/event/limp-bizkit-tickets/23255?language=en-us",
    },
    {
        "name": "Mon Laferte",
        "id": "Z698xZ2qZa6E6",
        "descripcion": "concierto de Mon Laferte",
        "url": "https://www.ticketmaster.es/event/mon-laferte-tickets/31175?language=en-us",
        "image": "https://s1.ticketm.net/dam/a/c9d/29f60a38-5790-44d8-9166-84a625031c9d_1669771_RETINA_PORTRAIT_3_2.jpg",
        "date": "2022-09-03",
        "status": "onsale",
        "time": "21:30:00",
        "genrename": "Pop",
        "priceMax": 32.0,
        "Location": "Sala Moon",
        "city": "Valencia",
        "country": "España",
        "address": "Carrer de Sant Vicent Màrtir, 200",
       "category": "Conciertos",
    },
    {   
        
        "name": "Muse",
        "id": "Z698xZ2q235E6",
        "descripcion": " Muse repasará los éxitos de su carrera y adelantará algunas de las nuevas canciones de su esperadísimo noveno álbum en estudio Will Of The People que verá la luz el 26 de agosto.",
        "url": "https://www.ticketmaster.es/event/muse-tickets/31931?language   =es-es",
        "image": "https://s1.ticketm.net/img/tat/dam/a/6e4/ee7b835f-6caf-48e7-9958-d766e0f656e4_1749681_CUSTOM.jpg",
        "date": "2022-09-08",
        "status": "onsale",
        "time": "22:15:00",
        "genrename": "Rock",
        "priceMax": 73.50,
        "Location": "Estadio Abanca Balaídos",
        "city": "Vigo",
        "country": "España",
        "address": "Av. de Balaídos, s/n, 36210 Vigo, España",
       "category": "Conciertos",
    },
    {
        "image":"https://s1.ticketm.net/img/tat/dam/a/23f/464ff41c-1fc6-4276-b8f4-d07e0599923f_1633501_CUSTOM.jpg",
        "name": "Sigur Rós",
        "id": "Z698xZ2q23126",
        "descripcion":" Los islandeses, además de repasar los éxitos de sus 25 años de carrera, presentarán algunas de las canciones del que será su nuevo álbum",
        "date": "2022-09-29",
        "status": "onsale",
        "time": "21:00.00",
        "priceMax": 56.50,
        "genrename": "Rock",
        "Location": "WiZink Center",
        "city": "Madrid",
        "address": "Av. Felipe II, s/n",
        "category": "Conciertos",
        "url":"https://www.ticketmaster.es/event/sigur-ros-entradas/30013"
            
    }
    
    

]



export default eventos