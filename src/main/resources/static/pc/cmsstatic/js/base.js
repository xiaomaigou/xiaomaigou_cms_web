axios.defaults.baseURL = 'http://api.xiaomaigou.com/';
// axios.defaults.baseURL = 'http://192.168.199.190:9999/';
var appArrMap = {
    'appId': 123456789,
    'xiaomaigou_cms_api':'http://api.xiaomaigou.com/',
    // 'xiaomaigou_cms_api': 'http://192.168.199.190:9999/'
};

var get = function (url, params) {
    return new Promise(
        function (resolve, reject) {
            axios.get(url, {
                params: params
            }).then(function (response) {
                // handle success
                resolve(response.data);
            }).catch(function (error) {
                // handle error
                console.log(error);
                reject(error);
            }).finally(function () {
                // always executed
            });
        }
    );
};

var post = function (url, params) {
    return new Promise(
        function (resolve, reject) {
            axios.post(url, params).then(function (response) {
                // handle success
                resolve(response.data);
            }).catch(function (error) {
                // handle error
                console.log(error);
                reject(error);
            }).finally(function () {
                // always executed
            });
        }
    );
};