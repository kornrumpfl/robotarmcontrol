import { useEffect, useState } from "react";
import { Knob } from "primereact/knob";
import { Slider } from "primereact/slider";
import { InputNumber } from "primereact/inputnumber";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";
import { db } from "../config/firebase";
import { onValue, ref, update } from "firebase/database";
import { uid } from "uid";

export const Main = () => {
  const [sliderValueBase, setSliderValueBase] = useState(50);
  const [sliderValueShoulder, setSliderValueShoulder] = useState(50);
  const [sliderValueArm, setSliderValueArm] = useState(50);
  const [sliderValueElbow, setSliderValueElbow] = useState(50);
  const [sliderValueWrist, setSliderValueWrist] = useState(50);
  const [sliderValueClaw, setSliderValueClaw] = useState(50);
  const [distValue, setDistValue] = useState(0);

  useEffect(() => {
    getDistanceValue();
  }, []);

  const getDistanceValue = async () => {
    try {
      await onValue(ref(db, `/Sensor/dist_data`), (snapshot) => {
        const data = snapshot.val();
        setDistValue(data);
      });
    } catch (err) {
      console.error(err);
    }
  };
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
        <div className="col border-cyan-500 surface-overlay border-3 border-round font-bold m-2">
          <Knob
            value={sliderValueBase}
            valueColor="#708090"
            rangeColor="#48d1cc"
          />
          <InputNumber
            value={sliderValueBase}
            onValueChange={sliderChangeBase}
            showButtons
            buttonLayout="vertical"
            step={1}
            decrementButtonClassName="p-button-secondary"
            incrementButtonClassName="p-button-secondary"
            incrementButtonIcon="pi pi-plus"
            decrementButtonIcon="pi pi-minus"
            mode="decimal"
            min={0}
            max={100}
            style={{ width: "4rem" }}
          />
          <div className="pt-3">
            <label>Base</label>
          </div>
        </div>
        <div className="col border-cyan-500 surface-overlay border-3 border-round font-bold m-2">
          <Knob
            value={sliderValueShoulder}
            valueColor="#708090"
            rangeColor="#48d1cc"
          />
          <InputNumber
            value={sliderValueShoulder}
            onValueChange={sliderChangeShoulder}
            showButtons
            buttonLayout="vertical"
            step={1}
            decrementButtonClassName="p-button-secondary"
            incrementButtonClassName="p-button-secondary"
            incrementButtonIcon="pi pi-plus"
            decrementButtonIcon="pi pi-minus"
            mode="decimal"
            min={0}
            max={100}
            style={{ width: "4rem" }}
          />
          <div className="pt-3">
            <label>Shoulder</label>
          </div>
        </div>
        <div className="col border-cyan-500 surface-overlay border-3 border-round font-bold m-2">
          <Knob
            value={sliderValueArm}
            valueColor="#708090"
            rangeColor="#48d1cc"
          />
          <InputNumber
            value={sliderValueArm}
            onValueChange={sliderChangeArm}
            showButtons
            buttonLayout="vertical"
            step={1}
            decrementButtonClassName="p-button-secondary"
            incrementButtonClassName="p-button-secondary"
            incrementButtonIcon="pi pi-plus"
            decrementButtonIcon="pi pi-minus"
            mode="decimal"
            min={0}
            max={100}
            style={{ width: "4rem" }}
          />
          <div className="pt-3">
            <label>Arm</label>
          </div>
        </div>
      </div>
      <div className="grid">
        <div className="col border-cyan-500 surface-overlay border-3 border-round font-bold m-2">
          <Knob
            value={sliderValueElbow}
            valueColor="#708090"
            rangeColor="#48d1cc"
          />
          <InputNumber
            value={sliderValueElbow}
            onValueChange={sliderChangeElbow}
            showButtons
            buttonLayout="vertical"
            step={1}
            decrementButtonClassName="p-button-secondary"
            incrementButtonClassName="p-button-secondary"
            incrementButtonIcon="pi pi-plus"
            decrementButtonIcon="pi pi-minus"
            mode="decimal"
            min={0}
            max={100}
            style={{ width: "4rem" }}
          />
          <div className="pt-3">
            <label>Elbow</label>
          </div>
        </div>
        <div className="col border-cyan-500 surface-overlay border-3 border-round font-bold m-2">
          <Knob
            value={sliderValueWrist}
            valueColor="#708090"
            rangeColor="#48d1cc"
          />
          <InputNumber
            value={sliderValueWrist}
            onValueChange={sliderChangeWrist}
            showButtons
            buttonLayout="vertical"
            step={1}
            decrementButtonClassName="p-button-secondary"
            incrementButtonClassName="p-button-secondary"
            incrementButtonIcon="pi pi-plus"
            decrementButtonIcon="pi pi-minus"
            mode="decimal"
            min={0}
            max={100}
            style={{ width: "4rem" }}
          />
          <div className="pt-3">
            <label>Wrist</label>
          </div>
        </div>
        <div className="col border-cyan-500 surface-overlay border-3 border-round font-bold m-2">
          <Knob
            value={sliderValueClaw}
            valueColor="#708090"
            rangeColor="#48d1cc"
          />
          <InputNumber
            value={sliderValueClaw}
            onValueChange={sliderChangeClaw}
            showButtons
            buttonLayout="vertical"
            step={1}
            decrementButtonClassName="p-button-secondary"
            incrementButtonClassName="p-button-secondary"
            incrementButtonIcon="pi pi-plus"
            decrementButtonIcon="pi pi-minus"
            mode="decimal"
            min={0}
            max={100}
            style={{ width: "4rem" }}
          />
          <div className="pt-3">
            <label>Claw</label>
          </div>
        </div>
      </div>
      <div className="flex justify-content-center flex-wrap">
        <h1 className="flex align-items-center justify-content-center m-2">
          Distance
        </h1>
        <h1 className="flex align-items-center justify-content-center m-2">
          {distValue}
        </h1>
        <h1 className="flex align-items-center justify-content-center m-2">
          cm
        </h1>
      </div>
    </div>
  );
};
