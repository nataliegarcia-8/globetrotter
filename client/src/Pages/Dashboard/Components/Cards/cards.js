import EventIcon from "@material-ui/icons/Event";
import CardTravelIcon from "@material-ui/icons/CardTravel";
import SpeakerNotesIcon from "@material-ui/icons/SpeakerNotes";
function Card(i, t, l, p, b) {
    this.icon = i;
    this.title = t;
    this.link = l;
    this.paragraph = p;
    this.buttonWords = b;
}
const CardInfo = [
    new Card(<EventIcon />,
    "Past Trips",
    "#",
    "View your past trips!", 
    "REMINISCE"),
    new Card(<CardTravelIcon />,
    "Current Trip",
    "#",
    "We are on a trip!",
    "EXPLORE"),
    new Card(<SpeakerNotesIcon />,
    "Plan A Trip",
    "/plantrip",
    "Plan a trip now!",
    "DISCOVER"),
]
export default CardInfo;