/* 1. Создайте объект, свойства которого описывают содержимое дамской сумочки

            Создайте метод объекта, позволяющий удалить что-то из сумочки

            Создайте метод объекта, позволяющий положить что-то в сумочку
*/

function GirlsBag() {
    var items = []
    this.showItems = function () {
        console.log(`Содержимое сумочки: ${items.join(', ')}`)
    }
    this.delItem = function (item) {
        !!item
            ? items.indexOf(item) != -1
                ? console.log(`Вы удалили ${items.splice(items.indexOf(item),1)}`)
                : console.log("Не нашлось в сумочке такого предмета")
            : console.warn("Не указан предмет")

    }
    this.addItems = function () {
        if (arguments[0]) {
            for (var i in arguments) {
                items.push(arguments[i])
                console.log(`В сумочку добавили ${arguments[i]}`)
            }
        } else {
            console.warn('Не указан предмет')
        }
    }
    console.log(`Была создана сумочка`)
}

var mybag = new GirlsBag
mybag.addItems("брасматик","помада","сникерс","мороженое","хлеб")
mybag.showItems()
mybag.delItem("сникерс")
mybag.showItems()


/*
2. Объявить конструктор LibraryBook, с помощью которого можно создавать и
редактировать объекты, хранящие информацию о книгах в библиотеке

📦 Приватные свойства объекта:
    🔑 title ( название книги ),
    🔑 year ( год издания ),
    🔑 author ( автор ),
    🔑 readerName ( кому выдана ),
    🔑 readerData ( когда выдана )

📦 Приватный метод 🔑 giveTheBook ( client ):
        внесение изменений в свойства:
            🔑 readerName ( client )
            🔑 readerData ( текущая дата )

📋 Публичные методы:
    📋 getBookInfo () - посмотреть информацию
       о наличии книги
       ( вывести в консоль readerData )
    📋 getTheBook ( client ) -  получить книгу:
       проверка, что книга не выдана на руки
       ( приватное свойство readerName
         должно быть пустой строкой )
       если выдана - вернуть null
       если не выдана, то вызвать приватный метод
       giveTheBook ( client ) и вернуть bookTitle
    📋 returnBook () - вернуть книгу:
       сбросить значения приватных свойств
       readerName, readerData

*/
function LibraryBook ($title = "Без названия", $year = "Год издания не указан", $author = "Неизвестного автора") {
    var title = $title,
        year = $year,
        author = $author
    var readerName = "",
        readerData = ""
    function giveTheBook ($client = "Безымянный", $data = new Date()) {
        readerName = $client
        readerData = $data
    }
    this.getBookInfo = function () {
        console.log(
            !!readerName
                ? `Книгу "${title}" забрал ${readerData.getDate()}/${readerData.getMonth()}/${readerData.getFullYear()} читатель ${readerName}`
                : `Книга "${title}" есть в наличии`
        )
    }
    this.getTheBook = function ($_client = "Безымянный") {
        if (!readerName) {
            giveTheBook($_client)
            return title
        } else {
            return null
        }

    }
    this.returnBook  = function () {
        readerName = ""
        readerData = ""
        console.log(`Книгу "${title}" вернули`)
    }
}

var mylib = []

mylib[0] = new LibraryBook("Унесенные ветром",1988, "А. Бирюков")
mylib[1] = new LibraryBook("Колобок",743, "Славянский народ")
mylib[2] = new LibraryBook("Онегин",1700, "Евгений")

mylib[1].getTheBook("Илья Петровский")
mylib[1].getBookInfo()
mylib[1].returnBook()
mylib[1].getBookInfo()
