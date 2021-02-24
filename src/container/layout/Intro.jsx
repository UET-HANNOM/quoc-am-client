import React, { useEffect } from "react";
import { useState } from "react";
import ReactJoyride, { STATUS } from "react-joyride";
import { useDispatch, useSelector } from "react-redux";
import { playIntroAction } from "../../redux/actions";

const Intro = () => {
  const [step, setStep] = useState();
  const dispatch = useDispatch();
  const playIntro = useSelector((state) => state.playIntro);
  const handleJoyrideCallback = (data) => {
    const { status } = data;
    const finishedStatuses = [STATUS.FINISHED, STATUS.SKIPPED];

    if (finishedStatuses.includes(status)) {
      dispatch(playIntroAction(false));
    }
  };
  const url = window.location.pathname;
  useEffect(() => {
    let introName = url.split('/')[1];
    console.log(introName)
    setStep(()=>initSteps[introName])
  }, [url]);
  return (
    <ReactJoyride
      steps={step}
      continuous={true}
      run={playIntro}
      scrollToFirstStep={true}
      showProgress={true}
      showSkipButton={true}
      callback={handleJoyrideCallback}
    />
  );
};
const initSteps = {
  dashboard: [
    {
      content: <h2>Let's begin our journey!</h2>,
      locale: { skip: <strong aria-label="skip">S-K-I-P</strong> },
      placement: "center",
      target: "body",
    },
    {
      target: ".my-first-step",
      content: "This is my awesome feature!",
    },
    {
      target: ".my-other-step",
      content: "This another awesome feature!",
    }
  ],
  document: [
    {
      content: <h2>Hellllllo</h2>,
      placement: "center",
      target: "body",
    },
  ]
};
export default Intro;
