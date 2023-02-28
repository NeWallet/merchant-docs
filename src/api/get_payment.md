---
title: Получение информации о платеже
---

## Общий API-reference

- Ссылка на метод: `https://m-api.nebank.co/api/payments/{id}`
- Метод: `GET`
- Тип контента: `application/json`

Ожидаемые GET-параметры запроса:

| Параметр         | Тип         | Описание                     | Обязательно |
|------------------|-------------|------------------------------|-------------|
| signature        | string      | Подпись платежа              | Да          |

Пример ответа на успешный запрос:

```json
{
    "id": 8,
    "shop_id": 1,
    "invoice_id": "abcde",
    "description": "Ооо тестовое описание заказа, это мы покупаем",
    "pay_id": "abcde1677613027",
    "method": "qiwi",
    "amount": 1000,
    "expire_date": "2023-03-28 19:37:07",
    "hold_expire": null,
    "hold_out": 0,
    "status": "created",
    "error": null,
    "created_at": "2023-02-28 19:37:07",
    "updated_at": "2023-02-28 19:37:07"
}
```

- `id` - ID платежа в системе NeBank
- `invoice_id` - ID магазина
- `invoice_id` - ID счёта в системе мерчанта
- `description` - Назначение платежа
- `pay_id` - ID платёжной ссылки
- `method` - Метод оплаты
- `amount` - Сумма платежа в минорных единицах
- `expire_date` - Дата истечения платежа
- `hold_expire` - Дата окончания холда
- `hold_out` - Зачислены ли средства на счёт мерчанта
- `status` - Статус платежа
- `error` - Ошибка платежа, если есть
- `created_at` - Дата создания платежа
- `updated_at` - Дата последнего обновления платежа