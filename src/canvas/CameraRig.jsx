import { useRef, React } from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";

import state from "../store";

const CameraRig = ({ children }) => {
  useFrame((state, delta) => {
    const isBreakpoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;

    // set the initial position of the model
    let targetPosition = [-0.4, 0, 0.7];
    if (snap.intro) {
      if (isBreakpoint) targetPosition = [0, 0, 2];
      if (isMobile) targetPosition = [0, 0.2, 2.5];
    } else {
      if (isMobile) targetPosition = [0, 0, 2.5];
      else targetPosition = [0, 0, 2];
    }

    // setting the camera
    easing.damp3(state.camera.position, targetPosition, 2.5, delta);

    // setting the model rotation
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    );
  });

  const snap = useSnapshot(state);
  const group = useRef();

  return <group ref={group}>{children}</group>;
};

export default CameraRig;
