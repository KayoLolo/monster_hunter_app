//j'utilise un type parce que ce sont ldes valeurs qui ne changereotn pas 
type MonsterType = "Flying Wyvern" | "Walking Dragon" | "Elder Dragon";

//J'ai utilisé la forme d'interface pour décrire les données d'un monstre
export default interface  Monster{
    id: number;
    imgUrl: string;
    name: string;
    type: MonsterType;
    element: string;
    isHunted: boolean;
}

