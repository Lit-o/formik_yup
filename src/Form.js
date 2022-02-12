import { useFormik } from 'formik';
import * as yup from 'yup';

const validate = values => {
    const errors = {}
    if (!values.name) {
        errors.name = 'Обязательное поле // Required field'
    } else if (values.name.length < 2) {
        errors.name = 'Минимум два символа // Need two letters at least';
    }

    if (!values.email) {
        errors.email = 'Обязательное поле // Required field'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Соблюдайте формат email // Wrong email format';
    }

    return errors;
}



const Form = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            amount: 0,
            currency: '',
            text: '',
            terms: false
        },
        // validate,       my custom validator disable now
        validationSchema: yup.object({
            name: yup.string()
                    .min(2, 'Минимум два символа // Need two letters at least')
                    .required('Обязательное поле // Required field'),
            email: yup.string()
                    .email('Соблюдайте формат email // Wrong email format')
                    .required('Обязательное поле // Required field'),
            amount: yup.number()
                    .min(5, 'min 5')
                    .required(),
            currency: yup.string().required('Обязательное поле // Required field'),
            terms: yup.boolean()
                    .required('Необходимо согласие // Agree needed')
                    .oneOf([true], 'Необходимо согласие // Agree needed')
        }),
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2))
        }
    })

    return (
        <form className="form" onSubmit={formik.handleSubmit}>
            <h2>Отправить деньги</h2>
            <label htmlFor="name">Ваше имя</label>
            <input
                id="name"
                name="name"
                type="text"
                { ...formik.getFieldProps('name') }
            />
            {formik.errors.name && formik.touched.name && <p className='error'>{formik.errors.name}</p>}

            <label htmlFor="email">Ваша почта</label>
            <input
                id="email"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email && <p className='error'>{formik.errors.email}</p>}

            <label htmlFor="amount">Количество</label>
            <input
                id="amount"
                name="amount"
                type="number"
                value={formik.values.amount}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.amount && formik.touched.amount && <p className='error'>{formik.errors.amount}</p>}

            <label htmlFor="currency">Валюта</label>
            <select
                id="currency"
                name="currency"
                value={formik.values.currency}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            >
                <option value="">Выберите валюту</option>
                <option value="USD">USD</option>
                <option value="UAH">UAH</option>
                <option value="RUB">RUB</option>
            </select>
            {formik.errors.currency && formik.touched.currency && <p className='error'>{formik.errors.currency}</p>}

            <label htmlFor="text">Ваше сообщение</label>
            <textarea
                id="text"
                name="text"
                value={formik.values.text}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.text && formik.touched.text && <p className='error'>{formik.errors.text}</p>}

            <label className="checkbox">
                <input
                    name="terms"
                    type="checkbox"
                    value={formik.values.terms}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                Соглашаетесь с политикой конфиденциальности?
            </label>
            {formik.errors.terms && formik.touched.terms && <p className='error'>{formik.errors.terms}</p>}

            <button type="submit">Отправить</button>
        </form>
    )
}

export default Form;