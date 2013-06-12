function Search() {
	this.searchInput = null;
	this.searchBtn = null;
	this.searchContent = null;
	this.searchCount = null;
	this.searchTerm = null;
	
	/* allow overide of default values */
	for (var n in arguments[0]) { this[n] = arguments[0][n]; }

	/* get handle(s) and set options */
	this.setup = function() {
		this.searchInput = document.getElementById("search_input");
		this.searchBtn = document.getElementById("search_btn");
		this.searchContent = document.getElementById("search_text").textContent;
		this.searchCount = document.getElementById("search_count");
		this.searchTerm = document.getElementById("search_term");
		return this;
	};

	/* bind events */	 
	this.init = function() {
		var self = this;

		(function(){
	        self.searchBtn.onclick = function(e){ 
	        	e.preventDefault();
	        	self.searchText(self.searchInput.value);
	        } 
	    })();
		return this;
	};

	/* define action(s) */	
	this.searchText = function(q) {
		var matches = this.searchContent.match(new RegExp(q, "gi"));

		this.searchTerm.textContent = q;
		this.searchCount.textContent = matches ? matches.length : 0;
	};
};