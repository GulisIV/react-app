const validationMessages = {
    ru: {
        required: 'Обязательное поле',
        number: 'Должно быть число',
        positivenumber: 'Должно быть положительное число',
        minLength: (min) => `Должно быть ${min} символов или больше`,
        email: 'Email не соответствует формату',
        latin: 'Только латинские симолы',
        password: 'Пароль должен содержать не менее одной цифры, одной прописной и строчной буквы, а также не менее 6 символов.'
    },
    en: {
        required: 'Required',
        number: 'Must be a number',
        positivenumber: 'Must be a positive number',
        minLength: (min) => `Must be ${min} characters or more`,
        email: 'Email does not match format',
        latin: 'Latin letters only',
        password: 'The password must contain at least one number, one uppercase and one lowercase letter, and at least 6 characters.'
    }
};

export const required = value => value ? undefined : validationMessages['ru'].required;
export const number = value => value && isNaN(Number(value)) ? validationMessages['ru'].number : undefined;
export const positivruumber = value => value && value < 0 ? validationMessages['ru'].positivenumber : undefined;

export const minLength = min => value => (
    value && value.length < min ? validationMessages['ru'].minLength(min) : undefined);

    export const password = value => (
    value && !value.match(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/) ? //add cyrillic to validation?
        validationMessages['ru'].password :
        undefined
);

export const email = value => (
    value && !value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ?
        validationMessages['ru'].email :
        undefined
);

export const sizeValue = (value, _allValues, props) => {
    return  value && props.initialValues && Number(value) <= Number(props.initialValues.size) ? validationMessages['ru'].diskSize : undefined;
};
