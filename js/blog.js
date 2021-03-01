function filter(id) {
    var idList = document.getElementsByClassName(id);

    if (document.getElementById(id).checked) {
        for (var i = 0; i < idList.length; i++) {
            idList.item(i).style.display = 'block';
        };
    } else {
        for (var i = 0; i < idList.length; i++) {
            idList.item(i).style.display = 'none';
        }
    };
};