

var GetPosts = React.createClass({
    
    componentDidMount:function(){
        
        this.loadPage()
        
    },
    loadPage:function(){
        $.get('/get_blogs',function(data){
            console.log('data')
            console.log(data)
            this.setState({data:data})
        }.bind(this))
    },
    getInitialState:function(){
        return({
            data:[{}]
        })
    },
    render:function(){
        console.log('this.state.data')
        for(var i=0;i<this.state.data.length;i++){
            console.log(this.state.data[i].title);
        }
        return(
        <div >
                <div id="Title" >
            test
            <p></p>
                </div>
        </div>
    )
}
})
ReactDOM.render(<GetPosts />,document.getElementById('app'))
