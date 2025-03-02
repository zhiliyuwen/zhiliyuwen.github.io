function checkPassword() {
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // 设置正确的密钥
    const correctPassword = 'admin';

    if (password === correctPassword) {
        // 密钥正确，跳转到网站主页面
        window.location.href = 'docs/index.html'; // 替换为你网站的主页面
    } else {
        // 密钥错误，显示错误信息
        errorMessage.style.display = 'block';
    }
}