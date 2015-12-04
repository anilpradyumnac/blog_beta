var Header = React.createClass({
	render:function(){
		return(
		<div>
			<header>
		    <ul>
		        <li><a href="">Home</a></li>
		        <li><a href id="digits-sdk" onclick="onLoginButtonClick()">Sign In</a></li>
		    </ul>
			    <h1>Geekskool Blog</h1>
			    <h3>Write.  Share.  Learn</h3>
			</header>
		</div>
		)
	}
})

var Footer = React.createClass({
	render:function(){
		return(
			    <footer>
        Powered by Geekskool.
    </footer>
		)
	}
})


var Body = React.createClass({
	render:function(){
		return(
			<div>
				<Header/>
				<Footer/>
			</div>
		)
	}
})

ReactDOM.render(<Body />,document.getElementById('app'))