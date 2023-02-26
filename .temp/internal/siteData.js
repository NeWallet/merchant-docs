/**
 * Generated by "@vuepress/internal-site-data"
 */
export const siteData = {
  "title": "NeBank Merchant",
  "description": "Документация",
  "base": "/",
  "headTags": [
    [
      "meta",
      {
        "name": "theme-color",
        "content": "#3eaf7c"
      }
    ],
    [
      "meta",
      {
        "name": "apple-mobile-web-app-capable",
        "content": "yes"
      }
    ],
    [
      "meta",
      {
        "name": "apple-mobile-web-app-status-bar-style",
        "content": "black"
      }
    ]
  ],
  "pages": [
    {
      "title": "Создание платежа",
      "frontmatter": {
        "title": "Создание платежа"
      },
      "regularPath": "/api/create_payment.html",
      "relativePath": "api/create_payment.md",
      "key": "v-f5ce275c",
      "path": "/api/create_payment.html",
      "headers": [
        {
          "level": 2,
          "title": "Общий API-reference",
          "slug": "общии-api-reference"
        },
        {
          "level": 2,
          "title": "Пример на PHP",
          "slug": "пример-на-php"
        },
        {
          "level": 2,
          "title": "Пример на NodeJS",
          "slug": "пример-на-nodejs"
        }
      ]
    },
    {
      "title": "Общая информация",
      "frontmatter": {
        "title": "Общая информация"
      },
      "regularPath": "/api/",
      "relativePath": "api/index.md",
      "key": "v-3e512222",
      "path": "/api/",
      "headers": [
        {
          "level": 2,
          "title": "Общая информация",
          "slug": "общая-информация"
        }
      ]
    },
    {
      "title": "Формирование подписи",
      "frontmatter": {
        "title": "Формирование подписи"
      },
      "regularPath": "/api/sign.html",
      "relativePath": "api/sign.md",
      "key": "v-203c045e",
      "path": "/api/sign.html",
      "headers": [
        {
          "level": 2,
          "title": "Формирование подписи запроса",
          "slug": "формирование-подписи-запроса"
        },
        {
          "level": 3,
          "title": "Запрос на создание платежа",
          "slug": "запрос-на-создание-платежа"
        },
        {
          "level": 3,
          "title": "Проверка подписи результата платежа",
          "slug": "проверка-подписи-результата-платежа"
        }
      ]
    },
    {
      "title": "Home",
      "frontmatter": {
        "home": true,
        "heroImage": "/logo.svg",
        "tagline": null,
        "actionText": "API-документация →",
        "actionLink": "/api/",
        "footer": "Made by NeBank with ❤️"
      },
      "regularPath": "/",
      "relativePath": "index.md",
      "key": "v-8e4b0c48",
      "path": "/"
    }
  ],
  "themeConfig": {
    "repo": "",
    "editLinks": false,
    "docsDir": "",
    "editLinkText": "",
    "lastUpdated": false,
    "nav": [
      {
        "text": "API-документация",
        "link": "/api/"
      },
      {
        "text": "Готовые модули",
        "link": "/modules/"
      },
      {
        "text": "Сайт",
        "link": "https://nebank.co"
      }
    ],
    "sidebar": {
      "/api/": [
        {
          "title": "API-документация",
          "collapsable": false,
          "children": [
            "",
            "sign.md",
            "create_payment.md"
          ]
        }
      ]
    }
  }
}