// Игровые данные
const gameData = {
    totalStars: 0,
    totalEnergySaved: 0,
    errors: 0,
    currentRoom: null,
    rooms: {
        kitchen: {
            name: "Кухня",
            stars: 0,
            completed: false,
            story: "Вы собираетесь уйти из дома. На кухне осталось много включенных приборов и неэффективно использованных ресурсов. Найдите все способы сэкономить энергию!",
            tasks: [
                {
                    id: "fridge",
                    name: "Холодильник",
                    description: "Проверьте, плотно ли закрыта дверца холодильника",
                    solved: false,
                    stars: 2,
                    energy: 50,
                    icon: "fas fa-refrigerator",
                    hint: "Холодильник потребляет больше энергии, если дверца неплотно закрыта. Убедитесь, что ничего не мешает закрытию.",
                    color: "#4db6ac"
                },
                {
                    id: "stove",
                    name: "Плита",
                    description: "Выключите конфорки и духовку",
                    solved: false,
                    stars: 3,
                    energy: 150,
                    icon: "fas fa-fire",
                    hint: "Даже выключенная, но не отключенная от сети плита может потреблять энергию в режиме ожидания.",
                    color: "#e57373"
                },
                {
                    id: "kettle",
                    name: "Электрочайник",
                    description: "Отключите электрочайник от розетки",
                    solved: false,
                    stars: 1,
                    energy: 30,
                    icon: "fas fa-mug-hot",
                    hint: "Электрочайник в розетке продолжает потреблять энергию даже когда не кипятит воду.",
                    color: "#ffb74d"
                },
                {
                    id: "light",
                    name: "Свет",
                    description: "Выключите свет на кухне",
                    solved: false,
                    stars: 1,
                    energy: 40,
                    icon: "fas fa-lightbulb",
                    hint: "Свет на кухне обычно самый яркий в доме и потребляет много энергии.",
                    color: "#f1c40f"
                },
                {
                    id: "window",
                    name: "Окно",
                    description: "Закройте окно для сохранения тепла",
                    solved: false,
                    stars: 2,
                    energy: 80,
                    icon: "fas fa-window-maximize",
                    hint: "Открытое окно в холодное время заставляет отопление работать интенсивнее.",
                    color: "#4fc3f7"
                },
                {
                    id: "faucet",
                    name: "Кран",
                    description: "Проверьте, не течёт ли кран",
                    solved: false,
                    stars: 1,
                    energy: 20,
                    icon: "fas fa-faucet",
                    hint: "Капающий кран не только тратит воду, но и энергию на её подогрев.",
                    color: "#64b5f6"
                }
            ],
            wrongItems: [
                {
                    id: "microwave",
                    name: "Микроволновка",
                    description: "Нужно оставить включенной",
                    icon: "fas fa-microphone",
                    color: "#9575cd",
                    message: "Микроволновку можно выключить из розетки, она не нужна когда вас нет дома!"
                },
                {
                    id: "toaster",
                    name: "Тостер",
                    description: "Этот прибор безопасен",
                    icon: "fas fa-bread-slice",
                    color: "#d4a5a5",
                    message: "Тостер лучше отключить - он может представлять опасность и потребляет энергию в режиме ожидания!"
                }
            ]
        },
        living: {
            name: "Гостиная",
            stars: 0,
            completed: false,
            story: "В гостиной осталось работать несколько электроприборов. Найдите их и выключите, чтобы сэкономить энергию.",
            tasks: [
                {
                    id: "tv",
                    name: "Телевизор",
                    description: "Выключите телевизор полностью (не в режиме ожидания)",
                    solved: false,
                    stars: 2,
                    energy: 60,
                    icon: "fas fa-tv",
                    hint: "Телевизор в режиме ожидания продолжает потреблять до 10 Вт энергии.",
                    color: "#ff8a65"
                },
                {
                    id: "gameconsole",
                    name: "Игровая приставка",
                    description: "Выключите игровую приставку",
                    solved: false,
                    stars: 2,
                    energy: 70,
                    icon: "fas fa-gamepad",
                    hint: "Игровые приставки в режиме ожидания могут потреблять столько же, сколько маленький холодильник.",
                    color: "#ff5252"
                },
                {
                    id: "lamp",
                    name: "Торшер",
                    description: "Выключите торшер",
                    solved: false,
                    stars: 1,
                    energy: 30,
                    icon: "fas fa-lamp",
                    hint: "Декоративное освещение часто забывают выключить.",
                    color: "#ffb74d"
                },
                {
                    id: "charger",
                    name: "Зарядные устройства",
                    description: "Отключите зарядные устройства из розеток",
                    solved: false,
                    stars: 1,
                    energy: 15,
                    icon: "fas fa-charging-station",
                    hint: "Зарядные устройства в розетках без телефонов продолжают потреблять энергию.",
                    color: "#4db6ac"
                },
                {
                    id: "ac",
                    name: "Кондиционер",
                    description: "Выключите кондиционер",
                    solved: false,
                    stars: 3,
                    energy: 200,
                    icon: "fas fa-wind",
                    hint: "Кондиционер - один из самых энергопотребляющих приборов в доме.",
                    color: "#4fc3f7"
                },
                {
                    id: "curtains",
                    name: "Шторы",
                    description: "Закройте шторы для сохранения температуры",
                    solved: false,
                    stars: 1,
                    energy: 25,
                    icon: "fas fa-blinds",
                    hint: "Закрытые шторы помогают сохранить тепло зимой и прохладу летом.",
                    color: "#9575cd"
                }
            ],
            wrongItems: [
                {
                    id: "flower",
                    name: "Растение",
                    description: "Это живое растение",
                    icon: "fas fa-seedling",
                    color: "#81c784",
                    message: "Растение не потребляет электричество, оно помогает очищать воздух!"
                },
                {
                    id: "books",
                    name: "Книги",
                    description: "Книги на полке",
                    icon: "fas fa-book",
                    color: "#8d6e63",
                    message: "Книги не нужно выключать, они не потребляют энергию!"
                }
            ]
        },
        bedroom: {
            name: "Спальня",
            stars: 0,
            completed: false,
            story: "В спальне тоже есть приборы, которые можно выключить для экономии энергии.",
            tasks: [
                {
                    id: "nightlight",
                    name: "Ночник",
                    description: "Выключите ночник",
                    solved: false,
                    stars: 1,
                    energy: 10,
                    icon: "fas fa-moon",
                    hint: "Ночник горит всю ночь и потребляет энергию даже днём, если его не выключить.",
                    color: "#ffd54f"
                },
                {
                    id: "heater",
                    name: "Обогреватель",
                    description: "Выключите электрический обогреватель",
                    solved: false,
                    stars: 3,
                    energy: 180,
                    icon: "fas fa-temperature-high",
                    hint: "Электрические обогреватели очень энергозатратны.",
                    color: "#e57373"
                },
                {
                    id: "laptop",
                    name: "Ноутбук",
                    description: "Выключите ноутбук и отключите зарядку",
                    solved: false,
                    stars: 2,
                    energy: 45,
                    icon: "fas fa-laptop",
                    hint: "Ноутбук в спящем режиме продолжает потреблять энергию.",
                    color: "#64b5f6"
                },
                {
                    id: "phone",
                    name: "Телефон",
                    description: "Отключите телефон от зарядки",
                    solved: false,
                    stars: 1,
                    energy: 15,
                    icon: "fas fa-mobile-alt",
                    hint: "Оставлять телефон на зарядке после 100% вредно для батареи и тратит энергию.",
                    color: "#9ccc65"
                },
                {
                    id: "radio",
                    name: "Радио",
                    description: "Выключите радио",
                    solved: false,
                    stars: 1,
                    energy: 25,
                    icon: "fas fa-music",
                    hint: "Фоновые звуки, которые мы не слушаем, всё равно потребляют энергию.",
                    color: "#ba68c8"
                },
                {
                    id: "blanket",
                    name: "Электропростынь",
                    description: "Выключите электропростынь",
                    solved: false,
                    stars: 2,
                    energy: 90,
                    icon: "fas fa-bed",
                    hint: "Электропростыни потребляют много энергии, особенно на высоких настройках.",
                    color: "#ff8a65"
                }
            ],
            wrongItems: [
                {
                    id: "pillow",
                    name: "Подушка",
                    description: "Обычная подушка",
                    icon: "fas fa-square",
                    color: "#b39ddb",
                    message: "Подушка не потребляет электричество, она для комфортного сна!"
                },
                {
                    id: "mirror",
                    name: "Зеркало",
                    description: "Зеркало на стене",
                    icon: "fas fa-mirror",
                    color: "#90a4ae",
                    message: "Зеркало не нужно выключать, оно отражает свет но не потребляет энергию!"
                }
            ]
        },
        bathroom: {
            name: "Ванная",
            stars: 0,
            completed: false,
            story: "В ванной комнате можно сэкономить не только воду, но и электроэнергию.",
            tasks: [
                {
                    id: "heater_bath",
                    name: "Водонагреватель",
                    description: "Уменьшите температуру водонагревателя",
                    solved: false,
                    stars: 3,
                    energy: 120,
                    icon: "fas fa-water",
                    hint: "Снижение температуры водонагревателя на 10°C может сэкономить до 5% энергии.",
                    color: "#4db6ac"
                },
                {
                    id: "light_bath",
                    name: "Свет в ванной",
                    description: "Выключите свет",
                    solved: false,
                    stars: 1,
                    energy: 35,
                    icon: "fas fa-lightbulb",
                    hint: "Влагостойкие светильники в ванной обычно мощнее обычных.",
                    color: "#f1c40f"
                },
                {
                    id: "ventilation",
                    name: "Вентиляция",
                    description: "Выключите вытяжной вентилятор",
                    solved: false,
                    stars: 1,
                    energy: 40,
                    icon: "fas fa-fan",
                    hint: "Вентиляторы часто оставляют работать надолго после использования ванной.",
                    color: "#4fc3f7"
                },
                {
                    id: "hair_dryer",
                    name: "Фен",
                    description: "Отключите фен от розетки",
                    solved: false,
                    stars: 1,
                    energy: 25,
                    icon: "fas fa-wind",
                    hint: "Фены имеют высокую мощность и могут быть опасны при оставлении в розетке.",
                    color: "#e1bee7"
                },
                {
                    id: "washing",
                    name: "Стиральная машина",
                    description: "Выберите эко-режим стирки",
                    solved: false,
                    stars: 2,
                    energy: 70,
                    icon: "fas fa-soap",
                    hint: "Эко-режимы используют меньше воды и нагревают её до более низкой температуры.",
                    color: "#64b5f6"
                },
                {
                    id: "towel",
                    name: "Полотенцесушитель",
                    description: "Выключите электрический полотенцесушитель",
                    solved: false,
                    stars: 2,
                    energy: 100,
                    icon: "fas fa-temperature-high",
                    hint: "Полотенцесушители часто работают круглосуточно, хотя нужны только несколько часов в день.",
                    color: "#ff8a65"
                }
            ],
            wrongItems: [
                {
                    id: "soap",
                    name: "Мыло",
                    description: "Кусковое мыло",
                    icon: "fas fa-hand-sparkles",
                    color: "#b2dfdb",
                    message: "Мыло не потребляет электричество, оно для гигиены!"
                },
                {
                    id: "towel_rack",
                    name: "Полотенцесушитель (водяной)",
                    description: "Водяной полотенцесушитель",
                    icon: "fas fa-hand-holding-water",
                    color: "#80deea",
                    message: "Водяной полотенцесушитель работает от системы отопления, его не нужно выключать!"
                }
            ]
        },
        children: {
            name: "Детская",
            stars: 0,
            completed: false,
            story: "В детской комнате много электронных игрушек и устройств. Проверьте их все.",
            tasks: [
                {
                    id: "nightlight_kid",
                    name: "Детский ночник",
                    description: "Выключите детский ночник",
                    solved: false,
                    stars: 1,
                    energy: 15,
                    icon: "fas fa-star",
                    hint: "Яркие цветные ночники потребляют больше энергии, чем обычные.",
                    color: "#fff176"
                },
                {
                    id: "projector",
                    name: "Проектор звёзд",
                    description: "Выключите проектор ночного неба",
                    solved: false,
                    stars: 2,
                    energy: 50,
                    icon: "fas fa-cloud-moon",
                    hint: "Декоративные проекторы часто работают всю ночь.",
                    color: "#ba68c8"
                },
                {
                    id: "toys",
                    name: "Электронные игрушки",
                    description: "Выключите все электронные игрушки",
                    solved: false,
                    stars: 2,
                    energy: 40,
                    icon: "fas fa-robot",
                    hint: "Игрушки на батарейках могут разряжаться даже когда с ними не играют.",
                    color: "#ff8a65"
                },
                {
                    id: "tablet",
                    name: "Планшет",
                    description: "Выключите планшет и отключите зарядку",
                    solved: false,
                    stars: 1,
                    energy: 20,
                    icon: "fas fa-tablet-alt",
                    hint: "Детские планшеты часто остаются включенными с запущенными приложениями.",
                    color: "#64b5f6"
                },
                {
                    id: "music_box",
                    name: "Музыкальная шкатулка",
                    description: "Выключите автоматическую музыкальную шкатулку",
                    solved: false,
                    stars: 1,
                    energy: 25,
                    icon: "fas fa-music",
                    hint: "Автоматические музыкальные устройства могут включаться случайно.",
                    color: "#e57373"
                },
                {
                    id: "heater_kid",
                    name: "Обогреватель",
                    description: "Выключите дополнительный обогреватель",
                    solved: false,
                    stars: 3,
                    energy: 150,
                    icon: "fas fa-temperature-high",
                    hint: "В детской часто ставят дополнительные обогреватели, забывая их выключать.",
                    color: "#ff5252"
                }
            ],
            wrongItems: [
                {
                    id: "teddy_bear",
                    name: "Плюшевый мишка",
                    description: "Мягкая игрушка",
                    icon: "fas fa-paw",
                    color: "#8d6e63",
                    message: "Плюшевые игрушки не потребляют электричество, они для игры и уюта!"
                },
                {
                    id: "book_shelf",
                    name: "Книжная полка",
                    description: "Полка с книгами",
                    icon: "fas fa-book-open",
                    color: "#a1887f",
                    message: "Книжная полка не потребляет энергию, она для хранения книг!"
                }
            ]
        },
        hallway: {
            name: "Прихожая",
            stars: 0,
            completed: false,
            story: "Прихожая - последняя комната перед выходом. Проверьте всё здесь.",
            tasks: [
                {
                    id: "light_hall",
                    name: "Свет в прихожей",
                    description: "Выключите основной свет",
                    solved: false,
                    stars: 1,
                    energy: 30,
                    icon: "fas fa-lightbulb",
                    hint: "Свет в прихожей часто горит дольше всего, так как его включают первым при входе.",
                    color: "#f1c40f"
                },
                {
                    id: "security",
                    name: "Система безопасности",
                    description: "Проверьте настройки системы безопасности",
                    solved: false,
                    stars: 2,
                    energy: 60,
                    icon: "fas fa-shield-alt",
                    hint: "Некоторые системы безопасности имеют энергосберегающие режимы.",
                    color: "#64b5f6"
                },
                {
                    id: "router",
                    name: "Wi-Fi роутер",
                    description: "Не выключайте роутер",
                    solved: false,
                    stars: 0,
                    energy: 0,
                    icon: "fas fa-wifi",
                    hint: "Роутер должен остаться включенным для работы умных устройств.",
                    color: "#4db6ac",
                    isSpecial: true
                },
                {
                    id: "smart_home",
                    name: "Умный дом",
                    description: "Активируйте энергосберегающий режим",
                    solved: false,
                    stars: 3,
                    energy: 80,
                    icon: "fas fa-home",
                    hint: "Системы умного дома могут оптимизировать энергопотребление всех приборов.",
                    color: "#9575cd"
                },
                {
                    id: "door",
                    name: "Дверь",
                    description: "Проверьте уплотнитель на входной двери",
                    solved: false,
                    stars: 2,
                    energy: 70,
                    icon: "fas fa-door-closed",
                    hint: "Плохая изоляция входной двери приводит к большим теплопотерям.",
                    color: "#8d6e63"
                },
                {
                    id: "final_check",
                    name: "Финальная проверка",
                    description: "Проведите финальную проверку всех комнат",
                    solved: false,
                    stars: 2,
                    energy: 0,
                    icon: "fas fa-clipboard-check",
                    hint: "Пройдитесь мысленно по всем комнатам и убедитесь, что всё выключено.",
                    color: "#81c784"
                }
            ],
            wrongItems: [
                {
                    id: "umbrella",
                    name: "Зонт",
                    description: "Зонт в подставке",
                    icon: "fas fa-umbrella",
                    color: "#64b5f6",
                    message: "Зонт не потребляет электричество, он нужен на случай дождя!"
                },
                {
                    id: "coat",
                    name: "Пальто",
                    description: "Верхняя одежда",
                    icon: "fas fa-tshirt",
                    color: "#a1887f",
                    message: "Одежда в прихожей не потребляет энергию, она должна быть под рукой!"
                }
            ]
        }
    }
};

