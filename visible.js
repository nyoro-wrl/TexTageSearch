window.onload = function() {
    // document.getElementById('url').textContent = location.pathname;
    console.log(location.href + 'search?q=%s');
    console.log(location.pathname + 'search?q=%s');
    document.body.classList.toggle('is-show');
}