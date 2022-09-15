const productsContainerr = document.querySelector('#products-containerr');

// Запускаем getProducts
getProductss();

// Асинхронная функция получения данных из файла products.json
async function getProductss() {
	// Получаем данные из products.json
    const responsse = await fetch('./js/productss.json');
    // Парсим данные из JSON формата в JS
    const productssArray = await responsse.json();
    // Запускаем ф-ю рендера (отображения товаров)
	renderProductss(productssArray);
}

function renderProductss(productssArray) {
    productssArray.forEach(function (item) {
        const productHTMLL = `<div class="">
						<div class="card" data-id="${item.id}">
							<img class="product-img" src="img/roll/${item.imgSrc}" alt="">
							<div class="card-body text-center">
								<h4 class="item-title">${item.title}</h4>
								<p><small data-items-in-box class="text-muted">${item.itemsInBox} шт. в наявності</small></p>

								<div class="details-wrapper">

									<!-- Счетчик -->
									<div class="items counter-wrapper">
										<div class="items__control" data-action="minus">-</div>
										<div class="items__current" data-counter>1</div>
										<div class="items__control" data-action="plus">+</div>
									</div>
									<!-- // Счетчик -->

									<div class="price">
										<div class="price__weight">${item.weight}г.</div>
										<div class="price__currency">${item.price} грн</div>
									</div>
								</div>
								
								<button data-cart type="button" class="btn btn-block btn-outline-warning">
									+ в корзину
								</button>

							</div>
						</div>
					</div>`;
        productsContainerr.insertAdjacentHTML('beforeend', productHTMLL);
    });
}