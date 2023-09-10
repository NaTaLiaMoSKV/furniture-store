import css from './Questions.module.css'
import QuestionAnswer from 'components/QuestionAnswer/QuestionAnswer';

export default function Questions ({ question, answer }) {

    const faqData = [
        { question: 'What payment methods do you accept?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { question: 'Can I check my order\'s status?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { question: 'What is your return policy?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { question: 'Do you offer assembly services?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { question: 'How do you ensure the quality of your furniture?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    ];

    return (
        <section>
            <div className={css.questionsContainer}>
                <div className={css.titleContainer}>
                    <p className='section-subtitle'>FAQ</p>
                    <h2 className={css.titleText}>Questions? Look here.</h2>
                </div>
                <ul className={css.faqList}>
                    {faqData.map((faq, index) => (
                        <li key={index} className={css.faqItem}>
                            <QuestionAnswer key={index} question={faq.question} answer={faq.answer} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
        
    );
};

