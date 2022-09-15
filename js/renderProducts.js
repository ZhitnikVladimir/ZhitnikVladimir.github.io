const Jibi = document.querySelector('#Unity');
const Dai = document.querySelector('#Buda');
const Serb = document.querySelector('#Serb');
// Запускаем getProducts
getProducts();

// Асинхронная функция получения данных из файла products.json
async function getProducts() {
	// Получаем данные из products.json
    const response = await fetch('./js/products.json');
    // Парсим данные из JSON формата в JS
    const productsArray = await response.json();
    // Запускаем ф-ю рендера (отображения товаров)
	renderProducts(productsArray);
}

function renderProducts(productsArray) {
    productsArray.forEach(function (item) {
		
		if (item.name == "Unity") {
        const productHTML = `<div class="${item.name}">
						<div class="postavshik">${item.postavshik}</div>
						<div class="card" data-id="${item.id}">
							<img class="product-img" src="img/Tabaco/unity100/${item.imgSrc}" alt="">
							<div class="card-body text-center">
								<h4 class="item-title">${item.title}</h4>
								<p><small data-items-in-box class="text-muted">${item.itemsInBox} шт. в наявності</small><button data-info class="btninfo">i</button></p>

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
										<div class="price__currency">${item.price}</div>
										<div class="price__grn">грн</div>
									</div>
								</div>
								
								<button data-cart type="button" id="modalclick" class="btn btn-block btn-outline-warning">
									+ в корзину
								</button>
								
							</div>
						</div>
						
						<div class="infocard infocard_active">
								<div class="ingh">${item.descr}</div>
								<button type="button" class="btnback">
									Назад
								</button>
								
						</div>
					</div>`;
        Jibi.insertAdjacentHTML('beforeend', productHTML);
		}
		if (item.name == "Buta") {
			const productHTML = `<div class="${item.name}">
				<div class="postavshik">${item.postavshik}</div>
							<div class="card" data-id="${item.id}">
								<img class="product-img" src="img/Tabaco/buda/${item.imgSrc}" alt="">
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
											<div class="price__currency">${item.price}</div>
										</div>
									</div>
									
									<button data-cart type="button" id="modalclick" class="btn btn-block btn-outline-warning">
										+ в корзину
									</button>
	
								</div>
							</div>
						</div>`;
			Dai.insertAdjacentHTML('beforeend', productHTML);
			}
			if (item.name == "Serbetli") {
				const productHTML = `<div class="${item.name}">
								<div class="card" data-id="${item.id}">
									<img class="product-img" src="img/Tabaco/Serbetli/${item.imgSrc}" alt="">
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
												<div class="price__currency">${item.price}</div>
											</div>
										</div>
										
										<button data-cart type="button" id="modalclick" class="btn btn-block btn-outline-warning">
											+ в корзину
										</button>
		
									</div>
								</div>
							</div>`;
				Serb.insertAdjacentHTML('beforeend', productHTML);
				}
    });

}
