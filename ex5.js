function count(name) {
    return console.log(name.length);
}
count("hello ");
function trimmer(name) {
    return console.log(name.trim().length);
}
trimmer("  hello ");
function noSpace(name) {
    return (name.replace(" ", "").length);
}
noSpace("h el l o");
function count_both(value, spaces) {
    var count = 0;
    if (spaces) {
        count = value.length;
    }
    else {
        count = value.replace(" ", "").length;
    }
    return count;
}
console.log(count_both("test 1"));
console.log(count_both("test 1", true));
