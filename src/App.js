import "./App.css";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Like from "./Likes";
import Switch from '@mui/material/Switch';
import { Check } from "@mui/icons-material";
import { display } from "@mui/system";

function App() {
  // Creating an API Data

  const INITIAL_MOVIES = [
    {
      name: "Iron Man",
      poster:
        "http://images4.fanpop.com/image/photos/20600000/Iron-man-Poster-iron-man-the-movie-20685585-864-1280.jpg",
      imdb: "7.2",
      summary:
        "Synopsis. 2008's Iron Man tells the story of Tony Stark, a billionaire industrialist and genius inventor who is kidnapped and forced to build a devastating weapon. Instead, using his intelligence and ingenuity, Tony builds a high-tech suit of armor and escapes captivity.",
    },

    {
      name: "WONDER WOMEN",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTYzODQzYjQtNTczNC00MzZhLTg1ZWYtZDUxYmQ3ZTY4NzA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
      imdb: "9.2",
      summary:
        "Before she was Wonder Woman (Gal Gadot), she was Diana, princess of the Amazons, trained to be an unconquerable warrior. Raised on a sheltered island paradise, Diana meets an American pilot (Chris Pine) who tells her about the massive conflict that's raging in the outside world. Convinced that she can stop the threat, Diana leaves her home for the first time. Fighting alongside men in a war to end all wars, she finally discovers her full powers and true destiny.",
    },

    {
      name: "Justice League",
      poster:
        "https://talenthouse-res.cloudinary.com/image/upload/c_limit,f_auto,fl_progressive,h_1280,w_1280/v1592327316/user-1077803/submissions/roumbhexztvnzqlozzra.jpg",
      imdb: "9.1",
      summary:
        "Fuelled by his restored faith in humanity, and inspired by Superman's selfless act, Bruce Wayne enlists newfound ally Diana Prince to face an even greater threat. Together, Batman and Wonder Woman work quickly to recruit a team to stand against this newly-awakened enemy. Despite the formation of an unprecedented league of heroes in Batman, Wonder Woman, Aquaman, Cyborg and the Flash, it may be too late to save the planet from an assault of catastrophic proportions.",
    },

    {
      name: "The Dark Knight (2008)",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      imdb: "9",
      summary:
        "With the help of allies Lt. Jim Gordon (Gary Oldman) and DA Harvey Dent (Aaron Eckhart), Batman (Christian Bale) has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker (Heath Ledger) suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism.",
    },

    {
      name: "X-MEN (APOCALYPSE)",
      poster: "https://live.staticflickr.com/3674/19641293042_461a7e30c6_b.jpg",
      imdb: "8.9",
      summary:
        "Worshiped as a god since the dawn of civilization, the immortal Apocalypse (Oscar Isaac) becomes the first and most powerful mutant. Awakening after thousands of years, he recruits the disheartened Magneto (Michael Fassbender) and other mutants to create a new world order. As the fate of the Earth hangs in the balance, Professor X (James McAvoy) and Raven (Jennifer Lawrence) lead a team of young X-Men to stop their seemingly invincible nemesis from destroying mankind.",
    },

    {
      name: "THOR  (COURAGE IS IMMORTAL)",
      poster:
        "https://media.comicbook.com/2017/10/thor-movie-poster-marvel-cinematic-universe-1038890.jpg",
      imdb: "9",
      summary:
        "As the son of Odin (Anthony Hopkins), king of the Norse gods, Thor (Chris Hemsworth) will soon inherit the throne of Asgard from his aging father. However, on the day that he is to be crowned, Thor reacts with brutality when the gods' enemies, the Frost Giants, enter the palace in violation of their treaty. As punishment, Odin banishes Thor to Earth. While Loki (Tom Hiddleston), Thor's brother, plots mischief in Asgard, Thor, now stripped of his powers, faces his greatest threat.",
    },

    {
      name: "CAPTAIN AMERICA (THE FIRST AVENGER)",
      poster:
        "https://static2.srcdn.com/wordpress/wp-content/uploads/2019/06/Captain-America-The-First-Avenger.jpg?q=50&fit=crop&w=740&h=1095&dpr=1.5",
      imdb: "9.5",
      summary:
        "It is 1941 and the world is in the throes of war. Steve Rogers (Chris Evans) wants to do his part and join America's armed forces, but the military rejects him because of his small stature. Finally, Steve gets his chance when he is accepted into an experimental program that turns him into a supersoldier called Captain America. Joining forces with Bucky Barnes (Sebastian Stan) and Peggy Carter (Hayley Atwell), Captain America leads the fight against the Nazi-backed HYDRA organization.",
    },

    {
      name: "CIVIL WAR (Captain america)",
      poster:
        "https://img.buzzfeed.com/buzzfeed-static/static/2020-08/24/18/asset/5ccfa2a708fb/sub-buzz-12840-1598294839-2.jpg?resize=625:927",
      imdb: "9.3",
      summary:
        "Political pressure mounts to install a system of accountability when the actions of the Avengers lead to collateral damage. The new status quo deeply divides members of the team. Captain America (Chris Evans) believes superheroes should remain free to defend humanity without government interference. Iron Man (Robert Downey Jr.) sharply disagrees and supports oversight. As the debate escalates into an all-out feud, Black Widow (Scarlett Johansson) and Hawkeye (Jeremy Renner) must pick a side.",
    },
  ];

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [imdb, setImdb] = useState("");
  const [summary, setSummary] = useState("");

  const [moviesList, addMoviesList] = useState(INITIAL_MOVIES);

  var inpStyle = {
    marginTop: "15px",
    width: "455px",
  };
  return (
    <div className="App">
      <div className="entire-form">
        <div className="form-group">
          <TextField
            id="filled-basic"
            label="Name"
            style={inpStyle}
            variant="filled"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <TextField
            id="filled-basic"
            style={inpStyle}
            label="Poster"
            variant="filled"
            value={poster}
            onChange={(event) => {
              setPoster(event.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <TextField
            id="filled-basic"
            label="Summary"
            style={inpStyle}
            variant="filled"
            value={summary}
            onChange={(event) => {
              setSummary(event.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <TextField
            id="filled-basic"
            label="IMDB"
            style={inpStyle}
            variant="filled"
            value={imdb}
            onChange={(event) => {
              setImdb(event.target.value);
            }}
          />
        </div>
        <div className="button">
          <Button
            variant="outlined"
            className="btn"
            onClick={() => {
              const newMovie = {
                name: name,
                poster: poster,
                imdb: imdb,
                summary: summary,
              };

              addMoviesList([...moviesList, newMovie]);
            }}
          >
            {" "}
            Button{" "}
          </Button>
        </div>
      </div>

      <section className="movie-list">
        {moviesList.map((element) => (
          <Movie
            poster={element.poster}
            name={element.name}
            imdb={element.imdb}
            summary={element.summary}
          />
        ))}
      </section>
    </div>
  );
}

function Movie(props) {
  // Conditional styling
  const ratingStyles = {
    color: props.imdb > 7.5 ? "rgb(193, 255, 101)" : "yellow",
  };

  const [show, setshow]= useState(true)
  
const toggle = {display: show? "block":"none"}

  return (
    <div className="movie">
      <div className="poster">
        <img src={props.poster} alt={props.name} />
      </div>

      <div className="rating">
        <p> {props.name} </p>
        <Like />
        <p style={ratingStyles}> ⭐{props.imdb} </p>
      </div>

      <Switch 
      color="error"
      onClick={()=>{
        setshow(!show)
      }}
     
      />

      <p className="summary" style={toggle}>
     
        {props.summary} </p>
    </div>
  );
}

export default App;
