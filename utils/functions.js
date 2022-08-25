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
