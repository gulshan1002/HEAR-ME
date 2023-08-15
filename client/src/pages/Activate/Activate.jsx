import React, { useState } from 'react';
import StepName from '../Steps/Name/Name';
import StepAvatar from '../Steps/Avatar/Avatar';

const steps = {
    1: StepName,
    2: StepAvatar,
};

const Activate = () => {
    const [step, setStep] = useState(1);
    const Step = steps[step];

    function onNext() {
        setStep(step + 1);
    }
    return (
        <div className="cardWrapper">
            <Step onNext={onNext}></Step>
        </div>
    );
};

export default Activate;