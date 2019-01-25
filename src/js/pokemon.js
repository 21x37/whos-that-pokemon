let axios = require('axios');



const getPokemon = query => {
        axios.get(`https://api.pokemontcg.io/v1/cards?name=${query}`)
    .then(response => {
        data = response.data;
        data = data.cards;
        console.log(data[0]);

    })
    .catch(error => {
        console.log(error.message);
    })
};


module.exports.getPokemon = getPokemon;