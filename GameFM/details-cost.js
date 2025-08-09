document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get('gameId');

    if (gameId && gameList[gameId]) {
        const game = gameList[gameId];
        //name
        document.getElementById('product-name').textContent = game.name;
        document.getElementById('product-name1').textContent = game.name;
        //pic
        document.getElementById('gameimg1').src = game.photo[0];
        document.getElementById('gameimg2').src = game.photo[1];
        document.getElementById('gameimg3').src = game.photo[2];
        document.getElementById('gameimg4').src = game.photo[3];
        document.getElementById('gameimg5').src = game.photo[4];
        document.getElementById('gameimg1-thumbnail').src = game.photo[0];
        document.getElementById('gameimg2-thumbnail').src = game.photo[1];
        document.getElementById('gameimg3-thumbnail').src = game.photo[2];
        document.getElementById('gameimg4-thumbnail').src = game.photo[3];
        document.getElementById('gameimg5-thumbnail').src = game.photo[4];
        document.getElementById('gamelogo').src = game.logo;
        document.getElementById('gamelogo1').src = game.logo;

        //information
        document.getElementById('infor').textContent = game.information;
        //thể loại, tag, age rating
        const gtag = document.getElementById('gametag');
        game.genre.forEach(genre => {
            const tagDiv = document.createElement('div');
            tagDiv.className = 'tag col-3';
            tagDiv.textContent = genre;
            gtag.appendChild(tagDiv);
        });

        if (game.ageRating == '18+') {
            document.getElementById('ageRatePic').src = "./images/Market/IARC_18+.svg.png";
        }
        else {
            document.getElementById('ageRatePic').src = "./images/Market/IARC_12+.svg.png";
        }

        document.getElementById('ageRateNum').textContent = game.ageRating;
        document.getElementById('tagList').textContent = game.genre.join(', ');

        //giá
        if (game.discount != 0) {
            document.getElementById('oldPrice').textContent = formatVND(game.price);
            document.getElementById('oldPrice1').textContent = formatVND(game.price);

        }

        let cost = game.price - game.price * (game.discount / 100);
        document.getElementById('newPrice').textContent = formatVND(Math.round(cost));
        document.getElementById('newPrice1').textContent = formatVND(Math.round(cost));

        //thong tin phat trien
        document.getElementById('dev').textContent = game.developer;
        const formattedDate = formatDateVN(game.releaseDate);
        document.getElementById('dateDev').textContent = formattedDate;

        //nền tảng
        const platformIcons = {
            "PC": "fa-windows",
            "PS": "fa-playstation",
            "Xbox": "fa-xbox",
            "Switch": "fa-nintendo-switch",
            "Mobile": "fa-mobile-alt"
        };
        const platformContainer = document.getElementById('platF');
        game.platform.forEach(platform => {
            const iconClass = platformIcons[platform];
            if (iconClass) {
                const iconElement = document.createElement('i');
                iconElement.className = `d-flex mt-1 justify-content-end fab ${iconClass}`;
                iconElement.style.fontSize = '1.5vw';
                iconElement.style.color = 'rgb(34, 178, 178)';
                platformContainer.appendChild(iconElement);
            }
        });

        //discount
        if (game.discount != 0) {
            const sale = document.getElementById('discount');
            const num = document.createElement('div');
            num.className = 'col-8 col-sm-2 d-flex align-items-center justify-content-center discount';
            num.id = 'sale';
            num.textContent = game.discount + '%';
            num.style.fontWeight = 'bold';
            num.style.fontSize = '1vw';
            sale.insertBefore(num, sale.firstChild);
        }
        document.getElementById('discount1').textContent = "-" + game.discount + "%";
    } else {
        console.error('Không tìm thấy game với ID:', gameId);
    }
});

//hàm lấy ngày đã theo format
function formatDateVN(dateStr) {
    const date = new Date(dateStr);
    const day = date.getDate().toString().padStart(2, '0');
    const month = 'Thg' + (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day} ${month}, ${year}`;
}

//tiền theo format
function formatVND(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' VNĐ';
}

//purchased
document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get('gameId');
    if (!gameId) {
        console.error("Không tìm thấy gameId trên URL");
        return;
    }

    const loggedInUser = localStorage.getItem('loggedInUser');
    if (!loggedInUser) {
        alert('Bạn chưa đăng nhập!');
        window.location.href = 'login_register.html';
        return;
    }

    const user = JSON.parse(loggedInUser);
    const userId = user.id;

    const purchasedKey = `purchasedGames_${userId}`;
    const purchasedGames = JSON.parse(localStorage.getItem(purchasedKey)) || [];
    const isPurchased = purchasedGames.includes(gameId);

    if (isPurchased) {
        // Ẩn phần giá
        ['oldPrice', 'oldPrice1', 'newPrice', 'newPrice1', 'sale'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.remove();
        });

        // Nút chơi thay vì mua
        const buyButton = document.getElementById('buyButton');
        if (buyButton) {
            buyButton.textContent = 'Chơi';
            buyButton.classList.remove('btn-primary');
            buyButton.classList.add('btn-success');
            buyButton.addEventListener('click', () => {
                window.location.href = 'mygame.html';
            });

            // Chấm đỏ
            const navbutton = document.getElementById('navButton');
            if (navbutton && localStorage.getItem('purchaseSuccess') === 'true') {
                const redDot = document.createElement('span');
                redDot.style.width = '10px';
                redDot.style.height = '10px';
                redDot.style.backgroundColor = 'red';
                redDot.style.borderRadius = '50%';
                redDot.style.display = 'inline-block';
                redDot.style.marginLeft = '6px';
                redDot.style.verticalAlign = 'middle';

                navbutton.appendChild(redDot);

                // ❌ Xoá cờ sau khi hiển thị
                localStorage.removeItem('purchaseSuccess');
            }

        }
    }

    // Xử lý khi mua game
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function (event) {
            event.preventDefault();

            if (!userId) {
                alert('Bạn chưa đăng nhập!');
                return;
            }
            var check = confirm('Bạn có chắc chắn thực hiện thao tác này không?');
            if(check){
                if (!purchasedGames.includes(gameId)) {
                    purchasedGames.push(gameId);
                    localStorage.setItem(purchasedKey, JSON.stringify(purchasedGames));
                    localStorage.setItem('purchaseSuccess', 'true');
                    alert('Mua thành công!');
                } else {
                    alert('Bạn đã mua game này rồi!');
                }
            }
            else{
                alert('Bạn đã huỷ bỏ giao dịch!');
            }

            location.reload(); // Reload lại để cập nhật giao diện
        });
    }
});
