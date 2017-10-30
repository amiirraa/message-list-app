import React, { Component } from 'react';

function ListItem(props) {
    return <li>{props.value}</li>;
}
class Message extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        var commentTxt = <p>{this.props.children}</p>;
        return (
                <li>
                {commentTxt}
                <button onClick={this.props.fnRemove} className="btn btn-danger">Delete</button>
                </li>
                );
    }
}


class ListMessage extends Component {

    constructor(props) {
        super(props);
        //initialize the state
        this.state = {messages: props.messages};
        this.state = {
        numElems: 2,

        //This is a list to test
        messages: [
              {"id": 0, "text": "Message 1", "vis": "public"},
              {"id": 1, "text": "Message 2", "vis": "public"}
              ],
        newText: ""
        };
        
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        this.removeMessage = this.removeMessage.bind(this);
        this.addMessage = this.addMessage.bind(this);

    }
    
    componentDidMount() {
    }
    
    componentWillUnmount() {
    }
    handleClick() {
    }
    
    removeMessage (messageID) {

        var newListMessages = this.state.messages.filter((val) => {return val.id != messageID; });
        this.setState({messages: newListMessages});
    }

    
    addMessage(evt) {
        // New id
        var messageID = this.state.numElems++;
         //Adding the message
        this.setState({messages:
                      this.state.messages.concat(
                                            {"numElems": messageID, "id": messageID, "text": this._input.value, "vis": this._public.value}
                                            )});

             this.setState({messages: this.state.messages.filter(function (el) {
    return el.vis == "public";
  })});
    }

    
    render() {
        
        var lstMessages = this.state.messages.map((message, idx) => {
                                          return (
                                                  <Message key={message.id}
                                                  idx={message.idx}
                                                  fnRemove={this.removeMessage.bind(this, message.id)}
                                                   >{message.text}</Message>
                                                  )
                                          });
        return (
                <div id="messageDiv">
                <ul>
                {lstMessages}
                </ul>
                <br />
                <div className="col-sm-10">
                 <div className="row">
                  <div className="col-sm-6 col-sm-offset-4 inputForm">
                  <label>Visibility :
                  <input type="text" placeholder="public or private" ref={v => this._public =v} className="form-control"  /></label>
                  </div>
                </div>
                <label>Content :</label>
                <input type="text" placeholder="your message" ref={c => this._input = c} className="form-control" /><br />
                <button onClick={this.addMessage} className="btn btn-success">Send</button>
                </div>
                 </div>
                );

        }

    }
export default ListMessage;