// Инициализация игры
document.addEventListener('DOMContentLoaded', function() {
    console.log("Игра 'Энергосбережение' загружена!");
    
    // Загружаем прогресс
    loadGameProgress();
    
    // Обновляем отображение
    updateProgress();
    
    // Настраиваем обработчики событий
    setupEventListeners();
});

// Настройка обработчиков событий
function setupEventListeners() {
    console.log("Настройка обработчиков событий...");
    
    // Выбор комнаты
    const roomCards = document.querySelectorAll('.room-card');
    roomCards.forEach(card => {
        card.addEventListener('click', function() {
            const roomId = this.dataset.room;
            console.log("Выбрана комната:", roomId);
            enterRoom(roomId);
        });
    });

    // Кнопка "Назад"
    const backButton = document.getElementById('back-button');
    if (backButton) {
        backButton.addEventListener('click', goBackToRooms);
    }

    // Кнопка "Подсказка" на главном экране
    const hintButton = document.getElementById('hint-button');
    if (hintButton) {
        hintButton.addEventListener('click', showGeneralHint);
    }

    // Кнопка "Играть снова"
    const playAgainButton = document.getElementById('play-again');
    if (playAgainButton) {
        playAgainButton.addEventListener('click', restartGame);
    }
    
    // Создаем счётчик ошибок
    createErrorCounter();
}

