import React, { Component } from 'react';
import './About.scss';

class Home extends Component {
    state = {
      articles: [    
        { title: "0 : Poprawić navbar", id: 6 },
        { title: "0 : Forma bloga dla mnie, gdzie zapisuje taski po ang i polsku (Te teraz) i tworze pierwszego aktywnego użytkownika aplikacji", id: 6 },
        { title: "1 : Poprawić scss"},
        { title: "2.: Blog - 60%-40% - po prawej poprzednie posty, po lewej dodawanie nowych, później FIREBIRD  "},
        { title: "Tworzenie zestawów słówek do testów z wynikami", id: 2 },
        { title: "Czas pokazać za pomocą Zegara godzinnego jak wykres kołowy. Gdy minie godzina, zmienia się na ciemniejszy niebieski", id: 5 },
        { title: "Poprawić strukture aplikacji - poprawnie ponazywać componenty", id: 11 },
        { title: "Test - sprawdzanie czy znamy słówko z licznikiem- w formie zabawy, ile słówek zgadnie tyle pkt przypisane do konta - najlepszy wynik z dnia", id: 1 },

        { title: "Profil użytkownika", id: 8 },
        { title: "Tłumaczone piosenki + radio z napisami danej piosenki", id: 9 },
        { title: "Interakcja z użytkownikiem - chmurki ze zdaniami, podpisy", id: 10 },


        { title: " " },
        { title: " BLOG " },
        { title: "Opisac jakie paczki (extensions)" },
        { title: "DARK STYLE - Opisać useState i napis zmieniany" },
        { title: "Tagi - przesylanie danych z dziecka do rodzica i rodzica do dziecka "},
        { title: "zrobic drzewo komponentów jak poprawie nazwy ich" },
        { title: "gita opisac", id: 6 },
      ],
      articlesDone: [
        { title: "0 : css zamienić na scss"},
        { title: "01 : Dark style"},
        { title: "Firebase - póki co tylko na 30 dni aktywne"},
        { title: "Tagi - przesylanie danych z dziecka do rodzica"},
        { title: "Notatka z możliwością dodania tłumaczenia", id: 3 },
        { title: "0 : Data dodania posta na blogu - czy cos jeszcze jest potrzebne?", id: 6 },
      ]
    };

  render() {
    return(
        <div class ="row">
          <div class="column">
            <h2>DO ZROBIENIA</h2>
            <ul>{this.state.articles.map(el => <li key={el.id}>{el.title}</li>)}</ul>
          </div>
          <div class = "column">
            <h2>WYKONANE</h2>
            <ul>{this.state.articlesDone.map(el => <li key={el.id}>{el.title}</li>)}</ul>
          </div>
        </div>
    );
  }
}

export default Home;