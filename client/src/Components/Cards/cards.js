function Card(i, t, l, p, b) {
    this.icon = i;
    this.title = t;
    this.link = l;
    this.paragraph = p;
    this.buttonWords = b;
}

const CardInfo = [
    new Card("i",
    "Past Trips",
    "#",
    "View your past trips now!", 
    "REMINISCE"),
    new Card("i",
    "Current Trip",
    "#",
    "We are on a trip!",
    "EXPLORE"),
    new Card("i",
    "Plan A Trip",
    "/plantrip",
    "Plan a trip now!",
    "DISCOVER"),
]

export default CardInfo;