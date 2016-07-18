pokemon.controller('gameController', function ($scope, dataService) {

    var a, b

    var running = false;

    var getRandomTrainer = function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var init = function () {
        var data = dataService.getTrainer();

        a = getRandomTrainer(0, data.trainers.length);
        b = getRandomTrainer(0, data.trainers.length);

        //  console.log(data.trainers[trainerA], data.trainers[trainerB])

        trainerA = data.trainers[a]
        trainerB = data.trainers[b]

        // console.log(trainerA.pokedex[0])
        // console.log(trainerB.pokedex[0])
     
        pokemon = dataService.getPokemonById();

        var pokemonData = data.pokemon[0]

        console.log(pokemonData)

    }


    $scope.run = function () {
        if (running) {
            // do function to reduce hitpoints on pokemon      

        } else {
            // running = true;
            init();

        }
    }


});