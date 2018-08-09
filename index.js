var vm = new Vue({
    el:"#app",
    
    data:{
        active:0,
        flag:'',
        num:0,
        sign:{
            total:"全部",
            finished:"已完成",
            unfinish:"未完成"
        },
        list:[
            {
                content:"写作业",
                status:"未完成"
            }
        ],
        inputValue:'',
        alreadylist:[],
    },
    computed:{
        s:function(){
            return this.list.filter(function(item){
                return item.status=="已完成"
            }).length
        },
        l:function(){
            return this.list.filter(function(item){
                return item.status=="未完成"
            }).length
        }
    },
    methods:{
        handleBtnClick: function(){
            var newdata = {
                content:this.inputValue,
                status:"未完成"
            }
            this.list.push(newdata)
            // alert(this.inputValue)
            this.inputValue=''
        },
        handleDelete: function(index){
            this.list.splice(index,1)
        },
        handleAlready: function(index){
            this.list[index].status="已完成"
            this.flag = index
        },
        handleDivClick: function(index){
            this.active=index;
            this.num = index;
        }
    },
   
})


