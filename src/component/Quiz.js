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
					You scored {score} out of {questions.length}  <span class='cl-feed'>{feedback}</span>




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
