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
            let attackPoint = Math.ceil(Math.random() * 10);
            this.monsterHealth -= attackPoint;
            this.monsterAttack();
        },
        specialAttack: function() {
            let attackPoint = Math.ceil(Math.random() * 25);
            this.monsterHealth -= attackPoint;
            this.monsterAttack();
        },
        healUp: function() {
            let healPoint = Math.ceil(Math.random() * 20);
            this.playerHealth += healPoint;
            this.monsterAttack();
        },
        giveUp: function() {
            this.playerHealth = 0;
        },
        monsterAttack: function() {
            let attackPoint = Math.ceil(Math.random() * 15);
            this.playerHealth -= attackPoint;
        }
    }
})