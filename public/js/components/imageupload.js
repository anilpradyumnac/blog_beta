var FileForm = React.createClass({

  // since we are starting off without any data, there is no initial value
  getInitialState: function() {
    return {
      data_uri: null,
    };
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
  // return the structure to display and bind the onChange, onSubmit handlers
  render: function() {
    // since JSX is case sensitive, be sure to use 'encType'
    return (
      <form action="/new_image" method="post" onSubmit={this.handleSubmit} encType="multipart/form-data">
        <input type="file" id="file" name="file" onChange={this.handleFile} />
				<input type="button" ref="button" value="Upload" onClick={this.uploadFile} />
      </form>
    );
  },
});
ReactDOM.render(<FileForm />,document.getElementById('app'))