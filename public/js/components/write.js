var FormBody = React.createClass({
	getInitialState:function(){
		return{
			id:0
		}
	},
	handleSubmit:function(){
      var title = ReactDOM.findDOMNode(this.refs.title).value
      var author = ReactDOM.findDOMNode(this.refs.author).value
      var blog = ReactDOM.findDOMNode(this.refs.blog).value
	  var slug = title.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-')
	  this.setState({
	  	id: this.state.id + 1
	  }) 
	  var id = this.state.id
	  $.getJSON("static/post.json",function(data){
		var obj = {
			id :id,
			slug:slug,
			title:title,
			description:blog,
		}
		data.push(obj)
		console.log(data)
	})     
	},
	componentDidMount:function(){
		this.handleSubmit()
	},
	render:function(){
		return(
			<div>
			<form action="/new_blog" method="post" onSubmit={this.handleSubmit}>
				<fieldset>
		            <input type="text" id="title" ref="title" name="title" placeholder="Enter the title of the post"/>
	                <textarea id="blog" ref="blog" placeholder="Enter your post" name="blog"></textarea>
	                <input type="submit" id="post" ref="submit" value="Post"/>
	             </fieldset> 
             </form>   
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
			<div className="formwrapper">
				<FormBody/>
			</div>
		)
	}
})

var Main = React.createClass({
	render:function(){
		return(
			<div>
				<Body/>
				<Footer/>
			</div>
		)
	}
})

ReactDOM.render(<Main />,document.getElementById('app'))