function executeIfFileExist(src, callback) {
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function() {
        if (this.readyState === this.DONE) {
            const status = this.status;
            if (status === 0 || (status >= 200 && status < 400)) {
              // The request has been completed successfully
              console.log(this.responseText);
            }
            else {
              console.log("male");
            }
        }
    }
    xhr.open('HEAD', src)
}
