function navigate(page) {
  const content = document.getElementById('content');
  switch (page) {
    case 'Game1':
      content.innerHTML = `
          <video controls autoplay muted loop>
            <source src="https://video.fastly.steamstatic.com/store_trailers/256706800/movie480.webm?t=1516828564" type="video/webm">
                    Trình duyệt của bạn không hỗ trợ video.
          </video>
      `;
      break;
    case 'Game2':
      content.innerHTML = `
          <video controls autoplay muted loop>
            <source src="https://video.fastly.steamstatic.com/store_trailers/257059180/movie480_vp9.webm?t=1727388825" type="video/webm">
                    Trình duyệt của bạn không hỗ trợ video.
          </video>
      `;
      break;
    case 'community':
      content.innerHTML = `
        <h2>Cộng Đồng</h2>
        <p>Diễn đàn, bình luận, kết bạn và nhiều hơn nữa.</p>
      `;
      break;
    default:
      content.innerHTML = `<p>Không tìm thấy trang.</p>`;
  }
}

function selectImage(element) {
  // Xóa class .selected-border khỏi tất cả phần tử có class clickable-img
  document.querySelectorAll('.clickable-img').forEach(el => {
    el.classList.remove('selected-border');
  });

  // Thêm class vào phần tử được click
  element.classList.add('selected-border');
}
document.addEventListener('DOMContentLoaded', function() {
    let loggedInUser = localStorage.getItem('loggedInUser');
    let loginBtn = document.getElementById('login-bth');
    let loginAvt = document.getElementById('login-avt');
    //kiem tra dieu kien da dang nhap ch
    if (loggedInUser && loginBtn && loginAvt) {
      //phan ten
        let user = JSON.parse(loggedInUser);

        let userText = document.createElement('span');
        userText.textContent = user.name;
        userText.className = 'user-name';
        userText.style.fontWeight = 'bold';
        userText.style.fontSize = '16px';
        userText.style.color = 'white';

        loginBtn.parentNode.replaceChild(userText, loginBtn);
        //phan avt
        let img = document.createElement('img');

        img.src="./images/Login_Register/default-avt.png";
        img.alt = 'Avatar';
        img.style.width = '40px';
        img.style.height = '40px';
        img.style.borderRadius = '50%';
        img.style.objectFit = 'cover';
        img.style.cursor = 'pointer';

        loginAvt.innerHTML = '';
        loginAvt.parentNode.replaceChild(img, loginAvt);
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
            userInfo.className = 'menu-button-effect w-100 mb-1';
            dropdownMenu.appendChild(userInfo);

            // account button
            let accountBtn = document.createElement('div');
            accountBtn.textContent = 'Tài Khoản';
            accountBtn.className = 'menu-button-effect w-100 mb-1';
            dropdownMenu.appendChild(accountBtn);

            // signout
            let logoutBtn = document.createElement('div');
            logoutBtn.textContent = 'Đăng Xuất';
            logoutBtn.className = 'menu-button-effect w-100';
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
