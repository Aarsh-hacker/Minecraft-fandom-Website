function search() {
            var x = document.getElementById("search").value;
            window.open('https://google.com/search?q=minecraft '+x);
            document.getElementById("search").value = "" ;
        }

function openNav() {
    document.getElementById("Side-nav").style.width = "300px";
}
function closeNav() {
    document.getElementById("Side-nav").style.width = "0px";
}
function searchon() {
    document.getElementById("search-box").style.width = "100%";
}
function closesearch() {
    document.getElementById("search-box").style.width = "0";
}