// Создать счётчик ошибок
function createErrorCounter() {
    const errorCounter = document.createElement('div');
    errorCounter.id = 'error-counter';
    errorCounter.className = 'error-counter';
    errorCounter.innerHTML = `<i class="fas fa-times-circle"></i> Ошибок: ${gameData.errors}`;
    document.body.appendChild(errorCounter);
    
    // Скрываем счётчик если нет ошибок
    if (gameData.errors === 0) {
        errorCounter.style.display = 'none';
    }
}

// Загрузить прогресс из localStorage
function loadGameProgress() {
    const savedData = localStorage.getItem('energySavingGame');
    if (savedData) {
        try {
            const saved = JSON.parse(savedData);
            gameData.totalStars = saved.totalStars || 0;
            gameData.totalEnergySaved = saved.totalEnergySaved || 0;
            gameData.errors = saved.errors || 0;
            
            // Загружаем прогресс по комнатам
            for (const roomId in saved.rooms) {
                if (gameData.rooms[roomId]) {
                    gameData.rooms[roomId].stars = saved.rooms[roomId].stars || 0;
                    gameData.rooms[roomId].completed = saved.rooms[roomId].completed || false;
                    
                    // Загружаем статус задач
                    if (saved.rooms[roomId].tasks && gameData.rooms[roomId].tasks) {
                        for (let i = 0; i < gameData.rooms[roomId].tasks.length; i++) {
                            if (saved.rooms[roomId].tasks[i]) {
                                gameData.rooms[roomId].tasks[i].solved = saved.rooms[roomId].tasks[i].solved || false;
                            }
                        }
                    }
                }
            }
            console.log("Прогресс загружен из localStorage");
        } catch (e) {
            console.error("Ошибка при загрузке прогресса:", e);
        }
    }
}

