import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";

const ingredient = [
  {
    categories: "Nuts & seeds",
    ingredients: ["Cashews"],
  },
  {
    categories: "Protein",
    ingredients: ["Ground Beef", "Bacon Strips"],
  },
];

const MenuCard = () => {
  const handleCheckBoxchange = (value) => {
    console.log("value");
  };
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <div className="lg:flex items-center justify-between w-full">
          <div className="lg:flex items-center lg:gap-5">
            <img
              className="w-[7rem] h-[7rem] object-cover"
              src="https://images.pexels.com/photos/20780686/pexels-photo-20780686.jpeg"
              alt="Momos"
            />
            <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
              <p className="font-semibold text-xl">Momos</p>
              <p>₹299</p>
              <p>Delicious</p>
            </div>
          </div>
        </div>
      </AccordionSummary>

      <AccordionDetails>
        <form>
          <div className="flex gap-5 flex-wrap">
            {ingredient.map((item, index) => (
              <div key={index} className="min-w-[200px]">
                <p className="font-semibold mb-2">{item.categories}</p>

                <FormGroup>
                  {item.ingredients.map((ing, i) => (
                    <FormControlLabel
                      key={i}
                      onChange={handleCheckBoxchange(item)}
                      control={<Checkbox />}
                      label={ing}
                    />
                  ))}
                </FormGroup>
              </div>
            ))}
          </div>

          <div className="pt-5">
            <Button variant="contained" disabled={false} type="submit">
              {true ? "Add to Cart" : "Out of Stock"}
            </Button>
          </div>
        </form>
      </AccordionDetails>
    </Accordion>
  );
};

export default MenuCard;
