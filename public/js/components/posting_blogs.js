


var GetPosts = React.createClass({
	
	componentDidMount:function(){
		
		this.loadPage()
		
	},
	loadPage:function(){
		$.get('/get_blogs',function(data){
				this.setState({data:data})
			console.log(this.state.data)
		}.bind(this))
	},
	getInitialState:function(){
		return({
			data:{}
		})
	},
	render:function(){
		console.log(this.state.data[1].content)
		return(
		<div >
				<div id="Title" >
			test
			<p>{this.state.data.title}</p>
				</div>
		</div>
	)
}
})
ReactDOM.render(<GetPosts />,document.getElementById('app'))

