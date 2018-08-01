//todoService:
//The purpose of this service is to save toDoListArrayt on local storage.
//In the future if there is a need to save it on a remote data base it would be via this service.

import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class TodoService {

	constructor() { }

	saveOnLocalStorage(toDoList: any[]){
			localStorage.setItem('todoList', JSON.stringify(toDoList));
	}

	getToDoList(){
		var data = JSON.parse(localStorage.getItem('todoList'));
		return data;
	}

}
