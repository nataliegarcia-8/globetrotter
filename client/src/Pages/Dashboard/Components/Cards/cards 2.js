import Bar from "../ProgressCircle";


function Card( t, p, w) {
    this.title = t;
    this.paragraph = p;
    this.widget = w;
}

const CardInfo = [
    new Card(
    "You have visited",
    "of America", 
    <Bar />),
    new Card(
    "You have traveled",
    "out of the year",
    <Bar />),
    new Card(
    "You have completed",
    "Activities on your Trips",
    null),
]

export default CardInfo;