import { useState } from "react";
import QuantityInput from "./Components/QuantityInput";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  Paper,
} from "@mui/material";
import { colors } from "./campaignConfigs";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextFieldInput from "./Components/TextFieldInput";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckIcon from "@mui/icons-material/Check";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const defaultCharacterValues = {
  color: "",
  character: "",
  player: "",
  race: "",
  class: "",
  health: 16,
  stregth: 0,
  dexterity: 0,
  constitution: 0,
  intelligence: 0,
  wisdom: 0,
  charisma: 0,
};

const CharacterSheet = ({ state, setState }) => {
  const [removeIconOpen, setRemoveIconOpen] = useState(false);

  const changeCharacterStats = (characterId, stat, val) => {
    const newState = state.map((character) => {
      if (character.id === characterId) {
        return { ...character, [stat]: val };
      }
      return character;
    });
    setState(newState);
  };

  const getStyle = (character) => {
    return {
      color:
        colors.find((col) => col.type === character.color)?.fontColor ??
        "#000000",
    };
  };

  return (
    <>
      <Accordion id="addCharacterAccordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="add-character"
          id="add-character"
        >
          Add Character
        </AccordionSummary>
        <AccordionDetails id="classColorSelectorContainer">
          {colors.map((color) => (
            <div
              key={color.type}
              className="classColorSelector"
              style={{ backgroundColor: color.color }}
              onClick={() => {
                setState([
                  ...state,
                  {
                    ...defaultCharacterValues,
                    color: color.type,
                    id: uuidv4(),
                  },
                ]);
              }}
            >
              {state.find((char) => char.color === color.type) && (
                <CheckIcon style={{ width: "100%", height: "100%" }} />
              )}
            </div>
          ))}
        </AccordionDetails>
      </Accordion>
      {state.map((character, index) => (
        <Paper
          key={index}
          className="mainSheet characterSheet"
          style={{
            backgroundColor: colors.find((col) => col.type === character.color)
              .color,
            margin: "30px 0",
          }}
        >
          <IconButton
            className="removeCharIcon"
            onClick={() => {
              setRemoveIconOpen(true);
            }}
          >
            <CancelIcon className="icon" />
          </IconButton>
          {removeIconOpen && (
            <IconButton
              className="removeCharIconExtra"
              onClick={() => {
                setRemoveIconOpen(false);
                setState(state.filter((char) => char.id !== character.id));
              }}
            >
              <CancelIcon className="iconExtra" />
            </IconButton>
          )}
          <TextFieldInput
            label={"Character"}
            onChange={(val) =>
              changeCharacterStats(character.id, "character", val)
            }
            value={character.character}
            labelStyle={getStyle(character)}
          />
          <TextFieldInput
            label={"Player"}
            onChange={(val) =>
              changeCharacterStats(character.id, "player", val)
            }
            value={character.player}
            labelStyle={getStyle(character)}
          />
          <TextFieldInput
            label={"Race"}
            onChange={(val) => changeCharacterStats(character.id, "race", val)}
            value={character.race}
            labelStyle={getStyle(character)}
          />
          <TextFieldInput
            label={"Class"}
            onChange={(val) => changeCharacterStats(character.id, "class", val)}
            value={character.class}
            labelStyle={getStyle(character)}
          />
          <QuantityInput
            label="Health"
            value={character.health}
            onChange={(_, val) =>
              changeCharacterStats(character.id, "health", val)
            }
            min={1}
            max={99}
            labelStyle={getStyle(character)}
          />
          <QuantityInput
            label="Stregth"
            value={character.stregth}
            onChange={(_, val) =>
              changeCharacterStats(character.id, "stregth", val)
            }
            min={1}
            max={99}
            labelStyle={getStyle(character)}
          />
          <QuantityInput
            label="Dexterity"
            value={character.dexterity}
            onChange={(_, val) =>
              changeCharacterStats(character.id, "dexterity", val)
            }
            min={1}
            max={99}
            labelStyle={getStyle(character)}
          />
          <QuantityInput
            label="Constitution"
            value={character.constitution}
            onChange={(_, val) =>
              changeCharacterStats(character.id, "constitution", val)
            }
            min={1}
            max={99}
            labelStyle={getStyle(character)}
          />
          <QuantityInput
            label="Intelligence"
            value={character.intelligence}
            onChange={(_, val) =>
              changeCharacterStats(character.id, "intelligence", val)
            }
            min={1}
            max={99}
            labelStyle={getStyle(character)}
          />
          <QuantityInput
            label="Wisdom"
            value={character.wisdom}
            onChange={(_, val) =>
              changeCharacterStats(character.id, "wisdom", val)
            }
            min={1}
            max={99}
            labelStyle={getStyle(character)}
          />
          <QuantityInput
            label="Charisma"
            value={character.charisma}
            onChange={(_, val) =>
              changeCharacterStats(character.id, "charisma", val)
            }
            min={1}
            max={99}
            labelStyle={getStyle(character)}
          />
        </Paper>
      ))}
    </>
  );
};

CharacterSheet.propTypes = {
  state: PropTypes.array.isRequired,
  setState: PropTypes.func.isRequired,
};

export default CharacterSheet;
