var EachPost = React.createClass({
    render:function(){
        console.log(this.props.data)
        return(
            <div>
                <h1></h1>
                {
                    this.props.data.map(function(eachContent){
                        return (
                            <div className="wrapper">
                            <div className="article">
                                <h1><a href={eachContent.slug} target="_blank">{eachContent.title}</a></h1>
                                <h3> By : {eachContent.author}   on {eachContent.time}</h3>
                                <p><h4>{eachContent.content}</h4></p>
                           </div>
                                    <p className="line"><a href={eachContent.slug}>Read more</a></p>

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
        this.loadPage()
    },
    loadPage:function(){
      $.ajax({
      url: '/get_blogs',
      dataType: 'json',
      success: function(data) {
        console.log(data)
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
