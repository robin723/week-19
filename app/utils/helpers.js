var axios = require('axios');

var helpers = {
	getSearchResults: function(topic,yearStart,yearEnd) {

		/*NYT ARTICLE SEARCH URI STRUCTURE*/
		var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
		url += '?' + $.param({
				'api-key': "1f7c7f95b1c4310e875bb121e74ccb33:15:74629295",
				'q': topic,
				'begin_date': yearStart + "0000",
				'end_date': yearEnd + "1231",
			});

		console.log(url);

		return axios.get(url)
			.then(function(result){
				return {
					results: result.data.response.docs
				}
			})
	}

};

module.exports = helpers;