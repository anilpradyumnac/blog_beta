var Profile = React.createClass({
	componentDidMount:function(){
		$.get('/get_user_details',function(data){
			alert(data.name)
			alert(data.email)
			alert(data.mobile)
		})
	},
	render:function(){
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

ReactDOM.render(<Profile/>,document.getElementById('wrapper'))