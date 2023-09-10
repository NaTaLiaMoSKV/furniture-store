import React, { useState } from 'react';
import css from './QuestionAnswer.module.css'
import sprite from '../../images/symbol-defs.svg'

export default function QuestionAnswer ({ question, answer }) {
    const [isAnswerVisible, setAnswerVisible] = useState(false);

    const toggleAnswer = () => {
        setAnswerVisible(!isAnswerVisible);
    };

    return (
        <>
            <div className={css.questionWrapper}>
                <p className={css.questionText}>{question}</p>
                <button className={css.questionButton} onClick={toggleAnswer}>
                    <svg width={15} height={15} className={isAnswerVisible ? css.rotateIcon : css.icon}>
                        <use href={sprite + '#icon-arrow-down'}></use>
                    </svg>
                </button>
            </div>
            {isAnswerVisible && (
                <p className={css.answerText}>{answer}</p>
            )}
        </>
    );
};
