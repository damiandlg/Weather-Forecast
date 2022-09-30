const apiKey = "32013e9ea260e4ad54a25c63ea4c16fc";
var useFormEl = $("#searchCity");


/**
 * Local storage Function
 */
var buildSearchHistory = function() {
    var searchHistory = JSON.parse(localStorage.getItem("searchHistory"));
    if (searchHistory == null) {
        // if the search history local variable does not exist then generate the left column with common locations
        searchHistory = ["Dallas","Denver","Miami","Austin","New York","Boston","Los Angeles", "Aspen"];
        localStorage.setItem("searchHistory",JSON.stringify(searchHistory));
    }
    var groupContainer = $(".list-group");
    groupContainer.html("");
    for (i in searchHistory) {
        // generate a list group item for each city in search history
        var buttonEl = $("<button>")
            .addClass("list-group-item list-group-item-action")
            .attr("id", "citySearchList")
            .attr("type", "button")
            .text(searchHistory[i]);
        groupContainer.append(buttonEl);
    }
};
var updateSearchHistory = function(city) {
    var searchHistory = JSON.parse(localStorage.getItem("searchHistory"));
    searchHistory.unshift(city);
    searchHistory.pop();
    localStorage.setItem("searchHistory",JSON.stringify(searchHistory));

    // gather all list items
    var listItems = $(".list-group-item");

    // Update button text
    for (l in listItems) {
        // update text of each item
        listItems[l].textContent = searchHistory[l];
    };
}

var getIndex = function(response) {
    
