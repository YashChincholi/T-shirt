import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";

import config from "../config/config";
import { fadeAnimation, slideAnimation } from "../config/motion";
import { DecalTypes, EditorTabs, FilterTabs } from "../config/constants";
import { downloadCanvasToImage, reader } from "../config/helpers";

import state from "../store";
import { download } from "../assets";

import {
  AIPicker,
  ColorPicker,
  CustomButton,
  FilePicker,
  Tab,
} from "../components";

const Customizer = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key="custom"
            {...slideAnimation("left")}
            className="absolute top-0 left-0 z-10"
          >
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tab">
                {EditorTabs.map((tab) => (
                  <Tab key={tab.name} tab={tab} handelClick={() => {}} />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeAnimation}
            className="absolute top-5 right-5 z-10"
          >
            <CustomButton
              type="filled"
              title="Go Back"
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              handelClick={() => {
                state.intro = true;
              }}
            />
          </motion.div>

          <motion.div
            className="filtertabs-container"
            {...slideAnimation("up")}
          >
            {FilterTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab=""
                handelClick={() => {}}
              />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Customizer;