function tasklink()
{
	console.log("TaskLink created.");
	this.loaded = function()
	{
		console.log("Tasklink loaded method called.");
		
		this.query.Tasklist.List();
		var givenId="";//parse this from the above
		this.storage.Tasklist.Get = this.query.Tasklist.Get(givenId);
		console.log(this.storage);
	};
	
	//store results in here (non relative to the query api, which simply returns data)
	this.storage = {
		Tasklist : {
			List : {},
			Get : {}
		}
	};
	
	//wrap all the query functions for all task gapi (v1) stuff
	this.query = {
		Tasklist : {
			List : function()
			{https://developers.google.com/google-apps/tasks/v1/reference/tasklists/list
				return gapi.client.HttpRequest.execute(gapi.client.request({
					"path" : "https://www.googleapis.com/tasks/v1/users/@me/lists"
				}).execute(function(a,b){console.log(a);});
			},
			Get : function(a)
			{//https://developers.google.com/google-apps/tasks/v1/reference/tasklists/get
				return gapi.client.request({
					"path" : "https://www.googleapis.com/tasks/v1/users/@me/lists/"+a
				});
			},
			Insert : function(a)
			{//https://developers.google.com/google-apps/tasks/v1/reference/tasklists/insert
				return gapi.client.request({
					"path" : "https://www.googleapis.com/tasks/v1/users/@me/lists/",
					"method" : "POST",
					"body" : a
				});
			},
			Update : function(a,b)
			{//https://developers.google.com/google-apps/tasks/v1/reference/tasklists/update
				return gapi.client.request({
					"path" : "https://www.googleapis.com/tasks/v1/users/@me/lists/"+a,
					"method" : "PUT",
					"body" : b
				});
			},
			Delete : function(a)
			{//https://developers.google.com/google-apps/tasks/v1/reference/tasklists/delete
				return gapi.client.request({
					"path" : "https://www.googleapis.com/tasks/v1/users/@me/lists/"+a,
					"method" : "DELETE"
				});
			},
			Patch : function(a,b)
			{//https://developers.google.com/google-apps/tasks/v1/reference/tasklists/patch
				return gapi.client.request({
					"path" : "https://www.googleapis.com/tasks/v1/users/@me/lists/"+a,
					"method" : "PATCH",
					"body" : b
				});
			}
			
		},
		Tasks : {
			List : function(a)
			{//https://developers.google.com/google-apps/tasks/v1/reference/tasks/list
				return gapi.client.request({
					"path" : "https://www.googleapis.com/tasks/v1/users/@me/lists/"+a+"/tasks"
				});
			},
			Get : function(a,b)
			{//https://developers.google.com/google-apps/tasks/v1/reference/tasks/get
				return gapi.client.request({
					"path" : "https://www.googleapis.com/tasks/v1/lists/"+a+"/tasks/"+b
				});
			},
			Insert : function(a,b)
			{//https://developers.google.com/google-apps/tasks/v1/reference/tasks/insert
				return gapi.client.request({
					"path" : "https://www.googleapis.com/tasks/v1/lists/"+a+"/tasks/",
					"method" : "POST",
					"body" : b
				});
			},
			Update : function(a,b,c)
			{//https://developers.google.com/google-apps/tasks/v1/reference/tasks/update
				return gapi.client.request({
					"path" : "https://www.googleapis.com/tasks/v1/lists/"+a+"/tasks/"+b,
					"method" : "PUT",
					"body" : c
				});
			},
			Delete : function(a,b)
			{//https://developers.google.com/google-apps/tasks/v1/reference/tasks/delete
				return gapi.client.request({
					"path" : "https://www.googleapis.com/tasks/v1/lists/"+a+"/tasks/"+b,
					"method" : "DELETE"
				});
			},
			Clear : function(a)
			{//https://developers.google.com/google-apps/tasks/v1/reference/tasks/clear
				return gapi.client.request({
					"path" : "https://www.googleapis.com/tasks/v1/lists/"+a+"/clear",
					"method" : "POST"
				});
			},
			Move : function(a,b,parent)
			{//https://developers.google.com/google-apps/tasks/v1/reference/tasks/move
				return gapi.client.request({
					"path" : "https://www.googleapis.com/tasks/v1/lists/"+a+"/tasks/"+b+"/move",
					"method" : "POST"
				});
			},
			Patch : function(a,b,c)
			{//https://developers.google.com/google-apps/tasks/v1/reference/tasks/patch
				return gapi.client.request({
					"path" : "https://www.googleapis.com/tasks/v1/lists/"+a+"/tasks/"+b,
					"method" : "PATCH",
					"body" : c
				});
			},
		}
		
	}
	
	
}