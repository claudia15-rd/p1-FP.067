import { Injectable } from '@angular/core';
import {Player} from "../model/player";

@Injectable({
  providedIn: 'root'
})

export class DatosPlayersService {

  players: Player[] = [{
    id: 1,
    nombre: 'Juan Carlos Navarro',
    num: 7,
    posicion: "Escoltas",
    edad: "43",
    anillos: false,
    descripcion: "Juan Carlos Navarro Feijoo (San Feliu de Llobregat, Barcelona, 13 de junio de 1980), es un exbaloncestista español que disputó 20 temporadas en la ACB y una más en la NBA. Con 1,93 metros de altura, jugaba como escolta. Actualmente ocupa el cargo de director general de la sección de baloncesto del Fútbol Club Barcelona. Desarrolló casi toda su carrera deportiva en el Barcelona de la ACB (1998-2007 y 2008-2018), club del que fue canterano y posteriormente capitán, con el que logró 23 títulos, entre los que destacan ocho Ligas, siete Copas, cinco Supercopas y dos Euroligas,1​ siendo con 4152 puntos, el máximo anotador histórico de la Euroliga durante varios años hasta ser superado por el griego Vasileios Spanoulis en enero de 2020.2​ Disputó la temporada 2007/08 en los Memphis Grizzlies de la NBA, junto a su compatriota Pau Gasol.",
    img: '../assets/img/Juan_Carlos_Navarro.jpg',
    video: '../assets/video/Juan_Carlos_Navarro.mp4'
  },
  {
    id: 2,
    nombre: 'Pau Gasol',
    num: 16,
    posicion: "Ala-pivot",
    edad: "43",
    anillos: "2 (2009, 2010)",
    descripcion: "Pau Gasol Sáez (Barcelona; 6 de julio de 1980)​ es un exjugador español de baloncesto que disputó 18 temporadas en la NBA, donde fue dos veces campeón, y otras 3 en el FC Barcelona. Con 2,13 metros de altura jugaba en la posición de ala-pívot. Pau es ampliamente considerado como el mejor jugador español de todos los tiempos, entre los mejores europeos que han jugado en la NBA y uno de los jugadores FIBA más determinantes de la historia. Pau se convirtió en el segundo español en jugar en la NBA tras Fernando Martín, siendo el primero en ser elegido para jugar un All-Star Game de la NBA (Houston 2006), en clasificarse para los playoffs (con Memphis Grizzlies en 2003-04), y en conseguir el campeonato de la NBA (en dos ocasiones con Los Angeles Lakers en 2008-09 y 2009-10). Además, fue el primer jugador no estadounidense en ser nombrado Rookie del Año de la NBA (en 2002). ",
    img: '../assets/img/Pau_Gasol.jpg',
    video: '../assets/video/Pau_Gasol.mp4'
  },
  {
    id: 3,
    nombre: 'Marc Gasol',
    num: 	33,
    posicion: "Pivot",
    edad: "39",
    anillos: "1 (2019)",
    descripcion: "Marc Gasol Sáez (Barcelona; 29 de enero de 1985) es un exjugador español de baloncesto que disputó 20 temporadas como profesional. Con 2,11 metros de altura jugaba en la posición de pívot. Fue jugador de la NBA durante 13 temporadas consecutivas.1​ Entre sus mayores logros está el título de campeón logrado el 13 de junio de 2019 con los Toronto Raptors, el título individual de mejor defensor de la NBA en 2013, su inclusión en el mejor quinteto de la liga en 2015, sus tres selecciones para el partido el All-Star (en 2012, 2015 y 2017) y los numerosos récords personales logrados en su primera franquicia, los Memphis Grizzlies.2​ Tras su última temporada en Los Ángeles Lakers, Marc dejó la NBA con unos registros de 990 partidos jugados entre temporada regular play-off en 3 franquicias diferentes.​ ",
    img: '../assets/img/Marc_Gasol.jpg',
    video: '../assets/video/Marc_Gasol.mp4'
  },
  {
    id: 4,
    nombre: 'Rudy Fernandez',
    num: 	33,
    posicion: "Alero",
    edad: "39",
    anillos: false,
    descripcion: "Rodolfo 'Rudy' Fernández Farrés (Palma de Mallorca; 4 de abril de 1985) es un baloncestista español que pertenece a la plantilla del Real Madrid de la Liga ACB. Con 1,96 metros de estatura, juega indistintamente como escolta o alero. Es internacional absoluto con España desde 2004, y con la selección se ha proclamado, entre otros éxitos, bicampeón mundial en 2006 y 2019, tetracampeón continental en 2009, 2011, 2015 y 2022, doble subcampeón olímpico en Pekín 2008 y Londres 2012, y bronce en Río 2016.",
    img: '../assets/img/Rudy_Fernandez.jpg',
    video: '../assets/video/Rudy_Fernandez.mp4'
  },
  {
    id: 5,
    nombre: 'Ricky Rubio',
    num: 	9,
    posicion: "Base",
    edad: "33",
    anillos: false,
    descripcion: "Ricard 'Ricky' Rubio Vives (Masnou, Barcelona, 21 de octubre de 1990), es un jugador de baloncesto español que pertenece a la plantilla del FC Barcelona de la Liga ACB y la Euroliga. Con 1,88 metros de altura, juega en la posición de base. Es considerado un gran jugador de equipo, sobre todo por su habilidad para repartir asistencias y facilitar que otros compañeros encesten.1​ Aunque su principal punto débil es el lanzamiento en suspensión (fue considerado uno de los tiradores menos fiables de la liga norteamericana por el periódico local de Minnesota en 2015)2​ ha mejorado sus estadísticas y en los playoffs ha superado el promedio de 15 puntos por partido. ",
    img: '../assets/img/RickyRubio.jpg',
    video: '/assets/video/RickyRubio.mp4'
  }];

newPlayer: any = {};

  addPlayer() {
  this.players.push(this.newPlayer);
  this.newPlayer = {};
  }

  getPlayers() {
  return this.players;
  }

  getPlayerById(id:number){
  return this.players.find(player => player.id === id);
  }

  updatePlayer(index: number, updatedPlayer: any) {
  this.players[index] = updatedPlayer;
  }

  deletePlayer(index: number) {
  this.players.splice(index, 1);
  }
}
