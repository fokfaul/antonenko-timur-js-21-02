const { equalStr, truncate, reformatDate, regName,
        camelToSnake, findCommentsHtml, findNumbers, RightIdDoc } = require('./main')

describe('function equalStr', () => {
  test('should equalStr string', () => { // Объявление теста
    expect(
      equalStr("Привет тебе мой друг, мой") //Тестируемое значение
    ).toBeTruthy(); // Ожидаемый результат
    expect(equalStr("Привет")).toBeFalsy();
    expect(equalStr("Доброй ночи,день")).toBeFalsy();
  })
  it('should equalStr not a string', () => {
    expect(equalStr(12)).toBeFalsy();
    expect(equalStr(null)).toBeFalsy();
    expect(equalStr({text: "Привет тебе мой друг, мой"})).toBeFalsy();
    expect(equalStr(undefined)).toBeFalsy();
  })
})

describe('function truncate', () => {
  test('should truncate get not a number', () => {
    expect(truncate("Привет тебе мой друг", "5")).toBe("Не получено число");
    expect(truncate("Привет тебе мой друг", {number: 5})).toBe("Не получено число");
    expect(truncate("Привет тебе мой друг", undefined)).toBe("Не получено число");
    expect(truncate("Привет тебе мой друг", null)).toBe("Не получено число");
    expect(truncate("Привет тебе мой друг", "мой")).toBe("Не получено число");
  })
  it('should truncate get not a string', () => {
    expect(truncate(102, 5)).toBe("Не получена строка");
    expect(truncate({number: 5}, 5)).toBe("Не получена строка");
    expect(truncate(undefined, 5)).toBe("Не получена строка");
    expect(truncate(null, 5)).toBe("Не получена строка");
  })
})

describe('function reformatDate', () => {
  test('test reformatDate', () => {
    expect(reformatDate("12/02/2021 12-00")).toBe("12.02.2021 12:00");
    expect(reformatDate({date: "12/02/2021 12-00"})).toBe("Неверный формат даты");
    expect(reformatDate(undefined)).toBe("Неверный формат даты");
    expect(reformatDate(null)).toBe("Неверный формат даты");
    expect(reformatDate("мой")).toBe("Неверный формат даты");
  })
})

describe('function regName', () => {
  test('test regName', () => {
    expect(regName({date: "12/02/2021 12-00"})).toBe(false);
    expect(regName(undefined)).toBe(false);
    expect(regName(null)).toBe(false);
    expect(regName("Антоненко Тимур Андреевич")).toBe(true);
    expect(regName("Антоненко Тимур Андреевоч")).toBe(false);
  })
})

describe('function camelToSnake', () => {
  test('should camelToSnake string', () => {
    expect(camelToSnake("ПриветТебеМойДруг")).toBe("привет_тебе_мой_друг");
    expect(camelToSnake("ПриветТебе МойДруг")).toBe("привет_тебе мой_друг");
    expect(camelToSnake("ПриветТебе Мой-Друг")).toBe("привет_тебе мой-друг");
  })
  it('should camelToSnake not a string', () => {
    expect(camelToSnake(12)).toBe("Получена не строка");
    expect(camelToSnake(null)).toBe("Получена не строка");
    expect(camelToSnake({text: "ПриветТебеМойДруг"})).toBe("Получена не строка");
    expect(camelToSnake(undefined)).toBe("Получена не строка");
  })
})

describe('function findCommentsHtml', () => {
  test('test findCommentsHtml', () => {
    expect(findCommentsHtml("... <!-- My -- comment test --> ..  <!----> .."))
        .toStrictEqual(["<!-- My -- comment test -->", "<!---->"]);
    expect(findCommentsHtml({comment: "<!-- My -- comment test -->"})).toBe("Получена не строка");
    expect(findCommentsHtml(undefined)).toBe("Получена не строка");
    expect(findCommentsHtml(null)).toBe("Получена не строка");
    expect(findCommentsHtml("Нет комментариев")).toBe(null);
  })
})

describe('function findNumbers', () => {
  test('test findNumbers', () => {
    expect(findNumbers("12.5 кг яблок было, 3.5 осталось или 4,7")).toStrictEqual(["12.5", "3.5", "4", "7"]);
    expect(findNumbers({comment: "12.5 кг яблок было"})).toBe("Получена не строка");
    expect(findNumbers(undefined)).toBe("Получена не строка");
    expect(findNumbers(null)).toBe("Получена не строка");
    expect(findNumbers("Нет комментариев")).toBe(null);
  })
})

describe('function RightIdDoc', () => {
  test('test RightIdDoc', () => {
    expect(RightIdDoc("1254fsAD1235rets")).toBe(true);
    expect(RightIdDoc("1254-fsAD-1235-rets")).toBe(true);
    expect(RightIdDoc("1254-fsке-1235-rets")).toBe(false);
    expect(RightIdDoc(undefined)).toBe(false);
    expect(RightIdDoc(null)).toBe(false);
    expect(RightIdDoc({comment: "12.5 кг яблок было"})).toBe(false);
  })
})
