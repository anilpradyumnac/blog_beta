var Profile = React.createClass({
	getInitialState:function(){
		return{
			data:[]
		}
	},
	loadJson:function(){
	$.get('/get_user_details',function(newdata){
		console.log(newdata)
			this.setState({ data:newdata })
	 }.bind(this))
	},
	componentDidMount:function(){
		this.loadJson()
	},
	render:function(){
console.log(this.state.data)
		return(
			<form action="/update_profile" method="post">
				<fieldset>
		           <input type="text" name="name" placeholder={this.state.data.name}/>
		           <input type="text" id="email" name="email" placeholder={this.state.data.email}/>
	                <input type="submit" id="post" value="Update"/>
	             </fieldset> 
            </form>  
		)
	}
})

ReactDOM.render(<Profile/>,document.getElementById('wrapper'))