// Сохранить прогресс в localStorage
function saveGameProgress() {
    const saveData = {
        totalStars: gameData.totalStars,
        totalEnergySaved: gameData.totalEnergySaved,
        errors: gameData.errors,
        rooms: {}
    };
    
    for (const roomId in gameData.rooms) {
        saveData.rooms[roomId] = {
            stars: gameData.rooms[roomId].stars,
            completed: gameData.rooms[roomId].completed,
            tasks: gameData.rooms[roomId].tasks.map(task => ({ solved: task.solved }))
        };
    }
    
    localStorage.setItem('energySavingGame', JSON.stringify(saveData));
    console.log("Прогресс сохранен в localStorage");
}

// Обновить прогресс на главном экране
function updateProgress() {
    console.log("Обновление прогресса...");
    
    // Пересчитываем общее количество звёзд и энергии
    gameData.totalStars = 0;
    gameData.totalEnergySaved = 0;
    
    for (const roomId in gameData.rooms) {
        const room = gameData.rooms[roomId];
        gameData.totalStars += room.stars;
        
        // Суммируем сэкономленную энергию
        room.tasks.forEach(task => {
            if (task.solved && !task.isSpecial) {
                gameData.totalEnergySaved += task.energy;
            }
        });
    }
    
    // Обновляем отображение на главном экране
    const totalStarsElement = document.getElementById('total-stars');
    if (totalStarsElement) {
        totalStarsElement.textContent = gameData.totalStars + '/60';
    }
    
    // Обновляем прогресс-бар
    const progressPercent = (gameData.totalStars / 60) * 100;
    const progressFill = document.getElementById('total-progress');
    if (progressFill) {
        progressFill.style.width = progressPercent + '%';
    }
    
    // Обновляем звёзды для каждой комнаты
    for (const roomId in gameData.rooms) {
        const roomElement = document.querySelector(`.room-card[data-room="${roomId}"] .star-count`);
        if (roomElement) {
            roomElement.textContent = gameData.rooms[roomId].stars + '/10';
            
            // Отмечаем завершённые комнаты
            const card = document.querySelector(`.room-card[data-room="${roomId}"]`);
            if (gameData.rooms[roomId].completed) {
                card.classList.add('completed');
            } else {
                card.classList.remove('completed');
            }
        }
    }
    
    // Обновляем счётчик ошибок
    updateErrorCounter();
    
    // Сохраняем прогресс
    saveGameProgress();
    
    // Проверяем, завершена ли вся игра
    if (gameData.totalStars >= 60) {
        setTimeout(showWinScreen, 500);
    }
}

