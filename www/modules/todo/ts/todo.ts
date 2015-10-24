(function(module) {
	function TodoFactory() {
		export default class ToDo{
  
			constructor(content, complete){
				this.content = content;
				this._complete = complete;
			}
			
			complete() {
				this._complete = true;
			
			}
		}
		
		return Todo;
	}
	
	module.factory('Todo', TodoFactory);
})(angular.module('myApp'));


