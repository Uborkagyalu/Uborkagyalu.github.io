import { useState } from "react";
import "./App.css";
import { IconButton, Paper, Tab, Tabs } from "@mui/material";
import CampaignSheet from "./CampaignSheet";
import CharacterSheet from "./CharacterSheet";
import SaveIcon from "@mui/icons-material/Save";
import {
  campaignTrackValues,
  deathTrackValues,
  masteryTrackValues,
} from "./campaignConfigs";

function App() {
  const [tab, setTab] = useState("campaign");
  const [initialState] = useState(
    localStorage.getItem("RPState")
      ? JSON.parse(localStorage.getItem("RPState"))
      : {}
  );
  console.log(initialState);

  const { campaignState: initialCampaignState = {}, charactersState: initialCharactersState = [] } =
    initialState;

  const [campaignState, setCampaignState] = useState({
    campaignTrack: initialCampaignState.campaignTrack ?? campaignTrackValues[0],
    deathTrack: initialCampaignState.deathTrack ?? deathTrackValues[0],
    masteryTrack: initialCampaignState.masteryTrack ?? masteryTrackValues[0],
    playLimit: initialCampaignState.playLimit ?? 1,
    combatDiceLimit: initialCampaignState.combatDiceLimit ?? 3,
    bonusPlayLimit: initialCampaignState.bonusPlayLimit ?? 1,
    restCount: initialCampaignState.restCount ?? 0,
    keywords: initialCampaignState.keywords ?? [],
    titles: initialCampaignState.titles ?? [],
    savedXp: initialCampaignState.savedXp ?? 0,
    savedGold: initialCampaignState.savedGold ?? 0,
    kingsFavorRep: initialCampaignState.kingsFavorRep ?? 0,
    starlitDoorRep: initialCampaignState.starlitDoorRep ?? 0,
    dragulFavorRep: initialCampaignState.dragulFavorRep ?? 0,
    collectedItems: initialCampaignState.collectedItems ?? [],
  });

  const [charactersState, setCharactersState] = useState([
    ...initialCharactersState,
  ]);

  return (
    <Paper className="main">
      <Tabs value={tab} style={{width: "calc(100% - 30px - 2rem"}}>
        <Tab
          label="Campaign Sheet"
          value="campaign"
          onClick={() => setTab("campaign")}
        />
        <Tab
          label="Characters Sheet"
          value="characters"
          onClick={() => setTab("characters")}
        />
      </Tabs>
      <IconButton
        className="saveIcon"
        onClick={() => {
          localStorage.setItem(
            "RPState",
            JSON.stringify({ campaignState, charactersState })
          );
        }}
      >
        <SaveIcon className="icon" />
      </IconButton>
      {tab === "campaign" && (
        <CampaignSheet state={campaignState} setState={setCampaignState} />
      )}
      {tab === "characters" && (
        <CharacterSheet state={charactersState} setState={setCharactersState} />
      )}
    </Paper>
  );
}

export default App;
