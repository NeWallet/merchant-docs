---
title: Работа с виджетом
---

## Как использовать?

Для начала вам нужно подключить к вашему сайту библиотеку виджета, для этого нужно вставить следующий HTML-код:

```html
<script src="https://pay.nebank.co/widget.js"></script> 
```

Теперь вы можете в JavaScript-коде вызывать `NeBank.widget`.

## NeBank.widget(params)

В функцию необходимо передать объект params со следующими параметрами:

| Параметр | Тип      | Описание                                                                     | Обязательно |
|----------|----------|------------------------------------------------------------------------------|-------------|
| payId    | string   | `pay_id`, который вы получили при [создании платежа](/api/create_payment.md) | Да          |
| onFailed | function | Эта функция выполнится в случае, если платёж произошёл с ошибкой             | Нет         |
| onPaid   | function | Эта функция выполнится, когда платёж будет оплачен и окно закроется          | Нет         |

## Пример на чистом JS

```js
NeBank.widget({
    payId: '...',
    onPaid: () => {
        alert('Платёж оплачен');
        // делаем что-нибудь
    },
    onFailed: () => {
        alert('Платёж не оплачен');
        // тоже делаем что-нибудь
    }
});
```

## Пример на Angular

:::details index.html
```html{14-15}
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Angular Example</title>
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  </head>

  <body>
    <app-root></app-root>

    <!-- Вставляем виджет -->
    <script src="https://pay.nebank.co/widget.js"></script>
  </body>
</html>
```
:::

:::details pay.component.ts
```ts{3-6,19-29}
import { Component, OnInit } from '@angular/core';

// Это нужно, чтобы избежать ошибок со стороны TypeScript
declare global {
  interface Window { NeBank!: any; }
}

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.less'],
})
export class PayComponent implements OnInit {
    constructor() {}

    ngOnInit(): void { }

    pay() {
        window.NeBank.widget({
            payId: '...',
            onPaid: () => {
                alert('Платёж оплачен');
                // делаем что-нибудь
            },
            onFailed: () => {
                alert('Платёж не оплачен');
                // тоже делаем что-нибудь
            }
        });
    }
}
```
:::