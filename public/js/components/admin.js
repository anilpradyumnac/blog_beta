var Profile = React.createClass({
	getInitialState:function(){
		return{
			data:[]
		}
	},
	loadJson:function(){																																																								
	$.get('/get_reg_users',function(newdata){
		console.log(newdata)
			this.setState({ data:newdata })
	 }.bind(this))
	},
	componentDidMount:function(){
		this.loadJson()
	},																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																												
	render:function(){
<<<<<<< HEAD
		console.log(this.state.data)
=======
>>>>>>> origin/dev-sai
		return(
			<form action="/new_user" method="post">
				<input type="text" placeholder="Add a user"/>
				<input type="submit" value="Add"/>
			</form>																																																																																																																																													
		)	
	}
})

ReactDOM.render(<Profile/>,document.getElementById('wrapper'))