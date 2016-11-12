var React = require('react');








var SearchQuery = React.createClass({

    handleNewQuerySubmit: function(e) {

        /*PREVENT PAGE REFRESH*/
        e.preventDefault();

        /*GET FORM VALUES*/
        var topicValue = this.refs.topicInput.value;
        var yearStartValue = this.refs.yearStartInput.value.toString();
        var yearEndValue = this.refs.yearEndInput.value.toString();

        /*CLEAR FORM VALUES*/
        this.refs.topicInput.value = '';
        this.refs.yearStartInput.value = '';
        this.refs.yearEndInput.value = '';

        /*PASS FORM VALUES TO PARENT*/
        this.props.submitQuery(topicValue,yearStartValue,yearEndValue);

    },

    render: function() {
        return (
            <form onSubmit={this.handleNewQuerySubmit}>
                <div className="form-group">
                    <h4 className=""><strong>Topic</strong></h4>
                    <input type="text" className="form-control " ref="topicInput" />
                    <h4 className=""><strong>Start Year</strong></h4>
                    <input type="number" className="form-control " ref="yearStartInput" />
                    <h4 className=""><strong>End Year</strong></h4>
                    <input type="number" className="form-control " ref="yearEndInput" />
                </div>
                <div className="pull-right">
                    <button type="submit" className="btn btn-danger"><h4>Submit</h4></button>
                </div>
            </form>
        )
    }
});

module.exports = SearchQuery;