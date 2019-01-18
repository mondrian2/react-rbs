import React, {Component} from 'react';

class NewsComponent extends Component {
    constructor(){
        super()
        this.state={
            news: [],
            input: '',
        }
    }
    onChangeHandler(e){
        this.setState({
            input: e.target.value,
        })
    }

    componentDidMount() {
        fetch('https://gist.githubusercontent.com/rlpereira/02af9e714e3bd8e726a837d8af3459f8/raw/b22e22c7884d8aba2e201eec7816ff3c5f8d2f29/news.json')
            .then(results => {
                return results.json()
            })
            .then(data =>{
                this.setState({
                    news: data.news, 
                })
            }
        )
    }

    render (){
        const list = this.state.news
          .filter(d => this.state.input === '' || d.title.includes(this.state.input))
          .map((d, index) => <li key={index}>{d.title}</li>);
  
      return (
        <div className="row">
            <div className="col-md-4 offset-md-4">
                <div class="form-group">
                    <label for="exampleInputEmail1">Filtrar: </label>
                    <input className="form-control" value={this.state.input} type="text"  onChange={this.onChangeHandler.bind(this)}/>
                </div>                
                <ul className="list-group">
                    <li className="list-group-item list-group-item-action active">RBS NewsLab</li>
                    {list.map((n, i) => (
                        <li className="list-group-item list-group-item-action list-unstyled" key={i}><i class="far fa-newspaper"></i> {n}</li>
                        )
                    )}    
                </ul>
            </div>
        </div>)
    }
}

export default NewsComponent