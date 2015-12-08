var EachPost = React.createClass({
    render:function(){
        console.log(this.props.data)
        return(
            <div>
                <h1></h1>
                {
                    this.props.data.map(function(eachContent){
                        return (
                            <div>
                            <div className="article">
                                <h1>{eachContent.title}</h1>
                                <p>By:{eachContent.author}</p>
                                <p>{eachContent.content}</p>
                                <h3>{eachContent.time}</h3>
                           </div>
                                    <p><a href={eachContent.slug}>Read more</a></p>

                           </div>
                            )
                })
                }
            </div>
        )
    }
})

var GetPosts = React.createClass({
    
    componentDidMount:function(){
<<<<<<< HEAD
        
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
		        var content = ''
		        for(var i=0;i<this.state.data.length;i++){
		            content += this.state.data[i].title
		        }
		        return(
		        <div >
		                <div id="Title" >
		                    <br>{content}</br>
		                </div>
		        </div>
		    )
		}
})
ReactDOM.render(<GetPosts />,document.getElementById('app'))
=======
        this.loadPage()
    },
    loadPage:function(){
      $.ajax({
      url: '/get_blogs',
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('#GET Error', status, err.toString());
      }.bind(this)
    });
    },
    getInitialState:function(){
        return{data:[]};
    },
    render:function(){
        return(
        <div>        
            <EachPost data={this.state.data}/>
        </div>
    )
}
})
ReactDOM.render(<GetPosts />,document.getElementById('wrapper'))
>>>>>>> origin/dev-sai
