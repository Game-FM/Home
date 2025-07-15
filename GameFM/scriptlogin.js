function navigate(page) {
  const content = document.getElementById('content');
  switch (page) {
    case 'Login':
      content.innerHTML = `
        <!-- Login -->
         <div class="col-lg-6 col-12 opacity-bg">
            <a href="" class="row text-center my-3" onclick="event.preventDefault(); navigate('Login');" style="background-color: rgb(84, 48, 203); opacity: 75%; text-decoration: none;">
                <strong style="font-size: 2rem; margin-top: 2vh; margin-bottom: 2vh; color: rgb(255, 255, 255,1);">Đăng Nhập</strong>
            </a>
            <div class="row justify-content-center" style="margin-top: 2vh; margin-bottom: 2vh;">
                <div class="col-12 border d-flex justify-content-center g-2" style="background-color: rgb(17, 14, 40); width: 90%; border-radius: 3vw; margin-bottom: 5vh;">
                    <form action="">
                        <div class="text-start mb-3 row mt-5 " style="padding-top: 4.5vh;">
                            <div style="font-size: 1rem; color:  rgb(84, 48, 203);"><strong>ĐĂNG NHẬP BẰNG TÊN TÀI KHOẢN</strong></div>
                            <div><input class="login-input w-100" type="text" name="" id=""></div>
                        </div>
                        <div class="text-start row mb-2 ">
                            <div style="font-size: 1rem;"><strong>MẬT KHẨU</strong></div>
                            <div class="position-relative">
                              <input class="col-11 w-100 login-input" type="password" name="" id="psw">
                              <button class="col-1 eye-icon d-flex align-items-center justify-content-center" type="button" onclick="toggleEye(this);" id="togglePassword"><i class="bi bi-eye-slash" id="iconToggle"></i></button>
                            </div>
                        </div>
                        <div class="text-start mb-3">
                            <div class="d-flex align-items-center gap-2" style="font-size: 1rem;">
                                <input class="custom-check" type="checkbox">
                                <strong>Ghi nhớ tôi</strong>
                            </div>
                        </div>
                        <div class="text-center mb-3">
                            <input type="button" class="login-button" value="Đăng Nhập">
                        </div>
                        <div class="text-center mb-2">
                          <div class="row justify-content-center gap-1">
                            <hr>
                            <a href="" class="col-3 login-button2 d-flex justify-content-center text-decoration-none" style="color: white;"><i class="fab fa-google"></i></a>
                            <a href="" class="col-3 login-button2 d-flex justify-content-center text-decoration-none" style="color: white;"><i class="fab fa-facebook"></i></a>
                          </div>
                        </div>
                        <div class="text-center mb-4" style="font-size: 1rem;">
                            <div>Bạn chưa có tài khoản? <a href="" onclick="event.preventDefault(); navigate('Register');" class="dkn" style="text-decoration: none; color: rgb(84, 48, 203);" >Đăng ký ngay!</a></div>
                        </div>
                        <div class="text-center mb-5" style="font-size: 0.8rem;">
                            <a href="" style="color: rgb(220, 220, 220);" >Tôi quên mật khẩu. Hãy giúp tôi T_T</a>
                        </div>
                    </form>
                </div>
            </div>
         </div>
         <!-- end of login -->
         <!-- switch -->
         <a href="" onclick="event.preventDefault(); navigate('Register');" class="col-lg-6 col-12" style="text-decoration: none;">
            <div class="row text-center my-3" style="background-color: black; opacity: 65%;">
                <strong style="font-size: 2rem; margin-top: 2vh; margin-bottom: 2vh; color: white;">Đăng Ký</strong>
            </div>
         </a>
         <!-- end of switch -->
      `;
      break;
    case 'Register':
      content.innerHTML = `
         <!-- switch -->
        <a href="" onclick="event.preventDefault(); navigate('Login');" class="col-lg-6 col-12" style="text-decoration: none;">
          <div class="row text-center my-3" style="background-color: black; opacity: 65%;">
          <strong style="font-size: 2rem; margin-top: 2vh; margin-bottom: 2vh; color: white;">Đăng Nhập</strong>
          </div>
        </a>
        <!-- end of switch --> 
        <!-- Register  -->
         <div class="col-lg-6 col-12 opacity-bg">
            <a href="" onclick="event.preventDefault(); navigate('Register');" class="row text-center my-3" style="background-color: rgb(84, 48, 203); opacity: 75%; text-decoration: none;">
                <strong style="font-size: 2rem; margin-top: 2vh; margin-bottom: 2vh; color: rgb(255, 255, 255,1);">Đăng Ký</strong>
            </a>
            <div class="row justify-content-center" style="margin-top: 2vh; margin-bottom: 2vh;">
                <div class="col-12 d-flex justify-content-center g-2" style="background-color: rgb(17, 14, 40); width: 90%; border-radius: 3vw; margin-bottom: 1vh;">
                    <form action="">
                        <div class="row text-start mb-1 mt-4">
                            <div style="font-size: 1rem; color:  rgb(84, 48, 203);"><strong>USERNAME HOẶC TÊN CỦA BẠN</strong></div>
                            <div><input class="login-input w-100" type="text" name="" id=""></div>
                        </div>
                        <div class="text-start mb-1">
                            <div style="font-size: 1rem;"><strong>EMAIL</strong></div>
                            <div><input class="login-input w-100" type="text" name="" id=""></div>
                        </div>
                        <div class="text-start mb-1">
                            <div style="font-size: 1rem;"><strong>MẬT KHẨU</strong></div>
                            <div class="position-relative" >
                              <input class="col-12 login-input" type="password" name="" id="psw">
                              <button class="col-1 eye-icon1 d-flex align-items-center justify-content-center" type="button" onclick="toggleEye(this);" id="togglePassword"><i class="bi bi-eye-slash" id="iconToggle"></i></button>
                            </div>
                        </div>
                        <div class="text-start mb-1">
                            <div style="font-size: 1rem;"><strong>NHẬP LẠI MẬT KHẨU</strong></div>
                            <div class="position-relative" >
                              <input class="col-12 login-input" type="password" name="" id="psw1">
                              <button class="col-1 eye-icon1 d-flex align-items-center justify-content-center" type="button" onclick="toggleEye(this);" id="togglePassword1"><i class="bi bi-eye-slash" id="iconToggle1"></i></button>
                            </div>
                        </div>
                        <div class="text-start mb-1">
                            <div style="font-size: 1rem;"><strong>SỐ ĐIỆN THOẠI</strong></div>
                            <div><input class="login-input w-100" type="text" name="" id=""></div>
                        </div>
                        <div class="text-start mb-3">
                            <div class="d-flex align-items-center gap-2" style="font-size: 1rem;">
                                <input class="custom-check" type="checkbox">
                                <strong>Tôi đồng ý với các <a href="./Policy.html" target="_blank" style="text-decoration: none; color: rgb(84, 48, 203);">Điều Khoản</a></strong>
                            </div>
                        </div>
                        <div class="text-center mb-3 mt-3">
                            <input type="button" class="login-button" value="Đăng Ký">
                        </div>
                        <div class="text-center mb-3">
                          <div>Bạn đã có tài khoản?<a href="" style="text-decoration: none; color: rgb(84, 48, 203);" >Đăng Nhập</a></div>
                        </div>
                    </form>
                </div>
            </div>
         </div>
         <!-- end of register -->
      `;
      break;
    default:
      content.innerHTML = `<p>Không tìm thấy trang.</p>`;
  }
}

// eye toggle password

function toggleEye(button) {
    // Lấy icon trong nút được click
    const icon = button.querySelector('i');

    // Lấy input liền trước button
    const passwordInput = button.previousElementSibling;

    // Nếu không tìm thấy input hoặc icon thì thoát
    if (!passwordInput || !icon) return;

    const isPassword = passwordInput.type === "password";
    passwordInput.type = isPassword ? "text" : "password";

    // Chuyển đổi icon
    icon.classList.toggle("bi-eye");
    icon.classList.toggle("bi-eye-slash");
}
