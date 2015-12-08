var Admin = React.createClass({
	getInitialState:function(){
		return{
			data:{}
		}
	},
	componentDidMount:function(){
		$.get('/get_user_details',function(data){
			this.setState({
				data:data
			}).bind(this)
		})
	},
	render:function(){
		var data = this.state.data
		console.log(data)
		return(
			<form action="/update_profile" method="post">
				<fieldset>
		            <input type="text" name="name" placeholder="Enter your name"/>
		            <input type="text" id="email" name="email" placeholder="Enter your email"/>
	                <input type="submit" id="post" value="Update"/>
	             </fieldset> 
            </form>  
		)
	}
})

ReactDOM.render(<Admin/>,document.getElementById('wrapper'))