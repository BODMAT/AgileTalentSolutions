## Огляд проекту
Це повнофункціональний прототип платформи розробників, створений як тестове завдання для Junior Full-Stack позиції. Проект включає React SPA фронтенд і Node.js/Express бекенд з системою пошуку на основі навичок.

## Архітектура

```
AgileTalentSolutions/
├── client/                 # React фронтенд
│   ├── src/
│   │   ├── components/     # React компоненти
│   │   │   ├── App/        # Основний додаток і лейаут
│   │   │   ├── Home/       # Головна сторінка + TagCloud
│   │   │   ├── Search/     # Пошук і результати
│   │   │   ├── Profile/    # Деталі профілю
│   │   │   ├── Header/     # Навігація
│   │   │   └── Reusable/   # Переиспользуемые компоненти
│   │   ├── api/           # API клієнт
│   │   ├── hooks/         # Кастомні хуки
│   │   ├── store/         # Zustand стан
│   │   ├── types/         # TypeScript типи
│   │   └── utils/         # Допоміжні функції
│   └── package.json
├── server/                # Node.js бекенд
│   ├── controllers/       # Контролери API
│   ├── routes/           # Маршрути Express
│   ├── data/             # JSON дані
│   ├── types.ts          # TypeScript типи
│   └── package.json
└── package.json          # Root скрипти
```

## Швидкий старт

### Встановлення

1. **Клонувати репозиторій**
```bash
git clone <repository-url>
cd AgileTalentSolutions
```

2. **Встановити залежності**
```bash
npm install
```
*Це встановить залежності як для клієнта, так і для сервера*

3. **Запустити сервер** (Terminal 1)
```bash
npm run server
```
*Сервер запуститься на http://localhost:4000*

4. **Запустити клієнт** (Terminal 2)
```bash
npm run dev
```
*Клієнт запуститься на http://localhost:5173*

5. **Відкрити в браузері**
```
http://localhost:5173
```

## Доступні скрипти

### Root рівень
- `npm install` - Встановити всі залежності
- `npm run dev` - Запустити фронтенд в режимі розробки
- `npm run server` - Запустити бекенд сервер (компіляція + запуск)
- `npm run server:dev` - Запустити бекенд з автоперезавантаженням
- `npm run server:dev:ts` - Запустити бекенд через ts-node (для розробки)
- `npm run build` - Збілдити фронтенд для продакшену
- `npm run build:server` - Збілдити бекенд

### Клієнт (/client)
- `npm run dev` - Vite dev server
- `npm run build` - Production build
- `npm run lint` - ESLint перевірка

### Сервер (/server)
- `npm run start` - Компіляція + запуск сервера (для продакшену)
- `npm run dev` - Nodemon з автоперезавантаженням
- `npm run dev:ts` - ts-node для розробки
- `npm run build` - Компіляція TypeScript

## API Документація

### Endpoints

#### GET /api/profiles
Повертає всі профілі розробників

**Відповідь:**
```json
[
  {
    "id": 1,
    "name": "Bohdan",
    "city": "Cherkasy",
    "age": 19,
    "skills": ["React", "TypeScript", "Tailwind CSS"],
    "description": "Frontend developer...",
    "rating": 5
  }
]
```

#### POST /api/search
Пошук профілів за навичками

**Запит:**
```json
{
  "skills": ["React", "TypeScript"]
}
```

**Відповідь:**
```json
[
  {
    "id": 1,
    "name": "Bohdan",
    "skills": ["React", "TypeScript", "Tailwind CSS"],
    "score": 2,
    "rating": 5,
    ...
  }
]
```

### Логіка пошуку та рейтингу

1. **Фільтрація**: Залишаються тільки профілі з принаймні 1 співпадаючою навичкою
2. **Очки**: +1 бал за кожну співпадаючу навичку (максимум 5)
3. **Сортування**: 
   - Першочергово за кількістю очок (спадаючий порядок)
   - Потім за рейтингом (спадаючий порядок)

### Компоненти
- **Header**: Навігація з активним підсвіченням
- **TagCloudChaotic**: Анімована хмара навичок на головній
- **SearchForm**: Пошук з автокомплітом та чіпсами
- **User Cards**: Сітка профілів у результатах пошуку
- **Profile**: Детальна сторінка профілю

## Технології та Пакети

### Frontend (`client/package.json`)
**Основні залежності:**
- **React 19.1.1** - UI бібліотека
- **React DOM 19.1.1** - DOM рендеринг
- **TypeScript 5.8.3** - Типізація
- **Tailwind CSS 4.1.13** - Стилізація з Vite плагіном
- **Framer Motion 12.23.22** - Анімації та переходи
- **React Router DOM 7.9.3** - Маршрутизація SPA
- **Zustand 5.0.8** - Управління станом
- **Zod 4.1.11** - Валідація даних

**Інструменти розробки:**
- **Vite 7.1.7** - Bundler та dev server
- **ESLint 9.36.0** - Лінтинг коду
- **TypeScript ESLint 8.44.0** - TypeScript правила
- **@vitejs/plugin-react-swc 4.1.0** - React підтримка

### Backend (`server/package.json`)
**Основні залежності:**
- **Express 5.1.0** - Web framework
- **TypeScript 5.9.2** - Типізація
- **CORS 2.8.5** - Cross-origin запити
- **Zod 4.1.11** - Валідація API

**Інструменти розробки:**
- **Nodemon 3.1.10** - Автоперезавантаження сервера
- **ts-node 10.9.2** - TypeScript виконання
- **cpx 1.5.0** - Копіювання файлів при збірці
- **@types/express 5.0.3** - TypeScript типи для Express
- **@types/cors 2.8.19** - TypeScript типи для CORS
- **@types/node 24.6.0** - Node.js типи

### Системні вимоги
- **Node.js 18+** - Серверне середовище
- **npm 8+** - Пакетний менеджер

## Чеклист відповідності ТЗ

- [x] Проект запускається згідно README на чистій машині
- [x] Пошук за навичками працює з правильним сортуванням
- [x] UI відповідає референсному стилю з станами завантаження/помилок
- [x] Хмара тегів анімується без переповнення контейнера
- [x] Код модульний, логіка пошуку ізольована
- [x] Навігація працює між трьома сторінками (/, /search, /profile/:id)
- [x] Активне підсвічування поточної сторінки
- [x] Клавіатурна навігація та доступність
- [x] Адаптивна сітка 1→2→3 колонки
