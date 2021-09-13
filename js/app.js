new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsOn: false,
    },
    methods: {
        newGame: function() {
            this.gameIsOn = true;
        },
        attack: function() {

        },
        specialAttack: function() {

        },
        healUp: function() {

        },
        giveUp: function() {

        },
    }
})