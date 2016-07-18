var pokemon = angular.module('pokemon', []);
var data = {
    "trainers": [
        {
            "id": 1,
            "name": "Ash",
            "wins":0,
            "pokedex": ["Pikachu"]
        },
        {
            "id": 2,
            "name": "Scott",
            "wins":0,
            "pokedex": ["Bulbasaur"]
        },
        {
            "id": 3,
            "name": "Brock",
            "wins":0,
            "pokedex": ["Pidgey"]
        },
        {
            "id": 4,
            "name": "James",
            "wins":0,
            "pokedex": ["Rattata"]
        },
        {
            "id": 5,
            "name": "Misty",
            "wins":0,
            "pokedex": ["Squirtle"]
        }
    ],
    "pokemon" : [
        {
         "id": 1,
         "name": "Pikachu",
         "hitpoints": 100,
         "damage": 35
        },
        {
         "id": 2,
         "name": "Bulbasaur",
         "hitpoints": 100,
         "damage": 5
        },
        {
         "id": 3,
         "name": "Pidgey",
         "hitpoints": 100,
         "damage": 35
        },
        {
         "id": 4,
         "name": "Rattata",
         "hitpoints": 100,
         "damage": 35
        },
        {
         "id": 5,
         "name": "Squirtle",
         "hitpoints": 100,
         "damage": 35
        }
    ]
}
pokemon.service('dataService', function () {

    this.getTrainer = function () {
        var data = {
            "trainers": [
                {
                    "id": 1,
                    "name": "Ash",
                    "wins": 0,
                    "pokedex": [1]
                },
                {
                    "id": 2,
                    "name": "Scott",
                    "wins": 0,
                    "pokedex": [2]
                },
                {
                    "id": 3,
                    "name": "Brock",
                    "wins": 0,
                    "pokedex": [3]
                },
                {
                    "id": 4,
                    "name": "James",
                    "wins": 0,
                    "pokedex": [4]
                },
                {
                    "id": 5,
                    "name": "Misty",
                    "wins": 0,
                    "pokedex": [5]
                }
            ]
        }
        return data
    };

    this.getPokemonById = function () {
        var data = {
            "pokemon": [
                {
                    "id": 1,
                    "name": "Pikachu",
                    "hitpoints": 100,
                    "damage": 35
                },
                {
                    "id": 2,
                    "name": "Bulbasaur",
                    "hitpoints": 100,
                    "damage": 5
                },
                {
                    "id": 3,
                    "name": "Pidgey",
                    "hitpoints": 100,
                    "damage": 35
                },
                {
                    "id": 4,
                    "name": "Rattata",
                    "hitpoints": 100,
                    "damage": 35
                },
                {
                    "id": 5,
                    "name": "Squirtle",
                    "hitpoints": 100,
                    "damage": 35
                }
            ]
        }
        return data
    };
});


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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUuanMiLCJkYXRhLi5qcyIsImRhdGEuc2VydmljZS5qcyIsImdhbWUuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcG9rZW1vbiA9IGFuZ3VsYXIubW9kdWxlKCdwb2tlbW9uJywgW10pOyIsInZhciBkYXRhID0ge1xyXG4gICAgXCJ0cmFpbmVyc1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkFzaFwiLFxyXG4gICAgICAgICAgICBcIndpbnNcIjowLFxyXG4gICAgICAgICAgICBcInBva2VkZXhcIjogW1wiUGlrYWNodVwiXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlNjb3R0XCIsXHJcbiAgICAgICAgICAgIFwid2luc1wiOjAsXHJcbiAgICAgICAgICAgIFwicG9rZWRleFwiOiBbXCJCdWxiYXNhdXJcIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiAzLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJCcm9ja1wiLFxyXG4gICAgICAgICAgICBcIndpbnNcIjowLFxyXG4gICAgICAgICAgICBcInBva2VkZXhcIjogW1wiUGlkZ2V5XCJdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogNCxcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiSmFtZXNcIixcclxuICAgICAgICAgICAgXCJ3aW5zXCI6MCxcclxuICAgICAgICAgICAgXCJwb2tlZGV4XCI6IFtcIlJhdHRhdGFcIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiA1LFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJNaXN0eVwiLFxyXG4gICAgICAgICAgICBcIndpbnNcIjowLFxyXG4gICAgICAgICAgICBcInBva2VkZXhcIjogW1wiU3F1aXJ0bGVcIl1cclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgXCJwb2tlbW9uXCIgOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgIFwibmFtZVwiOiBcIlBpa2FjaHVcIixcclxuICAgICAgICAgXCJoaXRwb2ludHNcIjogMTAwLFxyXG4gICAgICAgICBcImRhbWFnZVwiOiAzNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgIFwibmFtZVwiOiBcIkJ1bGJhc2F1clwiLFxyXG4gICAgICAgICBcImhpdHBvaW50c1wiOiAxMDAsXHJcbiAgICAgICAgIFwiZGFtYWdlXCI6IDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgXCJpZFwiOiAzLFxyXG4gICAgICAgICBcIm5hbWVcIjogXCJQaWRnZXlcIixcclxuICAgICAgICAgXCJoaXRwb2ludHNcIjogMTAwLFxyXG4gICAgICAgICBcImRhbWFnZVwiOiAzNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICBcImlkXCI6IDQsXHJcbiAgICAgICAgIFwibmFtZVwiOiBcIlJhdHRhdGFcIixcclxuICAgICAgICAgXCJoaXRwb2ludHNcIjogMTAwLFxyXG4gICAgICAgICBcImRhbWFnZVwiOiAzNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICBcImlkXCI6IDUsXHJcbiAgICAgICAgIFwibmFtZVwiOiBcIlNxdWlydGxlXCIsXHJcbiAgICAgICAgIFwiaGl0cG9pbnRzXCI6IDEwMCxcclxuICAgICAgICAgXCJkYW1hZ2VcIjogMzVcclxuICAgICAgICB9XHJcbiAgICBdXHJcbn0iLCJwb2tlbW9uLnNlcnZpY2UoJ2RhdGFTZXJ2aWNlJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHRoaXMuZ2V0VHJhaW5lciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICAgICAgXCJ0cmFpbmVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkFzaFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwid2luc1wiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicG9rZWRleFwiOiBbMV1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlNjb3R0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ3aW5zXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwb2tlZGV4XCI6IFsyXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQnJvY2tcIixcclxuICAgICAgICAgICAgICAgICAgICBcIndpbnNcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcInBva2VkZXhcIjogWzNdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogNCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJKYW1lc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwid2luc1wiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicG9rZWRleFwiOiBbNF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiA1LFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1pc3R5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ3aW5zXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwb2tlZGV4XCI6IFs1XVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkYXRhXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZ2V0UG9rZW1vbkJ5SWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIFwicG9rZW1vblwiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlBpa2FjaHVcIixcclxuICAgICAgICAgICAgICAgICAgICBcImhpdHBvaW50c1wiOiAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkYW1hZ2VcIjogMzVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJ1bGJhc2F1clwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaGl0cG9pbnRzXCI6IDEwMCxcclxuICAgICAgICAgICAgICAgICAgICBcImRhbWFnZVwiOiA1XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMyxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJQaWRnZXlcIixcclxuICAgICAgICAgICAgICAgICAgICBcImhpdHBvaW50c1wiOiAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkYW1hZ2VcIjogMzVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiA0LFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlJhdHRhdGFcIixcclxuICAgICAgICAgICAgICAgICAgICBcImhpdHBvaW50c1wiOiAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkYW1hZ2VcIjogMzVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiA1LFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlNxdWlydGxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJoaXRwb2ludHNcIjogMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGFtYWdlXCI6IDM1XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGFcclxuICAgIH07XHJcbn0pO1xyXG5cclxuIiwicG9rZW1vbi5jb250cm9sbGVyKCdnYW1lQ29udHJvbGxlcicsIGZ1bmN0aW9uICgkc2NvcGUsIGRhdGFTZXJ2aWNlKSB7XHJcblxyXG4gICAgdmFyIGEsIGJcclxuXHJcbiAgICB2YXIgcnVubmluZyA9IGZhbHNlO1xyXG5cclxuICAgIHZhciBnZXRSYW5kb21UcmFpbmVyID0gZnVuY3Rpb24gKG1pbiwgbWF4KSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBkYXRhU2VydmljZS5nZXRUcmFpbmVyKCk7XHJcblxyXG4gICAgICAgIGEgPSBnZXRSYW5kb21UcmFpbmVyKDAsIGRhdGEudHJhaW5lcnMubGVuZ3RoKTtcclxuICAgICAgICBiID0gZ2V0UmFuZG9tVHJhaW5lcigwLCBkYXRhLnRyYWluZXJzLmxlbmd0aCk7XHJcblxyXG4gICAgICAgIC8vICBjb25zb2xlLmxvZyhkYXRhLnRyYWluZXJzW3RyYWluZXJBXSwgZGF0YS50cmFpbmVyc1t0cmFpbmVyQl0pXHJcblxyXG4gICAgICAgIHRyYWluZXJBID0gZGF0YS50cmFpbmVyc1thXVxyXG4gICAgICAgIHRyYWluZXJCID0gZGF0YS50cmFpbmVyc1tiXVxyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0cmFpbmVyQS5wb2tlZGV4WzBdKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRyYWluZXJCLnBva2VkZXhbMF0pXHJcbiAgICAgXHJcbiAgICAgICAgcG9rZW1vbiA9IGRhdGFTZXJ2aWNlLmdldFBva2Vtb25CeUlkKCk7XHJcblxyXG4gICAgICAgIHZhciBwb2tlbW9uRGF0YSA9IGRhdGEucG9rZW1vblswXVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhwb2tlbW9uRGF0YSlcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgICRzY29wZS5ydW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHJ1bm5pbmcpIHtcclxuICAgICAgICAgICAgLy8gZG8gZnVuY3Rpb24gdG8gcmVkdWNlIGhpdHBvaW50cyBvbiBwb2tlbW9uICAgICAgXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHJ1bm5pbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBpbml0KCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG59KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
