import * as yup from 'yup';
const nameregex = /^[a-zA-Z]+$/
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
const phoneRegex = /^[0-9]+$/

export const BasicSchema = yup.object().shape({
    Firstname: yup.string().min(3, 'minimum 3 letter').max(10, 'maximum 10 letter').matches(nameregex, 'should not include space or number').required('This field is required'),
    Lastname: yup.string().min(3, 'minimum 3 letter').max(10, 'maximum 10 letter').matches(nameregex, 'should not include space or number').required('This field is required'),
    Email: yup.string().email('invalid input').required('This field is required'),
    Phone: yup.string().min(10, 'minimum 10 symbols').max(10, 'Maximum 10 symbols').matches(phoneRegex, 'Phone must include only numbers'),
    Password: yup.string().matches(passwordRegex, 'invalid password type').required('This field is required'),
    agreement: yup.boolean().required('You need to accept terms of use')
})