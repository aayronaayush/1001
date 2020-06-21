require("dotenv").config();
let express = require("express");
let mongoose = require("mongoose");
let bodyParser = require("body-parser");
const {
  render
} = require("ejs");
const e = require("express");

//app setup
let app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static(__dirname + "/public"));

//database setup
// mongoose.connect("mongodb://localhost:27017/1001_2", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });
mongoose.connect(
  `mongodb+srv://aayushdeo:${process.env.DBPASSWORD}@cluster0-ain31.gcp.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
let storySchema = new mongoose.Schema({
  thisNode: String,
  story: String,
  parts: Number,
  nextNode1: String,
  display1: String,
  nextNode2: String,
  display2: String,
});
let Story = new mongoose.model("story", storySchema);

//routes
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

//----------------------SHOW PART----------------------
app.get("/part/:id", (req, res) => {
  // console.log(req.params)
  // res.redirect("/")
  Story.findById(req.params.id)
    .then((foundStory) => {
      console.log(foundStory);
      //send the links to next stories
      let nextPartLinks = {};
      let display = {};
      //for when we need to proceed
      if (foundStory.parts == null) {
        Story.find({
            thisNode: "n30",
          },
          async (err, nextStory) => {
            if (err) console.log(err);
            else {
              nextPartLinks.next1 = nextStory[0]._id;
              display.disp1 = foundStory.display1;
              res.render("show", {
                part: foundStory,
                parts: foundStory.parts,
                nextPartLinks: nextPartLinks,
                display: display,
              });
            }
          }
        );
      } else if (foundStory.parts == 1) {
        Story.find({
            thisNode: foundStory.nextNode1,
          },
          async (err, nextStory) => {
            if (err) console.log(err);
            else {
              nextPartLinks.next1 = nextStory[0]._id;
              display.disp1 = foundStory.display1;
              console.log(nextPartLinks.next1);
              console.log(nextStory);
              res.render("show", {
                part: foundStory,
                nextPartLinks: nextPartLinks,
                parts: foundStory.parts,
                display: display,
              });
            }
          }
        );
      } else if (foundStory.parts == 2) {
        Story.find({
            //find the first story
            thisNode: foundStory.nextNode1,
          },
          async (err, nextStory1) => {
            if (err) console.log(err);
            else {
              nextPartLinks.next1 = nextStory1[0]._id;
              display.disp1 = foundStory.display1;
              Story.find({
                  //find the second story
                  thisNode: foundStory.nextNode2,
                },
                async (err, nextStory2) => {
                  if (err) console.log(err);
                  else {
                    nextPartLinks.next2 = nextStory2[0]._id;
                    display.disp2 = foundStory.display2;
                    console.log(nextPartLinks.next2);
                    res.render("show", {
                      part: foundStory,
                      nextPartLinks: nextPartLinks,
                      parts: foundStory.parts,
                      display: display,
                    });
                  }
                }
              );
            }
          }
        );
      }
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/");
    });
});

//----------------------Show The Form For Stories----------------------
/* app.get("/new", (req, res) => {
  res.render("new");
}); */

//----------------------Add Story To Database----------------------
/* app.post("/story", (req, res) => {
  //   console.log(req.body);
  let partData = {
    thisNode: req.body.thisnode,
    story: req.body.story,
    parts: req.body.part,
    nextNode1: req.body.next1,
    display1: req.body.display1,
    nextNode2: req.body.next2,
    display2: req.body.display2,
  };
  console.log(partData);
  Story.create(partData)
    .then((newPart) => {
      res.redirect("/new");
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/new");
    });
  //   res.redirect("/new");
}); */

app.listen(3000);