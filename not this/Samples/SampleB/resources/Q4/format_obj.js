/*
    
Name:   Muhammad Faez Bin Abdul Latiff
Email:  muhammadal.2021

*/


// YOUR CODE GOES HERE
app.component('format_obj', {
        props : ['data'],
        emits : ['event1', 'event2'],
        template:`
        <ul v-if='is_array'>
            <li v-for='(val, idx) of data'>
                [{{idx}}] <format_obj :data="val"></format_obj>
            </li>
        </ul>

        <ul v-if='is_object'>
            <li v-for='(val,key) in data'>
                {{key}} : <format_obj :data="val"></format_obj>
            </li>
        </ul>

        <template v-if='is_literal'>{{data}}</template>
    `,
        
        computed: {
            is_literal(){
                return !this.is_object && !this.is_boolean
            }
            ,
            is_object(){
                if(typeof this.data === 'object'){
                    return true
                }
                return false
            },
            is_array(){
                if(Array.isArray(this.data)){
                    return true
                }
                return false
            },
            is_boolean(){
                if(typeof this.data === 'boolean'){
                    return true
                }
                return false
            }
        }

})