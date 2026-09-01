import { buscarPokemon } from "./pokeApi";

async function main() {
    const nomeOuId = process.argv[2];

    if (!nomeOuId) {
        console.error("Informe o nome ou ID de um Pokémon.");
        return;
    }

    const pokemon = await buscarPokemon(nomeOuId);

    if (pokemon !== null) {
        console.log(pokemon);
    }
}

main();