var data = {
    title : 'This is Real Vue.js 2',
    items : [{ name : 'Banana' , checked : true }
            ,{ name : 'Fine Apple' , checked : false }] ,
    newItem : ''
};
var ItemsComponent = Vue.extend({
    data : function() {
        return data;
    },
    template : '<ul>' +
    '           <li v-for="item in items" :class="{ \'removed\': item.checked }">' +
    '             <div class="checkbox">' +
    '               <label>' +
    '                 <input type="checkbox" v-model="item.checked"> {{ item.name }}' +
    '               </label>' +
    '             </div>' +
    '           </li>' +
    '         </ul>'
});
var ChangeTitleComponent = Vue.extend({
    data : function() {
        return data;
    },
    template : '<input v-model="title"/>'
});
var AddItemComponent = Vue.extend({
    data : function() {
        return data;
    },
    methods : {
        addItem : function() {
            var text; 
            text = this.newItem.trim();
            if(text){
                this.items.push({
                    name : text, 
                    checked : false
                });
            }
        }
    },
    template : '<div class="input-group">' +
            '<input v-model="newItem" @keyup.enter="addItem" placeholder="add shopping Item " type="text" class="form-control">' +
            '<span class="input-group-btn">'                                                                                          +
            '  <button @click="addItem" class="btn btn-default" type="button">Add!</button>'                                          +
            '</span>'                                                                                                                 +
          '</div>'
    
});
Vue.component('items-component', ItemsComponent);
Vue.component('add-item-component', AddItemComponent);
Vue.component('change-title-component', ChangeTitleComponent);
new Vue({
    el : '#app', 
    data : data
});
