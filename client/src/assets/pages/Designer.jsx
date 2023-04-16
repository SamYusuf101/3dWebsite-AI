import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../../store";
import { download } from "../../assets";
import { downloadCanvasToImage, reader } from "../../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../../config/constants";
import { fadeAnimation, slideAnimation } from "../../config/motion";
import config from "../../config/config";
import {
  AiPicker,
  ColorPicker,
  Tab,
  FilePicker,
  GetStarted,
} from "../../components";

const Designer = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10 "
            {...slideAnimation("left")}
          >
            <div className="flex items-center min-h-screen ">
              <div className="editortabs-container tabs">
                {EditorTabs.map((tab) => (
                  <Tab key={tab.name} tab={tab} handleClick={() => {}} />
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            className="absolute z-10 right-5 top-5"
            {...fadeAnimation}
          >
            <GetStarted
              type="filled"
              title="Back"
              handleClick={() => (state.intro = true)}
              customStyles="w-fit px-7 py-2.5 font-bold text-sm"
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
                handleClick={() => {}}
              />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Designer;
