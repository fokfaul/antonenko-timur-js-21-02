import React from 'react';
import './Shop-info.css';

const top_info = [{"name": "Замороженные рыбы", "info": "Мы заморозили рыбов для вас"},
                  {"name": "Живые рыбы", "info": "На кухню или на разведение"}];

const position = ["Палтус", "Сёмга", "Сом", "Мойва", "Сельдь", "Тунец"];

export class ShopInfo extends React.Component {
    render(){
        return (<main className="store__info">
            <div className="store__info__title">
                <h2>Рыбы на любой вкус</h2>
                <p>Мы продаём рыбов, а не только показываем!</p>
            </div>
            <div className="section">
                {top_info.map((obj, index) => (
                    <div className="store__info__position" key={index}>
                        <a href="#">{obj.name}</a>
                        <p>{obj.info}</p>
                    </div>
                ))}
            </div>
            <div className="store__popular">
                <div className="store__popular__title">
                    <h3>Популярные</h3>
                </div>
                <div className="section">
                    {position.map((name, index) => (
                        <div className="store__popular__position" key={index}>
                            <div className="store__position__image"></div>
                            <div className="store__position__name"><a href="#">{name}</a></div>
                            <div className="store__position__button">Купить</div>
                        </div>
                    ))}
                </div>
            </div>
        </main>)
    }
}