// Обновить счётчик ошибок
function updateErrorCounter() {
    const errorCounter = document.getElementById('error-counter');
    if (errorCounter) {
        errorCounter.innerHTML = `<i class="fas fa-times-circle"></i> Ошибок: ${gameData.errors}`;
        
        // Показываем счётчик только если есть ошибки
        if (gameData.errors > 0) {
            errorCounter.style.display = 'block';
        } else {
            errorCounter.style.display = 'none';
        }
    }
}

// Войти в комнату
function enterRoom(roomId) {
    console.log("Вход в комнату:", roomId);
    
    gameData.currentRoom = roomId;
    const room = gameData.rooms[roomId];
    
    if (!room) {
        console.error("Комната не найдена:", roomId);
        return;
    }
    
    // Переключаем экраны
    const welcomeScreen = document.getElementById('welcome-screen');
    const gameScreen = document.getElementById('game-screen');
    
    if (welcomeScreen && gameScreen) {
        welcomeScreen.classList.remove('active');
        gameScreen.classList.add('active');
    }
    
    // Обновляем заголовок комнаты
    const roomNameElement = document.getElementById('current-room-name');
    const roomStarsElement = document.getElementById('current-room-stars');
    const energySavedElement = document.getElementById('energy-saved');
    
    if (roomNameElement) roomNameElement.textContent = room.name;
    if (roomStarsElement) roomStarsElement.textContent = room.stars + '/10';
    if (energySavedElement) energySavedElement.textContent = gameData.totalEnergySaved;
    
    // Обновляем историю комнаты
    const roomStoryElement = document.getElementById('room-story');
    if (roomStoryElement) {
        roomStoryElement.textContent = room.story;
    }
    
    // Генерируем список задач и вид комнаты
    generateTasksList();
    generateRoomView();
    
    // Скрываем подсказку
    const hintTextElement = document.getElementById('hint-text');
    if (hintTextElement) {
        hintTextElement.textContent = 'Нажмите кнопку "Подсказка", если не знаете, что делать дальше';
    }
}

