var React = require('react');








var SearchResults = React.createClass({

    /*JSX PATTERN FOR LISTS*/
    /*
    render: function() {
        function item(itemText) {
            return <li>{itemText}</li>;
        };
        return <ul>{this.props.items.map(item)}</ul>;
    },
    */

    render: function(){

        console.log('RENDER RESULTS');
        console.log(this.props.results);

        function item(result) {

            /*FORMAT DATE*/
            var date = moment(result.pub_date).format('lll');

            return(
                <li className="list-group-item" key={result._id}>
                    <div className="btn-group pull-right">
                        <a className="btn btn-default" href={result.web_url} target="_blank">View Article</a>
                        <a className="btn btn-primary">Save</a>
                    </div>
                    <h4><em>{result.headline.main}</em></h4>
                    <p>{date}</p>
                </li>
            )
        }

        return(
                <ul className="list-group">
                    {this.props.results.map(item)}
                </ul>
            )
    }
});

module.exports = SearchResults;