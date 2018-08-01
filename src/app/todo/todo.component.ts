import { Component, OnInit } from '@angular/core';
import { TodoService } from './shared/todo.service';

@Component({
	selector: 'app-todo',
	templateUrl: './todo.component.html',
	styleUrls: ['./todo.component.css'],
	providers: [TodoService]
})
export class TodoComponent implements OnInit {
	toDoListArray: any[];

	constructor(private toDoservice: TodoService) { }

	ngOnInit() {
		this.toDoListArray = [];
		//load list from local storage
		var data= this.toDoservice.getToDoList();
		data.forEach(item => {
			this.toDoListArray.push(item);
		});

		this.sortToDoListArray();
	}

	onSave(){
		this.toDoservice.saveOnLocalStorage(this.toDoListArray);
	}

	onAdd(itemTitle,itemFilter){
		if (itemTitle.value !== ""){
			this.toDoListArray.push({
				title: itemTitle.value,
				isChecked: false
			});

		itemTitle.value= null;
		this.sortToDoListArray();
		this.changeFilterToAll(itemFilter);
		}
	}

	alterCheck(itemTitle,isChecked,itemFilter){
		var item = this.searchItemInToDoListArray(itemTitle.title);
		item.isChecked = !item.isChecked;
		this.changeFilterToAll(itemFilter);
		this.sortToDoListArray();
	}

	sortToDoListArray(){
		//sort array isChecked false -> true
		this.toDoListArray.sort((a,b) => {
			return a.isChecked - b.isChecked; 
		})
	}

	searchItemInToDoListArray(title){
		for (var item of this.toDoListArray){
			if (item.title === title){
				return item;
			}
		}
	}

	onDelete(itemTitle,itemFilter){
		var itemToDelete = this.searchItemInToDoListArray(itemTitle.title);
		var indexToDelete= this.toDoListArray.indexOf(itemToDelete);

		if (indexToDelete > -1) {
 		 this.toDoListArray.splice(indexToDelete, 1);
		}

		this.changeFilterToAll(itemFilter);
	}

	selectAll(itemSelectAll,itemFilter){
		for (let item of this.toDoListArray){
			item.isChecked=itemSelectAll.checked;
		}

		this.changeFilterToAll(itemFilter);
	}

	changeFilterToAll(itemFilter){
		//change filterView view to all
		itemFilter.value="all";
		this.filterView(itemFilter);
	}

	filterView(itemFilter){

		switch (itemFilter.value){
			case ("all"):
			var list = document.getElementsByClassName('todo-item');
			for (var node of <any>list) {
				node.style.display = "";
			}

			break;

			case ("active"):
			
			var list = document.getElementsByClassName('todo-item-checked');
			for (var node of <any>list) {
				node.style.display = "none";
			}

			list = document.getElementsByClassName('todo-item-unchecked');
			for (var node of <any>list) {
				node.style.display = "";
			}

			break;

			case ("completed"):
			var list = document.getElementsByClassName('todo-item-checked');
			for (var node of <any>list) {
				node.style.display = "";
			}

			list = document.getElementsByClassName('todo-item-unchecked');
			for (var node of <any>list) {
				node.style.display = "none";
			}

			break;

		}
	}



}
