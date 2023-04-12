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
            className="absolute top-0 left-0 z-10"
            {...slideAnimation("left")}
          >
            <div className="flex items-center"></div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Designer;
