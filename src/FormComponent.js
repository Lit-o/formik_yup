import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';

const FormComponent = () => {
    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                amount: 0,
                currency: '',
                text: '',
                terms: false
            }}
            validationSchema={
                yup.object({
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
                })
            }
            onSubmit={values => {
                    console.log(JSON.stringify(values, null, 2))
                }
            }
        >
            <Form className="form">
                <h2>Отправить пожертвование</h2>
                <label htmlFor="name">Ваше имя</label>
                <Field
                    id="name"
                    name="name"
                    type="text"
                />
                {/* {formik.errors.name && formik.touched.name && <p className='error'>{formik.errors.name}</p>} */}
                <ErrorMessage className='error' name="name" component="div"/>

                <label htmlFor="email">Ваша почта</label>
                <Field
                    id="email"
                    name="email"
                    type="email"
                />
                <ErrorMessage className='error' name="email">{el => <p className='error'>{el}</p>}</ErrorMessage>

                <label htmlFor="amount">Количество</label>
                <Field
                    id="amount"
                    name="amount"
                    type="number"
                />
                <ErrorMessage className='error' name="amount" component="div"/>

                <label htmlFor="currency">Валюта</label>
                <Field
                    id="currency"
                    name="currency"
                    as="select"
                >
                    <option value="">Выберите валюту</option>
                    <option value="USD">USD</option>
                    <option value="UAH">UAH</option>
                    <option value="RUB">RUB</option>
                </Field>
                <ErrorMessage className='error' name="currency" component="div"/>

                <label htmlFor="text">Ваше сообщение</label>
                <Field
                    id="text"
                    name="text"
                    as="textarea"
                />
                <ErrorMessage className='error' name="text" component="div"/>

                <label className="checkbox">
                    <Field
                        name="terms"
                        type="checkbox"
                    />
                    Соглашаетесь с политикой конфиденциальности?
                </label>
                <ErrorMessage className='error' name="terms" component="div"/>

                <button type="submit">Отправить</button>
            </Form>
        </Formik>
    )
}

export default FormComponent;