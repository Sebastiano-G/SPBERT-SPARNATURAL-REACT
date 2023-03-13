function executeIfFileExist(src, callback) {
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function() {
        if (this.readyState === this.DONE) {
            callback()
        }
    }
    xhr.open('HEAD', src)
}