window.onload = function () {
    // get references to 'notes' list
    var notesArray = [];
    // notes = document.getElementsByClass("notes");
    // load notes from local storage
    loadNotes();

    document.getElementById("newSticky").addEventListener("click", addnewNote);

};



function addnewNote() {
   // var self = this;

    var note = document.createElement('div');
    note.className = 'note';
    note.addEventListener('mousedown', function(e) { return note.onMouseDown(e) }, false);
    note.addEventListener('click', function() {
      console.log('addnewNote clicked!')
      return note.onNoteClick() }, false);
    this.note = note;

    if (!className) {
		className = "colour" + Math.ceil(Math.random() * 3);
	   }

    notes.append("<li><div class='" + className + "'>" +
  					"<textarea class='note-title' placeholder='Untitled' maxlength='20'/>" +
  					"<textarea class='note-content' placeholder='Your content here'/>" +
  					"<img class='hide' src='images/cancel.png'/>" +
  					"</div></li>");
      var newNote = notes.find("li:last");
      newNote.find("img").click(function () {
      newNote.remove();
    })
    saveNotes();

}

function saveNotes() {
    // var notesArray = [];
    // for each of the notes add a bespoke note object to the array
    notes.find("li > div").each(function (i) {
        // save the class attribute of the div, as well as the text for the title and content text areas
        var colourClass = document.getElementbyClass("className");
        var title = colourClass.find("textarea.notetitle");
        var content = colourClass.find("textarea.notecontent");
        notesArray.push({ Index: i, Title: title.val(), Content: content.val(), Class: colourClass });
    });
    // json encode it
    var jsonStr = JSON.stringify(notesArray);
    // save json string to local storage
    localStorage.setItem("notes", jsonStr);
}

function loadNotes() {
    var storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
        // pass stored json back into note object array
        var notesArray = JSON.parse(storedNotes);
        count = notesArray.length;
        var i;
        for (i = 0; i < count; i++) {
            var storedNote = notesArray[i];
            // addNewNote(storedNote.Class, storedNote.Title, storedNote.Content);
        }
    }
}

function searchFunction() {
    // Declare variables
    var input, filter, text, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    // ul = document.getElementById("myUL");
    title = document.getElementsByClass('notetitle');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < notetitle.length; i++) {
      text = title[i].getElementsByInputType("textarea")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            title[i].style.display = "";
        } else {
            title[i].style.display = "none";
        }
    }
}
