document.addEventListener('DOMContentLoaded', function() {
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

        if(game.ageRating == '18+'){
            document.getElementById('ageRatePic').src = "./images/Market/IARC_18+.svg.png";
        }
        else{
            document.getElementById('ageRatePic').src = "./images/Market/IARC_12+.svg.png";
        }

        document.getElementById('ageRateNum').textContent = game.ageRating;
        document.getElementById('tagList').textContent = game.genre.join(', ');
        
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
                iconElement.className = `d-flex mt-1 justify-content-end fa ${iconClass}`;
                iconElement.style.fontSize = '1.5vw';
                iconElement.style.color = 'rgb(34, 178, 178)';
                platformContainer.appendChild(iconElement);
            }
        });
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
        return;
    }

    const user = JSON.parse(loggedInUser);
    const userId = user.id;

    const purchasedKey = `purchasedGames_${userId}`;
    const purchasedGames = JSON.parse(localStorage.getItem(purchasedKey)) || [];
    const isPurchased = purchasedGames.includes(gameId);

    if (isPurchased) {
        // Ẩn phần giá
        ['free'].forEach(id => {
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

            if (!purchasedGames.includes(gameId)) {
                purchasedGames.push(gameId);
                localStorage.setItem(purchasedKey, JSON.stringify(purchasedGames));
                localStorage.setItem('purchaseSuccess', 'true');
                alert('Mua thành công!');
            } else {
                alert('Bạn đã mua game này rồi!');
            }

            location.reload(); // Reload lại để cập nhật giao diện
        });
    }
});