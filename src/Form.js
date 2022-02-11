

const Form = () => {
    return (
        <form className="form">
            <h2>Отправить пожертвование</h2>
            <label htmlFor="name">Ваше имя</label>
            <input
                id="name"
                name="name"
                type="text"
            />
            <label htmlFor="email">Ваша почта</label>
            <input
                id="email"
                name="email"
                type="email"
            />
            <label htmlFor="amount">Количество</label>
            <input
                id="amount"
                name="amount"
                type="number"
            />
            <label htmlFor="currency">Валюта</label>
            <select
                id="currency"
                name="currency">
                    <option value="">Выберите валюту</option>
                    <option value="USD">USD</option>
                    <option value="UAH">UAH</option>
                    <option value="RUB">RUB</option>
            </select>
            <label htmlFor="text">Ваше сообщение</label>
            <textarea 
                id="text"
                name="text"
            />
            <label className="checkbox">
                <input name="terms" type="checkbox" />
                Соглашаетесь с политикой конфиденциальности?
            </label>
            <button type="submit">Отправить</button>
        </form>
    )
}

export default Form;