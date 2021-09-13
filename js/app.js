new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsOn: false,
        logs: [],
    },
    methods: {
        newGame: function() {
            this.gameIsOn = true;
        },
        attack: function() {
            let attackPoint = Math.ceil(Math.random() * 10);
            this.monsterHealth -= attackPoint;
            this.addToLog({turn: 'Player', text: 'Player attack('+ attackPoint +')'});
            this.monsterAttack();
        },
        specialAttack: function() {
            let attackPoint = Math.ceil(Math.random() * 25);
            this.monsterHealth -= attackPoint;
            this.addToLog({turn: 'Player', text: 'Special player attack('+ attackPoint + ')'});

            this.monsterAttack();
        },
        healUp: function() {
            let healPoint = Math.ceil(Math.random() * 20);
            this.playerHealth += healPoint;
            this.addToLog({turn: 'Player', text: 'Player healed up('+ healPoint +')'});

            this.monsterAttack();
        },
        giveUp: function() {
            this.playerHealth = 0;
            this.addToLog({turn: 'Player', text: 'Player gave up'});
        },
        monsterAttack: function() {
            let attackPoint = Math.ceil(Math.random() * 15);
            this.playerHealth -= attackPoint;
            this.addToLog({turn: 'Monster', text: 'Monster attack('+ attackPoint +')'});

        },
        addToLog: function(log) {
            this.logs.push(log);
        },
    },
    watch: {
        playerHealth: function(value) {
            if(value <= 0) {
                this.playerHealth = 0;

                if(confirm('You lost the game. Wanna retry?')) {
                    this.playerHealth = 100;
                    this.monsterHealth = 100;
                } else {
                    this.playerHealth = 100;
                    this.monsterHealth = 100;
                    this.gameIsOn = false;
                }

            } else if(value >= 100) {
                this.playerHealth = 100
            }
        },
        monsterHealth: function(value) {
            if(value <= 0) {
                this.monsterHealth = 0;

                if(confirm('You won the game. Wanna retry?')) {
                    this.playerHealth = 100;
                    this.monsterHealth = 100;
                } else {
                    this.playerHealth = 100;
                    this.monsterHealth = 100;
                    this.gameIsOn = false;
                }
            }
        }
    }
})