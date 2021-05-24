import React, { useState } from 'react';
import '../Css/Quiz.css'

const Quiz = () => {
	const questions = [
{
			questionText: 'What is Covid -19 (2019 novel coronavirus)?',
			answerOptions: [
				{ answerText: 'A virus not previously seen in humans', isCorrect: false },
				{ answerText: 'A virus first noted in China', isCorrect: false },
				{ answerText: 'A virus that causes respiratory illness', isCorrect: false},
				{ answerText: 'All of the above', isCorrect: true },
			],
		},
{
			questionText: 'How does washing hands help prevent the spread of COVID-19?',
			answerOptions: [
				{ answerText: 'Soap rinses the virus off', isCorrect: false },
				{ answerText: 'Soap destroys the virus', isCorrect: true },
				{ answerText: 'Soap mutates the virus', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: false },
			],
		},
{
			questionText: 'How is COVID-19 transmitted?',
			answerOptions: [
				{ answerText: 'Through blood', isCorrect: false },
				{ answerText: 'Though contaminated food', isCorrect: false },
				{ answerText: 'Through respiratory droplets in the air', isCorrect: true },
				{ answerText: 'Both A & B', isCorrect: false },
			],
		},
{
			questionText: 'Why should I avoid touching my face?',
			answerOptions: [
				{ answerText: 'COVID-19 enters the body through the mouth, nose, eyes', isCorrect: false },
				{ answerText: 'Things you touch with your hands may have active virus on them', isCorrect: false },
				{ answerText: 'The virus is absorbed easily by the pores on the face', isCorrect: false },
				{ answerText: 'Both A & B', isCorrect: true },
			],
		},
{
			questionText: 'Who in the general public needs to wear a face mask when out in public places?',
			answerOptions: [
				{ answerText: 'People who are sick', isCorrect: false },
				{ answerText: 'People who are well and do not want to get sick', isCorrect: false },
				{ answerText: 'People over the age of 65', isCorrect: false },
				{ answerText: 'Everyone', isCorrect: true },
			],
		},
{
			questionText: 'What kind of face mask do I need to wear?',
			answerOptions: [
				{ answerText: 'N95 masks', isCorrect: false },
				{ answerText: 'Surgical masks', isCorrect: false },
				{ answerText: 'Scuba masks', isCorrect: false },
				{ answerText: 'Fabric masks', isCorrect: true },
			],
		},
{
			questionText: 'What is "social distancing”?',
			answerOptions: [
				{ answerText: 'Avoiding mass gatherings', isCorrect: false },
				{ answerText: 'Staying at least 6 feet (2 meters) from others', isCorrect: false },
				{ answerText: 'Working from home', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: true },
			],
		},
{
			questionText: 'How do I disinfect surfaces?',
			answerOptions: [
				{ answerText: 'With bleach', isCorrect: false },
				{ answerText: 'With EPA-registered household disinfectants', isCorrect: false },
				{ answerText: 'With alcohol', isCorrect: false },
				{ answerText: 'Any of the above', isCorrect: true },
			],
		},
{
			questionText: 'What are the best ways to prevent getting infected with COVID-19?',
			answerOptions: [
				{ answerText: 'Avoid people who are sick', isCorrect: false },
				{ answerText: 'Wash your hands', isCorrect: false },
				{ answerText: 'Stay at home', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: true },
			],
		},
{
			questionText: 'How can I prevent spreading COVID-19 to others?',
			answerOptions: [
				{ answerText: 'Wash your hands.', isCorrect: false },
				{ answerText: 'Avoid people if you are sick.', isCorrect: false },
				{ answerText: 'Keep a distance of at least 6 feet.', isCorrect: false },
				{ answerText: 'All of the above', isCorrect:true },
			],
		},
{
			questionText: 'How is COVID-19 passed on?',
			answerOptions: [
				{ answerText: 'Through droplets that come from your mouth and nose when you cough or breathe out', isCorrect: true },
				{ answerText: 'In sexual fluids, including semen, vaginal fluids or anal mucous', isCorrect: false },
				{ answerText: 'By drinking unclean water', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: false },
			],
		},
{
			questionText: 'What are the common symptoms of COVID-19? ',
			answerOptions: [
				{ answerText: 'A new and continuous cough', isCorrect: false },
				{ answerText: 'Fever', isCorrect: false },
				{ answerText: 'Tiredness', isCorrect: false},
				{ answerText: 'All of the above', isCorrect: true },
			],
		},
{
			questionText: 'Can you always tell if someone has COVID-19?',
			answerOptions: [
				{ answerText: 'No – not everyone with COVID-19 has symptoms', isCorrect: true },
				{ answerText: 'Yes – it will be obvious, a person with COVID-19 coughs a lot', isCorrect: false },
				{ answerText: 'Yes – you can tell just by where a person comes from, their race and ethnicity', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: false },
			],
		},
{
			questionText: 'Can washing your hands protect you from COVID-19? ',
			answerOptions: [
				{ answerText: 'Yes – but only if you use a strong bleach', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'Yes – normal soap and water or hand sanitizer is enough', isCorrect: true },
				{ answerText: 'No – Washing your hands doesn’t stop COVID-19', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: false },
			],
		},
{
			questionText: 'Which of the following people is COVID-19 more dangerous for? (select all correct responses)',
			answerOptions: [
				{ answerText: 'Children', isCorrect: false },
				{ answerText: 'Older people – especially those aged 70 and above', isCorrect: false },
				{ answerText: 'People with certain underlying health conditions', isCorrect: false },
				{ answerText: 'B & C both', isCorrect: true },
			],
		},
{
			questionText: 'Are people living with HIV always more at risk? ',
			answerOptions: [
				{ answerText: 'Yes – people with HIV have weaker immune systems', isCorrect: false },
				{ answerText: 'No – people who adhere to antiretroviral treatment (ART) and have a high CD4 count aren’t more at risk', isCorrect: true },
				{ answerText: 'A and B both', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: false },
			],
		},
{
			questionText: 'When should fabric face masks be worn?',
			answerOptions: [
				{ answerText: 'On public transport ', isCorrect: false },
				{ answerText: 'In confined or crowded spaces', isCorrect: false },
				{ answerText: 'In small shops', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: true },
			],
		},
{
			questionText: 'Can COVID-19 be cured? ',
			answerOptions: [
				{ answerText: 'Yes – Hot drinks can cure COVID-19', isCorrect: false },
				{ answerText: 'No – COVID-19 is a death sentence', isCorrect: false },
				{ answerText: 'No – but most people get better by themselves', isCorrect: true },
				{ answerText: 'All of the above', isCorrect: false },
			],
		},
{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
{
			questionText: 'Which of the following is an example of physical distancing? ',
			answerOptions: [
				{ answerText: 'You stop going to crowded places and visiting other people’s houses', isCorrect: true },
				{ answerText: 'You stop talking to the people you live with', isCorrect: false },
				{ answerText: 'You stop speaking to your friends on the phone', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: false },
			],
		},
{
			questionText: 'How can people living with HIV protect themselves from COVID-19?',
			answerOptions: [
				{ answerText: 'Wash their hands regularly and follow the physical distancing advice', isCorrect: false },
				{ answerText: 'Keep taking their antiretroviral treatment', isCorrect: false },
				{ answerText: 'Exercise regularly, eat well and look after their mental health', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: true },
			],
		},
{
			questionText: 'In a study, which cells are found in COVID-19 patients <q>bode well</q> for long-term immunity?',
			answerOptions: [
				{ answerText: 'P-cell', isCorrect: false },
				{ answerText: 'D-cell', isCorrect: false },
				{ answerText: 'T-cell', isCorrect: true },
				{ answerText: 'Endothelial cells', isCorrect: false },
			],
		},
{
			questionText: 'Name a clinical trial in which blood is transfused from recovered COVID-19 patients to a coronavirus patient who is in critical condition?',
			answerOptions: [
				{ answerText: 'Plasma Therapy', isCorrect: true },
				{ answerText: 'Solidarity', isCorrect: false },
				{ answerText: 'Remdesivir', isCorrect: false},
				{ answerText: 'Hydroxychloroquine', isCorrect: false },
			],
		},
{
			questionText: 'What happens to a person suffering from COVID-19?',
			answerOptions: [
				{ answerText: 'Around 80% of the people will require no treatment as such and will recover on their own.', isCorrect: false },
				{ answerText: 'Around <20% or a small proportion may need hospitalisation.', isCorrect: false },
				{ answerText: 'A very small proportion basically suffering from chronic illness may need admission in an Intensive Care Unit (ICU)', isCorrect: false },
				{ answerText: 'All the above are correct', isCorrect: true },
			],
		},
{
			questionText: 'In which age group the COVID-19 spreads?',
			answerOptions: [
				{ answerText: 'COVID-19 occurs in all age groups.', isCorrect: false },
				{ answerText: 'Coronavirus infection is mild in children', isCorrect: false },
				{ answerText: ' Older person and persons with pre-existing medical conditions are at high risk to develop serious illness.', isCorrect: false },
				{ answerText: 'All the above are correct', isCorrect: true },
			],
		},
{
			questionText: 'Which of the following diseases are related to coronavirus?',
			answerOptions: [
				{ answerText: 'MERS', isCorrect: false },
				{ answerText: 'SARS', isCorrect: false },
				{ answerText: 'Neither A or B', isCorrect: false },
				{ answerText: 'bothe A and B', isCorrect: true },
			],
		},
{
			questionText: 'What are the precautions that need to be taken to protect from the coronavirus?',
			answerOptions: [
				{ answerText: 'Cover your nose and mouth when sneezing.', isCorrect: true },
				{ answerText: 'Add more garlic into your diet.', isCorrect: false },
				{ answerText: 'Visit your doctor for antibiotics treatment', isCorrect: false },
				{ answerText: 'Wash your hands after every hour.', isCorrect: false },
			],
		},
{
			questionText: 'Ways to prevent the spread of Wuhan coronavirus include…',
			answerOptions: [
				{ answerText: 'Stay away from people who are sick', isCorrect: false },
				{ answerText: 'Stay home if you get sick', isCorrect: false },
				{ answerText: 'Follow good hygiene practices', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	let feedback='';

	if (score >=3)
	{
		feedback=' good Job'
	}
	else{
		feedback='  learn more about covid'
	}

	return (
		<div className='quizTab'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}  <span className='cl-feed'>{feedback}</span>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className="buttonCss" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}

export default Quiz
