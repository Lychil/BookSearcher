export interface AuthFormData {
    email: string;
    password: string;
};

export interface RegFormData extends AuthFormData{
    confirmPassword: string;
};