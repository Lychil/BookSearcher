export const authValidations = {
    email: {
        required: 'Email обязателен',
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Введите корректный email',
        },
    },
    password: {
        required: 'Пароль обязателен',
        minLength: {
            value: 6,
            message: 'Пароль должен содержать минимум 6 символов',
        },
    },
    confirmPassword: (password: string) => ({
        required: 'Подтверждение пароля обязательно',
        validate: (value: string) => value === password || 'Пароли не совпадают',
    }),
};