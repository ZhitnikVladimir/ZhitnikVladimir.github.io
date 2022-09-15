let itemsLength = $('.item').length; // Создаем переменную, в которой будем хранить/обновлять наше кол-во элементов
const $button = $('.add-item'),
  $buttomItemsLength = $('.get-items-length'),
  $container = $('.container');
  
$button.on('click', () => {
  $container.append('' +
    '<div class="item">' +
      '<div class="img"></div>' +
      '<div class="text"></div>' +
    '</div>'
  );
  itemsLength = $('.item').length; // Обновляем кол-во .item после каждого добавления
});

$buttomItemsLength.on('click', () => {
  console.log(itemsLength); // Выводим переменную itemsLength там где нам нужно
});