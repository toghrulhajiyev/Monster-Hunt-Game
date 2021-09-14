new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsOn: false,
        logs: [],
        points: {
            player_attack: 10,
            player_special_attack: 25,
            player_heal_up: 20,
            monster_attack: 15
        },
        logTexts: {
            atk_text: 'Player attack',
            special_atk: 'Player special attack',
            heal_up: 'Player healed up',
            give_up: 'Player gave up',
            monster_atk: 'Monster attack'
        },
    },
    methods: {
        newGame: function() {
            this.gameIsOn = true;
        },
        playerAttack: function(atkPoint, atkText) {
            let attackPoint = Math.ceil(Math.random() * atkPoint);
            this.monsterHealth -= attackPoint;
            this.addToLog({turn: 'Player', text: atkText + '(' + attackPoint + ')'});
            this.monsterAttack();
        },
        healUp: function() {
            let healPoint = Math.ceil(Math.random() * this.points.player_heal_up);
            this.playerHealth += healPoint;
            this.addToLog({turn: 'Player', text: this.logTexts.heal_up + '(' + healPoint + ')'});

            this.monsterAttack();
        },
        giveUp: function() {
            this.playerHealth = 0;
            this.addToLog({turn: 'Player', text: this.give_up});
        },
        monsterAttack: function() {
            let attackPoint = Math.ceil(Math.random() * this.points.monster_attack);
            this.playerHealth -= attackPoint;
            this.addToLog({turn: 'Monster', text: this.logTexts.monster_atk + '(' + attackPoint + ')'});

        },
        addToLog: function(log) {
            this.logs.push(log);
        },
        clearLogs: function(arr) {
            arr.splice(0, arr.length);
        },
    },
    watch: {
        playerHealth: function(value) {
            if(value <= 0) {
                this.playerHealth = 0;

                if(confirm('You lost the game. Wanna retry?')) {
                    this.playerHealth = 100;
                    this.monsterHealth = 100;
                    this.clearLogs(this.logs);
                    
                } else {
                    this.playerHealth = 100;
                    this.monsterHealth = 100;
                    this.gameIsOn = false;
                    this.clearLogs(this.logs);
                    
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
                    this.clearLogs(this.logs);
                    
                } else {
                    this.playerHealth = 100;
                    this.monsterHealth = 100;
                    this.gameIsOn = false;
                    this.clearLogs(this.logs);

                }
            }
        }
    },
    computed: {
        userProgress: function() {
            return {
                width: this.playerHealth + '%',
            }
        },
        monsterProgress: function() {
            return {
                width: this.monsterHealth + '%',
            }
        }
    }
})