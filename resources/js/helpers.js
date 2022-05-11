
let mobileSidebarBtn = document.querySelector('.mobile-menu-btn');
if(mobileSidebarBtn){
    // show sidebar on mobile
    document.querySelector('.mobile-menu-btn').addEventListener('click', function () {
        document.querySelector('.sidebar').classList.toggle('active');
    });
}



// scroll pagination
function ScrollTop(elem) {

    elem.onclick = function(e) {
        let action = e.target.classList.contains('pagination-link');
        if (action) {
            let header = document.querySelector('.header');
            header.scrollIntoView();
            // header.scrollIntoView({block: "center", behavior: "auto"});
        }
    };
}

ScrollTop(document.querySelector('body'));

