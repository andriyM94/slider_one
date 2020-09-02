/*===================================
      Функціонал для слайдера
=====================================*/
// путь к картинке
var path = "img/slider/";
// масив з назвами картинок
var images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
// початковий номер картинки
var currentImage = 0;

// first image
$(".main_img img").attr("src", path + images[currentImage]);

// при кліку на > вибираємо наступну картинку зі списка
$("#main_slider .next").click(function () {
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  }
  // надаємо щлях до картинки для головноі картинки сайдера
  $(".main_img img").attr("src", path + images[currentImage]);
  // видаляємо для всіх лі клас актів
  $(".all_img ul li").removeClass("active");
  // присвоюємо для лі який співпадає з головною картинкою клас актів
  $(".all_img ul li[data-id = '" + currentImage + "'] ").addClass("active");
});

// при кліку на < вибираємо наступну картинку зі списка
$("#main_slider .pref").click(function () {
  if (currentImage <= 0) {
    currentImage = images.length;
  }
  currentImage--;
  // надаємо щлях до картинки для головноі картинки сайдера
  $(".main_img img").attr("src", path + images[currentImage]);
  // видаляємо для всіх лі клас актів
  $(".all_img ul li").removeClass("active");
  // присвоюємо для лі який співпадає з головною картинкою клас актів
  $(".all_img ul li[data-id = '" + currentImage + "'] ").addClass("active");
});

// генеруємо список наших картинок
for (i = 0; i < images.length; i++) {
  // створюємо елементи лі з картинками
  $(".all_img ul").append(
    "<li data-id='" + i + "'><img src='" + path + images[i] + "' /></li>"
  );
  // якщо елемент лі перший то пирсвоюємо йому клас актів
  if (i == 0) {
    $(".all_img ul li").addClass("active");
  }
}

// при кліку на вибрану картинку виводимо її в слайдер і присвоюємо елементу списка клас active
$(".all_img li").click(function (e) {
  // вибираємо ід вибраного елемента
  var id = e.currentTarget.dataset.id;
  // присвоюємо шлх до картинки на вибраному елемені лі
  $(".main_img img").attr("src", path + images[id]);
  // видаляємо для всіх лі клас актів
  $(".all_img ul li").removeClass("active");
  // присвоюємо клас актів для вибраного лі
  $(this).addClass("active");
  // присвоюємо номер вибраної картинки
  currentImage = id;
});

// при кліку на картинку показуємо її на весь екран
$(".main_img img").click(function (e) {
  // робимо видимим блок
  $("#opacity").css({ display: "block" });
  // робимо видимим блок і створюємо в ньому картинку з шляхом картинки на яку ми попередньо натиснули
  $("#full_image")
    .css({ display: "block" })
    .append("<img src='" + $(this).attr("src") + "' />");
});

// при кліку на повноекранну картинку або за її межі ховаємо вибрані блоки і видаляємо картинку
$("#full_image").click(function () {
  $("#opacity").css({ display: "none" });
  $("#full_image").css({ display: "none" }).empty();
});
