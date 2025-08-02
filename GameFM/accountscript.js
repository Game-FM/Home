document.addEventListener('DOMContentLoaded', function() {
    let loggedInUser = localStorage.getItem('loggedInUser');
    let loginBtn = document.getElementById('login-bth');
    let loginAvt = document.getElementById('login-avt');
    //kiem tra dieu kien da dang nhap ch
    if (loggedInUser && loginBtn && loginAvt) {
      //phan ten
        let user = JSON.parse(loggedInUser);

        let userText = document.createElement('span');
        userText.textContent = user.name+"#"+user.id;
        userText.className = 'user-name';
        userText.style.fontWeight = 'bold';
        userText.style.fontSize = '1.3vw';
        userText.style.color = 'white';

        loginBtn.parentNode.replaceChild(userText, loginBtn);
        //phan avt
        let img = document.createElement('img');

        img.src="./images/Login_Register/default-avt.png";
        img.alt = 'Avatar';
        img.style.width = '3vw';
        img.style.height = '3vw';
        img.style.borderRadius = '50%';
        img.style.objectFit = 'cover';
        img.style.cursor = 'pointer';

        loginAvt.innerHTML = '';
        loginAvt.parentNode.replaceChild(img, loginAvt);
    }
});
document.addEventListener('DOMContentLoaded', function() {
    let loggedInUser = localStorage.getItem('loggedInUser');
    let loginBtn = document.getElementById('login-bth1');
    //kiem tra dieu kien da dang nhap ch
    if (loggedInUser && loginBtn) {
      //phan ten
        let user = JSON.parse(loggedInUser);

        let userText = document.createElement('span');
        userText.textContent = "Người dùng: " + user.name+"#"+user.id;
        userText.className = 'user-name';
        userText.style.fontWeight = 'bold';
        userText.style.fontSize = '1.3vw';
        userText.style.color = 'black';
        userText.style.margin = '0.5vw 0';

        loginBtn.parentNode.replaceChild(userText, loginBtn);
    }
});
document.addEventListener('DOMContentLoaded', function() {
    let loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser) {
        let user = JSON.parse(loggedInUser);
        let dropdownMenu = document.querySelector('.dropdown-menu');

        if (dropdownMenu) {
            //xoa nd cu
            dropdownMenu.innerHTML = '';

            // showname
            let userInfo = document.createElement('div');
            userInfo.textContent = '👤 ' + user.name;
            userInfo.className = 'menu-button-effect mb-1';
            dropdownMenu.appendChild(userInfo);

            // account button
            let accountBtn = document.createElement('div');
            accountBtn.textContent = 'Tài Khoản';
            accountBtn.className = 'menu-button-effect mb-1';
            dropdownMenu.appendChild(accountBtn);

            // signout
            let logoutBtn = document.createElement('div');
            logoutBtn.textContent = 'Đăng Xuất';
            logoutBtn.className = 'menu-button-effect';
            logoutBtn.style.cursor = 'pointer';
            logoutBtn.addEventListener('click', function() {
                localStorage.removeItem('loggedInUser');
                alert('Đã đăng xuất');
                window.location.reload(); // Reload
            });
            dropdownMenu.appendChild(logoutBtn);
        }
    }
});