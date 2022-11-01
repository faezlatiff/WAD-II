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
                },
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
        },

      
        attack() {

            // Add Code Here

        },

        specialAttack() {
           
            // Add Code Here
            
        },

        heal() {
           
            // Add Code Here
            
        },

        giveUp() {
            
            // Add Code Here
            
        },
    },
});
const vm = app.mount("#app");
