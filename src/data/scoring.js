import { questions } from './questions.js';

export function calculateDeath(identityId, answers, identitiesList, deathsList) {
  const identityQuestions = questions[identityId];
  if (!identityQuestions) {
    return { death: deathsList[5], scores: { sacrifice: 0, action: 0, principle: 0, emotion: 0 } };
  }

  const scores = {
    sacrifice: 0,
    action: 0,
    principle: 0,
    emotion: 0
  };

  for (const answer of answers) {
    const question = identityQuestions.find(q => q.id === answer.questionId);
    if (!question) continue;
    const option = question.options[answer.selectedIndex];
    if (!option) continue;
    for (const [dim, val] of Object.entries(option.scores)) {
      scores[dim] += val;
    }
  }

  for (const death of deathsList) {
    if (death.condition(scores)) {
      return { death, scores };
    }
  }

  return { death: deathsList[5], scores };
}
