import React from 'react';

const News = (props) => (
    <div className="row">
        <div  className="col-md-4 offset-md-4">
            <ul className="list-group">
            <li className="list-group-item active text-center">
                <h3>Notícias LabRBS</h3>
            </li>
            {props.news.map((n, i) => (
                <li className="list-group-item list-group-item-action" key={i}>{n.title}</li>)
            )}
            </ul>
        </div>
    </div>
    
)

export default News

