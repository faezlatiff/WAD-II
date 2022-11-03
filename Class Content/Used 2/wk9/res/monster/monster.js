const app = Vue.createApp({
    data() {
        return {
            // START - DO NOT EDIT 
            gameStarted: false,
            buttonSpecialAttack: null,
            buttonDetails: [
                {
                    action: "attack",
                    btnType: "btn-danger",
                    value: "ATTACK",
                    show: true,
                },
                {
                    action: "specialAttack",
                    btnType: "btn-warning",
                    value: "SPECIAL ATTACK",
                    show: true,
                },
                {
                    action: "heal",
                    btnType: "btn-success",
                    value: "HEAL",
                    show: true,
                },
                {
                    action: "giveUp",
                    btnType: "btn-link",
                    value: "GIVE UP",
                    show: true,
                },
            ],
            myHealth: 100,
            monsterHealth: 100,
            statusList: [
                {
                    class: "text-dark",
                    text: "Game hasn't started.",
                }
            ],
            range: [10, 20, 30, 40, 50],
            MONSTER_MAX_ATTACK: 30,
            PLAYER_MAX_ATTACK: 20,
            MAX_HEAL: 30,
            specialAttackCoolDown: 0,
            // END - DO NOT EDIT
        };
    },

    // You may add additional options (e.g. computed) here

    methods: {
        // You may add additional helper methods as you deem fit
      

        start() {
           // Add Code Here
           if(this.statusList.length != 1){
                this.statusList = this.statusList.slice().reverse().pop()
           }
           this.gameStarted = true
        },

        attack() {
            // Add Code Here
            let playerDamage = Math.floor(Math.random()*this.PLAYER_MAX_ATTACK)
            let monsterDamage = Math.floor(Math.random()*this.MONSTER_MAX_ATTACK)
            this.monsterHealth -= playerDamage
            this.myHealth -= monsterDamage
            if(this.specialAttackCoolDown > 0){
                this.specialAttackCoolDown -= 1
            }
            if(checkHealth == 'bothDead'){
                this.statusList.append('A glorious battle. Both of you perish.')
                this.statusList.append('Try again?')
                this.gameStarted = false
            }
        },

        specialAttack() {          
            // Add Code Here
            this.specialAttackCoolDown = 2
        },

        heal() {
            // Add Code Here
            if(this.specialAttackCoolDown > 0){
                this.specialAttackCoolDown -= 1
            }
            
        },

        giveUp() {
            // Add Code Here
            this.gameStarted = false
            this.specialAttackCoolDown = 0
        },
    }, 
    computed: {
        checkHealth(){
            if(this.myHealth <= 0 && this.monsterHealth <= 0){
                return 'bothDead'
            }
            else if(this.myHealth <= 0){
                return 'imDead'
            }
            else if(this.monsterHealth <= 0){
                return 'monsterDead'
            }
            return null
        }
    }
});
const vm = app.mount("#app");
