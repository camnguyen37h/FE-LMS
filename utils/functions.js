export const delay = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

export const getFromLocalStorage = (key) => {
  const value = window.localStorage.getItem(key);

  if (value) {
    return JSON.parse(value);
  }
  return null;
};

export const getFromSession = (key) => {
  const value = window.sessionStorage.getItem(key);

  if (value) {
    return JSON.parse(value);
  }
  return null;
};

export const dotsSensitive = (originalString, startPosition, endPosition) => {
  if (isEmpty(originalString)) {
    return '';
  }
  return (
    originalString?.substring(0, Number(startPosition)) +
    '...' +
    originalString?.substring(Number(endPosition), Number(originalString?.length))
  );
};

export const roundingNumber = (amount, currency, isAfter = true, decimal = 4) => {
  try {
    const value = toFormat(Big(amount), decimal, true);
    if (!currency) return value;
    return isAfter ? `${value} ${currency}` : `${currency} ${value}`;
  } catch (err) {
    return '';
  }
};

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0 || !time) {
    return null;
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
  let date;
  if (typeof time === 'object') {
    date = time;
  } else {
    if (typeof time === 'string') {
      if (/^[0-9]+$/.test(time)) {
        // support "1548221490638"
        time = parseInt(time);
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        time = time.replace(new RegExp(/-/gm), '/');
      }
    }

    if (typeof time === 'number' && time.toString().length === 10) {
      time = time * 1000;
    }
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  };
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key];
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value];
    }
    return value.toString().padStart(2, '0');
  });
  return time_str;
}