// Вернуться к списку комнат
function goBackToRooms() {
    console.log("Возврат к списку комнат");
    
    const welcomeScreen = document.getElementById('welcome-screen');
    const gameScreen = document.getElementById('game-screen');
    
    if (welcomeScreen && gameScreen) {
        welcomeScreen.classList.add('active');
        gameScreen.classList.remove('active');
    }
    
    updateProgress();
}

// Генерация списка задач
function generateTasksList() {
    const room = gameData.rooms[gameData.currentRoom];
    const tasksList = document.getElementById('tasks-list');
    
    if (!room || !tasksList) return;
    
    tasksList.innerHTML = '';
    
    room.tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.className = `task-item ${task.solved ? 'completed' : ''} ${task.isSpecial ? 'special' : ''}`;
        taskElement.dataset.taskId = task.id;
        
        // Устанавливаем цвет фона
        if (task.color) {
            taskElement.style.background = `linear-gradient(90deg, ${task.color}20 0%, ${task.color}40 100%)`;
            taskElement.style.borderLeftColor = task.color;
        }
        
        taskElement.innerHTML = `
            <div class="task-icon" style="background-color: ${task.color || '#3498db'}; color: white;">
                <i class="${task.icon}"></i>
            </div>
            <div class="task-text">
                <h4>${task.name}</h4>
                <p>${task.description}</p>
            </div>
            <div class="task-stars">${task.isSpecial ? '0' : task.stars} ★</div>
        `;
        
        // Добавляем обработчик клика на задачу (кроме специальных)
        if (!task.isSpecial) {
            taskElement.style.cursor = 'pointer';
            taskElement.addEventListener('click', function() {
                const taskId = this.dataset.taskId;
                console.log("Клик по задаче:", taskId);
                solveTask(taskId);
            });
        } else {
            taskElement.style.cursor = 'default';
        }
        
        tasksList.appendChild(taskElement);
    });
}

// Генерация интерактивных элементов комнаты
function generateRoomView() {
    const room = gameData.rooms[gameData.currentRoom];
    const roomView = document.getElementById('room-view');
    
    if (!room || !roomView) return;
    
    roomView.innerHTML = '';
    
    // Собираем все элементы (правильные + неправильные)
    const allItems = [];
    
    // Добавляем правильные задачи
    room.tasks.forEach(task => {
        allItems.push({
            type: 'task',
            data: task
        });
    });
    
    // Добавляем неправильные предметы
    room.wrongItems.forEach(wrongItem => {
        allItems.push({
            type: 'wrong',
            data: wrongItem
        });
    });
    
    // Перемешиваем элементы
    shuffleArray(allItems);
    
    // Создаем элементы в перемешанном порядке
    allItems.forEach(item => {
        if (item.type === 'task') {
            const task = item.data;
            const itemElement = document.createElement('div');
            itemElement.className = `interactive-item ${task.solved ? 'solved' : ''} ${task.isSpecial ? 'special' : ''}`;
            itemElement.dataset.taskId = task.id;
            itemElement.dataset.type = 'correct';
            
            // Устанавливаем цвет фона
            if (task.color) {
                itemElement.style.background = `linear-gradient(135deg, ${task.color}20 0%, ${task.color}40 100%)`;
                itemElement.style.borderColor = task.color;
            }
            
            itemElement.innerHTML = `
                <i class="${task.icon}" style="color: ${task.color || '#2c3e50'}; font-size: 2.5rem; margin-bottom: 15px;"></i>
                <h4>${task.name}</h4>
                <p>${task.solved ? '✓ Выполнено!' : (task.isSpecial ? 'Не трогать!' : 'Нажмите для выполнения')}</p>
            `;
            
            // Добавляем обработчик клика ТОЛЬКО для неспециальных и невыполненных задач
            if (!task.isSpecial && !task.solved) {
                itemElement.style.cursor = 'pointer';
                itemElement.addEventListener('click', function() {
                    const taskId = this.dataset.taskId;
                    console.log("Клик по правильному предмету:", taskId);
                    solveTask(taskId);
                });
            } else {
                itemElement.style.cursor = 'default';
            }
            
            roomView.appendChild(itemElement);
        } 
        else if (item.type === 'wrong') {
            const wrongItem = item.data;
            const wrongElement = document.createElement('div');
            wrongElement.className = 'interactive-item wrong-item';
            wrongElement.dataset.itemId = wrongItem.id;
            wrongElement.dataset.type = 'wrong';
            
            // Устанавливаем цвет фона для неправильных предметов
            wrongElement.style.background = `linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)`;
            wrongElement.style.borderColor = '#bdc3c7';
            
            wrongElement.innerHTML = `
                <i class="${wrongItem.icon}" style="color: ${wrongItem.color || '#95a5a6'}; font-size: 2.5rem; margin-bottom: 15px;"></i>
                <h4>${wrongItem.name}</h4>
                <p>Нажмите для выполнения</p>
            `;
            
            // Добавляем обработчик клика для неправильных предметов
            wrongElement.style.cursor = 'pointer';
            wrongElement.addEventListener('click', function() {
                const itemId = this.dataset.itemId;
                console.log("Клик по неправильному предмету:", itemId);
                showWrongItemMessage(wrongItem, this);
            });
            
            roomView.appendChild(wrongElement);
        }
    });
}

