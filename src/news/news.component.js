import React, {Component} from 'react';
import News from './news';

class NewsComponent extends Component {

    state = {
        news: []
    }

    componentDidMount() {
    fetch('https://gist.githubusercontent.com/rlpereira/02af9e714e3bd8e726a837d8af3459f8/raw/b22e22c7884d8aba2e201eec7816ff3c5f8d2f29/news.json')
            .then(results => {
                return results.json()
            })
            .then(data =>{
                this.setState({
                    news: data.news
                })
            }
        )
    }

    render() {
        return (
            <News  {...this.state} />
        )
    }
}
export default NewsComponent