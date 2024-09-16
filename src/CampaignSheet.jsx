import {
  campaignTrackValues,
  deathTrackValues,
  masteryTrackValues,
  restCountValues,
} from "./campaignConfigs";
import PropTypes from "prop-types";
import QuantityInput from "./Components/QuantityInput";
import Tracker from "./Components/Tracker";
import TextFieldMulti from "./Components/TextFieldMulti";

const CampaignSheet = ({ state, setState }) => {
  return (
    <div className="mainSheet">
      <Tracker
        label={"Campaign Track"}
        trackValues={campaignTrackValues}
        stateLabel={"campaignTrack"}
        state={state}
        setState={setState}
      />
      <Tracker
        label={"Death Track"}
        trackValues={deathTrackValues}
        stateLabel={"deathTrack"}
        state={state}
        setState={setState}
      />
      <Tracker
        label={"Mastery Track"}
        trackValues={masteryTrackValues}
        stateLabel={"masteryTrack"}
        state={state}
        setState={setState}
      />
      <QuantityInput
        label="Play Limit"
        value={state.playLimit}
        onChange={(event, val) => setState({ ...state, playLimit: val })}
        min={1}
        max={99}
      />
      <QuantityInput
        label="Combat Dice Limit"
        value={state.combatDiceLimit}
        onChange={(event, val) => setState({ ...state, combatDiceLimit: val })}
        min={1}
        max={99}
      />
      <QuantityInput
        label="Bonus Play Limit"
        value={state.bonusPlayLimit}
        onChange={(event, val) => setState({ ...state, bonusPlayLimit: val })}
        min={1}
        max={99}
      />
      <Tracker
        label={"Rest Count"}
        trackValues={restCountValues}
        stateLabel={"restCount"}
        state={state}
        setState={setState}
      />
      <TextFieldMulti
        label={"Keywords"}
        stateLabel={"keywords"}
        state={state}
        setState={setState}
        value={state.keywords}
      />
      <TextFieldMulti
        label={"Titles"}
        stateLabel={"titles"}
        state={state}
        setState={setState}
        value={state.titles}
      />
      <TextFieldMulti
        label={"Collected Items"}
        stateLabel={"collectedItems"}
        state={state}
        setState={setState}
        value={state.collectedItems}
      />
      <QuantityInput
        label="Saved XP"
        value={state.savedXp}
        onChange={(event, val) => setState({ ...state, savedXp: val })}
        min={1}
        max={99}
      />
      <QuantityInput
        label="Saved Gold"
        value={state.savedGold}
        onChange={(event, val) => setState({ ...state, savedGold: val })}
        min={1}
        max={99}
      />
      <QuantityInput
        label="King's Favor"
        value={state.kingsFavorRep}
        onChange={(event, val) => setState({ ...state, kingsFavorRep: val })}
        min={-10}
        max={10}
      />
      <QuantityInput
        label="Starlit Door Favor"
        value={state.starlitDoorRep}
        onChange={(event, val) => setState({ ...state, starlitDoorRep: val })}
        min={-10}
        max={10}
      />
      <QuantityInput
        label="Dragul Favor"
        value={state.dragulFavorRep}
        onChange={(event, val) => setState({ ...state, dragulFavorRep: val })}
        min={-10}
        max={10}
      />
    </div>
  );
};

CampaignSheet.propTypes = {
  state: PropTypes.shape({
    campaignTrack: PropTypes.number || PropTypes.string,
    deathTrack: PropTypes.number,
    masteryTrack: PropTypes.string,
    playLimit: PropTypes.number,
    combatDiceLimit: PropTypes.number,
    bonusPlayLimit: PropTypes.number,
    restCount: PropTypes.number,
    keywords: PropTypes.arrayOf(PropTypes.string),
    titles: PropTypes.arrayOf(PropTypes.string),
    savedXp: PropTypes.number,
    savedGold: PropTypes.number,
    kingsFavorRep: PropTypes.number,
    starlitDoorRep: PropTypes.number,
    dragulFavorRep: PropTypes.number,
    collectedItems: PropTypes.arrayOf(PropTypes.string),
  }),
  setState: PropTypes.func.isRequired,
};

export default CampaignSheet;
