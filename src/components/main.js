import { useEffect, useState } from "react";
import { Knob } from "primereact/knob";
import { Slider } from "primereact/slider";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";
import { db } from "../config/firebase";
import { ref, update } from "firebase/database";
import { uid } from "uid";

export const Main = () => {
  const [sliderValueBase, setSliderValueBase] = useState(50);
  const [sliderValueShoulder, setSliderValueShoulder] = useState(50);
  const [sliderValueArm, setSliderValueArm] = useState(50);
  const [sliderValueElbow, setSliderValueElbow] = useState(50);
  const [sliderValueWrist, setSliderValueWrist] = useState(50);
  const [sliderValueClaw, setSliderValueClaw] = useState(50);

  const sliderChangeBase = async (event) => {
    setSliderValueBase(event.value);
    try {
      await update(ref(db, "/base"), { sliderValueBase });
    } catch (err) {
      console.error(err);
    }
  };

  const sliderChangeShoulder = async (event) => {
    setSliderValueShoulder(event.value);
    try {
      await update(ref(db, "/shoulder"), { sliderValueShoulder });
    } catch (err) {
      console.error(err);
    }
  };

  const sliderChangeArm = async (event) => {
    setSliderValueArm(event.value);
    try {
      await update(ref(db, "/arm"), { sliderValueArm });
    } catch (err) {
      console.error(err);
    }
  };

  const sliderChangeElbow = async (event) => {
    setSliderValueElbow(event.value);
    try {
      await update(ref(db, "/elbow"), { sliderValueElbow });
    } catch (err) {
      console.error(err);
    }
  };

  const sliderChangeWrist = async (event) => {
    setSliderValueWrist(event.value);
    try {
      await update(ref(db, "/wrist"), { sliderValueWrist });
    } catch (err) {
      console.error(err);
    }
  };

  const sliderChangeClaw = async (event) => {
    setSliderValueClaw(event.value);
    try {
      await update(ref(db, "/claw"), { sliderValueClaw });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="grid">
        <div className="col">
          <Knob
            value={sliderValueBase}
            valueColor="#708090"
            rangeColor="#48d1cc"
          />
          <Slider value={sliderValueBase} onChange={sliderChangeBase} />
          <div className="pt-3">
            <label>Base</label>
          </div>
        </div>
        <div className="col">
          <Knob
            value={sliderValueShoulder}
            valueColor="#708090"
            rangeColor="#48d1cc"
          />
          <Slider value={sliderValueShoulder} onChange={sliderChangeShoulder} />
          <div className="pt-3">
            <label>Shoulder</label>
          </div>
        </div>
        <div className="col">
          <Knob
            value={sliderValueArm}
            valueColor="#708090"
            rangeColor="#48d1cc"
          />
          <Slider value={sliderValueArm} onChange={sliderChangeArm} />
          <div className="pt-3">
            <label>Arm</label>
          </div>
        </div>
      </div>
      <div className="grid">
        <div className="col">
          <Knob
            value={sliderValueElbow}
            valueColor="#708090"
            rangeColor="#48d1cc"
          />
          <Slider value={sliderValueElbow} onChange={sliderChangeElbow} />
          <div className="pt-3">
            <label>Elbow</label>
          </div>
        </div>
        <div className="col">
          <Knob
            value={sliderValueWrist}
            valueColor="#708090"
            rangeColor="#48d1cc"
          />
          <Slider value={sliderValueWrist} onChange={sliderChangeWrist} />
          <div className="pt-3">
            <label>Wrist</label>
          </div>
        </div>
        <div className="col">
          <Knob
            value={sliderValueClaw}
            valueColor="#708090"
            rangeColor="#48d1cc"
          />
          <Slider value={sliderValueClaw} onChange={sliderChangeClaw} />
          <div className="pt-3">
            <label>Claw</label>
          </div>
        </div>
      </div>
    </div>
  );
};
