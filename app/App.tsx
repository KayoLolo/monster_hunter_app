import { ScrollView, Text } from "react-native";
import MonsterCard from "./MonsterCard";
import Monster from "./types";


export default function App() {
    const rathalos : Monster = {
            id: 1,
            name: "Rathalos",
            type: "Flying Wyvern",
            element: "Fire",
            imgUrl: "https://www.ssbwiki.com/images/4/48/Rathalos_SSBU.png?27494a"
    };

    const rathian : Monster = {
            id: 2,
            name: "Rathalos",
            type: "Flying Wyvern",
            element: "Poison",
            imgUrl: "https://www.ssbwiki.com/images/4/48/Rathalos_SSBU.png?27494a"
    };

    const nargacuga : Monster = {
            id: 3,
            name: "Rathalos",
            type: "Flying Wyvern",
            element: "Fire",
            imgUrl: "https://www.ssbwiki.com/images/4/48/Rathalos_SSBU.png?27494a"
    };

    const tigrex : Monster = {
            id: 4,
            name: "Rathalos",
            type: "Flying Wyvern",
            element: "Fire",
            imgUrl: "https://www.ssbwiki.com/images/4/48/Rathalos_SSBU.png?27494a"
    };

    const zinogre : Monster = {
            id: 5,
            name: "Rathalos",
            type: "Flying Wyvern",
            element: "Thunder",
            imgUrl: "https://www.ssbwiki.com/images/4/48/Rathalos_SSBU.png?27494a"
    };

    const valstrax : Monster = {
            id: 10,
            name: "Rathalos",
            type: "Flying Wyvern",
            element: "Fire",
            imgUrl: "https://www.ssbwiki.com/images/4/48/Rathalos_SSBU.png?27494a"
    };

    const anjanath : Monster = {
            id: 6,
            name: "Rathalos",
            type: "Walking Dragon",
            element: "Fire",
            imgUrl: "https://www.ssbwiki.com/images/4/48/Rathalos_SSBU.png?27494a"
    };

    const kushala : Monster = {
            id: 7,
            name: "Rathalos",
            type: "Elder Dragon",
            element: "Wind",
            imgUrl: "https://www.ssbwiki.com/images/4/48/Rathalos_SSBU.png?27494a"
    };

    const teostra : Monster = {
            id: 8,
            name: "Rathalos",
            type: "Elder Dragon",
            element: "Fire",
            imgUrl: "https://www.ssbwiki.com/images/4/48/Rathalos_SSBU.png?27494a"
    };

    const fatalis : Monster = {
            id: 9,
            name: "Rathalos",
            type: "Elder Dragon",
            element: "Fire",
            imgUrl: "https://www.ssbwiki.com/images/4/48/Rathalos_SSBU.png?27494a"
    };

    return(
        
        <ScrollView>
            <Text>Bienvenu sur mon app de Monstre</Text>
            {/* <Image source={{ uri: rathalos.imgUrl }} style={{width: 50, height : 50}}/>
            <Text>Name: {rathalos.name}</Text>
            <Text>Type: {rathalos.type}</Text>
            <Text>Element: {rathalos.element}</Text> */}
            <MonsterCard monster={rathalos}/>
            <MonsterCard monster={valstrax}/>
            <MonsterCard monster={zinogre}/>
            <MonsterCard monster= {tigrex}/>
            <MonsterCard monster = {nargacuga}/>
            <MonsterCard monster= {rathian}/>
            <MonsterCard monster={anjanath}/>
            <MonsterCard monster={kushala}/>
            <MonsterCard monster={teostra}/>
            <MonsterCard monster={fatalis} />
        </ScrollView>
        
            
    );
}