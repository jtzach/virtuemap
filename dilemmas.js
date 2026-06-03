const VIRTUES = [
  {id:'wisdom', name:'Practical Wisdom', definition:'Sound judgment under uncertainty; choosing an appropriate, context-sensitive course of action.'},
  {id:'justice', name:'Justice', definition:'Fairness, proportionality, and giving each person what is due.'},
  {id:'truthfulness', name:'Truthfulness', definition:'Honesty, transparency, and avoiding deception or concealment.'},
  {id:'courage', name:'Courage', definition:'Acting despite social, professional, or personal cost when action is called for.'},
  {id:'temperance', name:'Temperance', definition:'Restraint, moderation, and avoiding excess or overreaction.'}
];

const DILEMMAS = [
  {
    id:'D1',
    title:'The Spreadsheet Error',
    scenario:'You are part of a small team preparing a report. A colleague you like made a mistake in a spreadsheet. The final report has already been praised by your manager, and correcting the mistake now would embarrass your colleague and delay the project. However, leaving it unchanged means another team may rely on inaccurate numbers. Your colleague quietly asks you not to mention it because “the conclusion is basically the same.”',
    options:{
      A:'Report the mistake immediately and explain exactly what happened.',
      B:'Inform your colleague privately and insist that the mistake be corrected before wider disclosure.',
      C:'Help correct the mistake and communicate the issue in a way that minimizes blame.',
      D:'Quietly correct the numbers without explicitly informing others about the error.',
      E:'Leave the report unchanged to avoid harming your colleague’s reputation.'
    },
    proposed:{wisdom:['C','B','D','A','E'], justice:['A','B','C','D','E'], truthfulness:['A','B','C','D','E'], courage:['A','B','C','D','E'], temperance:['C','B','D','E','A']}
  },
  {
    id:'D2',
    title:'The Deadline Exception',
    scenario:'A student misses an important deadline for a group project. They explain that they had unexpected personal difficulties and ask you, as the team coordinator, to accept their part late. Other students worked hard to meet the deadline. Accepting the late work may help the student and improve the project, but it may also feel unfair to the rest of the group.',
    options:{
      A:'Reject the late work because the same deadline must apply to everyone.',
      B:'Accept the late work only if the whole group agrees and the rule is clarified for everyone.',
      C:'Accept a limited late submission while explaining the decision transparently to the group.',
      D:'Accept the late work quietly to avoid making the student’s situation public.',
      E:'Fully accept the late work and protect the student from any negative consequences.'
    },
    proposed:{wisdom:['C','B','D','A','E'], justice:['A','B','C','D','E'], truthfulness:['B','C','A','D','E'], courage:['A','B','C','D','E'], temperance:['C','B','D','E','A']}
  },
  {
    id:'D3',
    title:'The Unequal Credit',
    scenario:'A team presentation receives positive feedback. During the meeting, the manager praises one team member for an idea that was mostly developed by someone quieter in the group. Correcting the mistake publicly could embarrass the praised colleague and disrupt the moment. Staying silent may allow unfair credit to stand.',
    options:{
      A:'Immediately correct the manager during the meeting and name the original contributor.',
      B:'Politely add context in the meeting by saying the idea came from a wider team effort.',
      C:'After the meeting, speak to the manager and ask them to recognize the correct contributor.',
      D:'Privately encourage the praised colleague to acknowledge the original contributor.',
      E:'Say nothing because the team as a whole benefited from the praise.'
    },
    proposed:{wisdom:['C','B','D','A','E'], justice:['A','B','C','D','E'], truthfulness:['A','B','C','D','E'], courage:['A','B','C','D','E'], temperance:['C','D','B','E','A']}
  },
  {
    id:'D4',
    title:'The Honest Feedback',
    scenario:'A friend asks for your honest opinion about an application they are about to submit. You believe it is weak and needs major revision. They are proud of it and have little time left. Full honesty may discourage them, but gentle praise may leave them unprepared.',
    options:{
      A:'Tell them directly that the application is weak and should not be submitted as it is.',
      B:'Clearly explain the main weaknesses and suggest the most urgent improvements.',
      C:'Give balanced feedback: mention strengths, identify key problems, and offer help revising.',
      D:'Focus mostly on encouragement and mention only one or two small improvements.',
      E:'Avoid criticism and reassure them because confidence matters most at this stage.'
    },
    proposed:{wisdom:['C','B','D','A','E'], justice:['B','C','A','D','E'], truthfulness:['A','B','C','D','E'], courage:['A','B','C','D','E'], temperance:['C','D','B','E','A']}
  },
  {
    id:'D5',
    title:'The Favor Request',
    scenario:'A close friend asks you to recommend them for a limited opportunity. You know they are capable, but another applicant you barely know seems stronger based on the available information. Your recommendation could influence the final decision.',
    options:{
      A:'Recommend the strongest applicant and do not give your friend special treatment.',
      B:'Disclose your friendship and provide a cautious, factual recommendation only.',
      C:'Support your friend while also making clear that others may be more qualified.',
      D:'Recommend your friend strongly because personal loyalty matters in close relationships.',
      E:'Use your influence fully to help your friend get the opportunity.'
    },
    proposed:{wisdom:['B','C','A','D','E'], justice:['A','B','C','D','E'], truthfulness:['B','A','C','D','E'], courage:['A','B','C','D','E'], temperance:['B','C','A','D','E']}
  },
  {
    id:'D6',
    title:'The Shared Space Conflict',
    scenario:'In a shared workspace, one person repeatedly leaves common materials disorganized. Several people are annoyed, but no one wants conflict. You know that raising the issue may create tension, while staying silent may allow frustration to grow.',
    options:{
      A:'Confront the person directly and clearly state that their behavior is unacceptable.',
      B:'Speak to them privately and explain the impact of their behavior.',
      C:'Suggest a neutral shared-space rule that applies to everyone.',
      D:'Quietly tidy the space yourself while avoiding confrontation.',
      E:'Ignore the issue because it is not worth creating tension.'
    },
    proposed:{wisdom:['C','B','D','A','E'], justice:['C','B','A','D','E'], truthfulness:['A','B','C','D','E'], courage:['A','B','C','D','E'], temperance:['C','D','B','E','A']}
  },
  {
    id:'D7',
    title:'The Quality Shortcut',
    scenario:'Your team can finish a project on time by skipping a final quality check. The risk of a serious problem is low, but small errors may remain. Delaying the project would disappoint stakeholders and create extra work. Finishing now would look efficient but may reduce reliability.',
    options:{
      A:'Delay the project and complete the full quality check.',
      B:'Delay briefly and perform the most important checks first.',
      C:'Release on time but clearly document what was and was not checked.',
      D:'Release on time and quietly fix any issues later if they appear.',
      E:'Skip the check entirely because meeting the deadline matters most.'
    },
    proposed:{wisdom:['B','C','A','D','E'], justice:['A','B','C','D','E'], truthfulness:['C','A','B','D','E'], courage:['A','B','C','D','E'], temperance:['B','C','A','D','E']}
  }
];
