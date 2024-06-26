# To do + drag and drop

Данное приложение на React предоставляет простой и интерактивный список задач с функцией перетаскивания для управления задачами.

Посмотреть демо можно здесь: [todo-dnd](https://theermek.github.io/react-todo-dnd/)

---

## Основной функционал

- Добавление задач: Поле ввода позволяет пользователям легко добавлять новые задачи в список.
- Редактирование задач: Нажмите на значок редактирования, чтобы изменить существующие задачи.
- Отметка как выполнено: Нажатие на значок "выполнено" зачеркнет задачу, указывая на её завершение.
- Удаление задач: Удалите задачи из списка, нажав на значок удаления.
- Перетаскивание: Изменяйте порядок задач или перемещайте их между разделами "Активные" и "Завершенные" с помощью перетаскивания.
- Визуальные подсказки: Приложение предоставляет визуальную обратную связь во время взаимодействия с перетаскиванием для улучшения пользовательского опыта.

## Технические детали

- React.js: Приложение построено с использованием React для динамичного и компонентного подхода.
- React Beautiful DnD: Эта библиотека обеспечивает бесшовную функциональность перетаскивания для задач.
- Управление состоянием: Хук useState React управляет состоянием задач, включая их содержимое, статус выполнения и порядок.
Компоненты:
- App: Основной компонент, который отображает всё приложение.
- InputField: Обрабатывает пользовательский ввод для добавления новых задач.
- TodoList: Отображает список задач и управляет их состоянием.
- SingleTodo: Представляет отдельный элемент задачи с функциями редактирования, удаления и выполнения.

## Инструкции
- Клонируйте или загрузите репозиторий.
- Установите зависимости с помощью npm install.
- Запустите приложение с помощью npm start.
- Добавляйте, редактируйте, завершайте и удаляйте задачи по мере необходимости.
- Используйте перетаскивание, чтобы изменить порядок или переместить задачи между разделами.
