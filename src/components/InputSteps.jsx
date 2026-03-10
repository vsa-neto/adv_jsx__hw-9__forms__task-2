
const InputSteps = ({ onSubmit, form, onChange, focusDistance }) => {

    return (
        <div className="form-container">
            <form id="trainingForm" onSubmit={onSubmit}>
                <div className="form-row">
                    <div class="form-group">
                        <label HtmlFor="date">Дата (ДД.ММ.ГГ)</label>
                        <input
                            type="text"
                            id="date"
                            value={form.date}
                            onChange={onChange}
                            name="date"
                            placeholder=""
                            required />
                    </div>

                    <div className="form-group">
                        <label HtmlFor="distance">Пройдено км</label>
                        <input
                            ref={focusDistance}
                            type="number"
                            id="distance"
                            value={form.distance}
                            onChange={onChange}
                            name="distance"
                            placeholder=""
                            step="0.1"
                            min="0"
                            required
                        />
                    </div>

                    <button type="submit" className="submit-btn">OK</button>
                </div>
            </form>
        </div>
    );
}

export default InputSteps