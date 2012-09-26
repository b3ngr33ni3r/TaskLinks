function tasklink()
{
	console.log("TaskLink created.");
	this.loaded = function()
	{
		console.log("Tasklink loaded method called.");
		
		this.storage.Tasklist.List = this.query.Tasklist.List();
		var givenId="";//parse this from the above
		this.storage.Tasklist.Get = this.query.Tasklist.Get(givenId);
	};
	
	//store results in here
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
			{
				return gapi.client.tasks.tasklists.list();
			},
			Get : function(a)
			{
				return gapi.client.tasks.tasklists.get({"tasklist" : a});
			},
			Insert : function()
			{
				return gapi.client.tasks.tasklists.insert();
			},
			Update : function(a)
			{
				return gapi.client.tasks.tasklists.update({"tasklist" : a});
			},
			Delete : function(a)
			{ 
				return gapi.client.tasks.tasklists.delete({"tasklist" : a});
			},
			Patch : function(a)
			{
				return gapi.client.tasks.tasklists.path({"tasklist" : a});
			}
			
		},
		Tasks : {
			List : function(a)
			{
				return gapi.client.tasks.tasks.list({"tasklist" : a});//where a is the identifier of a tasklist to list
			},
			Get : function(a,b)
			{
				return gapi.client.tasks.tasks.get({"tasklist" : a,"task" : b});
			},
			Insert : function(a,title,notes)//just title and notes are all i need, so imma implement this like this now
			{
				return gapi.client.tasks.tasks.insert({"tasklist": a, "body" : 
																		{
																			"title" : title,
																			"notes" : notes
																		}
														});
			},
			Update : function(a,b)
			{
				return gapi.client.tasks.tasks.update({"tasklist" : a,"task" : b});
			},
			Delete : function(a,b)
			{
				return gapi.client.tasks.tasks.delete({"tasklist" : a,"task" : b});
			},
			Clear : function(a)
			{
				return gapi.client.tasks.tasks.clear({"tasklist" : a});
			},
			Move : function(a,b,parent)
			{
				return gapi.client.tasks.tasks.move({"tasklist" : a,"task" : b,"parent" : parent});
			},
			Patch : function(a,b)
			{
				return gapi.client.tasks.tasks.patch({"tasklist" : a,"task" : b});
			},
		}
		
	}
	
	
}