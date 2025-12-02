const nav = document.querySelector("nav");
const mobileNav = document.querySelector(".mobile-nav");
const hamburgerBtn = document.querySelector("#menu-open");

const closeBtn = document.querySelector("#menu-close");

let showingEvents = 3;

const news = [
  {
    id: "1",
    img: "./img/boberg-25_40.jpg.webp",
    title: "Föredrag 22/10",
    date: "16 oktober 2025",
    content:
      "Niorna kommer och hälsar på och våra egna elever blir utan lektioner – då bjuder vi in föreläsare som kommer och tar hand om dem istället! Åk1 och HSF2 börjar dagen med ett evenemang i Folkets Hus Ånge men kommer sedan upp och avslutar dagen med övriga. Åk3 och YRK2 är i Aulan och får träffa representanter från polisen, Näringslivskontoret, Rocco Oil, Campus Ånge/Komvux, Ålsta folkhögskola, socialkontoret och Kriminalvården. Vi hoppas på en spännande dag!",
  },
  {
    id: "2",
    img: "./img/boberg-25_tackforedragOH_44.jpg.webp",
    title: "Åk 9 besöksdag",
    date: "5 oktober 2025",
    content:
      "Dagen börjar med att vi samlas i Posthuset där du får ditt schema och en påse med lite smått och gott. Du får sedan information från de tre program som du valt, och lunch. Under programpasset får du även träffa olika företag/arbetsgivare som är aktuella för just det programmet. De kan berätta precis vad de söker efter hos sina anställda, och hur det är att jobba där. Passa på att ställa massa frågor även till dem! Vi avslutar sedan dagen tillsammans med gott fika. Välkommen till en inspirerande dag om ditt gymnasieval! ",
  },
  {
    id: "3",
    img: "./img/Inbjudan-foraldramote-2526.jpg.webp",
    title: "Föräldramöte åk 1 9/9",
    date: "2 september 2025",
    content:
      "Till vårdnadshavare för elever i årskurs 1 Välkomna till föräldramöte! Ni är varmt välkomna till skolan för att träffa rektor, mentorer och en del annan personal. Vi vill gärna ha ett nära samarbete med er så att vi tillsammans kan hjälpa eleverna att lyckas med sin skolgång. Det är första terminen för era ungdomar i en ny skolform som ställer annorlunda krav och har andra förutsättningar än tidigare. Tid:      Tisdag 9 september 2025, kl. 18.30. Plats:            Aulan, Bobergsgymnasiet (mitt i huset, en trappa upp från huvudentrén). Vi kommer först ses i helgrupp för en del allmän information. Efter det går ni vidare med mentorerna för ytterligare information och samtal om just er klass. Under kvällen kommer vi att tala om våra regler och rutiner, informera om programmen i gymnasieskolan och hur arbetet med elevernas lärande går till på Bobergsgymnasiet. Naturligtvis bjuder vi även på fika. Välkomna! / Jennie Stadling Wilsson, rektor Bobergsgymnasiet. Vi ber er fylla i nedanstående talong som lämnas till mentor senast torsdag 4/9. Tack!",
  },
];
const events = [
  {
    day: "10",
    month: "december",
    title: "Nobeldagen/uf-mässa",
    weekday: "onsdag",
    statuscolor: "yellow",
  }
   {
    day: "10",
    month: "december",
    title: "Nobeldagen/uf-mässa",
    weekday: "onsdag",
    statuscolor: "yellow",
    }
    {
    day: "19",
    month: "december",
    title: "Julavslutning",
    weekday: "fredag",
    statuscolor: "green",
    }
    {
    day: "20",
    month: "december",
    endDay: "7",
    endMonth: "januari",
    title: "Jullov",
    weekday: "lördag",
    statuscolor: "red",
    }
    {
    day: "09",
    month: "februari",
    title: "studiedag",
    weekday: "måndag",
    statuscolor: "red",
    }
    {
    day: "02",
    month: "mars",
    endDay: "8",
    endMonth: "mars",
    title: "Sportlov",
    weekday: "måndag",
    statuscolor: "red",
    }
    {
    day: "10",
    month: "december",
    title: "Nobeldagen/uf-mässa",
    weekday: "onsdag",
    statuscolor: "yellow",
    }
    {
    day: "10",
    month: "december",
    title: "Nobeldagen/uf-mässa",
    weekday: "onsdag",
    statuscolor: "yellow",
    }
    {
    day: "10",
    month: "december",
    title: "Nobeldagen/uf-mässa",
    weekday: "onsdag",
    statuscolor: "yellow",
    }
];
    
    

const closeMenu = () => {
  hamburgerBtn.classList.remove("hidden");
  closeBtn.classList.add("hidden");

  mobileNav.classList.add("hidden");
};

const openMenu = () => {
  hamburgerBtn.classList.add("hidden");
  closeBtn.classList.remove("hidden");

  mobileNav.classList.remove("hidden");
};

const menuCloseBtn = document
  .querySelector("#menu-close")
  .addEventListener("click", closeMenu);

const menuOpenBtn = document
  .querySelector("#menu-open")
  .addEventListener("click", openMenu);

const renderNews = () => {
  const container = document.querySelector(".news-grid");

  news.forEach((news) => {
    const card = document.createElement("div");
    card.className = "news-card";

    card.innerHTML = `
      <img src="${news.img}" alt="${news.title}" class="news-image" />
      <h3 class="news-title">${news.title}</h3>
      <p class="news-date">${news.date}</p>
    `;

    card.addEventListener("click", () => {
      window.location.href = `news.html?id=${news.id}`;
    });

    container.appendChild(card);
  });
};

const renderNewsDetail = () => {
  const container = document.querySelector(".news-content");
  if (!container) return;

  // Hämta ID från URL-parametern
  const urlParams = new URLSearchParams(window.location.search);
  const newsId = urlParams.get("id");

  // Hitta rätt artikel
  const newsItem = news.find((n) => n.id === newsId);

  if (newsItem) {
    container.innerHTML = `
      <img src="${newsItem.img}" alt="${newsItem.title}" class="news-image" />
      <h1 class="news-title">${newsItem.title}</h1>
      <p class="news-date">${newsItem.date}</p>
      <p class="news-text">${newsItem.content}</p>
    `;
  } else {
    container.innerHTML = `
      <p>Artikeln kunde inte hittas.</p>
    `;
  }
};

const createDayEvent = (event) => {
  if (!event.endDay && !event.endMonth) {
    if (event.month === event.endMonth) {
      return `<div class="event-date>
        <div class="date-container">
          <h2>${event.day} - ${event.endDay}</h2> 
       </div>
       <div class="event-date">
          <p>${event.month} - ${event.endMonth}</p>
          <div class="month-container">
        </div>`;
      
      
    
    } else {
      return `
      <div class="event-date>
        <div class="date-container">
          <h2>${event.day}</h2>
      </div>

      <div class="event-date>
        <div class="date-container">
          <h2>${event.endDay}</h2>
      </div>

      <div class="event-date>
        <div class="month-container">
          <h2>${event.day}</h2>
      </div>

      <div class="event-date>
        <div class="month-container">
          <h2>${event.endDay}</h2>
      </div>

    } `
  } else {
    return `
    <div class="event-date> 
      <div class="date-container">
        <h2>${event.day}</h2>
    </div>
      
  }`

}  

// Kör rätt funktion beroende på vilken sida vi är på
if (document.querySelector(".news-grid")) renderNews();
if (document.querySelector(".news-content")) renderNewsDetail();


 