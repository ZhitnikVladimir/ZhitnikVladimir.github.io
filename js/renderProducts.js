const Unity = document.querySelector('#Unity');
const Buda = document.querySelector('#Buda');
const Unityy = document.querySelector('#Unityy');
const Swipe = document.querySelector('#Swipe');
const Darkside = document.querySelector('#Dark');
const DarkAngle = document.querySelector('#DarkAngle');
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
										<button class="items__control" data-action="minus">-</button>
										<div class="items__current" data-counter>1</div>
										<button class="items__control" data-action="plus">+</button>
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
				Unity.insertAdjacentHTML('beforeend', productHTML);
		}
		if (item.name == "Buta") {
			const productHTML = `<div class="${item.name}">
				<div class="postavshik">${item.postavshik}</div>
							<div class="card" data-id="${item.id}">
								<img class="product-img" src="img/Tabaco/buda/${item.imgSrc}" alt="">
								<div class="card-body text-center">
									<h4 class="item-title">${item.title}</h4>
									<p><small data-items-in-box class="text-muted">${item.itemsInBox} шт. в наявності</small><button data-info class="btninfo">i</button></p>
	
									<div class="details-wrapper">
	
										<!-- Счетчик -->
										<div class="items counter-wrapper">
											<button class="items__control" data-action="minus">-</button>
											<div class="items__current" data-counter>1</div>
											<button class="items__control" data-action="plus">+</button>
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
						</div>`;
				Buda.insertAdjacentHTML('beforeend', productHTML);
			}
			if (item.name == "Unityy") {
				const productHTML = `<div class="${item.name}">
								<div class="card" data-id="${item.id}">
									<img class="product-img" src="img/Tabaco/unity250/${item.imgSrc}" alt="">
									<div class="card-body text-center">
										<h4 class="item-title">${item.title}</h4>
										<p><small data-items-in-box class="text-muted">${item.itemsInBox} шт. в наявності</small><button data-info class="btninfo">i</button></p>
		
										<div class="details-wrapper">
		
											<!-- Счетчик -->
											<div class="items counter-wrapper">
												<button class="items__control" data-action="minus">-</button>
												<div class="items__current" data-counter>1</div>
												<button class="items__control" data-action="plus">+</button>
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
							</div>`;
							Unityy.insertAdjacentHTML('beforeend', productHTML);
				}
				if (item.name == "Swipe") {
					const productHTML = `<div class="${item.name}">
									<div class="postavshik">${item.postavshik}</div>
									<div class="card" data-id="${item.id}">
										<img class="product-img" src="img/Tabaco/swipe/${item.imgSrc}" alt="">
										<div class="card-body text-center">
											<h4 class="item-title">${item.title}</h4>
											<p><small data-items-in-box class="text-muted">${item.itemsInBox} шт. в наявності</small><button data-info class="btninfo">i</button></p>
			
											<div class="details-wrapper">
			
												<!-- Счетчик -->
												<div class="items counter-wrapper">
													<button class="items__control" data-action="minus">-</button>
													<div class="items__current" data-counter>1</div>
													<button class="items__control" data-action="plus">+</button>
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
							Swipe.insertAdjacentHTML('beforeend', productHTML);
					}
					if (item.name == "Darkside") {
						const productHTML = `<div class="${item.name}">
										<div class="postavshik">${item.postavshik}</div>
										<div class="card" data-id="${item.id}">
											<img class="product-img" src="img/Tabaco/dark/${item.imgSrc}" alt="">
											<div class="card-body text-center">
												<h4 class="item-title">${item.title}</h4>
												<p><small data-items-in-box class="text-muted">${item.itemsInBox} шт. в наявності</small><button data-info class="btninfo">i</button></p>
				
												<div class="details-wrapper">
				
													<!-- Счетчик -->
													<div class="items counter-wrapper">
														<button class="items__control" data-action="minus">-</button>
														<div class="items__current" data-counter>1</div>
														<button class="items__control" data-action="plus">+</button>
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
								Dark.insertAdjacentHTML('beforeend', productHTML);
						}
						if (item.name == "DarkAngle") {
							const productHTML = `<div class="${item.name}">
											<div class="postavshik">${item.postavshik}</div>
											<div class="card" data-id="${item.id}">
												<img class="product-img" src="img/Tabaco/smokeangel/${item.imgSrc}" alt="">
												<div class="card-body text-center">
													<h4 class="item-title">${item.title}</h4>
													<p><small data-items-in-box class="text-muted">${item.itemsInBox} шт. в наявності</small><button data-info class="btninfo">i</button></p>
					
													<div class="details-wrapper">
					
														<!-- Счетчик -->
														<div class="items counter-wrapper">
															<button class="items__control" data-action="minus">-</button>
															<div class="items__current" data-counter>1</div>
															<button class="items__control" data-action="plus">+</button>
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
									DarkAngle.insertAdjacentHTML('beforeend', productHTML);
							}
    });

}
