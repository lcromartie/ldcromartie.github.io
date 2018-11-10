window.onload = () => {
    const listButton = document.getElementById('run-for-loop');

    listButton.onclick = () => {
        const myList = document.getElementById('my-list');
        elfCode.appendToList(myList, i);
    }

}
var app = {
    basicForLoop: function() {
        'use strict';
        for (let i = 0; i < 5; i++) {
            console.log(i)
        }
    }
}