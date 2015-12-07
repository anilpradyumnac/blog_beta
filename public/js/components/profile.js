var Profile = React.createClass({
	
	render:function(){
		return(
			<form action="/update_profile" method="post">
				<fieldset>
		            <input type="text" name="name" placeholder="Enter your name"/>
		            <input type="text" id="email" ref="title" name="title" placeholder="Enter your email"/>
	                <input type="submit" id="post" value="Update"/>
	             </fieldset> 
            </form>  
		)
	}
})

ReactDOM.render(<Profile/>,document.getElementById('wrapper'))