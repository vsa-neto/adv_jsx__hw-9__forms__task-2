const ListSteps = ({ items, onDelete, onReduction }) => {
    return (

        <div class="data-table">
            <div className="table-header">
                <div className="col-date">Дата (ДД.ММ.ГГ)</div>
                <div className="col-distance">Пройдено км</div>
                <div className="col-actions">Действия</div>
            </div>

            <div className="table-body" id="tableBody">
                {items.length === 0 && (<div className="empty-state">Нет данных о тренировках</div>)}
                {
                    items.map((item) => (
                        <div id={item.date} className="table-row" data-date="2019-07-19" >
                            <div className="col-date">{item.date}</div>
                            <div className="col-distance">{item.distance}</div>
                            <div className="col-actions">
                                <button className="action-btn edit-btn" onClick={() => onReduction((item.date))} title="Редактировать">✎</button>
                                <button className="action-btn delete-btn" onClick={() => onDelete(item.date)} title="Удалить">✕</button>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>

    );
}

export default ListSteps