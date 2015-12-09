var FormBody = React.createClass({
	getInitialState:function(){
		return{
			id:0,
			data_uri: null,
		}
	},
	handleSubmit:function(){
      var title = ReactDOM.findDOMNode(this.refs.title).value
      //var author = ReactDOM.findDOMNode(this.refs.author).value
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
  

  // prevent form from submitting; we are going to capture the file contents
  handleSubmit: function(e) {
    e.preventDefault();
  },

  // when a file is passed to the input field, retrieve the contents as a
  // base64-encoded data URI and save it to the component's state
  handleFile: function(e) {
    var self = this;
    var reader = new FileReader();
    var file = e.target.files[0];

    reader.onload = function(upload) {
      self.setState({
        data_uri: upload.target.result,
      });
    }

    reader.readAsDataURL(file);
		console.log(file)
  },
	//onupload us the following function
	uploadFile: function (e) {

	    var fd = new FormData();    
	    fd.append('file', $('#file')[0].files[0]);;

	    $.ajax({
	        url: '/new_image',
	        data: fd,
	        processData: false,
	        contentType: 'multipart/form-data',
	        type: 'POST',
	        success: function(fd){
	            alert(fd);
	        }
	    });
	    e.preventDefault()
	},
	render:function(){
		return(
			<div>
			<form action="/new_blog" method="post" onSubmit={this.handleSubmit}>
				<fieldset name="slug" ref="slug">
		            <input type="text" id="title" ref="title" name="title" placeholder="Enter the title of the post"/>
	                <textarea id="blog" ref="blog" placeholder="Enter your post" name="blog"></textarea>
									<input type="file" name="pic" accept="image/*" />
									<input type="submit" id="post" ref="submit" value="Post"/>
	      </fieldset> 
      </form>   
      <form action="/new_image" method="post" onSubmit={this.handleSubmit} encType="multipart/form-data">
        <input type="file" id="file" name="file" onChange={this.handleFile} />
				<input type="button" ref="button" value="Upload" onClick={this.uploadFile} />
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