// Вспомогательная функция для перемешивания массива
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

                    [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Показать сообщение при нажатии на неправильный предмет
function showWrongItemMessage(wrongItem, element) {
    console.log("Неправильный выбор:", wrongItem.name);
    
    // Увеличиваем счётчик ошибок
    gameData.errors++;
    updateErrorCounter();
    saveGameProgress();
    
    // Добавляем анимацию
    element.classList.add('wrong-click');
    
    // Создаём сообщение об ошибке
    const feedback = document.createElement('div');
    feedback.className = 'wrong-feedback';
    feedback.textContent = 'Ой, что-то не так, попробуйте еще раз!';
    
    // Позиционируем сообщение
    const rect = element.getBoundingClientRect();
    feedback.style.top = (rect.top - 40) + 'px';
    feedback.style.left = (rect.left + rect.width / 2 - 100) + 'px';
    
    document.body.appendChild(feedback);
    
    // Показываем дополнительное сообщение
    setTimeout(() => {
        alert(`❌ ${wrongItem.message}`);
    }, 300);
    
    // Убираем класс анимации через 0.5 секунды
    setTimeout(() => {
        element.classList.remove('wrong-click');
    }, 500);
    
    // Удаляем сообщение через 3 секунды
    setTimeout(() => {
        if (feedback.parentNode) {
            feedback.parentNode.removeChild(feedback);
        }
    }, 3000);
}

// Решение задачи
function solveTask(taskId) {
    const room = gameData.rooms[gameData.currentRoom];
    const task = room.tasks.find(t => t.id === taskId);
    
    if (!task) {
        console.error("Задача не найдена:", taskId);
        return;
    }
    
    if (task.solved) {
        console.log("Задача уже решена:", taskId);
        return;
    }
    
    if (task.isSpecial) {
        console.log("Это специальная задача, её не нужно решать:", taskId);
        return;
    }
    
    // Помечаем задачу как решённую
    task.solved = true;
    room.stars += task.stars;
    
    console.log("Задача решена:", task.name, "+" + task.stars + " звёзд");
    
    // Обновляем отображение
    const roomStarsElement = document.getElementById('current-room-stars');
    const energySavedElement = document.getElementById('energy-saved');
    
    if (roomStarsElement) roomStarsElement.textContent = room.stars + '/10';
    
    if (energySavedElement) {
        gameData.totalEnergySaved += task.energy;
        energySavedElement.textContent = gameData.totalEnergySaved;
    }
    
    // Обновляем список задач и вид комнаты
    generateTasksList();
    generateRoomView();
    
    // Проверяем, завершена ли комната
    if (room.stars >= 10) {
        room.completed = true;
        showRoomCompleteMessage();
    }
    
    // Обновляем общий прогресс
    updateProgress();
}

// Показать сообщение о завершении комнаты
function showRoomCompleteMessage() {
    const room = gameData.rooms[gameData.currentRoom];
    const hintSection = document.getElementById('hint-section');
    const hintText = document.getElementById('hint-text');
    
    if (!hintSection || !hintText) return;
    
    hintSection.style.backgroundColor = '#d4edda';
    hintSection.style.borderLeftColor = '#28a745';
    
    hintText.innerHTML = `
        <strong>🎉 Поздравляем!</strong> Вы завершили комнату "${room.name}"!<br>
        Вы нашли все способы сэкономить энергию в этой комнате.<br>
        Теперь можете перейти в другую комнату или продолжить здесь для проверки.
    `;
    
    // Возвращаем обычный цвет через 5 секунд
    setTimeout(() => {
        hintSection.style.backgroundColor = '';
        hintSection.style.borderLeftColor = '';
        hintText.textContent = 'Нажмите кнопку "Подсказка", если не знаете, что делать дальше';
    }, 5000);
}

// Показать подсказку для текущей задачи
function showHintForCurrentTask() {
    const room = gameData.rooms[gameData.currentRoom];
    if (!room) return;
    
    const unsolvedTasks = room.tasks.filter(task => !task.solved && !task.isSpecial);
    
    if (unsolvedTasks.length > 0) {
        // Выбираем случайную нерешённую задачу
        const randomTask = unsolvedTasks[Math.floor(Math.random() * unsolvedTasks.length)];
        
        const hintSection = document.getElementById('hint-section');
        const hintText = document.getElementById('hint-text');
        
        if (hintSection && hintText) {
            hintSection.style.backgroundColor = '#fff3cd';
            hintSection.style.borderLeftColor = '#ffc107';
            
            hintText.innerHTML = `
                <strong>💡 Подсказка для "${randomTask.name}":</strong><br>
                ${randomTask.hint}
            `;
            
            // Возвращаем обычный цвет через 10 секунд
            setTimeout(() => {
                hintSection.style.backgroundColor = '';
                hintSection.style.borderLeftColor = '';
                hintText.textContent = 'Нажмите кнопку "Подсказка", если не знаете, что делать дальше';
            }, 10000);
        }
    } else {
        const hintText = document.getElementById('hint-text');
        if (hintText) {
            hintText.textContent = 'Все задачи в этой комнате уже выполнены! Вы молодец!';
        }
    }
}

// Показать общую подсказку
function showGeneralHint() {
    const unsolvedRooms = Object.keys(gameData.rooms).filter(roomId => !gameData.rooms[roomId].completed);
    
    if (unsolvedRooms.length > 0) {
        const randomRoomId = unsolvedRooms[Math.floor(Math.random() * unsolvedRooms.length)];
        const room = gameData.rooms[randomRoomId];
        
        alert(`💡 Подсказка: Попробуйте проверить комнату "${room.name}"! Там ещё есть нерешённые задачи.`);
    } else {
        alert('🎉 Поздравляем! Вы выполнили все комнаты!');
    }
}

// Показать экран победы
function showWinScreen() {
    console.log("Показ экрана победы");
    
    const welcomeScreen = document.getElementById('welcome-screen');
    const gameScreen = document.getElementById('game-screen');
    const winScreen = document.getElementById('win-screen');
    
    if (welcomeScreen && gameScreen && winScreen) {
        welcomeScreen.classList.remove('active');
        gameScreen.classList.remove('active');
        winScreen.classList.add('active');
    }
    
    const finalStars = document.getElementById('final-stars');
    const finalEnergy = document.getElementById('final-energy');
    const finalMoney = document.getElementById('final-money');
    
    if (finalStars) finalStars.textContent = gameData.totalStars + '/60';
    if (finalEnergy) finalEnergy.textContent = gameData.totalEnergySaved + ' Вт';
    
    // Рассчитываем сэкономленные деньги (примерно 5 руб за 100 Вт)
    if (finalMoney) {
        const moneySaved = Math.round(gameData.totalEnergySaved * 0.05);
        finalMoney.textContent = moneySaved + ' руб';
    }
}

// Перезапустить игру
function restartGame() {
    if (confirm('Вы уверены, что хотите начать игру заново? Весь прогресс будет сброшен.')) {
        console.log("Перезапуск игры");
        
        // Сбрасываем данные игры
        gameData.totalStars = 0;
        gameData.totalEnergySaved = 0;
        gameData.errors = 0;
        
        for (const roomId in gameData.rooms) {
            const room = gameData.rooms[roomId];
            room.stars = 0;
            room.completed = false;
            
            room.tasks.forEach(task => {
                task.solved = false;
            });
        }
        
        // Очищаем сохранения
        localStorage.removeItem('energySavingGame');
        
        // Возвращаемся на главный экран
        const winScreen = document.getElementById('win-screen');
        const welcomeScreen = document.getElementById('welcome-screen');
        
        if (winScreen && welcomeScreen) {
            winScreen.classList.remove('active');
            welcomeScreen.classList.add('active');
        }
        
        // Обновляем отображение
        updateProgress();
        updateErrorCounter();
    }
}

// Обработчик кнопки подсказки в игровом экране
document.addEventListener('DOMContentLoaded', function() {
    // Дублируем обработчик для кнопки подсказки
    const hintButton = document.getElementById('hint-button');
    if (hintButton) {
        hintButton.addEventListener('click', function() {
            const gameScreen = document.getElementById('game-screen');
            if (gameScreen && gameScreen.classList.contains('active')) {
                showHintForCurrentTask();
            }
        });
    }
});

console.log("Игра 'Энергосбережение' полностью загружена и готова к работе!");