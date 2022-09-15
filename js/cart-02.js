// Div внутри корзины, в который мы добавляем товары
const cartWrapper =  document.querySelector('.cart-wrapper');
const formss =  document.querySelector('.telegram-form');
// Отслеживаем клик на странице
let n = "";
let dlcc = "";
let sum, summ, summm;
let summmm = 0;
// Отслеживаем клик на странице

window.addEventListener('click', function (event) {
	// Проверяем что клик был совершен по кнопке "Добавить в корзину"
	
	$('.btninfo').each(function(i){
		$(this).on('click', function(e){
			e.preventDefault();
			$('.card').eq(i).toggleClass('none');
			$('.infocard').eq(i).toggleClass('infocard_active');
			
		   
			
		})
	  });	
	  if (event.target.hasAttribute('data-action')) {
		const dlc = event.target.closest('.cart-item');
		const productDlc = {
			id: dlc.dataset.id,
			title: dlc.querySelector('.cart-item__title').innerText,
			counter: dlc.querySelector('[data-counter]').innerText,
		};
		dlcc =  dlcc+ "\n" +" ID: "+ productDlc.id +"\n"+ " Название: " + productDlc.title +"\n" + " Изменённое количество: " + productDlc.counter + "\n";
	}
	  
	  
	if (event.target.hasAttribute('data-cart')) {
		$('.overlay').toggleClass('overlay_active');
        $('.moda').toggleClass('moda_active');
		// Находим карточку с товаром, внутри котрой был совершен клик
		const card = event.target.closest('.card');
		
		// Собираем данные с этого товара и записываем их в единый объект productInfo
		const productInfo = {
			id: card.dataset.id,
			imgSrc: card.querySelector('.product-img').getAttribute('src'),
			title: card.querySelector('.item-title').innerText,
			itemsInBox: card.querySelector('[data-items-in-box]').innerText,
			weight: card.querySelector('.price__weight').innerText,
			price: card.querySelector('.price__currency').innerText,
			counter: card.querySelector('[data-counter]').innerText,
			postavshik: card.querySelector('.postavshik').innerText,
		};
		sum = productInfo.price;
		summ = productInfo.counter;
		summm = summ*sum;
		summmm = summmm + summm;
		console.log(summmm);
        n =  n + "\n" + " id: " + productInfo.id +"\n"+ " Название: " + productInfo.title +"\n"+ " Граммовка: " + productInfo.weight +"\n"+ " Цена: " + productInfo.price +"\n"+ " Количество: " + productInfo.counter +"\n" + " Поставщик: "+ productInfo.postavshik +"\n";
    
		// Отобразим товар в корзине
		// Проверять если ли уже такой товар в корзине
		const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

		// Если товар есть в корзине
		if (itemInCart) {
			const counterElement = itemInCart.querySelector('[data-counter]');
			counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
		} else {
			// Если товара нет в корзине

			// Собранные данные подставим в шаблон для товара в корзине
			const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
								<div class="cart-item__top">
									<div class="cart-item__img">
										<img src="${productInfo.imgSrc}" alt="${productInfo.title}">
									</div>
									<div class="cart-item__desc">
										<div class="cart-item__title">${productInfo.title}</div>
										<div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

										<!-- cart-item__details -->
										<div class="cart-item__details">

											<div class="items items--small counter-wrapper">
												<div class="items__control" data-action="minus">-</div>
												<div class="items__current" data-counter="">${productInfo.counter}</div>
												<div class="items__control" data-action="plus">+</div>
											</div>

											<div class="price">
												<div class="price__currency">${productInfo.price}</div>
											</div>

										</div>
										<!-- // cart-item__details -->

									</div>
								</div>
							</div>`;

			// Отобразим товар в корзине
			cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
			
		}

		// Сбрасываем счетчик добавленного товара на "1"
		card.querySelector('[data-counter]').innerText = '1';

		// Отображение статуса корзины Пустая / Полная
		toggleCartStatus();

		// Пересчет общей стоимости товаров в корзине
		calcCartPriceAndDelivery();

	}
});
$('.telegram-form').on('submit', function (event) {
    
    
    event.stopPropagation();
    event.preventDefault();

    let form = this,
        submit = $('.submit', form),
        data = new FormData(),
        files = $('input[type=file]')


    $('.submit', form).val('Отправка...');
    $('input, textarea', form).attr('disabled','');
    data.append( 'name', 		$('[name="name"]', form).val() );
    data.append( 'phone', 		$('[name="phone"]', form).val() );
    data.append( 'Заказ', 		n );
	data.append( 'Итоговая сумма: ', 		summmm );
	data.append( 'Изменения количества: ', 		dlcc );
    files.each(function (key, file) {
        let cont = file.files;
        if ( cont ) {
            $.each( cont, function( key, value ) {
                data.append( key, value );
            });
        }
    });
    
    $.ajax({
        url: './ajax.php',
        type: 'POST',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false,
        contentType: false,
        xhr: function() {
            let myXhr = $.ajaxSettings.xhr();

            if ( myXhr.upload ) {
                myXhr.upload.addEventListener( 'progress', function(e) {
                    if ( e.lengthComputable ) {
                        let percentage = ( e.loaded / e.total ) * 100;
                            percentage = percentage.toFixed(0);
                        $('.submit', form)
                            .html( percentage + '%' );
                    }
                }, false );
            }

            return myXhr;
        },
        error: function( jqXHR, textStatus ) {
            // Тут выводим ошибку
        },
        complete: function() {
            // Тут можем что-то делать ПОСЛЕ успешной отправки формы
            console.log('Complete')
            form.reset() 
        }
    });

    return false;
});
