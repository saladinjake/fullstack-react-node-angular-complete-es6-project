/* The MIME type is generally inferred from the extension of the file to be sent.
You have to write a program that makes it possible to detect the MIME type of a file based on its name.
For each of the Q filenames, display on a line the corresponding MIME type. 
If there is no corresponding type, then display UNKNOWN. */
var N = parseInt(readline()); // Number of elements which make up the association table.
var Q = parseInt(readline()); // Number Q of file names to be analyzed.

// Create hash table with input mime types
var mt_table = {};
for (var i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    var EXT = inputs[0]; // file extension
    var MT = inputs[1]; // MIME type.
    mt_table[EXT.toLowerCase()] = MT
}

// Iterate over input files and detect mime type
for (var i = 0; i < Q; i++) {
    var FNAME = readline().toLowerCase().split('.'); // One file name per line.
    
    var n_dot = FNAME.length - 1 // # of "." in file name
    
    var file_ext = FNAME[n_dot] // file ext. should be after last dot
    var file_type = mt_table[file_ext] // retrieve file's mime type
    
    // If no associated mime type OR
    // if invalid file name (e.g. no "." in name)
    if (!(file_type in mt_table) || n_dot === 0) {
        print("UNKNOWN")
    } else { 
        print(file_type); 
    }  
}


