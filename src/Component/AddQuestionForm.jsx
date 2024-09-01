// src/Component/AddQuestionForm.jsx
import React, { useState } from 'react';
import { saveQuestions, getQuestions } from '../Helper/questions'; // Import functions

const AddQuestionForm = () => {
  const [prompt, setPrompt] = useState('');
  const [optionA, setOptionA] = useState('');
  const [optionB, setOptionB] = useState('');
  const [optionC, setOptionC] = useState('');
  const [optionD, setOptionD] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new question
    const newQuestion = { prompt, optionA, optionB, optionC, optionD, answer };

    // Fetch existing questions and add the new one
    const currentQuestions = getQuestions();
    const updatedQuestions = [...currentQuestions, newQuestion];

    // Save updated questions to local storage
    saveQuestions(updatedQuestions);

    // Optionally clear the form
    setPrompt('');
    setOptionA('');
    setOptionB('');
    setOptionC('');
    setOptionD('');
    setAnswer('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Question:</label>
      <input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
      <label>Option A:</label>
      <input type="text" value={optionA} onChange={(e) => setOptionA(e.target.value)} />
      <label>Option B:</label>
      <input type="text" value={optionB} onChange={(e) => setOptionB(e.target.value)} />
      <label>Option C:</label>
      <input type="text" value={optionC} onChange={(e) => setOptionC(e.target.value)} />
      <label>Option D:</label>
      <input type="text" value={optionD} onChange={(e) => setOptionD(e.target.value)} />
      <label>Answer:</label>
      <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} />
      <button type="submit">Add Question</button>
    </form>
  );
};

export default AddQuestionForm;
