import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'


class Item extends Component{
  render(){
    if (this.props.name==='left'){
      return(
        <div className='item'>
            <div className='msg'>{this.props.msg}</div>
            <button onClick={()=>this.props.delitem(this.props.id)}>
              <span role="img" aria-label="emoji">❌</span>
            </button>
            <button onClick={()=>this.props.swapitem(this.props.id)}>▶</button>
        </div>
      )
    }
    else{
      return(
        <div className='item'>
            <button onClick={()=>this.props.swapitem(this.props.id)}>◀</button>
            <button onClick={()=>this.props.delitem(this.props.id)}>
              <span role="img" aria-label="emoji">❌</span>
            </button>
            <div className='msg'>{this.props.msg}</div>
        </div>
      )
    }
  }
}

class List extends Component{
  additem(e, f){
    let inp = e.target.previousElementSibling
    let val = inp.value
    inp.value=''
    if(val.trim()!==''){
      f(val)
    }
    else{
      //alert for no data
    }
  }

  render(){
    let items = this.props.items.slice()
    for (let i in items){
      items[i] = <Item name={this.props.name} 
                        key={i} 
                        id ={i}
                        msg={items[i]} 
                        delitem={this.props.delitem}
                        swapitem={this.props.swapitem}
                  />
    }
    //console.dir(items)


    return (
      <div className='list'>
        <div className='item-box'>{items}</div>
        <div className='add-div'>
          <form onSubmit={e=>e.preventDefault()}>
            <input type='text' spellCheck='false' placeholder='...' />
            <button onClick={(e)=>this.additem(e, this.props.additem)}>add</button>
          </form>
        </div>
      </div>
    )
  }
}

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      llist:['Add','delete'],
      rlist:['And just keep swapping..😁']
    }

    // faltu ki bindings - pr krni pdri h kyoki this is undefined inside function
    this.additemleft = this.additemleft.bind(this);
    this.additemright = this.additemright.bind(this);
    this.delitemleft = this.delitemleft.bind(this);
    this.delitemright = this.delitemright.bind(this);
    this.swapitemleft = this.swapitemleft.bind(this);
    this.swapitemright = this.swapitemright.bind(this);
  }

  additemleft(val){
    let items = this.state.llist.slice()
    items.push(val)
    this.setState({llist:items})
  }
  additemright(val){
    let items = this.state.rlist.slice()
    items.push(val)
    this.setState({rlist:items})
  }
  delitemleft(ind){
    let items = this.state.llist.slice()
    items.splice(ind,1)
    this.setState({llist:items})
  }
  delitemright(ind){
    let items = this.state.rlist.slice()
    items.splice(ind,1)
    this.setState({rlist:items})
  }
  swapitemleft(ind){
    let left = this.state.llist.slice()
    let right = this.state.rlist.slice()
    right.push(left.splice(ind,1)[0])
    this.setState({llist:left, rlist:right})
  }
  swapitemright(ind){
    let left = this.state.llist.slice()
    let right = this.state.rlist.slice()
    left.push(right.splice(ind,1)[0])
    this.setState({llist:left, rlist:right})
  }



  render() {
    return (
      <div id='main'>
        <h1>Swap List</h1>
        <hr />
        <br />
        <div id='box'>
          <List name='left' 
                items={this.state.llist} 
                additem={this.additemleft} 
                delitem={this.delitemleft} 
                swapitem={this.swapitemleft} 
          />
          <List name='right' 
                items={this.state.rlist} 
                additem={this.additemright} 
                delitem={this.delitemright} 
                swapitem={this.swapitemright} 
          />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))