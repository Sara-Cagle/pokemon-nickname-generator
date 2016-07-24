class Pokemon{
	name: string;
	types: Array<string>;
	custom: Array<string>;
	dexNum: number;
	constructor(name, types, custom ){
		this.name = name;
		this.types = types;
		this.custom = custom;
	}
}

//interface Pokemon{
	
//}

let pokemonCustList = {
	Bulbasaur: ["Fru-fru", "Bulba", "Saur"],
	Ivysaur: ["Ivy, Saur"],
	Venusaur: ["Venuh, Saur"],
	Charmander: ["Char", "Mander"],
	Charmeleon: ["Char", "Meleon", "Million"],
	Charizard: ["Char", "Zard", "Lizard"],
	Squirtle: ["Squirt", "Squirty", "Cool", "Turtle", "Squirrel"],
	Wartortle: ["War", "Tortle", "Turtle"],
	Blastoise: ["Blast", "Blaster", "Cannon"],
	Caterpie: ["Cat", "Pie", "Faterpie"],
	Metapod: ["Harden", "Meta", "Pod", "Worthless"],
	Butterfree: ["Butter", "Free", "Freedom", "Byebye"],
	Weedle: ["Weed"],
	Kakuna: ["Ka", "Kuna", "Harden"],
	Beedrill: ["Bee", "Drill", "Wasp", "Hornet", "Big Dick Bee", "Big Dick"],
	Pidgey: [],
	Pidgeotto: [],
	Pidgeot: [],
	Rattata: [],
	Raticate: [],
	Spearow: [],
	Fearow: [],
	Ekans: [],
	Arbok: [],
	Pikachu: [],
	Raichu: [],
	Sandshrew: [],
	Sandslash: [],
	Nidoranf: [],
	Nidorina: [],
	Nidoqueen: [],
	Nidoranm: [],
	Nidorino: [],
	Nidoking: [],
	Clefairy: [],
	Clefable: [],
	Vulpix: [],
	Ninetales: [],
	Jigglypuff: [],
	Wigglytuff: [],
	Zubat: [],
	Golbat: [],
	Oddish: [],
	Gloom: [],
	Vileplume: [],
	Paras: [],
	Parasect: [],
	Venonat: [],
	Venomoth: [],
	Diglett: [],
	Dugtrio: [],
	Meowth: [],
	Persian: [],
	Psyduck: [],
	Golduck: [],
	Mankey: [],
	Primeape: [],
	Growlithe: [],
	Arcanine: [],
	Poliwag: [],
	Poliwhirl: [],
	Poliwrath: [],
	Abra: [],
	Kadabra: [],
	Alakazam: [],
	Machop: [],
	Machoke: [],
	Machamp: [],
	Bellsprout: [],
	Weepinbell: [],
	Victreebel: [],
	Tentacool: [],
	Tentacruel: [],
	Geodude: [],
	Graveler: [],
	Golem: [],
	Ponyta: [],
	Rapidash: [],
	Slowpoke: [],
	Slowbro: [],
	Magnemite: [],
	Magneton: [],
	Farfetchd: [],
	Doduo: [],
	Dodrio: [],
	Seel: [],
	Dewgong: [],
	Grimer: [],
	Muk: [],
	Shellder: [],
	Cloyster: [],
	Gastly: [],
	Haunter: [],
	Gengar: [],
	Onix: [],
	Drowzee: [],
	Hypno: [],
	Krabby: [],
	Kingler: [],
	Voltorb: [],
	Electrode: [],
	Exeggcute: [],
	Exeggutor: [],
	Cubone: [],
	Marowak: [],
	Hitmonlee: [],
	Hitmonchan: [],
	Lickitung: [],
	Koffing: [],
	Weezing: [],
	Rhyhorn: [],
	Rhydon: [],
	Chansey: [],
	Tangela: [],
	Kangaskhan: [],
	Horsea: [],
	Seadra: [],
	Goldeen: [],
	Seaking: [],
	Staryu: [],
	Starmie: [],
	Mrmime: [],
	Scyther: [],
	Jynx: [],
	Electabuzz: [],
	Magmar: [],
	Pinsir: [],
	Tauros: [],
	Magikarp: [],
	Gyarados: [],
	Lapras: [],
	Ditto: [],
	Eevee: [],
	Vaporeon: [],
	Jolteon: [],
	Flareon: [],
	Porygon: [],
	Omanyte: [],
	Omastar: [],
	Kabuto: [],
	Kabutops: [],
	Aerodactyl: [],
	Snorlax: [],
	Articuno: [],
	Zapdos: [],
	Moltres: [],
	Dratini: [],
	Dragonair: [],
	Dragonite: [],
	Mewtwo: [],
	Mew: []

};

/**
* A list of all types and their corresponding nicknames.
*/
let typeList = {
	normal: [],
	fire: [],
	water: [],
	electric: [],
	grass: ["Leafy", "Vines", "Green", "Eco", "Cash", "Flower", "Gra"],
	ice: [],
	fighting: [],
	poison: ["Venom", "Poison", "Dart", "Toxic", "Koga", "Po"],
	ground: [],
	flying: [],
	psychic: [],
	bug: [],
	rock: [],
	ghost: [],
	dragon: [],
	dark: [],
	steel: [],
	fairy: []
};

let pokemonList: Array<Pokemon> = [];


function makePokemon(){
	let types = [typeList.grass, typeList.poison];
	let custom =["Fru-fru", "Bulba", "Bulby", "Dino", "Buba", "Saur"];
	pokemonList.push(new Pokemon("Bulbasaur", types, custom, 1));
}

/**
* Takes in a Pokemon and creates a nickname for them.
* Nicknames are half type-based, half custom-based.
* If a Pokemon has multiple types, one type is randomly chosen.
*/
function makeNickname(pokemon: Pokemon){
	let numOfTypes: number = pokemon.types.length;
	let randTypeIndex: number = Math.floor(Math.random()*numOfTypes);
	let typeNicknameList = pokemon.types[randTypeIndex];
	console.log("Picking a type nickname from: "+JSON.stringify(typeNicknameList));


	let numOfTypeNicknames: number = typeNicknameList.length;
	let randTypeNickname: string = typeNicknameList[Math.floor(Math.random()*numOfTypeNicknames)];

	let numOfCustNicknames: number = pokemon.custom.length;
	let randCustNickname: string = pokemon.custom[Math.floor(Math.random()*numOfCustNicknames)];
	return randTypeNickname+" "+randCustNickname;
}

function printNicknames(){
	document.getElementById("list").innerHTML = makeNickname(pokemonList[0]);
}