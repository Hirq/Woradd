import React, { Component } from 'react';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      articles: [

        { title: "0 : css zamienić na scss"},
        { title: "01 : Dark style"},
        { title: "1 : Poprawić scss"},
        { title: "Test - sprawdzanie czy znamy słówko z licznikiem- w formie zabawy, ile słówek zgadnie tyle pkt przypisane do konta - najlepszy wynik z dnia", id: 1 },
        { title: "Tworzenie zestawów słówek do testów z wynikami", id: 2 },
        { title: "Notatka z możliwością dodania tłumaczenia", id: 3 },
        { title: "Tryb ciemności", id: 4 },
        { title: "Czas pokazać za pomocą Zegara godzinnego jak wykres kołowy. Gdy minie godzina, zmienia się na ciemniejszy niebieski", id: 5 },
        { title: "Forma bloga dla mnie, gdzie zapisuje taski po ang i polsku (Te teraz) i tworze pierwszego aktywnego użytkownika aplikacji", id: 6 },
        { title: "Firebird", id: 7 },
        { title: "Profil użytkownika", id: 8 },
        { title: "Tłumaczone piosenki + radio z napisami danej piosenki", id: 9 },
        { title: "Interakcja z użytkownikiem - chmurki ze zdaniami, podpisy", id: 10 },
        { title: "Poprawić strukture aplikacji - poprawnie ponazywać componenty", id: 11 },
        { title: "BLOG: DARK STYLE - Opisać useState i napis zmieniany" },
      ]
    };
  }
  render() {
    const { articles } = this.state;
    return(
      <div>
        <ul>{articles.map(el => <li key={el.id}>{el.title}</li>)}</ul>
      </div>
      );
    }
  }

   

export default Home;