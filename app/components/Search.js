var React = require('react');

var SearchQuery = require('./SearchQuery');
var SearchResults = require('./SearchResults');
var helpers = require('../utils/helpers');




var Search = React.createClass({

    getInitialState: function() {

        return {
            results: [],

            topic: '',
            yearStart: '',
            yearEnd: ''
        }
    },

    handleQuerySubmit: function(topicValue,yearStartValue,yearEndValue) {

        console.log('QUERY: ' + topicValue + ' ' + yearStartValue + ' ' + yearEndValue);

        /*PASS VALUES TO HELPER FUNCTION*/
        helpers.getSearchResults(topicValue,yearStartValue,yearEndValue)
            .then(function(data){
                this.setState({
                    results: data.results,
                    topic: topicValue,
                    yearStart: yearStartValue,
                    yearEnd: yearEndValue
                })
            }.bind(this));

    },

    render: function(){

        console.log('RENDER SEARCH');

        return(
            <div className="row">
                <div className="col-lg-12">

                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h1 className="panel-title"><strong>
                                <i className="fa fa-newspaper-o" aria-hidden="true"></i>  Query</strong></h1>
                        </div>
                        <div className="panel-body">

                            <SearchQuery submitQuery={this.handleQuerySubmit} />

                        </div>
                    </div>


                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h1 className="panel-title"><strong>
                                <i className="fa fa-list-alt"></i>  Results</strong></h1>
                        </div>
                        <div className="panel-body">

                            <SearchResults results={this.state.results} />

                        </div>
                    </div>
                </div>
              </div>
        )
    }
});

module.exports = Search;