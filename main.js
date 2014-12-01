$( document ).ready(init);

function init() {
	$.getJSON( "board.json", load );
}

function load(data) {
	$.each(data.numbers, display);
	$("#sudoku .cell:empty").text();


}

function display(index, number){
	console.log(number);
	$("#sudoku .row:nth-child("+ number.y +") .cell:nth-child("+ number.x +")").html(number.number);




}	

