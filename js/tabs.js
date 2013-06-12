function Tabs() {
	this.id = null;
	this.container = null;
	this.tabs = null;
	this.index = -1;
	this.timer = null;
	this.auto =  true;
	this.interval =  3000;
	
	/* allow overide of default values */
	for (var n in arguments[0]) { this[n] = arguments[0][n]; }

	/* get handle(s) and set options */
	this.setup = function() {
		this.container = document.getElementById(this.id);
		this.tabs = this.container.getElementsByTagName("a");
		return this;
	};

	/* bind events */	 
	this.init = function() {
		var self = this;

		for(i=0; i < self.tabs.length; i++) {
			(function(index){
		        self.tabs[i].onclick = function(){ 
		        	self.auto = false;
		        	self.select(index);
		        } 
		    })(i);
		}
		(this.auto) ? this.rotate() : this.select(0);
		return this;
	};

	/* define action(s) */	
	this.select = function(index) {
		for(i=0; i < this.tabs.length; i++) {
			(i == index) ? this.show(i) : this.hide(i);
		}
		this.index = index;
	};
	this.show = function(index) {
		this.tabs[index].className = "tab-on";
		document.getElementById(this.tabs[index].hash.substring(1)).className = "content-on";
	};
	this.hide = function(index) {
		this.tabs[index].className = "tab-off";
		document.getElementById(this.tabs[index].hash.substring(1)).className = "content-off";
	};
	this.rotate = function(){
		var self = this;

		if(this.auto){
			(this.index < this.tabs.length-1) ? this.select(this.index+1) : this.select(0);
			this.timer=setTimeout(function(){self.rotate()}, self.interval);
		}	
	};
};